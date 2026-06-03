import logo from "../assets/logo-mmr.png";

function AboutUs() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-gradient-to-b from-[#2200d8] via-white to-white px-5 py-24 text-black"
        >
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#2200d8] to-transparent" />
            <div className="absolute right-0 top-0 h-40 w-32 bg-[#2200d8]" />
            <div className="absolute bottom-0 left-0 h-20 w-full bg-[repeating-linear-gradient(135deg,#ff1a1a_0px,#ff1a1a_28px,#ff3b2f_28px,#ff3b2f_56px)]" />

            <div className="relative z-10 mx-auto max-w-6xl pt-10">
                <div className="text-center">
                    <img
                        src={logo}
                        alt="MMR Logo"
                        className="mx-auto h-[85px] object-contain drop-shadow-xl"
                    />

                    <p className="mt-4 text-sm font-black italic tracking-[0.3em] text-red-600">
                        “RUN FOR HOPE, STEP FOR THE GENERATION”
                    </p>

                    <h2
                        style={{ fontFamily: "Bebas Neue" }}
                        className="mt-6 text-6xl tracking-wide text-red-600 md:text-8xl"
                    >
                        ABOUT US
                    </h2>
                </div>

                <div className="mt-10 rounded-[2rem] border border-red-100 bg-white p-7 shadow-[0_25px_80px_rgba(0,0,0,0.12)] md:p-12">
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="rounded-3xl bg-red-50 p-6">
                            <h3 className="text-2xl font-black italic text-red-600">
                                Filosofi
                            </h3>
                            <p className="mt-4 text-sm leading-7 text-gray-700">
                                Mens sana in corpore sano berarti di dalam tubuh yang sehat
                                terdapat jiwa yang kuat. Filosofi ini menjadi dasar Merdeka Run
                                2026.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-red-50 p-6">
                            <h3 className="text-2xl font-black italic text-red-600">
                                Tujuan
                            </h3>
                            <p className="mt-4 text-sm leading-7 text-gray-700">
                                Mengajak masyarakat hidup lebih sehat, aktif bergerak, dan
                                membangun semangat positif melalui olahraga lari.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-red-50 p-6">
                            <h3 className="text-2xl font-black italic text-red-600">
                                Tema
                            </h3>
                            <p className="mt-4 text-sm leading-7 text-gray-700">
                                “Run For Hope” menjadi simbol bahwa setiap langkah adalah
                                harapan untuk bergerak, berdampak, dan berkelanjutan.
                            </p>
                        </div>
                    </div>

                    <p className="mt-10 text-justify text-sm font-medium leading-8 text-gray-700 md:text-base md:leading-9">
                        Merdeka Run 2026 hadir sebagai perhelatan olahraga yang
                        menggabungkan semangat kemerdekaan, sportainment, budaya lokal, dan
                        gerakan hidup sehat. Event ini menjadi ruang bagi peserta untuk
                        menikmati pengalaman olahraga yang menyenangkan, membangun
                        kebersamaan, serta menciptakan momentum positif menuju gaya hidup
                        yang lebih sehat.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;