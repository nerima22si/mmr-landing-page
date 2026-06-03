import logo from "../assets/logo-mmr.png";

function Footer() {
    return (
        <footer
            id="contact"
            className="relative overflow-hidden bg-gradient-to-r from-black via-[#2b0000] to-red-700 px-5 py-14 text-white"
        >
            <div className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_14px,rgba(255,255,255,0.18)_15px,transparent_28px)]" />

            <div className="relative z-10 mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
                <div>
                    <img src={logo} alt="MMR Logo" className="h-[90px] object-contain" />
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
                        Merdeka Run 2026 — Run for hope, step for the generation.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-black italic">Quick Links</h3>
                    <div className="mt-4 grid gap-2 text-sm text-white/75">
                        <a href="#home">Home</a>
                        <a href="#race-info">Race Info</a>
                        <a href="#timeline">Timeline</a>
                        <a href="#registration">Registration</a>
                        <a href="#terms">T & C</a>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-black italic">Contact Us</h3>
                    <div className="mt-4 space-y-2 text-sm text-white/75">
                        <p>Dumai, Riau</p>
                        <p>Instagram: @merdekarun</p>
                        <p>Email: info@merdekarun.id</p>
                        <p>Phone: 0812-3456-7890</p>
                    </div>
                </div>
            </div>

            <div className="relative z-10 mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-white/60">
                © 2026 Merdeka Run. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;