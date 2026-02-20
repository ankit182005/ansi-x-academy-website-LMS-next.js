import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "ANSI-X Global Tech Academy",
  description: "Premium SaaS-Based Learning Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-black text-white">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
