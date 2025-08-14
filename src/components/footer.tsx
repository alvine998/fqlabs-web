import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background py-6 w-full">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 md:flex-row">
        <div className="text-center md:text-left text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} FQLabs. All rights reserved.
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            href="/privacy-policy"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Kebijakan Privasi
          </Link>
          <Link
            href="/terms-of-service"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Ketentuan Layanan
          </Link>
        </nav>
      </div>
    </footer>
  );
}