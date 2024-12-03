import { useEffect } from "react";
import {
  emoAppStore,
  emoGooglePlay,
  emoneyImages,
  pacLogoCash,
} from "@/constants";
import Carousel from "../common/Carousel";

function EMoney() {
  return (
    <div className="w-full h-min py-10 pt-20">
      <div className="w-[90%] h-full mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Carousel Section */}
        <div className="w-full md:w-1/2 h-full flex justify-center mb-6 md:mb-0">
          <div className="w-[450px] max-w-full">
            <Carousel content={emoneyImages} />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center px-4 gap-6">
          <img src={pacLogoCash} alt="" />
          <h5 className="text-4xl font-bold text-anim">eMoney</h5>
          <p className="text-center ">
            PAC CASH is an e-money service published by PT Sarana Pactindo. PAC
            Cash can be used for payment transactions, purchases, and cash
            withdrawals using a mobile application. PAC Cash has the latest
            security technology that ensures all user data and transactions are
            always safe.
          </p>
          <div className="flex gap-5 flex-wrap">
            <a href="#" className="cursor-pointer">
              <img width={270} src={emoGooglePlay} alt="Google Play Store" />
            </a>
            <a href="#" className="cursor-pointer">
              <img width={270} src={emoAppStore} alt="Apple Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EMoney;
