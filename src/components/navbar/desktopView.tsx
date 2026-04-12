import Link from "next/link";
import { ShoppingBag, Info } from "lucide-react";
import { navLinks } from "./navbar.data"; 
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface DesktopViewProps {
    onOpenCart: () => void;
    onOpenInfo: () => void;
}

export default function DesktopView({ onOpenCart, onOpenInfo }: DesktopViewProps) {

    const pathname = usePathname();

    return (
        <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className="text-stone-500 hover:text-stone-900 font-medium transition-colors text-sm"
                >
                    {link.name}
                </Link>
            ))}

            <div className="h-6 w-px bg-stone-300 mx-2"></div>

            <div className="flex items-center gap-4">
                <button 
                    onClick={onOpenCart}
                    className="p-2 hover:bg-stone-100 rounded-full transition text-stone-600 relative active:scale-95"
                >
                    <ShoppingBag className="w-5 h-5" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
                </button>

                <button 
                    onClick={onOpenInfo}
                    className="bg-stone-900 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-stone-800 transition shadow-lg flex items-center gap-2 active:scale-95"
                >
                    <Info className="w-4 h-4" />
                    Info Meja
                </button>
            </div>
        </div>
    );
}