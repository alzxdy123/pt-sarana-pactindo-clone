import { saasLogo } from "@/constants";

function Sass() {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 mt-5">
      <div className="w-[90%] mx-auto h-screen py-10 flex justify-center items-center gap-10 flex-col">
        <h1 className="text-4xl font-bold text-center">
          SASS <br /> (Compliance Infrastructure)
        </h1>
        <img src={saasLogo} alt="SASS" width={500} />
      </div>
    </div>
  );
}

export default Sass;
