import React from "react";
import { pacLogoWhite } from "@/constants";
import { useNavigate } from "react-router-dom"; // Gunakan useNavigate untuk navigasi

function Footer() {
  const navigate = useNavigate(); // Hook untuk navigasi

  return (
    <div className="bg-[#063757] w-full py-10">
      <div className="w-[80%] mx-auto flex flex-col md:flex-row text-white gap-10">
        {/* Logo dengan navigasi */}
        <img
          src={pacLogoWhite}
          width={90}
          alt="PAC"
          className="cursor-pointer"
          onClick={() => navigate("/")} // Navigasi ke halaman "/"
        />

        <div className="flex gap-2 flex-col">
          <p className="text-xl font-bold">PT. Sarana Pactindo</p>

          <div className="flex gap-10">
            <div>
              <p>Jl. Soekarno Hatta No. 269 Bandung</p>
              <p>Telp. +6222 - 5229880</p>
              <p>Fax. +6222 - 5229880</p>
            </div>
            <div>
              <p>Foresta Business Loft 2 Unit 15</p>
              <p>Jl. BSD Raya Utama Pagedangan</p>
              <p>Kabupaten Tangerang - Banten 15339</p>
              <p>Email. info@pactindo.com</p>
            </div>
          </div>
        </div>
        <div className="flex items-end">
          Copyright PT. Sarana Pactindo 2022. All Right Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
