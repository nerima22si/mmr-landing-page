function RaceInfo() {
    const raceData = [
        {
            title: "5K FUN RUN",
            desc: "Cocok untuk pemula, komunitas, keluarga, dan peserta yang ingin menikmati suasana Merdeka Run.",
            price: "Rp150.000",
        },
        {
            title: "10K CHALLENGE",
            desc: "Untuk peserta yang ingin tantangan lebih jauh dengan rute yang lebih kompetitif dan energik.",
            price: "Rp250.000",
        },
    ];

    return (
        <section
            id="race-info"
            className="relative overflow-hidden bg-white px-5 py-24 text-black"
        >
            <div className="absolute right-0 top-0 h-40 w-40 bg-red-600" />
            <div className="absolute left-0 bottom-0 h-32 w-32 bg-[#1d00c8]" />

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="mb-14 text-center">
                    <p className="text-sm font-black italic tracking-[0.35em] text-red-600">
                        RACE INFORMATION
                    </p>

                    <h2 className="mt-3 text-4xl font-black italic md:text-6xl">
                        PILIH KATEGORI LARIMU
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-gray-600">
                        Merdeka Run 2026 menghadirkan kategori lari yang dapat diikuti oleh
                        berbagai kalangan, mulai dari pemula hingga peserta yang ingin
                        tantangan lebih serius.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {raceData.map((item) => (
                        <div
                            key={item.title}
                            className="group rounded-[2rem] border border-gray-200 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(255,0,0,0.18)]"
                        >
                            <h3 className="text-4xl font-black italic text-red-600">
                                {item.title}
                            </h3>

                            <p className="mt-5 leading-relaxed text-gray-600">
                                {item.desc}
                            </p>

                            <div className="mt-8 flex items-center justify-between gap-4">
                                <p className="text-2xl font-black italic text-black">
                                    {item.price}
                                </p>

                                <a
                                    href="#registration"
                                    className="rounded-xl bg-red-600 px-6 py-3 text-sm font-black italic text-white transition group-hover:bg-black"
                                >
                                    DAFTAR
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 rounded-[2rem] bg-gradient-to-r from-black via-[#3b0000] to-red-700 p-8 text-white">
                    <h3 className="text-3xl font-black italic">
                        RACE DAY INFORMATION
                    </h3>

                    <div className="mt-6 grid gap-5 md:grid-cols-3">
                        <div>
                            <p className="text-sm text-red-300">Tanggal</p>
                            <h4 className="mt-1 text-xl font-black">30 Agustus 2026</h4>
                        </div>

                        <div>
                            <p className="text-sm text-red-300">Lokasi</p>
                            <h4 className="mt-1 text-xl font-black">Dumai, Riau</h4>
                        </div>

                        <div>
                            <p className="text-sm text-red-300">Kategori</p>
                            <h4 className="mt-1 text-xl font-black">5K & 10K</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RaceInfo;