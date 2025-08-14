import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllArticles } from "@/lib/articles";
import { format } from "date-fns";
import { id } from "date-fns/locale"; // Import locale for Indonesian date formatting
import Image from "next/image"; // Import Image component

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-foreground mb-4">
          Artikel Terbaru
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Temukan wawasan dan informasi terbaru seputar pengembangan website dan aplikasi.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link href={`/articles/${article.slug}`} key={article.slug}>
            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-200 ease-in-out overflow-hidden">
              {article.thumbnail && (
                <div className="relative w-full h-48">
                  <Image
                    src={article.thumbnail}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold mb-2">{article.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {format(new Date(article.date), "dd MMMM yyyy", { locale: id })}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{article.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}