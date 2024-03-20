FROM node:alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:alpine
WORKDIR /app
COPY --from=builder /app .
RUN npm install --production
EXPOSE 3000
CMD ["npm", "start"]
