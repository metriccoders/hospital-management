import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hospital Management System",
  description: "This is a hospital management system by Metric Coders",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <main>
            {children}
          </main></body>
    </html>
    </ClerkProvider>
  );
}
