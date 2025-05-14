export default function Blog() {
  return (
    <div className="relative bg-zinc-900 px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-zinc-900 sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            From the blog
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-zinc-400 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="shrink-0">
                <img
                  alt=""
                  src={post.imageUrl}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-zinc-800 p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#CD7F32]">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-zinc-100">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-zinc-400">
                      {post.description}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const posts = [
  {
    title: "Boost your conversion rate",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?auto=format&fit=crop&w=1679&q=80",
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "#",
    category: { name: "Video", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?auto=format&fit=crop&w=1679&q=80",
  },
  {
    title: "Improve your customer experience",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1679&q=80",
  },
  {
    title: "Design tips for better user engagement",
    href: "#",
    category: { name: "Design", href: "#" },
    description:
      "Maximize your design impact with these essential tips. Perfect for UI/UX beginners and pros alike.",
    date: "Apr 02, 2020",
    datetime: "2020-04-02",
    imageUrl:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=1679&q=80",
  },
  {
    title: "The rise of no-code tools",
    href: "#",
    category: { name: "Tech", href: "#" },
    description:
      "Explore how no-code platforms are transforming the way we build and innovate.",
    date: "Apr 06, 2020",
    datetime: "2020-04-06",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1679&q=80",
  },
  {
    title: "Why storytelling matters in marketing",
    href: "#",
    category: { name: "Marketing", href: "#" },
    description:
      "The most memorable campaigns all have one thing in common: powerful storytelling. Here's why it works.",
    date: "May 01, 2020",
    datetime: "2020-05-01",
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1679&q=80",
  },
  {
    title: "Scaling your startup the smart way",
    href: "#",
    category: { name: "Startup", href: "#" },
    description:
      "From MVP to Series A: lessons learned from startup founders who made it.",
    date: "May 20, 2020",
    datetime: "2020-05-20",
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1679&q=80",
  },
  {
    title: "The importance of data privacy",
    href: "#",
    category: { name: "Privacy", href: "#" },
    description:
      "Data is power—but with great power comes great responsibility. Here’s how to stay compliant.",
    date: "Jun 05, 2020",
    datetime: "2020-06-05",
    imageUrl:
      "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=1679&q=80",
  },
  {
    title: "Creative ways to stay productive remotely",
    href: "#",
    category: { name: "Remote Work", href: "#" },
    description:
      "Working from home doesn't have to be a grind. Here are some clever ways to make the most of it.",
    date: "Jun 20, 2020",
    datetime: "2020-06-20",
    imageUrl:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=1679&q=80",
  },
];
