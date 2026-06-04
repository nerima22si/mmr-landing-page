import logo from "../assets/logo-mmr.png";

function AboutUs() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-white px-5 pb-24 pt-10 text-black"
        >
            {/* TRANSITION HERO → ABOUT */}
            <div className="absolute left-0 top-0 h-56 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#7a0000] via-[#c40000]/80 to-white" />
                <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_14px,rgba(255,255,255,0.25)_15px,transparent_30px)]" />
                <div className="absolute bottom-0 left-0 h-[3px] w-full bg-red-500 shadow-[0_0_30px_rgba(255,0,0,0.9)]" />
            </div>

            {/* RACE BLOCKS */}
            <div className="absolute right-0 top-32 hidden md:grid grid-cols-3 opacity-90">
                {["#1d00ff", "#ffffff", "#ff2d20", "transparent", "#1d00ff", "#ffffff", "#ff2d20", "transparent", "#1d00ff"].map(
                    (color, index) => (
                        <div
                            key={index}
                            className="h-16 w-16"
                            style={{ backgroundColor: color }}
                        />
                    )
                )}
            </div>

            <div className="absolute left-0 bottom-20 hidden md:grid grid-cols-3 opacity-80">
                {["#ff2d20", "#ffffff", "#1d00ff", "#ffffff", "#1d00ff", "#ffffff", "#1d00ff", "#ffffff", "#ff2d20"].map(
                    (color, index) => (
                        <div
                            key={index}
                            className="h-14 w-14"
                            style={{ backgroundColor: color }}
                        />
                    )
                )}
            </div>

            <div className="relative z-10 mx-auto max-w-6xl pt-52">
                <div className="text-center">
                    <div className="mx-auto inline-flex rounded-2xl bg-gradient-to-r from-black via-[#320000] to-red-700 px-8 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
                        <img
                            src={logo}
                            alt="MMR Logo"
                            className="h-[80px] object-contain md:h-[95px]"
                        />
                    </div>

                    <p className="mt-6 text-xs font-black italic tracking-[0.3em] text-red-500 md:text-sm">
                        “RUN FOR HOPE, STEP FOR THE GENERATION”
                    </p>

                    <h2
                        style={{ fontFamily: "Bebas Neue" }}
                        className="mt-5 text-6xl tracking-wide text-red-600 md:text-8xl"
                    >
                        ABOUT US
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
                        Merdeka Run 2026 hadir sebagai ruang gerak, semangat, dan harapan
                        untuk generasi yang lebih sehat.
                    </p>
                </div>

                <div className="mt-12 rounded-[2.2rem] border border-red-100 bg-white/95 p-6 shadow-[0_25px_90px_rgba(0,0,0,0.12)] backdrop-blur-xl md:p-10">
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            {
                                title: "Filosofi",
                                text: "Mens sana in corpore sano berarti di dalam tubuh yang sehat terdapat jiwa yang kuat.",
                                color: "from-red-500 to-red-700",
                            },
                            {
                                title: "Tujuan",
                                text: "Mengajak masyarakat hidup lebih sehat dan aktif bergerak melalui olahraga lari.",
                                color: "from-[#1d00ff] to-[#4230ff]",
                            },
                            {
                                title: "Tema",
                                text: "Run For Hope menjadi simbol harapan untuk bergerak dan berdampak.",
                                color: "from-red-500 to-[#1d00ff]",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="overflow-hidden rounded-[2rem] border border-red-100 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(255,0,0,0.12)]"
                            >
                                <div className={`h-3 bg-gradient-to-r ${item.color}`} />

                                <div className="p-6">
                                    <h3 className="text-3xl font-black italic text-red-600">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-gray-700">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-red-100 bg-gradient-to-br from-red-50 via-white to-blue-50 p-7 md:p-10">
                        <p className="relative z-10 text-justify text-sm font-medium leading-8 text-gray-700 md:text-base md:leading-9">
                            Merdeka Run 2026 hadir sebagai perhelatan olahraga yang
                            menggabungkan semangat kemerdekaan, sportainment, budaya lokal,
                            dan gerakan hidup sehat. Event ini menjadi ruang bagi peserta
                            untuk menikmati pengalaman olahraga yang menyenangkan, membangun
                            kebersamaan, serta menciptakan momentum positif menuju gaya hidup
                            yang lebih sehat.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;