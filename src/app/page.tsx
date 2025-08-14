import { MadeWithDyad } from "@/components/made-with-dyad";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Lightbulb, Users, Rocket, Star } from "lucide-react"; // Import new icons

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

  const whyChooseUs = [
    {
      icon: Lightbulb,
      title: "Inovasi Terdepan",
      description: "Kami selalu menerapkan teknologi terbaru untuk solusi yang modern dan efisien.",
    },
    {
      icon: CheckCircle,
      title: "Kualitas Terjamin",
      description: "Setiap proyek dikerjakan dengan standar kualitas tertinggi dan perhatian terhadap detail.",
    },
    {
      icon: Users,
      title: "Pendekatan Kolaboratif",
      description: "Kami bekerja sama erat dengan klien untuk mewujudkan visi mereka.",
    },
    {
      icon: Rocket,
      title: "Dukungan Penuh",
      description: "Tim kami siap membantu Anda dari awal hingga setelah peluncuran.",
    },
  ];

  const testimonials = [
    {
      quote: "FQLabs benar-benar mengubah bisnis saya! Website yang mereka buat sangat profesional dan mudah digunakan.",
      author: "Andi Wijaya, Pemilik Toko Online",
    },
    {
      quote: "Pelayanan yang luar biasa dan hasil yang memuaskan. Sangat direkomendasikan untuk kebutuhan pengembangan web.",
      author: "Budi Santoso, CEO Startup",
    },
    {
      quote: "Desain yang elegan dan fungsionalitas yang sempurna. FQLabs adalah pilihan terbaik!",
      author: "Citra Dewi, Konsultan Bisnis",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 text-center bg-gradient-to-br from-primary to-primary-foreground text-primary-foreground flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          Wujudkan Kehadiran Digital Anda
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mb-8 opacity-90 animate-fade-in-up delay-200">
          Jasa Pembuatan Website dan Aplikasi Profesional untuk Kebutuhan Bisnis Anda.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform transform hover:scale-105 animate-fade-in-up delay-400">
            Mulai Proyek Anda
          </Button>
        </Link>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Layanan Kami</h2>
        <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          Pilih paket yang paling sesuai dengan kebutuhan dan anggaran bisnis Anda.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-bold text-primary">{service.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-extrabold mb-4 text-foreground">{service.price}</p>
                <ul className="list-none space-y-3 text-base text-muted-foreground">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/contact">Pesan Sekarang</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-muted py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Mengapa Memilih FQLabs?</h2>
          <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            Kami berkomitmen untuk memberikan solusi digital terbaik dengan fokus pada kualitas dan kepuasan klien.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="text-center p-6 flex flex-col items-center justify-center shadow-md">
                  <Icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl font-semibold mb-2">{item.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{item.description}</CardDescription>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Apa Kata Klien Kami?</h2>
        <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          Dengarkan langsung dari mereka yang telah merasakan manfaat bekerja sama dengan kami.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 flex flex-col justify-between shadow-md">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg italic text-foreground mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-primary">- {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-primary text-primary-foreground py-16 text-center px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Siap Memulai Proyek Impian Anda?</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto mb-8">
            Jangan tunda lagi, hubungi kami sekarang untuk konsultasi gratis dan wujudkan ide Anda menjadi kenyataan.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-primary hover:bg-secondary/90 transition-transform transform hover:scale-105">
              Hubungi Kami Sekarang
            </Button>
          </Link>
        </div>
      </section>

      <MadeWithDyad />
    </div>
  );
}