import React from "react";
import Section from "./ui/Section";
import Card from "./ui/Card";
import { FaStar } from "react-icons/fa";

const Keahlian = () => {
  return (
    <section id="keahlian" className="bg-light py-12">
      <Section
        title={
          "Teknologi Canggih yang Kami Gunakan Dalam Melakukan Restorasi Foto"
        }
        subtitle={
          <p>
            Dalam melakukan restorasi foto milik client, kami menggunakan
            beragam teknologi tinggi. Adapun teknologi yang kami gunakan yaitu:
          </p>
        }
      >
        <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
          <Card
            icon={<FaStar color="white" />}
            title={"Rekayasa pixel melalui Adobe Photoshoop"}
          />
          <Card
            icon={<FaStar color="white" />}
            title={"Recoloring melalui Lightroom"}
          />
          <Card
            icon={<FaStar color="white" />}
            title={" Foto Cloning melalui Fantasia Painter"}
          />
        </div>
      </Section>
    </section>
  );
};

export default Keahlian;
