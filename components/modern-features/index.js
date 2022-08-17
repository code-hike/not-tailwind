import Content from "./content.mdx";

export function ModernFeatures() {
  return (
    <section className="relative mt-48">
      <Title />
      <div className="relative">
        <Background />
        <Content />
      </div>
    </section>
  );
}

function Title() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <h2 className="mt-8 font-semibold  text-indigo-400">Modern features</h2>

      <p className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-50 ">
        Cutting-edge is our comfort&nbsp;zone.
      </p>

      <div className="mt-4 max-w-3xl space-y-6 ">
        <p>
          Tailwind is unapologetically modern, and takes advantage of all the
          latest and greatest CSS features to make the developer experience as
          enjoyable as possible.
        </p>
        <p>
          We've got first-class CSS grid support, composable transforms and
          gradients powered by CSS variables, support for modern state selectors
          like{/* */}{" "}
          <code className="font-mono font-medium text-slate-200 ">
            :focus-visible
          </code>
          , and tons more.
        </p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute inset-x-0 top-40">
      <div className="block absolute inset-x-0 h-[37.5rem] bg-gradient-to-b from-[#0c1120] top-0 " />
      <div
        className="absolute  inset-x-0 bg-top bg-no-repeat top-0"
        style={{
          backgroundImage: "url(/0.png)",
          backgroundSize: "125.5rem 100%",
          height: "28.8125rem",
        }}
      />
      <div className="absolute inset-x-0 h-[37.5rem] bg-grid-slate-900/[0.04] bg-top [mask-image:linear-gradient(0deg,transparent,black)] bg-grid-slate-100/[0.03] bg-[center_top_-1px] border-t border-slate-100/5 top-0 " />
    </div>
  );
}
