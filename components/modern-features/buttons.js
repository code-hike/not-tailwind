export function GridButton() {
  return (
    <div>
      <button
        type="button"
        className="group text-sm font-semibold w-full flex flex-col items-center outline-none"
      >
        <svg
          width={48}
          height={48}
          fill="none"
          aria-hidden="true"
          className="mb-6 text-slate-600 group-hover:text-slate-500"
        >
          <path
            d="M5 13a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-6ZM5 29a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-6ZM19 29a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-6ZM33 29a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-6ZM19 13a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H22a3 3 0 0 1-3-3v-6Z"
            fill="currentColor"
            fillOpacity=".1"
            stroke="currentColor"
            strokeWidth={2}
          />
        </svg>
        CSS Grid
      </button>
    </div>
  );
}

export function TransformsButton() {
  return (
    <div>
      <button
        type="button"
        className="group text-sm font-semibold w-full flex flex-col items-center outline-none"
      >
        <svg
          width={48}
          height={48}
          fill="none"
          aria-hidden="true"
          className="mb-6 text-slate-600 group-hover:text-slate-500"
        >
          <path
            d="M5.632 11.725a3 3 0 0 1 2.554-3.388l3.96-.557a3 3 0 0 1 3.389 2.554l.835 5.941a3 3 0 0 1-2.553 3.388l-3.961.557a3 3 0 0 1-3.389-2.553l-.835-5.942ZM1 29a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-6ZM20 34a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-6ZM36.728 27.026a3 3 0 0 1 3.558-2.31l3.913.831a3 3 0 0 1 2.31 3.558l-1.247 5.87a3 3 0 0 1-3.558 2.31l-3.913-.832a3 3 0 0 1-2.31-3.558l1.247-5.869ZM22.236 9.17a3 3 0 0 1 3.202-2.783l17.956 1.255a3 3 0 0 1 2.784 3.202l-.419 5.986a3 3 0 0 1-3.202 2.783l-17.956-1.255a3 3 0 0 1-2.784-3.202l.419-5.986Z"
            fill="currentColor"
            fillOpacity={0}
            stroke="currentColor"
            strokeWidth={2}
          />
        </svg>
        Transforms
      </button>
    </div>
  );
}

export function FiltersButton() {
  return (
    <div>
      <button
        type="button"
        className="group text-sm font-semibold w-full flex flex-col items-center outline-none"
      >
        <svg
          width={48}
          height={48}
          fill="none"
          aria-hidden="true"
          className="mb-6 text-slate-600 group-hover:text-slate-500"
        >
          <path
            d="M31 30c0-7.18-5.82-13-13-13m-5.009 1C8.298 19.961 5 24.596 5 30c0 7.18 5.82 13 13 13 5.404 0 10.039-3.298 12-7.991"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx={30}
            cy={18}
            r={13}
            fill="currentColor"
            fillOpacity={0}
            stroke="currentColor"
            strokeWidth={2}
          />
          <path
            d="m26 30 4-4M21 27l6-6M18 22l4-4"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Filters
      </button>
    </div>
  );
}
