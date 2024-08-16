import React from "react";
import Section from "./ui/Section";
import Card from "./ui/Card";

const Keunggulan = () => {
  return (
    <section id="keunggulan" className="bg-white py-12">
      <Section
        title={"Keunggulan Jasa Restorasi Foto di Restorasifitoku"}
        subtitle={
          <p>
            Kami dikenal punya sejumlah keunggulan yang menjadikan layanan kami
            diminati banyak orang. <br /> Berikut beberapa keunggulan yang kami
            tawarkan:
          </p>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-1">
          <div className="flex flex-col items-start gap-2 bg-white p-2 text-left">
            <h3 className="font-semibold text-lg">
              1. Tim restorasi berpengalaman selama 10 tahun.
            </h3>
            <p className="text-slate-500">
              Kelebihan pertama dari layanan restorasi foto
              di Restorasifotoku ada pada pengalaman dalam melakukan berbagai
              editing foto yang kira-kira sudah berpengalaman selama 10 tahun
              lamanya. Pengalaman merestorasi yang sudah cukup lama ini membuat
              kami telah menyelesaikan lebih dari 3632 restorasi foto baik foto
              yang berwarna sampai foto yang monokrom.
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 bg-white p-2 text-left">
            <h3 className="font-semibold text-lg">
              2. Mampu melakukan perbaikan foto rusak hingga 90 persen
            </h3>
            <p className="text-slate-500">
              Kelebihan berikutnya dari layanan restorasi foto di
              Restorasifotoku yaitu kami mampu melakukan perbaikan foto rusak
              dengan tingkat kerusakan mencapai 90 persen. Adapun jenis foto
              rusak yang mampu kami perbaik yaitu sebagai berikut:
            </p>
            <ul className="ml-4 list-disc">
              <li>Perbaikan foto berjamur</li>
              <li>Perbaikan foto yang terkena cipratan air</li>
              <li>Perbaikan foto yang tersobek</li>
              <li>Perbaikan foto yang tertekuk</li>
              <li>Perbaikan Perbaikan foto yang buram menjadi jernih</li>
              <li>
                Recoluring foto hitam putih menjadi foto yang lebih berwarna
              </li>
              <li>Perbaikan foto yang luntur menjadi jernih</li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-2 bg-white p-2 text-left">
            <h3 className="font-semibold text-lg">3. Pengerjaan fast respon</h3>
            <p className="text-slate-500">
              kami mampu melakukan perbaikan foto rusak milik client gak pakai
              waktu lama. Setiap foto milik client dapat kami selesaikan dalam
              waktu 3 sampai 6 jaman saja. Layanan yang cepat ini kami berikan
              dengan maksud agar foto yang sudah rusak yang sudah diperbaiki
              tersebut segera dipakai oleh client.
            </p>
          </div>
        </div>
      </Section>
    </section>
  );
};

export default Keunggulan;
