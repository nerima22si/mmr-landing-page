function Terms() {
    const generalTerms = [
        "Peserta minimal berusia 12 tahun kategori 5K dan 10K pada hari pelaksanaan acara.",
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

    const ListCard = ({ title, number, items }) => (
        <div className="relative overflow-hidden rounded-[2rem] bg-white p-6 text-black shadow-[0_25px_70px_rgba(0,0,0,0.22)] md:p-8">
            <div className="mb-7 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-900 text-2xl font-black italic text-white">
                    {number}
                </div>

                <div>
                    <p className="font-['Poppins'] text-xs font-bold tracking-[0.25em] text-red-600">
                        TERMS SECTION
                    </p>
                    <h3 className="mt-1 text-2xl font-black italic text-black md:text-3xl">
                        {title}
                    </h3>
                </div>
            </div>

            <ul className="space-y-4 font-['Poppins']">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="flex gap-4 rounded-2xl border border-red-100 bg-red-50/70 p-4 text-sm leading-relaxed text-gray-700 md:text-[15px]"
                    >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-black text-white">
                            {index + 1}
                        </span>

                        <p className="font-medium">{item}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

    const AgreementCard = () => (
        <div className="mt-10 rounded-[2rem] bg-white p-6 text-black shadow-[0_25px_70px_rgba(0,0,0,0.22)] md:p-9">
            <div className="mb-7 text-center">
                <span className="inline-block rounded-full bg-[#2600d9] px-6 py-3 font-['Poppins'] text-sm font-extrabold text-white">
                    SYARAT DAN KETENTUAN
                </span>
            </div>

            <div className="space-y-5 font-['Poppins'] text-sm leading-relaxed tracking-wide text-red-600 md:text-[15px] md:leading-8">
                {agreementTerms.map((item, index) => (
                    <p
                        key={index}
                        className={index === agreementTerms.length - 1 ? "font-extrabold" : "font-medium"}
                    >
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );

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

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="text-center">
                    <p className="font-['Poppins'] text-xs font-bold tracking-[0.4em] text-white/80">
                        MERDEKA RUN 2026
                    </p>

                    <h2 className="mt-3 text-5xl font-black italic tracking-tight text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.18)] md:text-7xl">
                        TERM & CONDITION
                    </h2>

                    <div className="mt-5 inline-flex rounded-full bg-[#2600d9] px-7 py-3">
                        <p className="font-['Poppins'] text-sm font-extrabold tracking-wide md:text-base">
                            SYARAT & KETENTUAN PESERTA
                        </p>
                    </div>
                </div>

                <div className="mt-16 grid gap-8 lg:grid-cols-2">
                    <ListCard
                        title="Syarat & Ketentuan Umum"
                        number="01"
                        items={generalTerms}
                    />

                    <ListCard
                        title="Ketentuan Penyelenggara"
                        number="02"
                        items={organizerTerms}
                    />
                </div>

                <AgreementCard />

                <div className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-white/20 bg-white/15 p-7 text-center backdrop-blur-md">
                    <h3 className="text-2xl font-black italic tracking-wide md:text-4xl">
                        BERANI MELANGKAH, MERDEKA MENJELAJAH
                    </h3>

                    <p className="mt-4 font-['Poppins'] text-sm leading-relaxed text-white/85 md:text-base">
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