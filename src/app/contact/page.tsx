"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

// Define schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Nama harus setidaknya 2 karakter." }),
  email: z.string().email({ message: "Masukkan alamat email yang valid." }),
  message: z.string().min(10, { message: "Pesan harus setidaknya 10 karakter." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
    // Simulate API call
    toast.success("Pesan Anda telah terkirim!", {
      description: "Kami akan segera menghubungi Anda.",
    });
    form.reset();
  };

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-foreground mb-4">
          Hubungi Kami
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Kami siap membantu Anda! Isi formulir di bawah ini atau hubungi kami melalui informasi kontak yang tersedia.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information Section */}
        <Card className="p-6 flex flex-col justify-center">
          <CardHeader className="pb-4">
            <CardTitle className="text-3xl font-bold">Informasi Kontak</CardTitle>
            <CardDescription>Jangan ragu untuk menghubungi kami melalui saluran berikut.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">info@fqlabs.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Telepon</h3>
                <p className="text-muted-foreground">+62 812-3456-7890</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Alamat</h3>
                <p className="text-muted-foreground">Jl. Contoh No. 123, Kota Fiktif, Indonesia</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form Section */}
        <Card className="p-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-3xl font-bold">Kirim Pesan</CardTitle>
            <CardDescription>Isi formulir di bawah ini dan kami akan segera menghubungi Anda.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name">Nama Lengkap</Label>
                <Input
                  id="name"
                  placeholder="Nama Anda"
                  {...form.register("name")}
                />
                {form.formState.errors.name && (
                  <p className="text-destructive text-sm mt-1">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@contoh.com"
                  {...form.register("email")}
                />
                {form.formState.errors.email && (
                  <p className="text-destructive text-sm mt-1">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="message">Pesan Anda</Label>
                <Textarea
                  id="message"
                  placeholder="Tulis pesan Anda di sini..."
                  rows={5}
                  {...form.register("message")}
                />
                {form.formState.errors.message && (
                  <p className="text-destructive text-sm mt-1">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full">
                Kirim Pesan
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}