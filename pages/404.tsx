import '../styles/global.css'
import Layout from "../components/Layout";
import Link from 'next/link';

const notFound = () => {
  return (
    <Layout>
      <div className="container flex items-center justify-center h-full">
        <div className='max-w-2xl mx-auto text-center flex flex-col items-center'>
          <div className="flex items-center">
            <h1 className='text-4xl'>
              <span className='text-emerald-400 font-bold'>404</span> 
              <span className='inline-block h-full mx-3'>&nbsp;|&nbsp;</span>
              Page not found
            </h1>
          </div>
          <Link 
            href="/"
            className='flex border-white border-2 py-2 px-4 rounded-md w-fit font-medium mt-7 leading-none transition-transform hover:scale-105'
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default notFound;