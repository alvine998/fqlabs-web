"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Share2, Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";

type ShareButtonsProps = {
  title: string;
  url: string;
  text?: string;
};

export function ShareButtons({ title, url, text }: ShareButtonsProps) {
  const handleShare = async () => {
    if (typeof navigator.share === 'function') { // Perbaikan di sini
      try {
        await navigator.share({
          title: title,
          url: url,
          text: text || title,
        });
        toast.success("Artikel berhasil dibagikan!");
      } catch (error) {
        console.error("Error sharing:", error);
        toast.error("Gagal membagikan artikel.");
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      toast.info("Silakan gunakan opsi bagikan di bawah ini.", {
        description: "Browser Anda tidak mendukung fitur berbagi langsung.",
      });
    }
  };

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text || title)}`;
    window.open(twitterUrl, "_blank");
  };

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, "_blank");
  };

  const shareOnLinkedin = () => {
    const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(text || title)}`;
    window.open(linkedinUrl, "_blank");
  };

  const shareViaEmail = () => {
    const emailUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text || title + "\n\nBaca selengkapnya di: " + url)}`;
    window.open(emailUrl, "_blank");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Share2 className="h-4 w-4" /> Bagikan
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {typeof navigator.share === 'function' && ( // Perbaikan di sini
          <DropdownMenuItem onClick={handleShare}>
            <Share2 className="mr-2 h-4 w-4" /> Bagikan via...
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={shareOnTwitter}>
          <Twitter className="mr-2 h-4 w-4" /> Twitter
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareOnFacebook}>
          <Facebook className="mr-2 h-4 w-4" /> Facebook
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareOnLinkedin}>
          <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareViaEmail}>
          <Mail className="mr-2 h-4 w-4" /> Email
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}