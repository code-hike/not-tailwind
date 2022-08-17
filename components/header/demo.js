import { motion, LayoutGroup, MotionConfig } from "framer-motion";

export function Demo({ step }) {
  const { borderRadius, figure, img, quote, caption } = steps[step];
  return (
    <MotionConfig transition={{ duration: 1, delay: 0.5 }}>
      <LayoutGroup>
        <div className="h-[24.25rem] max-w-xl mx-auto lg:max-w-none flex items-center justify-center">
          <div className="w-full flex-none">
            <div className="lg:-mr-18">
              <div
                className={`relative z-10 rounded-lg shadow-xl  mx-auto sm:w-[23.4375rem] text-slate-300`}
                style={{ width: 375 }}
              >
                <motion.div
                  layout
                  className={`rounded-lg overflow-hidden bg-slate-800  ${figure}`}
                >
                  <motion.div
                    layout
                    className={`relative z-10 overflow-hidden flex-none w-24 h-24 ${img}`}
                    animate={{ borderRadius }}
                  >
                    <motion.img
                      layout
                      src="/sarah-dayan.jpg"
                      alt=""
                      className="absolute max-w-none"
                      style={{ width: 96, height: 128, left: 0, top: "-16px" }}
                    />
                  </motion.div>
                  <div className={`pt-6 font-medium ${quote}`}>
                    <div className="mb-4">
                      <Word>“Tailwind </Word>
                      <Word>CSS </Word>
                      <Word>is </Word>
                      <Word>the </Word>
                      <Word>only </Word>
                      <Word>framework </Word>
                      <Word>that </Word>
                      <Word>I've </Word>
                      <Word>seen </Word>
                      <Word>scale </Word>
                      <Word>on </Word>
                      <Word>large </Word>
                      <Word>teams. </Word>
                      <Word>It’s </Word>
                      <Word>easy </Word>
                      <Word>to </Word>
                      <Word>customize, </Word>
                      <Word>adapts </Word>
                      <Word>to </Word>
                      <Word>any </Word>
                      <Word>design, </Word>
                      <Word>and </Word>
                      <Word>the </Word>
                      <Word>build </Word>
                      <Word>size </Word>
                      <Word>is </Word>
                      <Word>tiny.” </Word>
                    </div>
                    <div className={`flex flex-col ${caption}`}>
                      <motion.p layout className="text-sky-400">
                        Sarah Dayan
                      </motion.p>
                      <motion.p layout className="text-slate-500">
                        Staff Engineer, Algolia
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </LayoutGroup>
    </MotionConfig>
  );
}

const steps = [
  { figure: "", img: "", quote: "", borderRadius: 0, caption: "items-start" },
  {
    figure: "p-8",
    img: "",
    quote: "",
    borderRadius: 0,
    caption: "items-start",
  },
  {
    figure: "p-8",
    img: "rounded-full",
    quote: "",
    borderRadius: 50,
    caption: "items-start",
  },
  {
    figure: "p-8",
    img: "rounded-full mx-auto",
    quote: "",
    borderRadius: 50,
    caption: "items-start",
  },
  {
    figure: "p-8",
    img: "rounded-full mx-auto",
    quote: "text-center",
    borderRadius: 50,
    caption: "items-center",
  },
];

function Word({ children }) {
  return (
    <motion.span layout className="relative inline-flex whitespace-pre text-lg">
      <span>{children}</span>
    </motion.span>
  );
}
