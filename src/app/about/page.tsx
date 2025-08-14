import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Lightbulb, Award, Users, Scale } from "lucide-react"; // Import icons

const companyInfo = {
  title: "Tentang FQLabs",
  introduction: "FQLabs adalah penyedia jasa pembuatan website dan aplikasi profesional yang berdedikasi untuk membantu bisnis Anda berkembang di era digital. Kami percaya bahwa setiap bisnis berhak memiliki kehadiran online yang kuat dan efektif.",
  mission: "Misi kami adalah memberdayakan bisnis dengan solusi digital inovatif yang tidak hanya estetis tetapi juga fungsional dan berorientasi pada hasil.",
  vision: "Menjadi mitra terdepan dalam transformasi digital, dikenal karena kualitas, inovasi, dan komitmen kami terhadap kesuksesan klien.",
  values: [
    {
      title: "Inovasi",
      description: "Kami selalu mencari cara baru dan lebih baik untuk memecahkan masalah dan menciptakan nilai.",
      icon: Lightbulb,
    },
    {
      title: "Kualitas",
      description: "Kami berkomitmen untuk memberikan produk dan layanan dengan standar kualitas tertinggi.",
      icon: Award,
    },
    {
      title: "Kolaborasi",
      description: "Kami bekerja sama dengan klien sebagai mitra untuk mencapai tujuan bersama.",
      icon: Users,
    },
    {
      title: "Integritas",
      description: "Kami beroperasi dengan kejujuran, transparansi, dan etika yang tinggi.",
      icon: Scale,
    },
  ],
  team: [
    {
      name: "Budi Santoso",
      role: "CEO & Founder",
      bio: "Berpengalaman lebih dari 10 tahun di industri teknologi, Budi memimpin FQLabs dengan visi untuk inovasi digital.",
      avatarFallback: "BS",
      image: undefined, // Ditambahkan untuk memperbaiki kesalahan TypeScript
    },
    {
      name: "Siti Aminah",
      role: "Lead Developer",
      bio: "Dengan keahlian mendalam dalam pengembangan web full-stack, Siti memastikan setiap proyek dibangun dengan standar tertinggi.",
      avatarFallback: "SA",
      image: undefined, // Ditambahkan untuk memperbaiki kesalahan TypeScript
    },
    {
      name: "Rudi Hartono",
      role: "UI/UX Designer",
      bio: "Rudi menciptakan pengalaman pengguna yang intuitif dan menarik, memastikan desain yang indah dan fungsional.",
      avatarFallback: "RH",
      image: undefined, // Ditambahkan untuk memperbaiki kesalahan TypeScript
    },
  ]
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-foreground mb-4">
          {companyInfo.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {companyInfo.introduction}
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <Card className="p-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-3xl font-bold">Misi Kami</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground">
              {companyInfo.mission}
            </p>
          </CardContent>
        </Card>
        <Card className="p-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-3xl font-bold">Visi Kami</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground">
              {companyInfo.vision}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Our Values Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center mb-10">Nilai-nilai Kami</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyInfo.values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="flex flex-col items-center text-center p-6">
                <CardHeader className="pb-4">
                  <div className="mb-4">
                    <IconComponent className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Our Team Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center mb-10">Tim Kami</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyInfo.team.map((member, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6">
              <Avatar className="h-24 w-24 mb-4">
                {member.image && <AvatarImage src={member.image} alt={member.name} />}
                <AvatarFallback className="text-3xl font-bold">{member.avatarFallback}</AvatarFallback>
              </Avatar>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold">{member.name}</CardTitle>
                <CardDescription className="text-primary">{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-muted rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Siap untuk Memulai Proyek Anda?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Hubungi kami hari ini untuk konsultasi gratis!
        </p>
        <Link href="/contact">
          <Button size="lg">Hubungi Kami</Button>
        </Link>
      </section>
    </div>
  );
}