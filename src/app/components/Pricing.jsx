"use client"

import Section from "./ui/Section";

export default function Pricing() {
  const sendMessage = (title) => {
    const message = `Saya tertarik dengan ${title}`;
    const phone = "6281229136836";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  return (
    <section id="pricing" className="bg-gray-50 py-12">
      <Section
        title={"Harga Jasa Restorasi Foto"}
        subtitle={
          <p>
            Untuk mendapatkan layanan ini, kami memberikan harga layanan yang
            terjangkau. Berikut harga jasa restorasi foto di tempat kami sebagai
            berikut:
          </p>
        }
      >
        <div className="sm:gap-6 xl:gap-10 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3">
          {/* Pricing Card */}
          <div className="flex flex-col border-gray-100 bg-white shadow mx-auto p-6 xl:p-8 border rounded-lg max-w-lg text-center text-gray-900">
            <h3 className="mb-4 font-semibold text-2xl">Harga Satuan</h3>
            <p className="font-light text-gray-500">
              Harga antara Rp 150.000 sampai dengan Rp 250.000 per 1 foto dengan
              tingkat kerusakan 60% sampai dengan 90%.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 font-extrabold text-3xl">
                Rp 150.000 - 250.000
              </span>
              <span className="text-gray-500">/foto</span>
            </div>
            {/* List */}
            <ul role="list" className="space-y-4 mb-8 text-left">
              <li className="flex items-center space-x-3">
                <span>Penyelesaian 3 sampai 9 jam</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>Gratis revisi 1 kali</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>Gratis cetak foto</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>Pengiriman melalui print out</span>
              </li>
            </ul>
            <button
              onClick={() => sendMessage("Harga Satuan")}
              className="bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg focus:ring-4 focus:ring-blue-200 font-medium text-center text-sm text-white"
            >
              Pesan Sekarang
            </button>
          </div>

          {/* Pricing Card */}
          <div className="flex flex-col border-gray-100 bg-white shadow mx-auto p-6 xl:p-8 border rounded-lg max-w-lg text-center text-gray-900">
            <h3 className="mb-4 font-semibold text-2xl">Paket Ekonomis</h3>
            <p className="font-light text-gray-500">
              Paket untuk restorasi 3 foto sekaligus dengan harga ekonomis.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 font-extrabold text-3xl">Rp 450.000</span>
              <span className="text-gray-500">/paket</span>
            </div>
            {/* List */}
            <ul role="list" className="space-y-4 mb-8 text-left">
              <li className="flex items-center space-x-3">
                <span>Tingkat kerusakan 60% sampai dengan 90%</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>Penyelesaian 3 sampai 10 jam</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>Gratis revisi 2 kali</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>Gratis cetak foto</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>Pengiriman melalui print out maupun file</span>
              </li>
            </ul>
            <button
              onClick={() => sendMessage("Paket Ekonomis")}
              className="bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg focus:ring-4 focus:ring-blue-200 font-medium text-center text-sm text-white"
            >
              Pesan Sekarang
            </button>
          </div>

          {/* Pricing Card */}
          <div className="flex flex-col border-gray-100 bg-white shadow mx-auto p-6 xl:p-8 border rounded-lg max-w-lg text-center text-gray-900">
            <h3 className="mb-4 font-semibold text-2xl">Paket Eksekutif</h3>
            <p className="font-light text-gray-500">
              Paket untuk 4 restorasi foto sekaligus dengan harga premium.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 font-extrabold text-3xl">Rp 550.000</span>
              <span className="text-gray-500">/paket</span>
            </div>
            {/* List */}
            <ul role="list" className="space-y-4 mb-8 text-left">
              <li className="flex items-center space-x-3">
                <span>Tingkat kerusakan 40% sampai dengan 98%</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>Penyelesaian 7 sampai 10 jam</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>Revisi unlimited</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>Gratis cetak foto</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>Pengiriman melalui print out maupun file</span>
              </li>
            </ul>
            <button
              onClick={() => sendMessage("Paket Eksekutif")}
              className="bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg focus:ring-4 focus:ring-blue-200 font-medium text-center text-sm text-white"
            >
              Pesan Sekarang
            </button>
          </div>
        </div>
      </Section>
    </section>
  );
}
