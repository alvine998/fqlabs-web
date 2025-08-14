import { getArticleBySlug } from "@/lib/articles";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { CommentsSection } from "@/components/comments-section";
import { RelatedArticles } from "@/components/related-articles";
import { Badge } from "@/components/ui/badge";
import { ShareButtons } from "@/components/share-buttons"; // Import ShareButtons
import { Toaster } from "sonner"; // Import Toaster for toasts

// Mendefinisikan tipe props secara langsung
interface ArticlePageProps {
  params: { slug: string };
  searchParams?: Record<string, string | string[] | undefined>;
}


export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  // Construct full URL for sharing
  const articleUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/articles/${article.slug}`;

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-3xl">
      <Toaster /> {/* Add Toaster component here */}
      <div className="mb-8 flex justify-between items-center">
        <Link href="/articles">
          <Button variant="outline" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" /> Kembali ke Artikel
          </Button>
        </Link>
        <ShareButtons title={article.title} url={articleUrl} text={article.description} />
      </div>

      {article.thumbnail && (
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src={article.thumbnail}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 700px"
          />
        </div>
      )}

      <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight">
        {article.title}
      </h1>
      <p className="text-lg text-muted-foreground mb-4">
        Dipublikasikan pada{" "}
        {format(new Date(article.date), "dd MMMM yyyy, HH:mm 'WIB'", { locale: id })}
      </p>

      {article.tags && article.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {article.tags.map((tag, index) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))}
        </div>
      )}

      <div
        className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <CommentsSection />
      <RelatedArticles currentSlug={article.slug} />
    </div>
  );
}