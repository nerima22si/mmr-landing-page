import logo from "../assets/logo-mmr.png";
import {
    FaInstagram,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
    return (
        <footer
            id="contact"
            className="relative overflow-hidden bg-gradient-to-r from-black via-[#2b0000] to-red-700 px-5 py-12 text-white md:py-16"
        >
            <div className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_14px,rgba(255,255,255,0.18)_15px,transparent_28px)]" />

            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-red-600/30 blur-3xl" />
            <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#2600d9]/30 blur-3xl" />

            <div className="absolute right-0 top-0 hidden md:grid grid-cols-3 opacity-80">
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
                        className="h-12 w-12"
                        style={{ backgroundColor: color }}
                    />
                ))}
            </div>

            <div className="relative z-10 mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2">
                <div className="text-center lg:text-left">
                    <img
                        src={logo}
                        alt="MMR Logo"
                        className="mx-auto h-[80px] object-contain md:h-[95px] lg:mx-0"
                    />

                    <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/75 lg:mx-0">
                        Merdeka Run 2026 hadir sebagai event lari penuh semangat,
                        sportainment, dan pengalaman tak terlupakan untuk seluruh peserta.
                    </p>

                    <div className="mt-6 flex justify-center gap-4 lg:justify-start">
                        <a
                            href="https://instagram.com/merdekarun"
                            target="_blank"
                            rel="noreferrer"
                            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 transition hover:-translate-y-1 hover:bg-pink-500"
                        >
                            <FaInstagram size={19} />
                        </a>

                        <a
                            href="mailto:info@merdekarun.id"
                            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 transition hover:-translate-y-1 hover:bg-[#2600d9]"
                        >
                            <FaEnvelope size={19} />
                        </a>

                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            rel="noreferrer"
                            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 transition hover:-translate-y-1 hover:bg-green-500"
                        >
                            <FaPhone size={18} />
                        </a>
                    </div>
                </div>

                <div className="mx-auto w-full max-w-xl lg:mx-0">
                    <h3 className="text-center text-2xl font-black italic lg:text-left">
                        Contact Us
                    </h3>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {[
                            {
                                icon: <FaMapMarkerAlt size={17} />,
                                title: "LOCATION",
                                text: "Dumai, Riau",
                                link: "https://maps.google.com",
                                color: "bg-red-600",
                            },
                            {
                                icon: <FaInstagram size={17} />,
                                title: "INSTAGRAM",
                                text: "@merdekarun",
                                link: "https://instagram.com/merdekarun",
                                color: "bg-pink-500",
                            },
                            {
                                icon: <FaEnvelope size={17} />,
                                title: "EMAIL",
                                text: "info@merdekarun.id",
                                link: "mailto:info@merdekarun.id",
                                color: "bg-[#2600d9]",
                            },
                            {
                                icon: <FaPhone size={17} />,
                                title: "PHONE",
                                text: "0812-3456-7890",
                                link: "https://wa.me/6281234567890",
                                color: "bg-green-500",
                            },
                        ].map((item) => (
                            <a
                                key={item.title}
                                href={item.link}
                                target={item.link.startsWith("http") ? "_blank" : undefined}
                                rel={item.link.startsWith("http") ? "noreferrer" : undefined}
                                className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 text-left transition hover:-translate-y-1 hover:bg-white/10"
                            >
                                <div className={`rounded-xl p-2 ${item.color}`}>
                                    {item.icon}
                                </div>

                                <div>
                                    <p className="text-[11px] font-bold tracking-widest text-white/55">
                                        {item.title}
                                    </p>
                                    <p className="mt-1 text-sm text-white/80">{item.text}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative z-10 mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-center">
                <p className="text-xs text-white/60 md:text-sm">
                    © 2026 Merdeka Run. All Rights Reserved.
                </p>

                <p className="mt-2 text-[10px] tracking-[0.2em] text-white/40 md:text-xs md:tracking-[0.25em]">
                    RUN FOR HOPE • STEP FOR THE GENERATION
                </p>
            </div>
        </footer>
    );
}

export default Footer;