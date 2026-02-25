"use client"

import { useState, useEffect } from "react";

export default function useNavbarLogic() {
    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
    const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
    const [showCart, setShowCart] = useState<boolean>(false);

    useEffect(() => {
        if (isSideBarOpen || showInfoModal || showCart) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => { document.body.style.overflow = ''; };
    }, [isSideBarOpen, showInfoModal, showCart]);

    return {
        state: { isSideBarOpen, showInfoModal, showCart },
        action: { setIsSideBarOpen, setShowInfoModal, setShowCart }, 
    };
} 