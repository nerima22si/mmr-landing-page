import { useState } from "react";

function Terms() {
    const [openIndex, setOpenIndex] = useState(0);

    const generalTerms = [
        "Peserta minimal berusia 12 tahun kategori 5K dan 8K pada hari pelaksanaan acara.",
        "Peserta minimal berusia 6 tahun kategori Junior Warrior pada hari pelaksanaan acara.",
        "Peserta melakukan race murni dengan berlari tanpa bantuan roda atau alat pendukung lainnya.",
        "Peserta WNI wajib mengisi data sesuai tanda pengenal (KTP).",
        "Peserta WNA wajib menyertakan paspor dan mengisi data sesuai paspor.",
        "Pendaftaran dilakukan melalui link resmi yang disediakan panitia.",
        "Biaya pendaftaran tidak dapat dikembalikan (non-refundable).",
        "Nomor BIB tidak boleh dipindahtangankan kepada orang lain.",
        "Peserta tidak diperkenankan menggunakan doping atau obat-obatan terlarang.",
        "Peserta wajib berlari pada lintasan yang sudah disiapkan sesuai kategori.",
        "Peserta wajib menyelesaikan perlombaan sesuai cut off time yang ditentukan.",
    ];

    const organizerTerms = [
        "Panitia berhak mengubah rute perlombaan atas dasar keamanan, kenyamanan, dan keselamatan peserta.",
        "Panitia berhak mengevakuasi pelari yang masih berada di lintasan jika waktu cut off telah habis.",
        "Panitia berhak menutup gate jika waktu cut off telah habis.",
        "Panitia berhak menolak peserta Junior Warrior yang tidak didampingi pendamping resmi.",
        "Keputusan penyelenggara tentang pemenang bersifat mutlak dan tidak dapat diganggu gugat.",
    ];

    const agreementTerms = [
        "Dengan mengisi dan menandatangani form pendaftaran, peserta menyatakan kesiapan dan kesediaan diri mematuhi seluruh ketentuan-peraturan untuk mengikuti Merdeka Run 2026.",
        "Peserta tidak akan menuntut pertanggungjawaban atas cedera yang terjadi sebelum atau sesudah event berlangsung kepada pihak penyelenggara.",
        "Peserta tidak akan menuntut pertanggungjawaban atas kerugian akibat kelalaian pribadi atau dikarenakan tidak mematuhi peraturan dan ketentuan selama Merdeka Run 2026 berlangsung kepada pihak penyelenggara.",
        "Perhatian medis: peserta wajib melampirkan keterangan dokter dalam kondisi terkontrol tentang riwayat penyakit asma, hipertensi, dan jantung. Tim medis Merdeka Run 2026 berhak menghentikan peserta jika dianggap tidak mampu atau membahayakan diri sendiri.",
    ];

    const sections = [
        {
            title: "Syarat & Ketentuan Umum",
            label: "SYARAT UMUM",
            number: "01",
            items: generalTerms,
        },
        {
            title: "Ketentuan Penyelenggara",
            label: "PENYELENGGARA",
            number: "02",
            items: organizerTerms,
        },
        {
            title: "Syarat dan Ketentuan Peserta",
            label: "PERNYATAAN PESERTA",
            number: "03",
            items: agreementTerms,
        },
    ];

    return (
        <section
            id="terms"
            className="relative overflow-hidden bg-gradient-to-br from-[#ff1a00] via-[#ff2d16] to-[#ff6a5e] px-5 py-24 text-white"
        >
            <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_14px,rgba(255,255,255,0.25)_15px,transparent_30px)]" />
            <div className="absolute -left-24 bottom-24 h-72 w-72 rounded-full bg-[#2600d9]" />

            <div className="absolute right-0 top-0 hidden md:grid grid-cols-3 opacity-95">
                {[
                    "#2600d9",
                    "#ffffff",
                    "#2600d9",
                    "#ffffff",
                    "#2600d9",
                    "#ff1a00",
                    "transparent",
                    "#ffffff",
                    "#2600d9",
                ].map((color, i) => (
                    <div
                        key={i}
                        className="h-16 w-16"
                        style={{ backgroundColor: color }}
                    />
                ))}
            </div>

            <div className="relative z-10 mx-auto max-w-6xl">
                <div className="text-center">
                    <p className="text-xs font-bold tracking-[0.4em] text-white/80">
                        MERDEKA RUN 2026
                    </p>

                    <h2
                        style={{ fontFamily: "Bebas Neue" }}
                        className="mt-3 text-6xl tracking-wide text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.18)] md:text-8xl"
                    >
                        TERM & CONDITION
                    </h2>

                    <div className="mt-5 inline-flex rounded-full bg-[#2600d9] px-7 py-3">
                        <p className="text-sm font-extrabold tracking-wide md:text-base">
                            SYARAT & KETENTUAN PESERTA
                        </p>
                    </div>
                </div>

                <div className="mt-14 space-y-5">
                    {sections.map((section, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={section.title}
                                className="overflow-hidden rounded-[2rem] bg-white text-black shadow-[0_25px_70px_rgba(0,0,0,0.22)]"
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-7"
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl font-black italic text-white ${index === 1
                                                    ? "bg-[#2600d9]"
                                                    : "bg-gradient-to-br from-red-600 to-red-900"
                                                }`}
                                        >
                                            {section.number}
                                        </div>

                                        <div>
                                            <p className="text-xs font-bold tracking-[0.25em] text-red-600">
                                                {section.label}
                                            </p>
                                            <h3 className="mt-1 text-xl font-black italic text-black md:text-3xl">
                                                {section.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <div
                                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-2xl font-black text-white transition ${isOpen
                                                ? "rotate-45 bg-red-600"
                                                : "bg-[#2600d9]"
                                            }`}
                                    >
                                        +
                                    </div>
                                </button>

                                <div
                                    className={`grid transition-all duration-500 ${isOpen
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="border-t border-red-100 p-5 md:p-7">
                                            <div className="grid gap-4">
                                                {section.items.map((item, itemIndex) => (
                                                    <div
                                                        key={itemIndex}
                                                        className={`flex gap-4 rounded-2xl border p-4 text-sm leading-relaxed md:text-[15px] ${index === 2 && itemIndex === section.items.length - 1
                                                                ? "border-red-300 bg-red-100 text-red-700"
                                                                : "border-red-100 bg-red-50/70 text-gray-700"
                                                            }`}
                                                    >
                                                        <span
                                                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black text-white ${index === 1
                                                                    ? "bg-[#2600d9]"
                                                                    : "bg-red-600"
                                                                }`}
                                                        >
                                                            {itemIndex + 1}
                                                        </span>

                                                        <p
                                                            className={
                                                                index === 2 &&
                                                                    itemIndex === section.items.length - 1
                                                                    ? "font-extrabold"
                                                                    : "font-medium"
                                                            }
                                                        >
                                                            {item}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-white/20 bg-white/15 p-7 text-center backdrop-blur-md">
                    <h3 className="text-2xl font-black italic tracking-wide md:text-4xl">
                        BERANI MELANGKAH, MERDEKA MENJELAJAH
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-white/85 md:text-base">
                        Dengan melakukan pendaftaran, peserta dianggap telah membaca,
                        memahami, dan menyetujui seluruh syarat serta ketentuan Merdeka Run
                        2026.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Terms;