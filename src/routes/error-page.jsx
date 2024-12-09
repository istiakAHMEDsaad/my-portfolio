import { Link, useRouteError } from 'react-router-dom';
import notFound from '../assets/notFound.gif';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id='error-page'>
      <Link to={'/'}>
        <button className='border md:text-base md:px-4 md:py-2 text-sm px-3 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:bg-gradient-to-l hover:from-cyanblue-600 hover:to-blue-600 active:scale-95 transition-all'>
          Go Home
        </button>
      </Link>
      <div className='flex flex-col items-center justify-center mx-auto w-full h-[calc(100vh-50px)]'>
        <img src={notFound} alt='not found image' />
      </div>
      {/* <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
    </div>
  );
}
