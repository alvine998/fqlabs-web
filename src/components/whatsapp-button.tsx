"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircleMore } from "lucide-react"; // Menggunakan MessageCircleMore sebagai alternatif jika Whatsapp tidak ada

export function WhatsappButton() {
  const whatsappNumber = "6288293477465";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <Button
          size="lg"
          className="rounded-full w-16 h-16 flex items-center justify-center shadow-lg bg-green-500 hover:bg-green-600 text-white transition-all duration-300 transform hover:scale-110"
          aria-label="Chat via WhatsApp"
        >
          <MessageCircleMore className="h-8 w-8" />
        </Button>
      </Link>
    </div>
  );
}