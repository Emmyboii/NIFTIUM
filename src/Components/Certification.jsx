import { motion } from "framer-motion";
import certificationImg from "../Images/certification.jpeg";

const Certification = () => {
    return (
        <section
            id="certification"
            className="relative py-24 px-6 md:px-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-yellow-400/10 blur-3xl rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-[360px] shrink-0"
                >
                    <div className="bg-white rounded-3xl shadow-xl ring-1 ring-gray-200/70 p-4">
                        <img
                            src={certificationImg}
                            alt="Minority-Owned Business Enterprise certification"
                            className="w-full h-auto rounded-2xl"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-center md:text-left"
                >
                    <span className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600">
                        Certified
                    </span>
                    <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                        Minority-Owned Business Enterprise
                    </h2>
                    <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
                        A certified minority-owned business proudly serving the Tri-State Area.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Certification;
