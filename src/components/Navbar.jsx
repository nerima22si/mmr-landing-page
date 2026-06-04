import { useState } from "react";
import logo from "../assets/logo-mmr.png";
import runner from "../assets/runner.png";

function Navbar() {
    const [open, setOpen] = useState(false);

    const menus = [
        // { label: "HOME", href: "#home" },
        { label: "RACE INFO", href: "#race-info" },
        { label: "ABOUT US", href: "#about" },
        // { label: "TIMELINE", href: "#timeline" },
        { label: "JUNIOR WARRIOR", href: "#junior-warrior" },
        { label: "REGISTRATION", href: "#registration" },
        
        { label: "T & C", href: "#terms" },
        { label: "CONTACT", href: "#contact" },
    ];
    

    return (
        <header className="sticky top-0 z-50 w-full overflow-hidden bg-gradient-to-r from-black via-[#280000] to-[#e00000] border-b-[3px] border-red-500 shadow-[0_10px_40px_rgba(255,0,0,0.35)]">
            <div className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_14px,rgba(255,255,255,0.18)_15px,transparent_28px)]" />
            <div className="absolute -right-20 top-0 h-full w-[600px] bg-red-500/25 blur-[100px]" />

            <img
                src={runner}
                alt="Runner"
                className="pointer-events-none absolute right-[20%] top-[-35px] hidden h-[230px] rotate-[-8deg] opacity-20 lg:block"
            />

            <nav className="relative z-10 mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-4 py-3 sm:px-6 md:px-8 lg:px-10">
                <a href="#home" className="flex shrink-0 items-center">
                    <img
                        src={logo}
                        alt="MMR Logo"
                        className="h-[65px] w-auto object-contain sm:h-[78px] md:h-[90px] lg:h-[98px]"
                    />
                </a>

                <div className="hidden min-w-0 flex-1 items-center justify-end gap-4 lg:flex">
                    <ul className="flex items-center rounded-2xl border border-white/10 bg-black/30 px-3 py-3 backdrop-blur-md">
                        {menus.map((menu, index) => (
                            <li key={menu.label} className="relative flex items-center group">
                                <a
                                    href={menu.href}
                                    className="whitespace-nowrap px-3 py-2 text-[12px] font-black italic tracking-wide text-white transition hover:text-red-300 xl:px-4 xl:text-sm"
                                >
                                    {menu.label}
                                </a>

                                {index !== menus.length - 1 && (
                                    <span className="h-6 w-[1px] bg-white/20" />
                                )}

                                <span className="absolute bottom-[-8px] left-3 h-[3px] w-0 rounded-full bg-red-500 transition-all duration-300 group-hover:w-1/2" />
                            </li>
                        ))}
                    </ul>

                    <a
                        href="#registration"
                        className="shrink-0 rounded-2xl border border-red-300/50 bg-gradient-to-br from-red-600 to-red-900 px-6 py-4 text-center text-sm font-black italic tracking-wide text-white shadow-[0_0_25px_rgba(255,0,0,0.35)] transition hover:scale-105"
                    >
                        JOIN NOW
                    </a>
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="rounded-xl border border-white/20 bg-black/35 px-4 py-2 text-3xl font-black text-white lg:hidden"
                >
                    {open ? "×" : "☰"}
                </button>
            </nav>

            {open && (
                <div className="relative z-20 mx-4 mb-4 rounded-2xl border border-white/10 bg-black/95 p-4 backdrop-blur-xl lg:hidden">
                    {menus.map((menu) => (
                        <a
                            key={menu.label}
                            href={menu.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-xl px-4 py-3 text-sm font-black italic tracking-wide text-white transition hover:bg-red-600"
                        >
                            {menu.label}
                        </a>
                    ))}

                    <a
                        href="#registration"
                        onClick={() => setOpen(false)}
                        className="mt-3 block rounded-xl bg-gradient-to-r from-red-600 to-red-900 py-4 text-center font-black italic tracking-wide text-white"
                    >
                        JOIN NOW
                    </a>
                </div>
            )}
        </header>
    );
}

export default Navbar;