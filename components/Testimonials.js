const featuredTestimonial = {
  body: "We hired this team for a full kitchen remodel, and from start to finish, it was a fantastic experience. They guided us through layout changes, cabinet selection, lighting, and finishes, all while staying within our budget. Their attention to detail and craftsmanship exceeded expectations. We love our new kitchen—it feels like a whole new home.",
  author: {
    name: "Angela Martinez",
    jobType: "Kitchen Remodel",
  },
};

const testimonials = [
  [
    [
      {
        body: "They turned our outdated bathroom into a spa-like retreat. The tile work was impeccable, and they finished everything on time without cutting corners.",
        author: { name: "Megan Riley", jobType: "Bathroom Remodel" },
      },
      {
        body: "We needed new flooring and a few small drywall repairs after water damage. They were in and out quickly, and the results look flawless.",
        author: { name: "David Chen", jobType: "Flooring & Drywall" },
      },
      {
        body: "Our deck was falling apart, and they rebuilt it beautifully with composite materials. It’s now our favorite part of the house.",
        author: { name: "Jillian Novak", jobType: "Deck Rebuild" },
      },
    ],
    [
      {
        body: "We had them finish our basement and add a laundry room. The layout works perfectly, and it feels like it was always part of the house.",
        author: { name: "Craig Thompson", jobType: "Basement Finishing" },
      },
      {
        body: "I needed a few odd jobs done—cabinet repairs, some new trim, and painting. They jobTyped it all efficiently and with great care.",
        author: { name: "Rita Owens", jobType: "Handyman Services" },
      },
    ],
    [
      {
        body: "Our garage had been a mess for years. They came in, cleaned it up, installed storage, and even built a workbench. Highly recommend!",
        author: { name: "Marcus Hill", jobType: "Garage Organization" },
      },
      {
        body: "We had them repaint the entire interior of our home. The lines are crisp, and the colors look fantastic. Great team and communication.",
        author: { name: "Natalie Brooks", jobType: "Interior Painting" },
      },
    ],
    [
      {
        body: "Installed new lighting, repaired drywall, and mounted a few shelves in our living room. Super handy and very respectful of our home.",
        author: { name: "Omar Grant", jobType: "Lighting & Drywall" },
      },
      {
        body: "Built a custom closet for our master bedroom. It added so much storage and value to our space. Couldn’t be happier!",
        author: { name: "Diana Patel", jobType: "Custom Closet" },
      },
      {
        body: "We had an emergency leak in the ceiling and they came the same day to patch it up. Fast, friendly, and honest pricing.",
        author: { name: "Ben Holloway", jobType: "Ceiling Repair" },
      },
    ],
  ],
];

export default function Testimonials() {
  return (
    <div className="relative isolate bg-zinc-900 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-base/7 font-semibold text-[#CD7F32]">
            Testimonials
          </h2>
          <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
            We have worked with thousands of amazing people
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-zinc-100 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="rounded-2xl bg-zinc-800 shadow-lg ring-1 ring-zinc-100/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold tracking-tight text-zinc-100 sm:p-12 sm:text-xl/8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-zinc-100/10 px-6 py-4 sm:flex-nowrap">
              <div className="size-10 rounded-full bg-[#CD7F32] text-white flex items-center justify-center font-semibold">
                {featuredTestimonial.author.name.charAt(0)}
              </div>
              <div className="flex-auto">
                <div className="font-semibold">
                  {featuredTestimonial.author.name}
                </div>
                <div className="text-zinc-300">
                  {featuredTestimonial.author.jobType}
                </div>
              </div>
            </figcaption>
          </figure>

          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={`${
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                    (columnGroupIdx === testimonials.length - 1 &&
                      columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1"
                  } space-y-8`}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.name}
                      className="rounded-2xl bg-zinc-800 p-6 shadow-lg ring-1 ring-zinc-100/5"
                    >
                      <blockquote className="text-zinc-100">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <div className="size-10 rounded-full bg-[#CD7F32] text-white flex items-center justify-center font-semibold">
                          {testimonial.author.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                          <div className="text-zinc-300">
                            {testimonial.author.jobType}
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
