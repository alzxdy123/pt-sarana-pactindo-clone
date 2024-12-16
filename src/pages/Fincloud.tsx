import React from "react";
import Navbar from "@/components/common/Navbar";
import { animFromTopToBottom } from "@/utils/animations";
import { useGSAP } from "@gsap/react";
import Footer from "@/components/Footer";

// Komponen kecil untuk menampilkan teks dengan gaya tertentu
const TextDisplay: React.FC<{ text: string }> = ({ text }) => (
  <div className="text-center px-10 py-3 dark:text-black text-white text-2xl bg-[#1e96d1] font-bold rounded-md">
    {text}
  </div>
);

// Data untuk kartu pada bagian FinCloud
const cards1 = [
  {
    img: "https://pactindo.com/home/assets/img/fincloud/fincloud-core.svg",
    text: "FinCloud Core",
  },
  {
    img: "https://pactindo.com/home/assets/img/fincloud/fincloud-microgate.svg",
    text: "FinCloud MicroGate",
  },
  {
    img: "https://pactindo.com/home/assets/img/fincloud/fincloud-api.svg",
    text: "FinCloud API",
  },
  {
    img: "https://pactindo.com/home/assets/img/fincloud/digital-product.svg",
    text: "Digital Products Billers, Retails, Data Providers, Alternative Scoring, Fintech, E-Commerce, Education, Healthcare, MFI Regulatory & Compliance Analytics/ Machine Learning IT Ops Management Cyber Security, Fraud Detection, AML",
  },
];

const cards2 = Array(12).fill({
  img: "https://pactindo.com/home/assets/img/fincloud/stash-account.svg",
  text: "Stash Accounts",
});

// Komponen untuk menampilkan kartu
const Card: React.FC<{ text: string; img: string; sm?: boolean }> = ({
  text,
  img,
  sm = false,
}) => (
  <div className="flex flex-col items-center gap-4">
    <img
      src={img}
      alt={text}
      className={`${sm ? "h-32" : "h-60"} w-full object-contain`}
    />
    <div className="text-center font-bold text-2xl">{text}</div>
  </div>
);

function Fincloud() {
  // Animasi dengan GSAP
  useGSAP(() => {
    animFromTopToBottom(".text-anim"), animFromTopToBottom(".text-anim2");
  }, []);

  return (
    <div>
      {/* Navbar dengan prop fincloud */}
      <Navbar fincloud />

      <div className="w-[90%] mx-auto pt-40 mb-40">
        {/* Judul Halaman */}
        <h1 className="text-5xl font-extrabold text-anim pb-10 ">FINCLOUD</h1>

        {/* Konten Utama */}
        <div className="flex lg:flex-row flex-col gap-16">
          {/* Kolom Kiri: Konten dengan gambar */}
          <div className="flex flex-col items-center lg:w-[40%] gap-10">
            <TextDisplay text="CUSTOMER CONSOLIDATION (CIS/ CRM)" />
            <img
              src="https://pactindo.com/home/assets/img/fincloud/crm.svg"
              alt="CRM Illustration"
              className="rounded-md shadow-md"
              width={430}
            />
            <TextDisplay text="FINANCIAL AND RISK CONSOLIDATION ENTERPRISE GL, RISK, FINANCIAL/FIDUCIARY REPORTING" />
          </div>

          {/* Kolom Kanan: Deskripsi teks */}
          <div className="flex flex-col items-start lg:w-1/2 justify-center gap-5">
            <h2 className="text-3xl font-bold" style={{ letterSpacing: "3px" }}>
              Dual Core Concept
            </h2>
            <p className="text-lg leading-relaxed">
              Digital core set up as a standalone product/bank where it is
              integrated into existing customer and back-office services.
              Transition existing core work to the digital core, <br /> <br />
              starting with the most simple/siloed. Utilize the existing core
              for the medium term, moving to the digital core over time.
            </p>
          </div>
        </div>

        {/* Bagian FinCloud Cards */}
        <div className="my-20">
          <h2 className="text-3xl font-bold text-anim2 mb-10">
            FinCloud as Digital Banking Platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {cards1.map((item, i) => (
              <Card text={item.text} img={item.img} key={i} />
            ))}
          </div>
        </div>

        {/* Bagian Stash Accounts */}
        <div className="my-20">
          <h2 className="text-3xl font-bold  mb-10">Stash Accounts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {cards2.map((item, i) => (
              <Card text={item.text} img={item.img} key={i} sm />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Fincloud;
