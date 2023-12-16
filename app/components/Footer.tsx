import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer>
      <div className=" flex gap-x-4 justify-center py-4 border-t-2 ">
        <Image
          src="/icons/instagram.svg"
          width={24.01}
          height={21.01}
          alt=""
        />
         <Image
          src="/icons/meta.svg"
          width={26}
          height={21}
          alt=""
        />
         <Image
          src="/icons/twitter .svg"
          width={21.57}
          height={19.5}
          alt=""
        />
      </div>
      <div className=" flex justify-center gap-x-4 py-2  text-[#939393] capitalize mb-4">
         <Link
          href="/"
          className="hover:text-gray-300"
        >
          Terms 
        </Link>
        <Link
          href="/"
          className="hover:text-gray-300 transition-opacity"
        >
          Privacy Policy
        </Link>
        <Link
          href="/"
          className="hover:text-gray-300"
        >
          Support 
        </Link>
      </div>
    </footer>
  )
}
