import { useEffect, useState } from "react";
import logo from "../assets/logo-mmr.png";
import runner from "../assets/runner.png";

function Hero() {
    const eventDate = new Date("2026-08-30T06:00:00").getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = eventDate - now;

            if (distance <= 0) {
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((distance / (1000 * 60)) % 60),
                seconds: Math.floor((distance / 1000) % 60),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [eventDate]);

    const countdown = [
        { label: "DAYS", value: timeLeft.days },
        { label: "HOURS", value: timeLeft.hours },
        { label: "MINUTES", value: timeLeft.minutes },
        { label: "SECONDS", value: timeLeft.seconds },
    ];

    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-[#080000] text-white"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#260000] to-[#bd0000]" />
            <div className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_14px,rgba(255,255,255,0.18)_15px,transparent_30px)]" />

            <div className="absolute -right-28 top-20 h-[480px] w-[480px] rounded-full bg-red-500/30 blur-[120px]" />
            <div className="absolute -left-28 bottom-0 h-[360px] w-[360px] rounded-full bg-red-800/30 blur-[120px]" />

            <img
                src={runner}
                alt="Runner"
                className="pointer-events-none absolute bottom-8 right-[-70px] hidden h-[520px] opacity-20 lg:block xl:h-[620px]"
            />

            <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 sm:px-6 md:px-8 lg:grid-cols-2 lg:px-10">
                <div className="text-center lg:text-left">
                    <img
                        src={logo}
                        alt="MMR Logo"
                        className="mx-auto mb-7 h-[80px] object-contain sm:h-[95px] md:h-[110px] lg:mx-0 lg:h-[120px]"
                    />

                    <p className="mb-4 text-xs font-black italic tracking-[0.3em] text-red-300 sm:text-sm">
                        RUN FOR HOPE 2026
                    </p>

                    <h1 className="text-5xl font-black italic leading-none tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                        MERDEKA
                        <span className="block text-red-500 drop-shadow-[0_0_25px_rgba(255,0,0,0.6)]">
                            RUN
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-xl text-sm font-medium leading-relaxed text-gray-300 sm:text-base md:text-lg lg:mx-0">
                        Join the most energetic running festival in Dumai. Run with hope,
                        push your limit, and create unforgettable moments at the finish line.
                    </p>

                    <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                        <h3 className="text-xl font-black italic tracking-wide text-white sm:text-2xl">
                            DUMAI
                        </h3>
                        <p className="mt-2 text-xs font-bold tracking-[0.18em] text-gray-300 sm:text-sm">
                            30 AGUSTUS 2026
                        </p>
                        <p className="mt-3 text-base font-black italic text-red-400 sm:text-lg">
                            5K • 10K RUNNING FESTIVAL
                        </p>
                    </div>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                        <a
                            href="#registration"
                            className="rounded-2xl bg-gradient-to-r from-red-600 to-red-900 px-8 py-4 text-center font-black italic tracking-wide text-white shadow-[0_0_30px_rgba(255,0,0,0.45)] transition hover:scale-105"
                        >
                            REGISTER NOW
                        </a>

                        <a
                            href="#race-info"
                            className="rounded-2xl border border-red-300/40 bg-white/5 px-8 py-4 text-center font-black italic tracking-wide text-white backdrop-blur-md transition hover:bg-white/10"
                        >
                            RACE INFO
                        </a>
                    </div>
                </div>

                <div className="relative">
                    <div className="rounded-[2rem] border border-white/10 bg-black/35 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-md sm:p-6 md:p-8">
                        <p className="text-center text-xs font-black italic tracking-[0.25em] text-red-300 sm:text-sm">
                            COUNTDOWN TO RACE DAY
                        </p>

                        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                            {countdown.map((item) => (
                                <div
                                    key={item.label}
                                    className="rounded-2xl border border-red-400/20 bg-gradient-to-b from-red-600/20 to-black/40 p-4 text-center shadow-[0_0_25px_rgba(255,0,0,0.15)] sm:p-5"
                                >
                                    <h2 className="text-3xl font-black italic text-white sm:text-4xl md:text-5xl">
                                        {String(item.value).padStart(2, "0")}
                                    </h2>
                                    <p className="mt-2 text-[10px] font-black tracking-widest text-red-300 sm:text-[11px]">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div className="rounded-2xl bg-white/5 p-4 text-center">
                                <p className="text-2xl font-black italic text-red-400">5K</p>
                                <p className="text-xs font-bold text-gray-300">Fun Run</p>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-4 text-center">
                                <p className="text-2xl font-black italic text-red-400">10K</p>
                                <p className="text-xs font-bold text-gray-300">Challenge</p>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-4 text-center">
                                <p className="text-2xl font-black italic text-red-400">2026</p>
                                <p className="text-xs font-bold text-gray-300">Race Year</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 h-[5px] w-full bg-red-600 shadow-[0_0_25px_rgba(255,0,0,0.9)]" />
        </section>
    );
}

export default Hero;