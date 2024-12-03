import React from "react";
import ImageDisplay from "./ImageDisplay";

import {
  bali,
  jambi,
  sulselbar,
  bankSultra,
  bankKalsel,
  bankNtt,
  bankPapua,
  bws,
  bss,
  bcasyariah,
  agi,
  mandiri,
  victoria,
  btpn,
  maspion,
  ccbi,
  ganesha,
  mas,
  index,
  capital,
  ina,
  ctbc,
  bjj,
  bhi,
  bankInc,
} from "@/constants";

function OurCustomer() {
  const BPD = [bali, jambi, sulselbar, bankSultra, bankNtt, bankPapua];
  const BANK_UMUM = [
    bws,
    bss,
    bcasyariah,
    agi,
    mandiri,
    victoria,
    btpn,
    maspion,
    ccbi,
    ganesha,
    mas,
    index,
    capital,
    ina,
    ctbc,
    bjj,
    bhi,
    bankInc,
  ];

  return (
    <div className="py-5 pt-36">
      <div className="w-[90%] mx-auto flex flex-col gap-20">
        <div className="text-6xl font-bold text-center">Our Customer</div>
        <p className="text-center px-20 pb-10">
          Since our founding, PT. Sarana Pactindo (PAC) has quickly become
          well-known as a trusted partner of many of the bank and billers. We
          have worked closely and successfully with government departments and
          major companies, and pride ourselves on meeting and exceeding our
          clients high expectations. Here, you can find a selection of the
          customers we already work closely alongside.
        </p>

        {/* BPD */}
        <ImageDisplay title="BPD" images={BPD} />

        {/* BANK UMUM */}
        <ImageDisplay title="BANK UMUM" images={BANK_UMUM} />
      </div>
    </div>
  );
}

export default OurCustomer;
