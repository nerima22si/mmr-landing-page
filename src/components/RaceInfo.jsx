function RaceInfo() {
    const raceData = [
        {
            title: "JUNIOR WARRIOR",
            desc: "Kategori spesial anak usia 6–11 tahun dengan konsep joyful race, fun activity, dan pengalaman lari yang aman serta menyenangkan.",
            price: "Rp110.000",
            color: "from-pink-500 to-pink-400",
        },
        {
            title: "5K FUN RUN",
            desc: "Cocok untuk pemula, komunitas, keluarga, dan peserta yang ingin menikmati suasana Merdeka Run dengan penuh semangat.",
            price: "Rp150.000",
            color: "from-red-500 to-red-700",
        },
        {
            title: "8K CHALLENGE",
            desc: "Untuk peserta yang ingin tantangan lebih jauh dengan rute yang lebih kompetitif, energik, dan memacu adrenalin.",
            price: "Rp250.000",
            color: "from-[#1d00ff] to-[#4230ff]",
        },
    ];
    const categories = ["JUNIOR WARRIOR", "5K", "8K"];
    const deksripsi = ["", "Fun Run", "Challenge"];


    return (
        <section
            id="race-info"
            className="relative overflow-hidden bg-white px-5 py-20 text-black md:py-24"
        >
            <div className="absolute right-0 top-0 hidden h-40 w-40 bg-red-600 md:block" />
            <div className="absolute left-0 bottom-0 hidden h-32 w-32 bg-[#1d00c8] md:block" />

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <p className="text-xs font-black italic tracking-[0.35em] text-red-600 md:text-sm">
                        RACE INFORMATION
                    </p>

                    <h2
                        style={{ fontFamily: "Bebas Neue" }}
                        className="mt-4 text-5xl leading-none text-black md:text-7xl"
                    >
                        PILIH KATEGORI LARIMU
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
                        Merdeka Run 2026 menghadirkan kategori lari untuk semua kalangan,
                        mulai dari anak-anak hingga peserta yang ingin tantangan lebih serius.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {raceData.map((item) => (
                        <div
                            key={item.title}
                            className="group relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(255,0,0,0.18)]"
                        >
                            <div className={`h-3 w-full bg-gradient-to-r ${item.color}`} />

                            <div className="p-6 md:p-8">
                                <h3
                                    style={{ fontFamily: "Bebas Neue" }}
                                    className="text-5xl leading-none text-red-600 md:text-6xl"
                                >
                                    {item.title}
                                </h3>

                                <p className="mt-5 text-sm leading-relaxed text-gray-600 md:text-base">
                                    {item.desc}
                                </p>

                                <div className="mt-8 flex items-center justify-between gap-4">
                                    <p className="text-2xl font-black italic text-black md:text-3xl">
                                        {item.price}
                                    </p>

                                    <a
                                        href="#registration"
                                        className="rounded-2xl bg-gradient-to-r from-red-600 to-red-800 px-5 py-3 text-xs font-black italic text-white shadow-lg transition hover:scale-105 hover:from-black hover:to-black md:px-6 md:text-sm"
                                    >
                                        DAFTAR
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="relative mt-14 overflow-hidden rounded-[2rem] bg-gradient-to-r from-black via-[#280000] to-red-700 p-6 text-white shadow-[0_20px_80px_rgba(0,0,0,0.25)] md:p-10">
                    <h3
                        style={{ fontFamily: "Bebas Neue" }}
                        className="text-5xl md:text-6xl"
                    >
                        RACE DAY
                    </h3>

                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                        <div className="rounded-3xl bg-white/5 p-5">
                            <p className="text-xs font-bold tracking-widest text-red-300">
                                TANGGAL
                            </p>
                            <h4 className="mt-2 text-xl font-black ">
                                30 Agustus 2026
                            </h4>
                        </div>

                        <div className="rounded-3xl bg-white/5 p-5">
                            <p className="text-xs font-bold tracking-widest text-red-300">
                                LOKASI
                            </p>
                            <h4 className="mt-2 text-xl font-black ">Dumai, Riau</h4>
                        </div>

                        <div className="rounded-3xl bg-white/5 p-5">
                            <p className="text-xs font-bold tracking-widest text-red-300">
                                KATEGORI
                            </p>
                            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                                {categories.map((item, index) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <span className="text-sm font-black  sm:text-base md:text-lg">
                                            {item}  {deksripsi[index]}
                                        </span>

                                        {index !== categories.length - 1 && (
                                            <div className="h-5 w-[2px] bg-red-400/60" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RaceInfo;