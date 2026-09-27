export const profileDotFragmentShader = /* glsl */ `
precision highp float;

uniform sampler2D u_image;
uniform vec2 u_resolution;
uniform float u_cellPx;
uniform float u_dotSize;
uniform float u_density;
uniform float u_contrast;
uniform float u_gamma;
uniform float u_threshold;
uniform float u_randomness;
uniform float u_seed;
uniform bool u_invert;
uniform bool u_sourceColor;
uniform vec3 u_dotColor;
uniform vec3 u_bgColor;

out vec4 outColor;

// Render targets contain linear color; use displayed brightness for dot density.
vec4 sampleImage(vec2 uv) {
  return sRGBTransferOETF(texture(u_image, uv));
}

float luma(vec3 c) {
  return dot(c, vec3(0.2126, 0.7152, 0.0722));
}

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32 + u_seed * 0.17);
  return fract(p.x * p.y);
}

float bayer4(vec2 p) {
  ivec2 q = ivec2(mod(p, 4.0));
  int i = q.x + q.y * 4;
  float m[16] = float[16](
     0.0,  8.0,  2.0, 10.0,
    12.0,  4.0, 14.0,  6.0,
     3.0, 11.0,  1.0,  9.0,
    15.0,  7.0, 13.0,  5.0
  );
  return (m[i] + 0.5) / 16.0;
}

void main() {
  vec2 fragPx = gl_FragCoord.xy;
  vec2 cell = floor(fragPx / u_cellPx);
  vec2 local = fract(fragPx / u_cellPx);
  vec2 cellCenterPx = (cell + 0.5) * u_cellPx;
  vec2 uv = clamp(cellCenterPx / u_resolution, 0.0, 1.0);

  vec2 cellUv = vec2(u_cellPx) / u_resolution;
  vec3 c0 = sampleImage(uv).rgb;
  vec3 c1 = sampleImage(clamp(uv + cellUv * vec2(-0.28, -0.28), 0.0, 1.0)).rgb;
  vec3 c2 = sampleImage(clamp(uv + cellUv * vec2( 0.28, -0.28), 0.0, 1.0)).rgb;
  vec3 c3 = sampleImage(clamp(uv + cellUv * vec2(-0.28,  0.28), 0.0, 1.0)).rgb;
  vec3 c4 = sampleImage(clamp(uv + cellUv * vec2( 0.28,  0.28), 0.0, 1.0)).rgb;
  vec3 avg = (c0 + c1 + c2 + c3 + c4) / 5.0;

  vec4 src = sampleImage(uv);
  float y = luma(avg);
  if (u_invert) y = 1.0 - y;

  float darkness = 1.0 - y;
  darkness = clamp((darkness - 0.5) * u_contrast + 0.5, 0.0, 1.0);
  darkness = pow(darkness, max(0.001, u_gamma));
  float amount = clamp(darkness * u_density - u_threshold, 0.0, 1.0);

  float ordered = bayer4(cell);
  float randomT = hash21(cell);
  float threshold = mix(ordered, randomT, u_randomness);
  float alive = step(threshold, amount);

  float halfSize = 0.5 * u_dotSize;
  vec2 d = abs(local - 0.5);
  float square = step(max(d.x, d.y), halfSize);
  float mask = alive * square;

  vec3 dotCol = u_sourceColor ? src.rgb : u_dotColor;
  vec3 color = mix(u_bgColor, dotCol, mask * src.a);
  outColor = vec4(color, 1.0);
}
`;
