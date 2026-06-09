import bgJunior from "../assets/junior-warrior-bg.png";
import logoJunior from "../assets/logo-junior.png";

function JuniorWarrior() {
    const benefits = [
        "E-Certificate",
        "Medali Finisher",
        "Safety Education",
        "Joyful Race Track",
        "Memorable Experience",
        "Puluhan Hadiah",
    ];

    return (
        <section
            id="junior-warrior"
            className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-pink-100 px-5 py-20 md:py-24"
        >
            {/* BACKGROUND */}
            <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-pink-300/40 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-sky-300/40 blur-3xl" />

            <div className="absolute left-10 top-20 hidden h-28 w-28 rounded-full bg-pink-200/60 md:block" />
            <div className="absolute right-16 top-32 hidden h-20 w-20 rounded-full bg-sky-200/70 md:block" />

            {/* PIXEL */}
            <div className="absolute right-0 top-10 hidden md:grid grid-cols-3 opacity-90">
                {[
                    "#ff5ab8",
                    "#ffffff",
                    "#3b82f6",

                    "#ffffff",
                    "#ff5ab8",
                    "#ffffff",

                    "#3b82f6",
                    "#ffffff",
                    "#ff5ab8",
                ].map((color, index) => (
                    <div
                        key={index}
                        className="h-12 w-12"
                        style={{ backgroundColor: color }}
                    />
                ))}
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* HEADER */}
                <div className="mb-16 text-center">
                    <p className="text-lg font-black tracking-[0.25em] text-pink-500 sm:text-2xl md:text-3xl">
                        SPECIAL KIDS CATEGORY
                    </p>

                    {/* LOGO BESAR */}
                    <div className="relative mt-6">
                        <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400/20 blur-3xl md:h-72 md:w-72" />

                        <img
                            src={logoJunior}
                            alt="Junior Warrior Logo"
                            className="relative z-10 mx-auto h-[260px] object-contain drop-shadow-[0_20px_40px_rgba(255,0,120,0.25)] sm:h-[320px] md:h-[420px] lg:h-[480px]"
                        />
                    </div>

                    <p className="mx-auto mt-2 max-w-3xl text-sm font-semibold leading-relaxed text-gray-600 sm:text-base md:text-lg">
                        Lomba lari 100–300 meter dengan konsep tematik yang
                        didukung fasilitas aman, ceria, edukatif, dan penuh
                        pengalaman menyenangkan untuk anak-anak.
                    </p>
                </div>

                {/* CONTENT */}
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* LEFT */}
                    <div className="text-center lg:text-left">
                        <div className="mx-auto inline-block rotate-[-4deg] rounded-3xl bg-gradient-to-r from-sky-400 to-sky-500 px-7 py-5 shadow-[0_20px_50px_rgba(59,130,246,0.25)] lg:mx-0">
                            <p className="text-xl font-black tracking-wide text-white md:text-2xl">
                                SPECIAL 300
                            </p>

                            <p className="text-xl font-black tracking-wide text-white md:text-2xl">
                                JOYFUL RACE
                            </p>
                        </div>

                        <h2
                            style={{ fontFamily: "Bebas Neue" }}
                            className="mt-8 text-6xl leading-none text-pink-500 sm:text-7xl md:text-8xl"
                        >
                            FUN, SAFE,
                            <span className="block text-red-500">
                                AND JOYFUL
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-gray-600 sm:text-base lg:mx-0">
                            <b>JUNIOR WARRIOR</b> lebih dari sekadar lomba lari,
                            karena di sini langkah si kecil dimulai untuk lebih
                            berani bergerak. Bertumbuh di ruang yang sehat akan
                            melatih anak menjadi lebih aktif, percaya diri,
                            berkembang, dan lebih kuat.
                        </p>

                        {/* BENEFITS */}
                        <div className="mt-10 grid gap-4 sm:grid-cols-2">
                            {benefits.map((item) => (
                                <div
                                    key={item}
                                    className="group flex items-center justify-center rounded-[1.5rem] border border-pink-100 bg-white px-5 py-4 text-center font-bold text-pink-500 shadow-[0_15px_40px_rgba(255,0,120,0.12)] transition duration-300 hover:-translate-y-1 hover:bg-pink-50"
                                >
                                    <span className="transition duration-300 group-hover:scale-105">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative">
                        <div className="overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-[0_30px_80px_rgba(255,0,120,0.18)]">
                            <img
                                src={bgJunior}
                                alt="Junior Warrior"
                                className="h-[320px] w-full rounded-[2rem] object-cover object-center sm:h-[420px] md:h-[520px]"
                            />
                        </div>

                        {/* FLOATING CARD */}
                        <div className="absolute -bottom-6 left-1/2 w-[88%] -translate-x-1/2 rounded-[1.8rem] bg-gradient-to-r from-pink-500 to-red-500 px-6 py-5 text-center text-white shadow-[0_20px_60px_rgba(255,0,120,0.35)]">
                            <p className="text-xs font-black tracking-[0.3em] sm:text-sm">
                                NO CUT OFF TIME
                            </p>

                            <h3 className="mt-2 text-2xl font-black sm:text-3xl">
                                JUST QUALITY TIME
                            </h3>
                        </div>
                    </div>
                </div>

                {/* BOTTOM STRIPE */}
                <div className="relative z-10 mx-auto mt-24 h-10 max-w-7xl rounded-full bg-[repeating-linear-gradient(135deg,#ff55b8_0px,#ff55b8_35px,#ffc4e3_35px,#ffc4e3_70px)] shadow-[0_15px_40px_rgba(255,85,184,0.25)]" />
            </div>
        </section>
    );
}

export default JuniorWarrior;