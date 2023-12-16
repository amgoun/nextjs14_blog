import Link from "next/link";

export default function login() {
  return (
    <section className="h-[80vh] flex justify-center ">
      <form
        action=""
        method="post"
        className="flex flex-col py-4 px-8 justify-center w-[400px]"
      >
        <div className="flex flex-col py-2">
          <label htmlFor="email" className="text-sm py-1">
            email
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className=" py-3 rounded-md px-4 bg-slate-100 text-sm"
          />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="password" className="text-sm py-1">
            password
          </label>
          <input
            type="password"
            name="password"
            placeholder="possword"
            className="py-3 rounded-md px-4 bg-slate-100 text-sm"
          />
        </div>
        <div className="flex justify-between py-2 mt-8">
          <button className=" bg-black text-white uppercase py-3 px-4 rounded-md">
            login
          </button>
          <div>
            <Link href="/signup" className=" text-sm tex-black underline">
              create an account
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
}
