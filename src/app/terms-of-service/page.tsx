import React from "react";

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-3xl">
      <h1 className="text-4xl font-extrabold text-foreground mb-6 text-center">
        Ketentuan Layanan
      </h1>
      <p className="text-muted-foreground mb-4">
        Terakhir diperbarui: 27 Oktober 2023
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-3">1. Penerimaan Ketentuan</h2>
        <p className="text-muted-foreground">
          Dengan mengakses dan menggunakan situs web FQLabs ("Situs"), Anda setuju untuk terikat oleh Ketentuan Layanan ini ("Ketentuan"), semua hukum dan peraturan yang berlaku, dan setuju bahwa Anda bertanggung jawab untuk mematuhi hukum setempat yang berlaku. Jika Anda tidak setuju dengan salah satu ketentuan ini, Anda dilarang menggunakan atau mengakses situs ini.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-3">2. Penggunaan Lisensi</h2>
        <p className="text-muted-foreground mb-2">
          Izin diberikan untuk mengunduh sementara satu salinan materi (informasi atau perangkat lunak) di situs web FQLabs untuk tampilan transitori pribadi dan non-komersial saja. Ini adalah pemberian lisensi, bukan transfer judul, dan di bawah lisensi ini Anda tidak boleh:
        </p>
        <ul className="list-disc list-inside text-muted-foreground ml-4">
          <li>Memodifikasi atau menyalin materi;</li>
          <li>Menggunakan materi untuk tujuan komersial apa pun, atau untuk tampilan publik (komersial atau non-komersial);</li>
          <li>Mencoba mendekompilasi atau merekayasa balik perangkat lunak apa pun yang terdapat di situs web FQLabs;</li>
          <li>Menghapus hak cipta atau notasi kepemilikan lainnya dari materi; atau</li>
          <li>Mentransfer materi ke orang lain atau "mencerminkan" materi di server lain.</li>
        </ul>
        <p className="text-muted-foreground mt-2">
          Lisensi ini akan secara otomatis berakhir jika Anda melanggar salah satu batasan ini dan dapat diakhiri oleh FQLabs kapan saja. Setelah mengakhiri tampilan materi ini atau setelah pengakhiran lisensi ini, Anda harus menghancurkan materi yang diunduh yang Anda miliki baik dalam format elektronik maupun cetak.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-3">3. Penafian</h2>
        <p className="text-muted-foreground">
          Materi di situs web FQLabs disediakan "sebagaimana adanya". FQLabs tidak memberikan jaminan, tersurat maupun tersirat, dan dengan ini menafikan dan meniadakan semua jaminan lainnya, termasuk, tanpa batasan, jaminan tersirat atau kondisi yang dapat diperjualbelikan, kesesuaian untuk tujuan tertentu, atau non-pelanggaran kekayaan intelektual atau pelanggaran hak lainnya.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-3">4. Batasan</h2>
        <p className="text-muted-foreground">
          Dalam keadaan apa pun FQLabs atau pemasoknya tidak akan bertanggung jawab atas kerugian apa pun (termasuk, tanpa batasan, kerugian atas kehilangan data atau keuntungan, atau karena gangguan bisnis) yang timbul dari penggunaan atau ketidakmampuan untuk menggunakan materi di situs web FQLabs, bahkan jika FQLabs atau perwakilan resmi FQLabs telah diberitahu secara lisan atau tertulis tentang kemungkinan kerusakan tersebut.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-3">5. Akurasi Materi</h2>
        <p className="text-muted-foreground">
          Materi yang muncul di situs web FQLabs dapat mencakup kesalahan teknis, tipografi, atau fotografi. FQLabs tidak menjamin bahwa materi apa pun di situs webnya akurat, lengkap, atau terkini. FQLabs dapat membuat perubahan pada materi yang terdapat di situs webnya kapan saja tanpa pemberitahuan. Namun FQLabs tidak membuat komitmen untuk memperbarui materi.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-3">6. Tautan</h2>
        <p className="text-muted-foreground">
          FQLabs belum meninjau semua situs yang tertaut ke situs webnya dan tidak bertanggung jawab atas konten situs tertaut tersebut. Penyertaan tautan apa pun tidak menyiratkan dukungan oleh FQLabs dari situs tersebut. Penggunaan situs web tertaut tersebut adalah risiko pengguna sendiri.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-3">7. Perubahan Ketentuan</h2>
        <p className="text-muted-foreground">
          FQLabs dapat merevisi Ketentuan Layanan ini untuk situs webnya kapan saja tanpa pemberitahuan. Dengan menggunakan situs web ini, Anda setuju untuk terikat oleh versi Ketentuan Layanan yang berlaku saat itu.
        </p>
      </section>
    </div>
  );
}