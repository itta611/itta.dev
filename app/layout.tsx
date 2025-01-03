"use client";

import { ColorModeProvider } from "@/components/ui/color-mode";
import { Toaster } from "@/components/ui/toaster";
// import { Toaster } from "@chakra-ui/react";
import { Provider } from "../components/ui/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <Provider forcedTheme="dark">
          <Toaster />
          <ColorModeProvider>{children}</ColorModeProvider>
        </Provider>
      </body>
    </html>
  );
}
