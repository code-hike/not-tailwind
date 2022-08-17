// little hack to avoid hydration errors:
// import Content from "./content.mdx";
import dynamic from "next/dynamic";
const Content = dynamic(() => import("./content.mdx"), {
  ssr: false,
});

export function StateVariants() {
  return (
    <section className="state-variants mt-48">
      <Title />
      <div className="relative pt-10 xl:pt-0 mt-10 xl:mt-2">
        <Background />
        <Content />
      </div>
    </section>
  );
}

function Title() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <h2 className="mt-8 font-semibold text-blue-500">State variants</h2>
      <p className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-50 ">
        Hover and focus states? We got&nbsp;’em.
      </p>
      <p className="mt-4 max-w-3xl space-y-6 ">
        Want to style something on hover? Stick{" "}
        <code className="font-mono font-medium text-slate-200 ">hover:</code> at
        the beginning of the class you want to add. Works for{" "}
        <code className="font-mono font-medium text-slate-200 ">focus</code>,
        {/* */}{" "}
        <code className="font-mono font-medium text-slate-200 ">active</code>,{" "}
        <code className="font-mono font-medium text-slate-200 ">disabled</code>,
        {/* */}{" "}
        <code className="font-mono font-medium text-slate-200 ">
          focus-within
        </code>
        ,{" "}
        <code className="font-mono font-medium text-slate-200 ">
          focus-visible
        </code>
        , and even fancy states we invented ourselves like{" "}
        <code className="font-mono font-medium text-slate-200 ">
          group-hover
        </code>
        .
      </p>
    </div>
  );
}

function Background() {
  return (
    <>
      <div className="block absolute inset-x-0 h-[37.5rem] bg-gradient-to-b from-[#0c1120] top-0 xl:top-8" />
      <div
        className="absolute inset-x-0 bg-top bg-no-repeat top-0 xl:top-8"
        style={{
          backgroundImage: "url(/4.png)",
          backgroundSize: "129.375rem 100%",
          height: "37.5rem",
        }}
      />
      <div className="absolute inset-x-0 h-[37.5rem] bg-top [mask-image:linear-gradient(0deg,transparent,black)] bg-grid-slate-100/[0.03] bg-[center_top_-1px] border-t border-slate-100/5 top-0 xl:top-8" />
    </>
  );
}
