"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const commentFormSchema = z.object({
  name: z.string().min(2, { message: "Nama harus setidaknya 2 karakter." }),
  email: z.string().email({ message: "Masukkan alamat email yang valid." }),
  comment: z.string().min(10, { message: "Komentar harus setidaknya 10 karakter." }),
});

type CommentFormValues = z.infer<typeof commentFormSchema>;

// Dummy comment type for display
type Comment = {
  id: string;
  name: string;
  date: string;
  text: string;
};

const dummyComments: Comment[] = [
  {
    id: "1",
    name: "Pembaca Setia",
    date: "2023-10-27T11:00:00Z",
    text: "Artikel yang sangat informatif! Saya jadi lebih paham pentingnya website.",
  },
  {
    id: "2",
    name: "Pengusaha Muda",
    date: "2023-11-01T09:30:00Z",
    text: "Terima kasih atas tips SEO-nya, sangat membantu untuk bisnis saya yang baru mulai.",
  },
];

export function CommentsSection() {
  const form = useForm<CommentFormValues>({
    resolver: zodResolver(commentFormSchema),
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
  });

  const onSubmit = (data: CommentFormValues) => {
    console.log("Komentar dikirim:", data);
    toast.success("Komentar Anda telah terkirim!", {
      description: "Komentar akan dimoderasi sebelum ditampilkan.",
    });
    form.reset();
  };

  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold mb-6">Komentar</h2>
      <div className="space-y-6 mb-8">
        {dummyComments.length > 0 ? (
          dummyComments.map((comment) => (
            <Card key={comment.id} className="p-4">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold">{comment.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(comment.date).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                <p className="text-muted-foreground">{comment.text}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-muted-foreground">Belum ada komentar. Jadilah yang pertama!</p>
        )}
      </div>

      <Card className="p-6">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-bold">Tinggalkan Komentar</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="comment-name">Nama</Label>
              <Input
                id="comment-name"
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
              <Label htmlFor="comment-email">Email</Label>
              <Input
                id="comment-email"
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
              <Label htmlFor="comment-text">Komentar Anda</Label>
              <Textarea
                id="comment-text"
                placeholder="Tulis komentar Anda di sini..."
                rows={4}
                {...form.register("comment")}
              />
              {form.formState.errors.comment && (
                <p className="text-destructive text-sm mt-1">
                  {form.formState.errors.comment.message}
                </p>
              )}
            </div>
            <Button type="submit">Kirim Komentar</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}