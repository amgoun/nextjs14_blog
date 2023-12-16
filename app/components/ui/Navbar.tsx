import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" bg-[#A3EEFF] ">
      <nav className=" justify-between items-center py-2 text-[18px] capitalize hidden md:flex bg-[#A3EEFF]  max-w-7xl mx-auto px-2">
        <div className=" logo text-[26px] font-bold }"> Blog. </div>
        <div className="flex space-x-24">
          <p className="flex items-center cursor-pointer">
            Categories{" "}
            <span className="ml-2">
              {" "}
              <Image
                src="/icons/drop_down_icon.svg"
                width={16}
                height={7.5}
                alt=""
              />
            </span>
          </p>

          <Image src="/icons/esearch_icon.svg" width={24} height={24} alt="" />
        </div>
        <div className=" flex ">
          <button className="py-2 px-7 bg-black text-white rounded-full">
            signup
          </button>
        </div>

        {/* mobile navbar  */}
      </nav>
      <div className="absolute top-0 left-0 bottom-0 right-0">
        <p className="absolute top-5 right-5 md:hidden">burger</p>
        <menu className="flex flex-col justify-center items-center h-full w-full text-xl text- bold text black bg-[#A3EEFF] py-6 p-4 md:hidden ">
          <Link className="mobile_nav" href="/">
            All
          </Link>
          <Link className="mobile_nav" href="/">
            Life style{" "}
          </Link>
          <Link className="mobile_nav" href="/">
            Technologies{" "}
          </Link>
          <Link className="mobile_nav" href="/">
            finance
          </Link>
          <Link className="mobile_nav" href="/">
            Other{" "}
          </Link>
          <Link className="mobile_nav" href="/login">
            signup{" "}
          </Link>
          <Link className="mobile_nav" href="/">
            logout{" "}
          </Link>
        </menu>
      </div>
    </div>
  );
}
