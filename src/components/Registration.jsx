import runner from "../assets/runner.png";

function Registration() {
  const prices = [
    { label: "JUNIOR", name: "WARRIOR", price: "Rp110K" },
    { label: "5K", name: "FUN RUN", price: "Rp150K" },
    { label: "8K", name: "CHALLENGE", price: "Rp250K" },
  ];

  const steps = [
    "Unduh dan Baca Formulir",
    "Isi Formulir Pendaftaran",
    "Lakukan Pembayaran",
    "Dapatkan E-Ticket",
  ];

  return (
    <section
      id="registration"
      className="relative overflow-hidden bg-[#f8f8f8] px-5 py-24"
    >
      <div className="absolute left-0 top-0 hidden h-32 w-32 bg-red-600 md:block" />
      <div className="absolute bottom-0 right-0 hidden h-40 w-40 bg-[#1d00c8] md:block" />

      <div className="relative z-10 mx-auto max-w-7xl">
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
            2026. Pastikan data peserta sudah benar sebelum melakukan
            pembayaran.
          </p>
        </div>

        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-2">
          {/* LEFT CARD */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-black via-[#2c0000] to-red-700 p-7 text-white shadow-[0_25px_80px_rgba(255,0,0,0.18)] md:p-8">
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-red-500/20 blur-3xl" />

            <div className="absolute right-5 top-8 hidden opacity-20 lg:block">
              <img src={runner} alt="runner" className="h-52 object-contain" />
            </div>

            <div className="relative z-10 text-center lg:text-left">
              <p className="text-xs font-black tracking-[0.35em] text-red-300">
                CATEGORY PRICE
              </p>

              <h3
                style={{ fontFamily: "Bebas Neue" }}
                className="mt-4 text-6xl leading-[0.9] md:text-7xl"
              >
                MERDEKA
                <span className="block text-red-400">RUN 2026</span>
              </h3>

              <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {prices.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-[1.8rem] border border-white/10 bg-white/5 p-5 text-center backdrop-blur-md transition hover:-translate-y-2 hover:bg-white/10"
                  >
                    <p className="text-xs font-bold tracking-[0.25em] text-red-300">
                      {item.label}
                    </p>
                    <h4 className="mt-3 text-xl font-black italic leading-tight md:text-2xl">
                      {item.name}
                    </h4>
                    <p className="mt-4 text-3xl font-black italic text-white md:text-4xl">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.8rem] border border-red-400/20 bg-white/5 p-5 backdrop-blur-md">
                <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-600/20">
                    <span className="text-3xl">🛡️</span>
                  </div>

                  <p className="text-sm leading-relaxed text-white/85">
                    Peserta wajib mengikuti ketentuan pendaftaran dan mengisi
                    data sesuai identitas yang berlaku.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-black via-[#1b0000] to-[#1d00c8] p-7 text-white shadow-[0_25px_80px_rgba(29,0,200,0.18)] md:p-8">
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#1d00ff]/25 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-red-600/20 blur-3xl" />

            <div className="relative z-10 text-center lg:text-left">
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

              <p className="mt-5 text-sm leading-relaxed text-white/80">
                Ikuti langkah berikut agar proses pendaftaran peserta berjalan
                dengan benar.
              </p>

              <div className="mt-6 rounded-[1.5rem] border border-yellow-300/30 bg-yellow-400/10 p-4 text-sm font-medium leading-relaxed text-yellow-100">
                ⚠️ Sebelum mendaftar, silakan unduh dan baca formulir
                pendaftaran terlebih dahulu.
              </div>

              <a
                href="/formulir-mmr.pdf"
                download
                className="mt-5 inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 text-sm font-black text-[#1d00c8] shadow-[0_10px_30px_rgba(255,255,255,0.25)] transition hover:scale-105 hover:bg-red-600 hover:text-white"
              >
                UNDUH FORMULIR
              </a>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {steps.map((step, index) => (
                  <div
                    key={step}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/10"
                  >
                    <div
                      className={`mx-auto flex h-11 w-11 items-center justify-center rounded-xl text-base font-black text-white lg:mx-0 ${
                        index % 2 === 0 ? "bg-red-600" : "bg-[#1d00ff]"
                      }`}
                    >
                      {index + 1}
                    </div>

                    <h4 className="mt-4 text-sm font-black italic text-white">
                      {step}
                    </h4>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-8 inline-block rounded-2xl bg-gradient-to-r from-red-600 to-red-800 px-8 py-4 font-black italic text-white shadow-[0_10px_30px_rgba(255,0,0,0.25)] transition hover:scale-105"
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