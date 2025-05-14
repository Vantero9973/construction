"use client";

import {
  HomeModernIcon,
  WrenchScrewdriverIcon,
  PaintBrushIcon,
  Squares2X2Icon,
  BuildingOffice2Icon,
  RectangleStackIcon,
  WrenchIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/20/solid";

const services = [
  {
    title: "Bathroom Remodel",
    description:
      "Modernize your bathroom with updated fixtures, tilework, and custom layouts.",
    icon: WrenchScrewdriverIcon,
    href: "/services/bathroom-remodel",
  },
  {
    title: "Kitchen Remodel",
    description:
      "Upgrade your kitchen for style, storage, and improved functionality.",
    icon: HomeModernIcon,
    href: "/services/kitchen-remodel",
  },
  {
    title: "Basement Remodel",
    description: "Transform your basement into a livable, welcoming space.",
    icon: RectangleStackIcon,
    href: "/services/basement-remodel",
  },
  {
    title: "Complete Home Remodel",
    description:
      "Comprehensive renovation to bring new life to your entire home.",
    icon: BuildingOffice2Icon,
    href: "/services/complete-home-remodel",
  },
  {
    title: "Flooring",
    description:
      "Durable and attractive flooring options to suit any room or style.",
    icon: Squares2X2Icon,
    href: "/services/flooring",
  },
  {
    title: "Tiling",
    description: "Custom tile installations for kitchens, bathrooms, and more.",
    icon: ClipboardDocumentCheckIcon,
    href: "/services/tiling",
  },
  {
    title: "Painting",
    description:
      "Interior and exterior painting to give your home a fresh look.",
    icon: PaintBrushIcon,
    href: "/services/painting",
  },
  {
    title: "Decks",
    description: "Custom-built decks to enhance your outdoor living space.",
    icon: WrenchIcon,
    href: "/services/decks",
  },
];

export default function Services() {
  return (
    <section className="bg-zinc-900">
      <div className="mx-auto max-w-7xl py-16 px-6">
        <div className="max-w-2xl">
          <h2 className="text-base/7 font-semibold text-[#CD7F32]">Services</h2>
          <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
            Expert remodeling and repair solutions
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-zinc-800 shadow-md ring ring-zinc-800 p-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
            >
              <div className="bg-[#CD7F32] w-fit rounded-full p-2 mb-4">
                <service.icon className="h-8 w-8 text-zinc-800" />
              </div>

              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-zinc-400 mb-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
