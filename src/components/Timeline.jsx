function Timeline() {
    const timelineData = [
        {
            date: "01 JUNI 2026",
            title: "OPEN REGISTRATION",
            desc: "Pendaftaran peserta resmi dibuka melalui link yang disediakan panitia.",
        },
        {
            date: "28-29 AGUSTUS 2026",
            title: "PENGAMBILAN RACE PACK",
            desc: "Peserta mengambil race pack sesuai jadwal yang telah ditentukan.",
        },
        {
            date: "30 AGUSTUS 2026",
            title: "RACE DAY",
            desc: "Hari pelaksanaan Merdeka Run 2026.",
        },
    ];

    return (
        <section
            id="timeline"
            className="relative overflow-hidden bg-white"
        >
            <div className="relative overflow-hidden bg-gradient-to-br from-[#1800b8] via-[#2200d8] to-[#12006d] px-5 py-24 text-white">
                <div className="absolute inset-0 opacity-20 bg-[url('/timeline-bg.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-blue-900/60" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="select-none text-[110px] font-black italic text-white/10 md:text-[190px] lg:text-[260px]">
                        TIMELINE
                    </h2>
                </div>

                <div className="absolute left-0 bottom-0 hidden md:grid grid-cols-4">
                    {[
                        "#ff1e00",
                        "#2200d8",
                        "#ffffff",
                        "transparent",
                        "#2200d8",
                        "#ff1e00",
                        "#2200d8",
                        "#ffffff",
                        "#ff1e00",
                        "#ffffff",
                        "#2200d8",
                        "transparent",
                        "#ffffff",
                        "#2200d8",
                        "#ffffff",
                        "#2200d8",
                    ].map((color, index) => (
                        <div
                            key={index}
                            className="h-20 w-20"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>

                <div className="relative z-10 mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <p className="text-sm font-black tracking-[0.35em] text-red-300">
                            MERDEKA RUN 2026
                        </p>

                        <h2
                            style={{ fontFamily: "Bebas Neue" }}
                            className="mt-3 text-6xl tracking-wide md:text-8xl"
                        >
                            EVENT TIMELINE
                        </h2>
                    </div>

                    <div className="relative hidden lg:block">
                        <div className="absolute left-[12%] right-[12%] top-[115px] h-[4px] bg-white/70" />

                        <div className="grid grid-cols-3 gap-8">
                            {timelineData.map((item, index) => (
                                <div
                                    key={item.title}
                                    className={`relative text-center ${index === 1 ? "pt-24" : ""
                                        }`}
                                >
                                    <div className="mx-auto inline-block rounded-md bg-red-600 px-6 py-3 text-2xl font-black tracking-wide shadow-[0_10px_30px_rgba(255,0,0,0.35)]">
                                        {item.date}
                                    </div>

                                    <div className="relative mx-auto mt-10 flex h-12 w-12 items-center justify-center rounded-full border-[6px] border-white bg-[#2200d8] shadow-[0_0_25px_rgba(255,255,255,0.35)]">
                                        <div className="h-4 w-4 rounded-full bg-white" />
                                    </div>

                                    <h3 className="mt-8 text-2xl font-black tracking-wide">
                                        {item.title}
                                    </h3>

                                    <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-white/80">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-6 lg:hidden">
                        {timelineData.map((item, index) => (
                            <div
                                key={item.title}
                                className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-md"
                            >
                                <div className="mb-4 inline-block rounded-md bg-red-600 px-5 py-3 text-lg font-black">
                                    {item.date}
                                </div>

                                <h3 className="text-2xl font-black">{item.title}</h3>

                                <p className="mt-3 text-sm leading-relaxed text-white/80">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative px-5 py-12 text-center">
                <p className="mx-auto max-w-4xl text-sm font-semibold leading-relaxed tracking-wide text-red-500 md:text-lg">
                    PENDAFTARAN HANYA MELALUI LINK RESMI YANG DISEDIAKAN | TIDAK
                    MELAYANI PENGAMBILAN RACE PACK DI LUAR JADWAL | PENGAMBILAN RACE
                    PACK TIDAK DAPAT DIWAKILKAN TANPA SURAT KUASA | RACE DAY MENGIKUTI
                    KETETAPAN PELAKSANA
                </p>
            </div>
        </section>
    );
}

export default Timeline;