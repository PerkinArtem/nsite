import { ReactNode } from "react";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

type GeneralLayoutProps = {
  children: ReactNode,
};

export default function Layout({ children }: GeneralLayoutProps) {
  return (
    <div className="min-h-full flex flex-col text-white bg-neutral-700">
      <Header />
      <main className='flex-1 py-10'>
        {children}
      </main>
      <Footer />
    </div>
  )
}