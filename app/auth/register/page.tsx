import Link from "next/link";

const page = () => {
  return (
    <div className="h-full container flex items-center justify-center">
    <div className="flex flex-col max-w-sm w-full">
      <h1 className="text-2xl mb-5 text-center">REGISTER</h1>
      <form>
        <label className="block mb-3 last-child:mb-0">
          <div className="text-sm pb-1">Username <i className="text-red-700 font-normal">*</i></div>
          <input 
            className="text-neutral-800 bg-gray-100 py-2 px-4 rounded-md w-full focus:outline-none focus:border-black"
            type="email" 
            placeholder="Enter your name or nickname"
          />
        </label>
        <label className="block mb-3 last-child:mb-0">
          <div className="text-sm pb-1">Email <i className="text-red-700 font-normal">*</i></div>
          <input 
            className="text-neutral-800 bg-gray-100 py-2 px-4 rounded-md w-full focus:outline-none focus:border-black"
            type="email" 
            placeholder="Enter your email"
          />
        </label>
        <label className="block mb-3 last-child:mb-0">
          <div className="text-sm pb-1">Password <i className="text-red-700 font-normal">*</i></div>
          <input 
            className="text-neutral-800 bg-gray-100 py-2 px-4 rounded-md w-full focus:outline-none focus:border-black"
            type="password" 
            placeholder="Enter your password"
          />
        </label>
        <label className="block mb-3 last-child:mb-0">
          <div className="text-sm pb-1">Confirm password <i className="text-red-700 font-normal">*</i></div>
          <input 
            className="text-neutral-800 bg-gray-100 py-2 px-4 rounded-md w-full focus:outline-none focus:border-black"
            type="password" 
            placeholder="Confirm your password"
          />
        </label>
      </form>
      <div className="mt-5">
        <Link href="/auth/login" className="inline-block text-center underline underline-offset-2 transition-transform hover:scale-105">Already have account?</Link>
      </div>
    </div>
  </div>
  );
}

export default page;