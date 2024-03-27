// Global imports:
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

// Local imports
import { ModalProvider } from "@/providers/modal-provider";
import { ToastProvider } from "@/providers/toast-provider";

// Styles
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shine-kart Admin dashboard",
  description:
    "Welcome to the Admin Dashboard of the Shine-Kart E-Commerce Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ToastProvider />
            <ModalProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
