export default function HeroSection() {
  return (
    <section className="flex justify-center items-center bg-dark bg-cover bg-center py-12 text-white">
      <div className="bg-opacity-50 p-10 rounded-lg text-center">
        <h1 className="mb-4 font-bold text-6xl">Jasa Restorasi Foto</h1>
        <h5 className="mb-4 text-2xl">Terpercaya, Profesional, dan Termurah</h5>
        <p className="mb-6 text-slate-400">
          Kami memberikan layanan restorasi foto terbaik dengan teknologi
          canggih dan harga terjangkau.
        </p>
        <div className="flex md:flex-row flex-col justify-center gap-4 md:gap-8">
          <a
            href="#layanan"
            className="border-white hover:bg-white px-6 py-2 border rounded text-lg text-white hover:text-black transition-all"
          >
            Pelajari Lebih lanjut
          </a>
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-green-400 px-6 py-2 rounded text-lg text-white transition-all"
          >
            Pesan Sekarang
          </a>
        </div>{" "}
      </div>
    </section>
  );
}
