import logo from "../assets/logo-mmr.png";
import {
    FaInstagram,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaArrowUp,
} from "react-icons/fa";

function Footer() {
    return (
        <footer
            id="contact"
            className="relative overflow-hidden bg-gradient-to-r from-black via-[#2b0000] to-red-700 px-5 py-14 text-white"
        >
            {/* Pattern */}
            <div className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_14px,rgba(255,255,255,0.18)_15px,transparent_28px)]" />

            {/* Blur */}
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-red-600/30 blur-3xl" />
            <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#2600d9]/30 blur-3xl" />

            {/* Pixel */}
            <div className="absolute right-0 top-0 hidden md:grid grid-cols-3 opacity-90">
                {[
                    "#2600d9",
                    "#ffffff",
                    "#ff1a00",

                    "#ffffff",
                    "#2600d9",
                    "#ffffff",

                    "#ff1a00",
                    "#ffffff",
                    "#2600d9",
                ].map((color, i) => (
                    <div
                        key={i}
                        className="h-14 w-14"
                        style={{ backgroundColor: color }}
                    />
                ))}
            </div>

            <div className="relative z-10 mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-3">
                {/* LEFT */}
                <div className="text-center md:text-left">
                    <img
                        src={logo}
                        alt="MMR Logo"
                        className="mx-auto h-[95px] object-contain md:mx-0"
                    />

                    {/* <p className="mt-5 max-w-sm text-sm leading-7 text-white/75">
                        Merdeka Run 2026 hadir sebagai event lari penuh semangat,
                        sportainment, dan pengalaman tak terlupakan untuk semua peserta.
                    </p> */}

                    {/* SOCIAL
                    <div className="mt-6 flex justify-center gap-4 md:justify-start">
                        <a
                            href="https://instagram.com/merdekarun"
                            target="_blank"
                            rel="noreferrer"
                            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-pink-500"
                        >
                            <FaInstagram size={20} />
                        </a>

                        <a
                            href="mailto:info@merdekarun.id"
                            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-[#2600d9]"
                        >
                            <FaEnvelope size={20} />
                        </a>
                    </div> */}
                </div>

                {/* CENTER */}
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-black italic text-white">
                        Quick Links
                    </h3>

                    <div className="mt-6 grid gap-3">
                        {[
                            { label: "Home", link: "#home" },
                            { label: "Race Info", link: "#race-info" },
                            { label: "Junior Warrior", link: "#junior-warrior" },
                            { label: "Registration", link: "#registration" },
                            { label: "Terms & Condition", link: "#terms" },
                        ].map((item) => (
                            <a
                                key={item.label}
                                href={item.link}
                                className="group flex items-center justify-center gap-2 text-sm font-semibold text-white/75 transition hover:text-white md:justify-start"
                            >
                                <FaArrowUp className="rotate-45 text-xs transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* RIGHT */}
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-black italic text-white">
                        Contact Us
                    </h3>

                    <div className="mt-6 space-y-4">
                        {/* LOCATION */}
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-start justify-center gap-3 rounded-2xl bg-white/5 p-4 text-left transition hover:bg-white/10 md:justify-start"
                        >
                            <div className="rounded-xl bg-red-600 p-2">
                                <FaMapMarkerAlt size={18} />
                            </div>

                            <div>
                                <p className="text-xs font-bold tracking-widest text-red-300">
                                    LOCATION
                                </p>

                                <p className="mt-1 text-sm text-white/80">
                                    Dumai, Riau
                                </p>
                            </div>
                        </a>

                        {/* INSTAGRAM */}
                        <a
                            href="https://instagram.com/merdekarun"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-start justify-center gap-3 rounded-2xl bg-white/5 p-4 text-left transition hover:bg-white/10 md:justify-start"
                        >
                            <div className="rounded-xl bg-pink-500 p-2">
                                <FaInstagram size={18} />
                            </div>

                            <div>
                                <p className="text-xs font-bold tracking-widest text-pink-300">
                                    INSTAGRAM
                                </p>

                                <p className="mt-1 text-sm text-white/80">
                                    @merdekarun
                                </p>
                            </div>
                        </a>

                        {/* EMAIL */}
                        <a
                            href="mailto:info@merdekarun.id"
                            className="group flex items-start justify-center gap-3 rounded-2xl bg-white/5 p-4 text-left transition hover:bg-white/10 md:justify-start"
                        >
                            <div className="rounded-xl bg-[#2600d9] p-2">
                                <FaEnvelope size={18} />
                            </div>

                            <div>
                                <p className="text-xs font-bold tracking-widest text-blue-300">
                                    EMAIL
                                </p>

                                <p className="mt-1 text-sm text-white/80">
                                    info@merdekarun.id
                                </p>
                            </div>
                        </a>

                        {/* PHONE */}
                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-start justify-center gap-3 rounded-2xl bg-white/5 p-4 text-left transition hover:bg-white/10 md:justify-start"
                        >
                            <div className="rounded-xl bg-green-500 p-2">
                                <FaPhone size={18} />
                            </div>

                            <div>
                                <p className="text-xs font-bold tracking-widest text-green-300">
                                    PHONE
                                </p>

                                <p className="mt-1 text-sm text-white/80">
                                    0812-3456-7890
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="relative z-10 mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center">
                <p className="text-sm text-white/60">
                    © 2026 Merdeka Run. All Rights Reserved.
                </p>

                <p className="mt-2 text-xs tracking-[0.25em] text-white/40">
                    RUN FOR HOPE • STEP FOR THE GENERATION
                </p>
            </div>
        </footer>
    );
}

export default Footer;