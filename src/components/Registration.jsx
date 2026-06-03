function Registration() {
    const benefits = [
        "Race Jersey Exclusive",
        "Finisher Medal",
        "E-Certificate",
        "BIB Number",
        "Refreshment",
        "Lucky Draw",
    ];

    return (
        <section
            id="registration"
            className="relative overflow-hidden bg-[#f8f8f8] px-5 py-24"
        >
            {/* Decoration */}
            <div className="absolute left-0 top-0 h-32 w-32 bg-red-600" />
            <div className="absolute bottom-0 right-0 h-40 w-40 bg-[#1d00c8]" />

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Heading */}
                <div className="text-center">
                    <p className="text-sm font-black italic tracking-[0.35em] text-red-600">
                        REGISTRATION
                    </p>

                    <h2 className="mt-3 text-4xl font-black italic text-black md:text-6xl">
                        RACE PACK & BENEFITS
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-gray-600">
                        Dapatkan pengalaman lari terbaik dengan race pack eksklusif dan
                        berbagai benefit menarik untuk seluruh peserta Merdeka Run 2026.
                    </p>
                </div>

                {/* Content */}
                <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
                    {/* Left */}
                    <div className="rounded-[2rem] bg-gradient-to-br from-black via-[#2c0000] to-red-700 p-8 text-white shadow-[0_20px_60px_rgba(255,0,0,0.2)]">
                        <p className="text-sm font-black italic tracking-[0.3em] text-red-300">
                            OFFICIAL RACE PACK
                        </p>

                        <h3 className="mt-4 text-5xl font-black italic leading-none">
                            MERDEKA
                            <span className="block text-red-400">RUN 2026</span>
                        </h3>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            {benefits.map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
                                >
                                    <p className="text-sm font-bold tracking-wide text-white">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <div className="rounded-2xl bg-white/10 px-6 py-5">
                                <p className="text-xs tracking-widest text-red-300">
                                    5K CATEGORY
                                </p>

                                <h4 className="mt-2 text-3xl font-black italic">
                                    Rp150K
                                </h4>
                            </div>

                            <div className="rounded-2xl bg-white/10 px-6 py-5">
                                <p className="text-xs tracking-widest text-red-300">
                                    10K CATEGORY
                                </p>

                                <h4 className="mt-2 text-3xl font-black italic">
                                    Rp250K
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="grid gap-6">
                        <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                            <h3 className="text-3xl font-black italic text-black">
                                PENDAFTARAN ONLINE
                            </h3>

                            <p className="mt-4 leading-relaxed text-gray-600">
                                Pendaftaran dilakukan secara online melalui website resmi
                                Merdeka Run 2026. Pastikan data yang diinput sudah benar sebelum
                                melakukan pembayaran.
                            </p>

                            <div className="mt-8 space-y-4">
                                <div className="rounded-xl bg-red-50 p-4">
                                    <p className="text-sm font-bold text-red-700">
                                        STEP 1
                                    </p>

                                    <h4 className="mt-1 font-black italic text-black">
                                        Isi Formulir Pendaftaran
                                    </h4>
                                </div>

                                <div className="rounded-xl bg-red-50 p-4">
                                    <p className="text-sm font-bold text-red-700">
                                        STEP 2
                                    </p>

                                    <h4 className="mt-1 font-black italic text-black">
                                        Lakukan Pembayaran
                                    </h4>
                                </div>

                                <div className="rounded-xl bg-red-50 p-4">
                                    <p className="text-sm font-bold text-red-700">
                                        STEP 3
                                    </p>

                                    <h4 className="mt-1 font-black italic text-black">
                                        Dapatkan E-Ticket
                                    </h4>
                                </div>
                            </div>

                            <a
                                href="#contact"
                                className="mt-8 inline-block rounded-2xl bg-red-600 px-8 py-4 font-black italic text-white transition hover:bg-black"
                            >
                                REGISTER NOW
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Registration;