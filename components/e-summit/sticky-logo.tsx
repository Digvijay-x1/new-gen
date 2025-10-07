import Link from "next/link";
import Image from "next/image";

export default function StickyLogo() {
    return (
        <div className="fixed left-4 top-4 z-[60]">
            <Link href="/e-summit" aria-label="E‑Cell IIIT Allahabad" className="block">
                <div className="flex items-center gap-2 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 px-2.5 py-2">
                    <Image
                        src="/logo_main.png"
                        alt="E‑Cell IIIT Allahabad"
                        width={80}
                        height={80}
                        className="object-contain select-none"
                        style={{ width: "auto", height: "auto", maxWidth: 80, maxHeight: 80 }}
                        priority
                    />
                </div>
            </Link>
        </div>
    );
}
