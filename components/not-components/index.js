import Code from "./code.mdx";

export function NotComponents() {
  return (
    <div className="not-components py-48 relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:grid-rows-1">
      <Title />
      <Demo />
      <Code />
    </div>
  );
}

function Title() {
  return (
    <div className="lg:col-span-7 xl:col-span-6 lg:row-end-1 mb-12">
      <h3 className="text-3xl  font-extrabold text-slate-200">
        Not into component frameworks?
      </h3>
      <p className="mt-4 max-w-3xl space-y-6 ">
        Use Tailwind's{" "}
        <code className="font-mono font-medium text-slate-200 ">@apply</code>{" "}
        directive to extract repeated utility patterns into custom CSS classes
        just by copying and pasting the list of class names.
      </p>
    </div>
  );
}

function Demo() {
  return (
    <div className="pt-10 lg:col-span-5 xl:col-span-6 lg:row-start-1 lg:row-end-2">
      <div className="relative z-10 rounded-xl shadow-xl ring-1 ring-slate-900/5 bg-slate-800 highlight-white/10">
        <article>
          <h2 className="text-lg font-semibold pt-4 pb-2 px-4 sm:px-6 lg:px-4 xl:px-6 text-slate-100 transition-opacity duration-[1.5s] delay-500 opacity-25">
            Weekly one-on-one
          </h2>
          <dl className="flex flex-wrap divide-y divide-slate-200 border-b border-slate-200 text-sm sm:text-base lg:text-sm xl:text-base divide-slate-200/5 border-slate-200/5">
            <div className="px-4 sm:px-6 lg:px-4 xl:px-6 pb-4">
              <dt className="sr-only">Date and time</dt>
              <dd className="transition-opacity duration-[1.5s] delay-500 opacity-25">
                <time dateTime="2020-11-15T10:00:00-05:00">
                  Thu Nov 15, 2020 10:00am
                </time>{" "}
                -{/* */}{" "}
                <time dateTime="2020-11-15T11:00:00-05:00">
                  11:00am<span className="sr-only sm:not-sr-only"> EST</span>
                </time>
              </dd>
            </div>
            <div className="w-full flex-none flex items-center p-4 sm:p-6 lg:p-4 xl:p-6">
              <dt className="w-2/5 sm:w-1/4 flex-none font-medium text-slate-300 transition-opacity duration-[1.5s] delay-500 opacity-25">
                Location
              </dt>
              <dd className="transition-opacity duration-[1.5s] delay-500 opacity-25">
                Kitchener, <abbr title="Ontario">ON</abbr>
              </dd>
            </div>
            <div className="w-full flex-none flex items-center p-4 sm:p-6 lg:p-4 xl:p-6">
              <dt className="w-2/5 sm:w-1/4 flex-none font-medium text-slate-300 transition-opacity duration-[1.5s] delay-500 opacity-25">
                Description
              </dt>
              <dd className="italic transition-opacity duration-[1.5s] delay-500 opacity-25">
                No meeting description
              </dd>
            </div>
            <div className="w-full flex-none flex items-center p-4 sm:py-5 sm:px-6 lg:p-4 xl:py-5 xl:px-6">
              <dt className="w-2/5 sm:w-1/4 flex-none font-medium text-slate-300 transition-opacity duration-[1.5s] delay-500 opacity-25">
                Attendees
              </dt>
              <dd className="text-sm font-medium rounded-full py-1 px-3 bg-slate-700 text-slate-300 transition-opacity duration-[1.5s] delay-500 opacity-25">
                Andrew McDonald
              </dd>
            </div>
          </dl>
          <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 lg:gap-x-4 xl:gap-x-6 p-4 sm:px-6 sm:py-5 lg:p-4 xl:px-6 xl:py-5">
            <div className="text-base font-medium rounded-lg py-3 text-center cursor-pointer bg-slate-600 text-slate-400 highlight-white/10">
              Decline
            </div>
            <div className="text-base font-medium rounded-lg bg-sky-500 text-white py-3 text-center cursor-pointer highlight-white/20">
              Accept
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
