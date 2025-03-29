"use client";

import { Parallax } from "react-parallax";

export default function Hero() {
  return (
    <Parallax
      strength={300}
      bgImage="https://images.unsplash.com/photo-1604943963840-a18fe96a6322?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      bgImageAlt="Luxury Remodel"
    >
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-56 lg:py-72">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-zinc-400 ring-1 ring-white/10 hover:ring-white/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-white">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Data to enrich your online business
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-zinc-400 sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
}
