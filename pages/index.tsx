import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

// - Mobile: 375px
// - Desktop: 1440px

const Home: NextPage = () => {
  const [advice, setAdvice] = useState({ id: 0, advice: "" });
  const [isLoading, setIsLoading] = useState(false);

  const fetchAdvice = () => {
    setIsLoading(true);
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setAdvice(data?.slip)
          setIsLoading(false);
        }, 500);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="font-manrope font-base text-center h-screen flex flex-col justify-center">
      <Head>
        <title>Advice Generator</title>
        <meta name="description" content="Advice Generator FrontMentor" />
        <link rel="icon" href="/favicon-32x32px.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="mx-auto max-w-xs md:max-w-xl bg-neutral-dark-grayish-blue flex flex-col min-w-xs p-4 mt-4 rounded-xl relative">
        <h3 className="text-primary-neon m-4 text-xs tracking-widest">ADVICE #{advice?.id}</h3>
        <h2 className="text-primary-cyan mt-6 text-2xl">"{advice?.advice}"</h2>
        <div className="relative flex py-5 items-center text-primary-cyan mt-6 mb-4">
          <div className="flex-grow border-t border-opacity-40 border-primary-cyan w-5/12"></div>
          <svg viewBox="212 0 20 16" height="16" className={`w-2/12 m-auto ${isLoading ? 'animate-spin' : ''}`}>
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(212)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3"></rect>
                <rect x="14" width="6" height="16" rx="3"></rect>
              </g>
            </g>
          </svg>
          <div className="flex-grow border-t border-opacity-40 border-primary-cyan w-5/12"></div>
        </div>
        <button onClick={fetchAdvice} disabled={isLoading} className={`rounded-full bg-primary-neon w-14 h-14 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2`}>
          <img src="/icon-dice.svg" alt="" className="m-auto"/>
        </button>
      </main>

      <footer className=""></footer>
    </div>
  );
};

export default Home;
