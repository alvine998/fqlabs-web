import { MadeWithDyad } from "@/components/made-with-dyad";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const services = [
    {
      name: "Standard",
      price: "Rp 750.000",
      description: "Solusi dasar untuk kehadiran online Anda. Cocok untuk website pribadi atau bisnis kecil.",
      features: ["Desain Responsif", "Halaman Statis (hingga 5)", "Optimasi Dasar SEO"],
    },
    {
      name: "Premium",
      price: "Rp 1.250.000",
      description: "Fitur lengkap untuk bisnis yang berkembang. Termasuk fungsionalitas interaktif dan dukungan lebih.",
      features: ["Desain Kustom", "Sistem Manajemen Konten (CMS)", "Integrasi Media Sosial", "Dukungan Prioritas"],
    },
    {
      name: "Super Premium",
      price: "Rp 1.500.000",
      description: "Solusi terbaik dengan performa tinggi dan fitur canggih untuk kebutuhan kompleks.",
      features: ["Desain Eksklusif", "Aplikasi Web Kustom", "Integrasi API Lanjutan", "Keamanan Tingkat Tinggi", "Dukungan 24/7"],
    },
  ];

  return (
    <div className="grid grid-rows-[1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-1 items-center sm:items-start w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center sm:text-left">FQLabs</h1>
        <p className="text-lg text-center sm:text-left text-muted-foreground">
          Jasa Pembuatan Website dan Aplikasi Profesional untuk Kebutuhan Bisnis Anda.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{service.name}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-3xl font-bold mb-4">{service.price}</p>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Pesan Sekarang</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
}