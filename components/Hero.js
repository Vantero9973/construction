import Image from "next/image";

export default function Example() {
  return (
    <div className="relative bg-zinc-900">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-48 lg:pt-40 xl:col-span-6">
          <div className="mx-auto max-w-lg lg:mx-0">
            <div className="hidden sm:mt-32 sm:flex lg:mt-16">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-zinc-400 ring-1 ring-zinc-100/10 hover:ring-zinc-100/20">
                Transform your home into a masterpiece.{" "}
                <a
                  href="#"
                  className="whitespace-nowrap font-semibold text-[#CD7F32]"
                >
                  <span aria-hidden="true" className="absolute inset-0" />
                  See our projects <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <h1 className="mt-24 text-pretty text-5xl font-semibold tracking-tight text-zinc-100 sm:mt-10 sm:text-7xl">
              Remodeling That Reflects Your Style
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-zinc-400 sm:text-xl/8">
              From custom kitchens to luxury baths, we bring your vision to
              life. Quality craftsmanship, personalized design, and timeless
              results — crafted just for you.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[#CD7F32]/80 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#CD7F32]"
              >
                Get a Free Consultation
              </a>
              <a href="#" className="text-sm/6 font-semibold text-zinc-100">
                View Services <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <div className="relative w-full h-full">
            <Image
              alt="Luxury Home Remodel"
              src="https://www.fourbrothersdc.com/fb/fb_assets/fb-services-kitchens-main.jpg"
              fill
              className="aspect-[3/2] w-full bg-zinc-900 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            />
            <div className="absolute inset-0 bg-zinc-900/25" />
          </div>
        </div>
      </div>
    </div>
  );
}
