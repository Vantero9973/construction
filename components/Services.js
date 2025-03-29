import { InboxIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function Example() {
  return (
    <div className="relative overflow-hidden bg-zinc-900 pb-32 pt-16">
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:px-0 lg:py-16">
            <div>
              <div>
                <span className="flex size-12 items-center justify-center rounded-xl bg-indigo-600">
                  <InboxIcon aria-hidden="true" className="size-8 text-white" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                  Stay on top of customer support
                </h2>
                <p className="mt-4 text-lg text-zinc-500">
                  Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis
                  bibendum malesuada faucibus lacinia porttitor. Pulvinar
                  laoreet sagittis viverra duis. In venenatis sem arcu pretium
                  pharetra at. Lectus viverra dui tellus ornare pharetra.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex rounded-lg bg-indigo-600 px-4 py-1.5 text-base/7 font-semibold text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-zinc-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-zinc-500">
                    &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed
                    diam. Sit orci risus aenean curabitur donec aliquet. Mi
                    venenatis in euismod ut.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="shrink-0">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1604943963840-a18fe96a6322?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="size-6 rounded-full"
                      />
                    </div>
                    <div className="text-base font-medium text-zinc-700">
                      Marcia Hill, Digital Marketing Manager
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                alt="Inbox user interface"
                src="https://images.unsplash.com/photo-1604943963840-a18fe96a6322?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full rounded-xl shadow-xl ring-1 ring-black/5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:px-0 lg:py-32">
            <div>
              <div>
                <span className="flex size-12 items-center justify-center rounded-xl bg-indigo-600">
                  <SparklesIcon
                    aria-hidden="true"
                    className="size-8 text-white"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                  Better understand your customers
                </h2>
                <p className="mt-4 text-lg text-zinc-500">
                  Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis
                  bibendum malesuada faucibus lacinia porttitor. Pulvinar
                  laoreet sagittis viverra duis. In venenatis sem arcu pretium
                  pharetra at. Lectus viverra dui tellus ornare pharetra.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex rounded-lg bg-indigo-600 px-4 py-1.5 text-base/7 font-semibold text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                alt="Customer profile user interface"
                src="https://images.unsplash.com/photo-1604943963840-a18fe96a6322?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full rounded-xl shadow-xl ring-1 ring-black/5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
