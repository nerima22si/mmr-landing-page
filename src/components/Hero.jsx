import { useEffect, useState } from "react";
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

    const categories = ["JUNIOR WARRIOR", "5K", "8K"];
    const deksripsi =["","Fun Run","Challenge"];

    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-[#080000] text-white"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#260000] to-[#bd0000]" />
            <div className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_14px,rgba(255,255,255,0.18)_15px,transparent_30px)]" />

            <div className="absolute -right-28 top-20 h-[520px] w-[520px] animate-pulse rounded-full bg-red-500/30 blur-[120px]" />
            <div className="absolute -left-28 bottom-0 h-[380px] w-[380px] animate-pulse rounded-full bg-red-800/30 blur-[120px]" />

            <img
                src={runner}
                alt="Runner"
                className="pointer-events-none absolute bottom-0 right-[-120px] hidden h-[560px] animate-[floatRunner_4s_ease-in-out_infinite] opacity-20 lg:block xl:h-[700px]"
            />

            <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-14 px-5 py-20 sm:px-6 md:px-8 lg:grid-cols-2 lg:px-10">
                <div className="animate-[fadeUp_0.9s_ease-out] text-center lg:text-left">
                    <p className="mb-4 text-xs font-black italic tracking-[0.35em] text-red-300 sm:text-sm">
                        RUN FOR HOPE 2026
                    </p>

                    <h1
                        style={{ fontFamily: "Bebas Neue" }}
                        className="leading-[0.82] tracking-wide"
                    >
                        <span className="block text-[72px] italic text-white drop-shadow-[7px_7px_0_rgba(0,0,0,0.35)] sm:text-[95px] md:text-[120px] lg:text-[160px] xl:text-[200px]">
                            MERDEKA
                        </span>

                        <span className="block animate-[redGlow_2s_ease-in-out_infinite] text-[72px] not-italic text-red-500 drop-shadow-[0_0_30px_rgba(255,0,0,0.7)] sm:text-[95px] md:text-[120px] lg:text-[160px] xl:text-[200px]">
                            RUN
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-xl text-sm font-medium leading-relaxed text-gray-300 sm:text-base md:text-lg lg:mx-0">
                        Join the most energetic running festival in Dumai. Run with hope,
                        push your limit, and create unforgettable moments at the finish
                        line.
                    </p>

                    <div className="mt-8 rounded-[1.7rem] border border-white/10 bg-white/5 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h3 className="text-2xl font-black italic tracking-wide text-white">
                                    DUMAI
                                </h3>

                                <p className="mt-1 text-xs font-bold tracking-[0.18em] text-gray-300 sm:text-sm">
                                    30 AGUSTUS 2026
                                </p>
                            </div>

                            <div className="rounded-2xl bg-red-600 px-5 py-3 text-center shadow-[0_0_20px_rgba(255,0,0,0.4)]">
                                <p className="text-xs font-black tracking-[0.2em] text-white">
                                    RACE DAY
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                            {categories.map((item, index) => (
                                <div key={item} className="flex items-center gap-3">
                                    <span className="text-sm font-black italic text-red-300 sm:text-base md:text-lg">
                                        {item}  {deksripsi[index]}
                                    </span>

                                    {index !== categories.length - 1 && (
                                        <div className="h-5 w-[2px] bg-red-400/60" />
                                    )}
                                </div>
                            ))}
                        </div>
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

                <div className="relative animate-[fadeUp_1.1s_ease-out]">
                    <div className="rounded-[2rem] border border-white/10 bg-black/35 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-md sm:p-6 md:p-8">
                        <p className="text-center text-xs font-black italic tracking-[0.25em] text-red-300 sm:text-sm">
                            COUNTDOWN TO RACE DAY
                        </p>

                        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                            {countdown.map((item) => (
                                <div
                                    key={item.label}
                                    className="rounded-2xl border border-red-400/20 bg-gradient-to-b from-red-600/25 to-black/45 p-3 text-center shadow-[0_0_25px_rgba(255,0,0,0.15)] transition hover:-translate-y-2 hover:border-red-400/50 hover:bg-red-600/20 sm:p-5"
                                >
                                    <h2 className="text-2xl font-black italic text-white sm:text-4xl md:text-5xl">
                                        {String(item.value).padStart(2, "0")}
                                    </h2>

                                    <p className="mt-2 text-[9px] font-black tracking-widest text-red-300 sm:text-[11px]">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-5 grid grid-cols-3 gap-3">
                            {categories.map((category) => (
                                <div
                                    key={category}
                                    className="flex h-[78px] items-center justify-center rounded-2xl border border-red-400/20 bg-gradient-to-b from-red-600/10 to-black/30 p-2 text-center shadow-[0_0_20px_rgba(255,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:border-red-400/50 hover:bg-red-600/20"
                                >
                                    <p className="text-sm font-black italic text-red-300 sm:text-lg md:text-xl">
                                        {category}
                                    </p>
                                    <p className="ml-2 text-xs font-bold tracking-[0.15em] text-gray-300 sm:text-sm">
                                        {deksripsi[categories.indexOf(category)]}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-5 rounded-2xl border border-red-400/20 bg-red-600/10 p-4 text-center">
                            <p className="text-xs font-bold tracking-[0.25em] text-red-300">
                                START FROM
                            </p>

                            <h3 className="mt-2 text-2xl font-black italic text-white sm:text-3xl">
                                06.00 WIB
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 h-[5px] w-full bg-red-600 shadow-[0_0_25px_rgba(255,0,0,0.9)]" />

            <style>
                {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(35px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes floatRunner {
            0%, 100% {
              transform: translateY(0) scale(1);
            }
            50% {
              transform: translateY(-18px) scale(1.03);
            }
          }

          @keyframes redGlow {
            0%, 100% {
              filter: drop-shadow(0 0 12px rgba(255, 0, 0, 0.5));
            }
            50% {
              filter: drop-shadow(0 0 28px rgba(255, 0, 0, 0.95));
            }
          }
        `}
            </style>
        </section>
    );
}

export default Hero;