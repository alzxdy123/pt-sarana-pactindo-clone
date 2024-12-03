import { isoLogo } from "@/constants";

function Iso() {
  return (
    <div className="flex justify-center items-center py-10 dark:bg-slate-900">
      <div className="w-1/2 flex justify-center items-center flex-col gap-5">
        <img
          src={isoLogo}
          alt=""
          width={130}
          className="dark:bg-slate-300 p-2 rounded-3xl"
        />

        <h1 className="font-bold text-3xl">Terverifikasi ISO/IEC 27001:2013</h1>
        <p className="text-center">
          PT. Sarana Pactindo has been certified to the ISO/IEC 27001:2013
          standard with the scope The information security management system in
          the provision of managed services digital banking and IT operations of
          the electronic money platform.
        </p>

        <button className="mt-5 bg-[#1e96d1] px-14 py-2 rounded-3xl text-white dark:text-black">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Iso;
