import Link from "next/link";
import { ShoppingBag, Menu, X, Info } from "lucide-react";
import { navLinks } from "./navbar.data";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface MobileViewProps {
    isOpen: boolean;
    setIsOpen: (val: boolean) => void;
    onOpenCart: () => void;
    onOpenInfo: () => void;
}

export default function MobileView({ isOpen, setIsOpen, onOpenCart, onOpenInfo }: MobileViewProps) {

    const pathname = usePathname();

    return (
        <>
            <div className="lg:hidden flex items-center gap-4">
                <button onClick={onOpenCart} className="active:scale-95">
                    <ShoppingBag className="w-5 h-5 text-stone-600" />
                </button>
                <button onClick={() => setIsOpen(true)} className="p-1 active:scale-95 active:bg-stone-100 rounded">
                    <Menu className="w-7 h-7 text-stone-900" />
                </button>
            </div>
            <div 
                className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 lg:hidden ${
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={() => setIsOpen(false)}
            />

            {/* sleding */}
            <div className={`fixed top-0 right-0 h-[100vh] w-[300px] bg-white z-[60] shadow-2xl transform transition-transform duration-300 lg:hidden flex flex-col ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}>
                <div className="flex justify-between items-center p-6 border-b border-stone-100">
                    <span className="text-xl font-bold text-stone-900">Menu</span>
                    <button onClick={() => setIsOpen(false)} className="p-2 rounded-full hover:bg-stone-100 transition active:bg-stone-200">
                        <X className="w-6 h-6 text-stone-600" />
                    </button>
                </div>

                <div className="flex-1 flex flex-col p-6 gap-2 overflow-y-auto">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium text-stone-600 py-3 border-b border-stone-50 hover:text-stone-900 active:bg-stone-100 active:pl-4 transition-all"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="mt-auto p-6">
                    <button 
                        onClick={() => {
                            setIsOpen(false);
                            setTimeout(onOpenInfo, 300);
                        }}
                        className="w-full flex items-center justify-center gap-2 bg-stone-900 text-white py-3 rounded-xl font-bold hover:bg-stone-800 transition active:scale-95"
                    >
                        <Info className="w-5 h-5" />
                        Info Meja
                    </button>
                </div>
            </div>
        </>
    );
}