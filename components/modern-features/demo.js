import { motion, MotionConfig } from "framer-motion";

const steps = [
  [{}, {}, {}, {}, {}],
  [
    { scale: 1.1, rotate: "-6deg" },
    { x: 8, y: 60, scale: 0.75, rotate: "6deg" },
    { y: 44, scaleX: 1.5 },
    { y: 96 },
    { x: 80, y: 16 },
  ],
  [
    { filter: "blur(8px)" },
    { filter: "sepia(100%)" },
    { filter: "saturate(2)" },
    { filter: "grayscale(100%)" },
    { filter: "invert(100%)" },
  ],
];

export function Demo({ step }) {
  return (
    <MotionConfig transition={{ type: "spring", stiffness: 300, damping: 20 }}>
      <div className="flex text-4xl font-black lg:my-10 xl:my-18">
        <div className="w-full flex-none grid grid-cols-3 grid-rows-2 gap-8">
          <motion.div
            className="relative pt-full rounded-lg shadow-lg overflow-hidden"
            animate={steps[step][0]}
          >
            <img
              src="/spotlight-1.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            animate={steps[step][1]}
            className="col-start-3 col-end-4 row-start-2 row-end-3 relative pt-full rounded-lg shadow-lg overflow-hidden "
          >
            <img
              src="/spotlight-2.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            animate={steps[step][2]}
            className="relative pt-full rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src="/spotlight-3.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            animate={steps[step][3]}
            className="relative pt-full rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src="/spotlight-4.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            animate={steps[step][4]}
            className="relative rounded-lg shadow-lg overflow-hidden col-start-2 col-end-4 row-start-1 row-end-2"
          >
            <img
              src="/spotlight-5.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </MotionConfig>
  );
}
