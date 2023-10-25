import Content from "./content.mdx"

export function Header() {
  return (
    <header className="relative">
      <div className="px-4 sm:px-6 md:px-8">
        <Background />
        <Nav />
        <Title />
      </div>
    </header>
  )
}

function Nav() {
  return (
    <div className="relative pt-6 lg:pt-8 flex items-center justify-between text-xl text-slate-200">
      <div className="flex items-center">
        <svg viewBox="0 0 64 31" className="w-auto h-5">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
            fill="#38bdf8"
          />
        </svg>
        <span>CABYZ, LLC</span>
      </div>
    </div>
)

function Background() {
  return (
    <div
      className="absolute inset-0 bottom-10 bg-bottom bg-no-repeat bg-[#0B1120]"
      style={{
        backgroundImage: "url(/hero.jpg)",
        backgroundSize: "86.125rem"
      }}
    >
      <div
        className="absolute inset-0 bg-grid-slate-400/[0.05] bg-bottom border-b border-slate-100/5"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black)"
        }}
      />
    </div>
  )
}

function Title() {
  return (
    <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
      <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center text-white">
        Venture-Centric Sales Innovation: We Invest in Your Business Growth
      </h1>
      <p className="mt-6 text-lg  text-center max-w-3xl mx-auto text-slate-400">
       Elevating {/* */}{" "}
        <code className="font-mono font-medium text-sky-400">businesses</code>,{" "}
        and{" "}
        by deploying advanced sales systems.
      </p>
    </div>
  )
}
