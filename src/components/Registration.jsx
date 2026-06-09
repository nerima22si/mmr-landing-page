function Registration() {
  const ticketLink =
    "https://eztix.id/merdekarun2026?ref=5W5GC32P";

  const steps = [
    "Pilih kategori",
    "Isi data diri melalui link yang disediakan",
    "Pastikan data yang diisi benar dan aktif",
    "Lakukan pembayaran",
    "Konfirmasi registrasi otomatis dikirimkan ke alamat email yang Anda daftarkan",
  ];

  return (
    <section
      id="registration"
      className="relative overflow-hidden bg-[#f8f8f8] px-5 py-24"
    >
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-black italic tracking-[0.35em] text-red-600">
            REGISTRATION
          </p>

          <h2
            style={{ fontFamily: "Bebas Neue" }}
            className="mt-3 text-5xl leading-none text-black md:text-7xl"
          >
            PENDAFTARAN ONLINE
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-red-600" />

          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Pendaftaran dilakukan secara online melalui link resmi Merdeka Run
            2026. Pastikan data peserta sudah benar sebelum melakukan pembayaran.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-black via-[#1b0000] to-[#1d00c8] p-7 text-white shadow-[0_25px_80px_rgba(29,0,200,0.18)] md:p-10">
          <p className="text-xs font-black tracking-[0.35em] text-red-300">
            ONLINE REGISTRATION
          </p>

          <h3
            style={{ fontFamily: "Bebas Neue" }}
            className="mt-4 text-6xl leading-[0.9] md:text-7xl"
          >
            MERDEKA RUN
            <span className="block text-red-400">PENDAFTARAN ONLINE</span>
          </h3>

          <div className="mt-6 rounded-[1.5rem] border border-yellow-300/30 bg-yellow-400/10 p-4 text-sm font-medium leading-relaxed text-yellow-100">
            ⚠️ Untuk kategori Junior Warrior, silakan unduh dan isi surat
            pernyataan orang tua/wali terlebih dahulu.
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="/formulir-mmr.pdf"
              download
              className="rounded-2xl bg-white px-7 py-4 text-center text-sm font-black text-[#1d00c8] shadow-lg transition hover:scale-105 hover:bg-red-600 hover:text-white"
            >
              UNDUH FORMULIR
            </a>

            <a
              href={ticketLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-gradient-to-r from-red-600 to-red-800 px-7 py-4 text-center text-sm font-black italic text-white shadow-lg transition hover:scale-105"
            >
              REGISTER NOW
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step}
                className={`rounded-[1.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/10 ${index === steps.length - 1 ? "sm:col-span-2" : ""
                  }`}
              >
                <div
                  className={`mx-auto flex h-11 w-11 items-center justify-center rounded-xl text-base font-black text-white sm:mx-0 ${index % 2 === 0 ? "bg-red-600" : "bg-[#1d00ff]"
                    }`}
                >
                  {index + 1}
                </div>

                <h4 className="mt-4 text-center text-sm font-black italic leading-relaxed text-white sm:text-left">
                  {step}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration;