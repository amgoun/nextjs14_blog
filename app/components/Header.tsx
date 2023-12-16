import Image from "next/image";
import Navbar from "./ui/Navbar";

export default function Header() {
  return (
    <header className=" bg-[#A3EEFF] py-4 w-full ">
      <div className="max-w-7xl mx-auto px-2">
        <div className=" flex flex-col-1 xl:flex-row  justify-between  py-12 xl:mt-12">
          <div className="flex flex-col justify-start w-full  md:max-w-[50%]">
            <h1 className="text-[70px] mt-6 leading-[80px]">
              Fuel your curiosity.
            </h1>
            <p className="py-8 text-[24px] leading-9">
              {" "}
              Explore narratives, perspectives, and knowledge shared by writers
              on a myriad of subjects.
            </p>
            <button className="py-4 px-7 bg-black text-white rounded-full w-[200px] ">
              Start Reading
            </button>
          </div>
          <div className=" hidden md:inline">
            <Image
              src="/images/illustration.svg"
              width={409}
              height={409}
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
  );
}
