import React from "react";
import Section from "./ui/Section";

const LangkahPemesanan = () => {
  return (
    <section id="pemesanan" className="bg-white py-12">
      <Section
        title={"Langkah Pemesanan Jasa Restorasi Foto"}
        subtitle={
          <p>
            Bagi konsumen yang tertarik untuk memesan layanan kami, berikut adalah langkah-langkah yang harus dilalui:
          </p>
        }
      >
        <ol className="relative border-gray-200 border-l text-left">
          <li className="mb-10 ml-6">
            <span className="-left-3 absolute flex justify-center items-center bg-blue-100 rounded-full ring-8 ring-white w-6 h-6">
              <span className="font-bold text-blue-800 text-sm">1</span>
            </span>
            <h3 className="flex items-center mb-1 font-semibold text-gray-900 text-lg">Hubungi CS Restorasifotoku</h3>
            <p className="font-normal text-base text-gray-500">
              Hubungi terlebih dahulu kontak Whatsapp tim CS Restorasifotoku. Nomor WA sudah tertera pada website.
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span className="-left-3 absolute flex justify-center items-center bg-blue-100 rounded-full ring-8 ring-white w-6 h-6">
              <span className="font-bold text-blue-800 text-sm">2</span>
            </span>
            <h3 className="mb-1 font-semibold text-gray-900 text-lg">Kirimkan Foto Rusak</h3>
            <p className="font-normal text-base text-gray-500">
              Kirimkan beberapa foto rusak yang akan diperbaiki oleh tim editor kami.
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span className="-left-3 absolute flex justify-center items-center bg-blue-100 rounded-full ring-8 ring-white w-6 h-6">
              <span className="font-bold text-blue-800 text-sm">3</span>
            </span>
            <h3 className="mb-1 font-semibold text-gray-900 text-lg">Berikan Instruksi Perbaikan</h3>
            <p className="font-normal text-base text-gray-500">
              Berikan instruksi kepada tim editor mengenai perbaikan foto seperti apa yang Anda inginkan. Apakah perbaikan foto rusaknya disertai dengan pewarnaan ulang atau warnanya dibiarkan original saja.
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span className="-left-3 absolute flex justify-center items-center bg-blue-100 rounded-full ring-8 ring-white w-6 h-6">
              <span className="font-bold text-blue-800 text-sm">4</span>
            </span>
            <h3 className="mb-1 font-semibold text-gray-900 text-lg">Lakukan Pembayaran DP</h3>
            <p className="font-normal text-base text-gray-500">
              Lakukan pembayaran DP sebesar 50 persen dari total harga yang telah disepakati antara client dan editor.
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span className="-left-3 absolute flex justify-center items-center bg-blue-100 rounded-full ring-8 ring-white w-6 h-6">
              <span className="font-bold text-blue-800 text-sm">5</span>
            </span>
            <h3 className="mb-1 font-semibold text-gray-900 text-lg">Proses Restorasi Foto</h3>
            <p className="font-normal text-base text-gray-500">
              Setelah konsumen melakukan pembayaran DP, tim kami akan mulai melakukan pengerjaan restorasi foto dengan masa penyelesaian kurang lebih 10 jam.
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span className="-left-3 absolute flex justify-center items-center bg-blue-100 rounded-full ring-8 ring-white w-6 h-6">
              <span className="font-bold text-blue-800 text-sm">6</span>
            </span>
            <h3 className="mb-1 font-semibold text-gray-900 text-lg">Pengiriman Hasil Restorasi</h3>
            <p className="font-normal text-base text-gray-500">
              Hasil foto yang sudah diperbaiki oleh tim kami akan dikirimkan melalui email client.
            </p>
          </li>
          <li className="ml-6">
            <span className="-left-3 absolute flex justify-center items-center bg-blue-100 rounded-full ring-8 ring-white w-6 h-6">
              <span className="font-bold text-blue-800 text-sm">7</span>
            </span>
            <h3 className="mb-1 font-semibold text-gray-900 text-lg">Berikan Rating dan Pelunasan</h3>
            <p className="font-normal text-base text-gray-500">
              Tahap terakhir, konsumen tinggal memberikan rating dan melakukan pelunasan pembayaran jika sudah tidak ada revisi lagi.
            </p>
          </li>
        </ol>
      </Section>
    </section>
  );
};

export default LangkahPemesanan;
