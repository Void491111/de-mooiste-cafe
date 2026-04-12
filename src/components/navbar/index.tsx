"use client";

import Link from "next/link";
import useNavbarLogic from "./navbar.hooks";
import DesktopView from "./desktopView";
import MobileView from "./mobileView";
import InfoModal from "../ui/infoModal";
import CartDrawer from "../ui/cartDrawer";

export default function Navbar() {
    const { state, action } = useNavbarLogic();

    return (
        <>
            <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-stone-100 z-50 h-20">
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold text-stone-900 shrink-0">
                        Mooiste<span className="text-stone-400">Cafe</span>
                    </Link>
                    <DesktopView 
                        onOpenCart={() => action.setShowCart(true)}
                        onOpenInfo={() => action.setShowInfoModal(true)}
                    />
                    <MobileView 
                        isOpen={state.isSideBarOpen}
                        setIsOpen={action.setIsSideBarOpen}
                        onOpenCart={() => action.setShowCart(true)}
                        onOpenInfo={() => action.setShowInfoModal(true)}
                    />
                </div>
            </nav>
            <InfoModal 
                isOpen={state.showInfoModal} 
                onClose={() => action.setShowInfoModal(false)} 
            />
            
            <CartDrawer 
                isOpen={state.showCart}
                onClose={() => action.setShowCart(false)}
            />
        </>
    );
}