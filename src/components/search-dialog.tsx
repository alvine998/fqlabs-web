"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"; // Import Link for navigation within CommandItem
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

// Define searchable items (can be expanded with actual article data later)
const searchItems = [
  { label: "Beranda", value: "beranda", href: "/" },
  { label: "Tentang Kami", value: "tentang kami", href: "/about" },
  { label: "Kontak", value: "kontak", href: "/contact" },
  { label: "Artikel", value: "artikel", href: "/articles" },
  { label: "Kebijakan Privasi", value: "kebijakan privasi", href: "/privacy-policy" },
  { label: "Ketentuan Layanan", value: "ketentuan layanan", href: "/terms-of-service" },
  // Example article keywords (ideally fetched dynamically or indexed)
  { label: "Pentingnya Website untuk Bisnis Modern", value: "website bisnis modern", href: "/articles/pentingnya-website-untuk-bisnis-modern" },
  { label: "Strategi SEO Dasar untuk Pemula", value: "seo pemula", href: "/articles/strategi-seo-dasar-untuk-pemula" },
  { label: "Memilih Platform E-commerce yang Tepat", value: "ecommerce platform", href: "/articles/memilih-platform-ecommerce-yang-tepat" },
  { label: "Tips Membuat Konten Website Menarik", value: "konten website menarik", href: "/articles/tips-membuat-konten-website-menarik" },
];

export function SearchDialog() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  // Keyboard shortcut to open/close search dialog (Cmd+K or Ctrl+K)
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="relative w-full justify-start text-sm text-muted-foreground sm:pr-12 sm:w-40 md:w-64"
        >
          <Search className="h-4 w-4 mr-2" />
          <span className="hidden lg:inline-flex">Cari...</span>
          <span className="inline-flex lg:hidden">Cari...</span>
          <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0">
        <Command>
          <CommandInput placeholder="Cari halaman atau artikel..." />
          <CommandList>
            <CommandEmpty>Tidak ada hasil ditemukan.</CommandEmpty>
            <CommandGroup heading="Halaman & Artikel">
              {searchItems.map((item) => (
                <CommandItem
                  key={item.href}
                  value={item.value}
                  onSelect={() => runCommand(() => router.push(item.href))}
                >
                  {/* Using Link inside CommandItem for proper navigation and accessibility */}
                  <Link href={item.href} className="flex items-center w-full h-full">
                    {item.label}
                  </Link>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}