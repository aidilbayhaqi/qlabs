import "./globals.css";

import type { Metadata } from "next";
import {Navbar} from "./components/navbar";
import { Footer } from "./components/footer";


export const metadata: Metadata = {
  title: "Digiverse — AI Chatbot, ERP Automation & Custom Software",
  description:
    "Digiverse builds LLM-powered AI chatbots, ERP automation, and custom software to digitize and accelerate your business.",

  authors: [{ name: "Digiverse" }],

  openGraph: {
    title: "Digiverse — AI Chatbot, ERP Automation & Custom Software",
    description:
      "Digiverse builds LLM-powered AI chatbots, ERP automation, and custom software to digitize and accelerate your business.",
    type: "website",
    images: [
      {
        url: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/eb83d935-6342-4ed5-916a-4d1ca25a29aa/id-preview-55ab626c--31bc4fdd-a79d-4294-8a06-5100ca5e3e69.lovable.app-1778485560262.png",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "Digiverse — AI Chatbot, ERP Automation & Custom Software",
    description:
      "Digiverse builds LLM-powered AI chatbots, ERP automation, and custom software to digitize and accelerate your business.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/eb83d935-6342-4ed5-916a-4d1ca25a29aa/id-preview-55ab626c--31bc4fdd-a79d-4294-8a06-5100ca5e3e69.lovable.app-1778485560262.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16 min-h-screen">
          {children}
        </main>

        <Footer/>
      </body>
    </html>
  );
}