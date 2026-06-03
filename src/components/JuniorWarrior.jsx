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
            className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-pink-100 px-5 py-24"
        >
            <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-pink-300/40 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-sky-300/40 blur-3xl" />
            <div className="absolute left-10 top-20 hidden h-28 w-28 rounded-full bg-pink-200/60 md:block" />
            <div className="absolute right-16 top-32 hidden h-20 w-20 rounded-full bg-sky-200/70 md:block" />

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="mb-14 text-center">
                    <p className="text-sm font-extrabold tracking-[0.35em] text-pink-500">
                        SPECIAL KIDS CATEGORY
                    </p>

                    <img
                        src={logoJunior}
                        alt="Junior Warrior Logo"
                        className="mx-auto mt-5 h-[150px] object-contain drop-shadow-xl sm:h-[190px] md:h-[230px]"
                    />

                    <p className="mx-auto mt-5 max-w-2xl text-base font-semibold leading-relaxed text-gray-600">
                        Lomba lari tematik untuk anak usia 5–11 tahun dengan konsep aman,
                        ceria, edukatif, dan penuh pengalaman menyenangkan.
                    </p>
                </div>

                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div className="text-center lg:text-left">
                        <div className="mx-auto inline-block rotate-[-5deg] rounded-2xl bg-sky-300 px-6 py-4 shadow-lg lg:mx-0">
                            <p className="text-xl font-bold text-white">SPECIAL 300</p>
                            <p className="text-xl font-bold text-white">JOYFUL RACE</p>
                        </div>

                        <h2
                            style={{ fontFamily: "Bebas Neue" }}
                            className="mt-8 text-6xl leading-none text-pink-500 md:text-8xl"
                        >
                            FUN, SAFE,
                            <span className="block text-red-500">AND JOYFUL</span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-gray-600 lg:mx-0">
                            Junior Warrior bukan hanya lomba lari, tetapi juga ruang bermain
                            sehat untuk anak-anak agar berani bergerak, percaya diri, dan
                            menikmati quality time bersama keluarga.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {benefits.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center justify-center rounded-2xl bg-white p-4 text-center font-bold text-pink-500 shadow-[0_15px_40px_rgba(255,0,120,0.15)] transition hover:-translate-y-1 hover:bg-pink-50"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_30px_80px_rgba(255,0,120,0.18)]">
                            <img
                                src={bgJunior}
                                alt="Junior Warrior"
                                className="h-[360px] w-full rounded-[1.5rem] object-cover object-center sm:h-[420px] md:h-[480px]"
                            />
                        </div>

                        <div className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-pink-500 px-6 py-4 text-center text-white shadow-xl">
                            <p className="text-sm font-bold tracking-[0.2em]">
                                NO CUT OFF TIME
                            </p>
                            <h3 className="text-2xl font-black">JUST QUALITY TIME</h3>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 mx-auto mt-24 h-12 max-w-7xl rounded-full bg-[repeating-linear-gradient(135deg,#ff55b8_0px,#ff55b8_35px,#ffc4e3_35px_70px)]" />
            </div>
        </section>
    );
}

export default JuniorWarrior;