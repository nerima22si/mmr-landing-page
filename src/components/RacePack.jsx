import racepackBg from "../assets/racepack-bg.png";

function RacePack() {
    const packItems = [
        {
            title: "Jersey Official",
            desc: "Jersey eksklusif Merdeka Run 2026 dengan desain sporty.",
            icon: "👕",
        },
        {
            title: "Medali Finisher",
            desc: "Medali untuk peserta yang berhasil mencapai garis finish.",
            icon: "🏅",
        },
        {
            title: "BIB MMR 2026",
            desc: "Nomor peserta resmi untuk mengikuti race day.",
            icon: "🎫",
        },
        {
            title: "Kupon Doorprize",
            desc: "Kupon undian berhadiah untuk peserta Merdeka Run.",
            icon: "🎁",
        },
    ];

    return (
        <section
            id="racepack"
            className="relative overflow-hidden bg-[#1200a8]"
        >
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-35"
                style={{ backgroundImage: `url(${racepackBg})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#2200d8]/75" />

            {/* Big Text */}
            <div className="absolute inset-0 flex items-center justify-center">
                <h2
                    style={{ fontFamily: "Bebas Neue" }}
                    className="select-none text-[90px] leading-none text-white/10 md:text-[180px] lg:text-[250px]"
                >
                    RACE
                    <span className="block">PACK</span>
                </h2>
            </div>

            {/* Pixel Decoration Left */}
            <div className="absolute bottom-0 left-0 hidden md:grid grid-cols-4">
                {[
                    "#ff2200",
                    "#2200d8",
                    "#ffffff",
                    "transparent",

                    "#2200d8",
                    "#ff2200",
                    "#2200d8",
                    "#ffffff",

                    "#ffffff",
                    "#2200d8",
                    "#ffffff",
                    "#2200d8",

                    "transparent",
                    "#ffffff",
                    "#2200d8",
                    "#ff2200",
                ].map((color, index) => (
                    <div
                        key={index}
                        className="h-20 w-20 opacity-80"
                        style={{ backgroundColor: color }}
                    />
                ))}
            </div>

            {/* Pixel Decoration Right */}
            <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 md:grid grid-cols-3">
                {[
                    "#ffffff",
                    "#2200d8",
                    "transparent",

                    "#ff2200",
                    "#2200d8",
                    "#ffffff",

                    "transparent",
                    "#ff2200",
                    "#ffffff",

                    "#ffffff",
                    "#2200d8",
                    "#ff2200",
                ].map((color, index) => (
                    <div
                        key={index}
                        className="h-20 w-20 opacity-80"
                        style={{ backgroundColor: color }}
                    />
                ))}
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-5 py-24">
                {/* Heading */}
                <div className="text-center">
                    <p className="text-sm font-black tracking-[0.35em] text-red-300">
                        MERDEKA RUN 2026
                    </p>

                    <h2
                        style={{ fontFamily: "Bebas Neue" }}
                        className="mt-3 text-6xl text-white md:text-8xl"
                    >
                        RACE PACK
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-white/80">
                        Setiap peserta akan mendapatkan perlengkapan resmi untuk mendukung
                        pengalaman lari yang nyaman, seru, dan berkesan.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {packItems.map((item) => (
                        <div
                            key={item.title}
                            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-6 text-center backdrop-blur-md transition duration-300 hover:-translate-y-3 hover:bg-white/20 hover:shadow-[0_30px_80px_rgba(255,255,255,0.18)]"
                        >
                            {/* Glow */}
                            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-500/20 blur-2xl" />

                            <div className="relative z-10">
                                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white/90 text-4xl shadow-xl transition duration-300 group-hover:scale-110 group-hover:bg-red-600">
                                    <span className="transition duration-300 group-hover:scale-110">
                                        {item.icon}
                                    </span>
                                </div>

                                <h3 className="mt-6 text-2xl font-black text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-relaxed text-white/75">
                                    {item.desc}
                                </p>

                                <div className="mx-auto mt-6 h-2 w-12 rounded-full bg-red-500 transition-all duration-300 group-hover:w-24" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional */}
                <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/10 p-8 text-center text-white backdrop-blur-md">
                    <h3 className="text-3xl font-black">
                        RACE PACK ADDITIONAL
                    </h3>

                    <p className="mx-auto mt-4 max-w-3xl text-white/80">
                        Race Pack Additional berisi medali finisher tambahan,
                        BIB MMR 2026, dan kupon undian doorprize eksklusif.
                    </p>
                </div>

                {/* Bottom Text */}
                <div className="mt-12 text-center">
                    <p className="text-sm font-bold tracking-[0.25em] text-white/70">
                        MERDEKA RUN 2026 • DUMAI • 5K & 10K RUNNING FESTIVAL
                    </p>
                </div>
            </div>
        </section>
    );
}

export default RacePack;