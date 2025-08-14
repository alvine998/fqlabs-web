import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getRelatedArticles } from "@/lib/articles";
import { format } from "date-fns";
import { id } from "date-fns/locale";

type RelatedArticlesProps = {
  currentSlug: string;
};

export function RelatedArticles({ currentSlug }: RelatedArticlesProps) {
  const relatedArticles = getRelatedArticles(currentSlug);

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold mb-6">Artikel Lainnya</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedArticles.map((article) => (
          <Link href={`/articles/${article.slug}`} key={article.slug}>
            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-200 ease-in-out overflow-hidden">
              {article.thumbnail && (
                <div className="relative w-full h-40">
                  <Image
                    src={article.thumbnail}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold line-clamp-2">{article.title}</CardTitle>
                <CardDescription className="text-xs text-muted-foreground">
                  {format(new Date(article.date), "dd MMMM yyyy", { locale: id })}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3">{article.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}