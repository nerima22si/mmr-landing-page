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
                {[
                    "#1d00ff",
                    "#ffffff",
                    "#ff2d20",
                    "transparent",
                    "#1d00ff",
                    "#ffffff",
                    "#ff2d20",
                    "transparent",
                    "#1d00ff",
                ].map((color, index) => (
                    <div
                        key={index}
                        className="h-16 w-16"
                        style={{ backgroundColor: color }}
                    />
                ))}
            </div>

            <div className="absolute left-0 bottom-20 hidden md:grid grid-cols-3 opacity-80">
                {[
                    "#ff2d20",
                    "#ffffff",
                    "#1d00ff",
                    "#ffffff",
                    "#1d00ff",
                    "#ffffff",
                    "#1d00ff",
                    "#ffffff",
                    "#ff2d20",
                ].map((color, index) => (
                    <div
                        key={index}
                        className="h-14 w-14"
                        style={{ backgroundColor: color }}
                    />
                ))}
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
                </div>

                <div className="mt-12 rounded-[2.2rem] border border-red-100 bg-white/95 p-5 shadow-[0_25px_90px_rgba(0,0,0,0.12)] backdrop-blur-xl md:p-10">
                    <div className="relative overflow-hidden rounded-[2rem] border border-red-100 bg-gradient-to-br from-red-50 via-white to-blue-50 p-6 md:p-10">
                        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-red-500/10 blur-3xl" />
                        <div className="absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-[#1d00ff]/10 blur-3xl" />

                        <p className="relative z-10 text-justify text-sm font-medium leading-8 text-gray-700 md:text-base md:leading-9">
                            Mens sana in corpore sano merupakan sebuah kalimat yang tidak
                            asing lagi di masyarakat, yang memiliki arti “di dalam tubuh yang
                            sehat, terdapat jiwa yang kuat”. Filosofi ini menjadi pedoman awal
                            dalam perumusan kegiatan Merdeka Run 2026. Merdeka Run merupakan
                            sebuah perhelatan olahraga yang menggabungkan konsep sportainment,
                            sehingga para pelari dapat merasakan pengalaman olahraga yang baru,
                            menarik, dan patut ditunggu. Kota Dumai yang kaya akan potensi
                            daerah layak menjadi destinasi perhelatan akbar bagi para pegiat
                            olahraga lari. Kota yang menyimpan berbagai cerita dan budaya unik
                            ini siap memberikan pengalaman yang seru, menarik, dan berkesan
                            bagi seluruh peserta. Hal inilah yang menjadi perhatian utama kami
                            dalam menciptakan sebuah program dengan tema “Run For Hope”, yang
                            berarti berlari untuk harapan. Melalui tema ini, setiap gerak
                            langkah peserta diharapkan menjadi momentum bersama untuk bergerak,
                            berdampak, dan berkelanjutan. Merdeka Run 2026 juga menjadi momen
                            untuk berbagi semangat dan kebahagiaan, serta menebar dan merawat
                            nilai-nilai kebaikan di bulan kemerdekaan. Dalam kegiatan ini,
                            peserta tidak hanya merasakan euforia olahraga, tetapi juga dapat
                            menyaksikan rangkaian padu-padan pegiat seni dan budaya lokal yang
                            dimulai sejak masa persiapan hingga nantinya tiba di garis finish.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;