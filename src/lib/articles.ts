export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string; // Changed to include time for more detailed display
  content: string;
  thumbnail: string;
};

const articles: Article[] = [
  {
    slug: "pentingnya-website-untuk-bisnis-modern",
    title: "Pentingnya Website untuk Bisnis Modern",
    description: "Di era digital ini, memiliki website bukan lagi pilihan, melainkan keharusan bagi setiap bisnis.",
    date: "2023-10-26T10:00:00Z", // Added time
    content: `
      <p class="mb-4">Di era digital yang serba cepat ini, memiliki kehadiran online yang kuat adalah kunci kesuksesan bagi setiap bisnis, besar maupun kecil. Website bukan lagi sekadar 'tambahan' tetapi telah menjadi fondasi utama strategi pemasaran dan operasional.</p>
      <h2 class="text-2xl font-bold mb-3">Mengapa Website Penting?</h2>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Kredibilitas dan Profesionalisme:</strong> Sebuah website yang dirancang dengan baik meningkatkan kredibilitas bisnis Anda di mata calon pelanggan.</li>
        <li><strong>Aksesibilitas 24/7:</strong> Pelanggan dapat mengakses informasi tentang produk atau layanan Anda kapan saja, di mana saja.</li>
        <li><strong>Jangkauan Pasar Lebih Luas:</strong> Website memungkinkan Anda menjangkau audiens global, melampaui batasan geografis.</li>
        <li><strong>Pemasaran Efektif:</strong> Website adalah platform sentral untuk semua aktivitas pemasaran digital Anda, dari SEO hingga iklan berbayar.</li>
        <li><strong>Interaksi Pelanggan:</strong> Melalui formulir kontak, chat, atau bagian komentar, Anda dapat berinteraksi langsung dengan pelanggan.</li>
      </ul>
      <p class="mb-4">Investasi dalam pengembangan website adalah investasi jangka panjang untuk pertumbuhan dan keberlanjutan bisnis Anda. Pastikan website Anda responsif, cepat, dan mudah dinavigasi untuk memberikan pengalaman terbaik bagi pengunjung.</p>
      <p>FQLabs siap membantu Anda membangun website profesional yang sesuai dengan kebutuhan bisnis Anda.</p>
    `,
    thumbnail: "https://via.placeholder.com/1200x600/FF5733/FFFFFF?text=Website+Modern", // Larger dummy thumbnail for hero
  },
  {
    slug: "strategi-seo-dasar-untuk-pemula",
    title: "Strategi SEO Dasar untuk Pemula",
    description: "Pelajari dasar-dasar Search Engine Optimization (SEO) untuk meningkatkan visibilitas website Anda di mesin pencari.",
    date: "2023-11-15T14:30:00Z", // Added time
    content: `
      <p class="mb-4">Search Engine Optimization (SEO) adalah praktik mengoptimalkan website Anda agar mendapatkan peringkat lebih tinggi di hasil pencarian mesin seperti Google. Untuk pemula, memahami dasar-dasar SEO adalah langkah pertama yang krusial.</p>
      <h2 class="text-2xl font-bold mb-3">Tips SEO Dasar:</h2>
      <ol class="list-decimal list-inside mb-4 space-y-2">
        <li><strong>Penelitian Kata Kunci:</strong> Temukan kata kunci yang relevan dengan bisnis Anda dan yang sering dicari oleh target audiens.</li>
        <li><strong>Konten Berkualitas Tinggi:</strong> Buat konten yang informatif, relevan, dan menarik bagi pembaca Anda.</li>
        <li><strong>Optimasi On-Page:</strong> Pastikan judul halaman, meta deskripsi, dan heading (H1, H2, dll.) mengandung kata kunci target.</li>
        <li><strong>Mobile-Friendly:</strong> Pastikan website Anda responsif dan tampil baik di perangkat seluler.</li>
        <li><strong>Kecepatan Website:</strong> Website yang cepat dimuat akan memberikan pengalaman pengguna yang lebih baik dan disukai mesin pencari.</li>
        <li><strong>Backlink Berkualitas:</strong> Dapatkan tautan dari website lain yang memiliki otoritas tinggi ke website Anda.</li>
      </ol>
      <p class="mb-4">Menerapkan strategi SEO membutuhkan waktu dan kesabaran, tetapi hasilnya akan sangat berharga dalam jangka panjang untuk menarik lalu lintas organik ke website Anda.</p>
      <p>FQLabs dapat membantu Anda dalam strategi SEO untuk meningkatkan peringkat website Anda.</p>
    `,
    thumbnail: "https://via.placeholder.com/1200x600/33FF57/FFFFFF?text=SEO+Dasar", // Larger dummy thumbnail for hero
  },
  {
    slug: "memilih-platform-ecommerce-yang-tepat",
    title: "Memilih Platform E-commerce yang Tepat",
    description: "Panduan untuk memilih platform e-commerce terbaik yang sesuai dengan kebutuhan bisnis online Anda.",
    date: "2024-01-01T09:15:00Z", // Added time
    content: `
      <p class="mb-4">Memulai bisnis e-commerce bisa menjadi langkah yang menguntungkan, tetapi memilih platform yang tepat adalah keputusan krusial yang akan memengaruhi operasional dan pertumbuhan Anda.</p>
      <h2 class="text-2xl font-bold mb-3">Faktor yang Perlu Dipertimbangkan:</h2>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Skalabilitas:</strong> Apakah platform dapat tumbuh bersama bisnis Anda?</li>
        <li><strong>Fitur:</strong> Apakah ia menawarkan fitur yang Anda butuhkan (manajemen inventaris, pembayaran, pengiriman, dll.)?</li>
        <li><strong>Kemudahan Penggunaan:</strong> Seberapa mudah platform tersebut untuk diatur dan dikelola?</li>
        <li><strong>Biaya:</strong> Pertimbangkan biaya bulanan, biaya transaksi, dan biaya pengembangan.</li>
        <li><strong>Dukungan Pelanggan:</strong> Apakah ada dukungan yang memadai jika Anda mengalami masalah?</li>
        <li><strong>Integrasi:</strong> Bisakah platform terintegrasi dengan alat lain yang Anda gunakan (CRM, email marketing)?</li>
      </ul>
      <p class="mb-4">Beberapa platform populer termasuk Shopify, WooCommerce (untuk WordPress), Magento, dan BigCommerce. Setiap platform memiliki kelebihan dan kekurangannya sendiri. Lakukan riset mendalam dan pertimbangkan kebutuhan spesifik bisnis Anda sebelum membuat keputusan.</p>
      <p>FQLabs dapat memberikan konsultasi untuk membantu Anda memilih dan membangun toko online yang optimal.</p>
    `,
    thumbnail: "https://via.placeholder.com/1200x600/3357FF/FFFFFF?text=E-commerce+Platform", // Larger dummy thumbnail for hero
  },
  {
    slug: "tips-membuat-konten-website-menarik",
    title: "Tips Membuat Konten Website yang Menarik",
    description: "Pelajari cara membuat konten yang tidak hanya informatif tetapi juga menarik perhatian pengunjung website Anda.",
    date: "2024-02-20T11:00:00Z", // New article with time
    content: `
      <p class="mb-4">Konten adalah raja, dan ini sangat berlaku untuk website Anda. Konten yang menarik tidak hanya mempertahankan pengunjung tetapi juga meningkatkan peringkat SEO dan konversi.</p>
      <h2 class="text-2xl font-bold mb-3">Strategi Konten Efektif:</h2>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Kenali Audiens Anda:</strong> Pahami siapa target pembaca Anda dan apa yang mereka cari.</li>
        <li><strong>Gunakan Judul yang Menarik:</strong> Judul adalah hal pertama yang dilihat pembaca. Buatlah menarik dan relevan.</li>
        <li><strong>Struktur yang Jelas:</strong> Gunakan sub-judul, poin-poin, dan paragraf pendek agar mudah dibaca.</li>
        <li><strong>Visual yang Mendukung:</strong> Gambar, video, dan infografis dapat membuat konten lebih hidup.</li>
        <li><strong>Panggilan untuk Bertindak (CTA):</strong> Arahkan pembaca untuk melakukan tindakan selanjutnya, seperti mendaftar newsletter atau menghubungi Anda.</li>
      </ul>
      <p class="mb-4">Dengan menerapkan tips ini, Anda dapat menciptakan konten yang tidak hanya informatif tetapi juga beresonansi dengan audiens Anda.</p>
      <p>FQLabs dapat membantu Anda dalam strategi konten untuk website Anda.</p>
    `,
    thumbnail: "https://via.placeholder.com/1200x600/FFC300/FFFFFF?text=Konten+Menarik", // Larger dummy thumbnail for hero
  },
];

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(currentSlug: string, count: number = 3): Article[] {
  const filteredArticles = articles.filter(article => article.slug !== currentSlug);
  // Shuffle and take 'count' articles, or just take the latest 'count'
  // For simplicity, let's just take the first 'count' after filtering
  return filteredArticles.slice(0, count);
}