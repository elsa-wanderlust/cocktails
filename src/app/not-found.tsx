import Image from "next/image";
import Link from "next/link";
import backgroundImage from "../images/shutterstock_2075183863.jpg";

export default function NotFound() {
  return (
    <main className="isolate min-h-full">
      <div className="absolute inset-0 overflow-y-hidden opacity-50 w-full h-full -z-10">
        <Image src={backgroundImage} alt="" fill objectFit="cover" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-12 lg:px-8 z-20">
        <p className="text-base font-semibold leading-8 text-white">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-white/70 sm:mt-6">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-6 flex justify-center">
          <a href="/" className="text-sm font-semibold leading-7 text-white">
            <span aria-hidden="true">&larr;</span> Back to home
          </a>
        </div>
      </div>
    </main>
  );
}
