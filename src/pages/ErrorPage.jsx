import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main class="flex justify-center items-center bg-slate-950 px-6 py-24 sm:py-32 lg:px-8">
      <div class="justify-center items-center flex flex-col h-200">
        <p class="text-[5rem] font-semibold text-amber-600 font-montserrat">
          404
        </p>
        <h1 class="mt-4 font-medium tracking-tight text-[4rem] font-cinzel capitalize text-white sm:text-[6rem]">
          Page not found
        </h1>
        <p class="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div class="mt-15 flex items-center justify-center gap-x-6 font-montserrat">
          <Link to="/">
            <span class="rounded-md bg-amber-600 px-10 py-6 text-xl font-medium text-white shadow-xs hover:bg-amber-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition-colors duration-500 capitalize">
              Go back home
            </span>
          </Link>
          <Link to="/contactUs">
            <span class="text-xl font-medium text-white capitalize">
              Contact support <span aria-hidden="true">&rarr;</span>
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
