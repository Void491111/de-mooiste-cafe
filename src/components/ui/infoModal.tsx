"use client"

import { useState, useEffect, ChangeEvent } from "react";
import { X, User, Wifi, Copy, Check } from "lucide-react";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InfoModal({ isOpen, onClose }: InfoModalProps) {
    const [userName, setUserName] = useState<string>("");
    const [copied, setCopied] = useState<boolean>(false);

    // Load data saat modal dibuka
    useEffect(() => {
        if (isOpen && typeof window !== "undefined") {
            const savedName = localStorage.getItem("mooiste_visitor_name");
            if (savedName) setUserName(savedName);
        }
    }, [isOpen]);

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setUserName(val);
        localStorage.setItem("mooiste_visitor_name", val);
    };

    const copyWifi = () => {
        navigator.clipboard.writeText("KopiEnak123");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop Gelap */}
            <div 
                className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />
            
            {/* Content Modal */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-white rounded-2xl shadow-2xl z-[70] p-6 animate-in zoom-in-95 duration-200">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h3 className="text-xl font-bold text-stone-900">Informasi Meja</h3>
                        <p className="text-sm text-stone-500">Silakan lengkapi data kamu</p>
                    </div>
                    <button onClick={onClose} className="p-1 hover:bg-stone-100 rounded-full transition">
                        <X className="w-5 h-5 text-stone-400" />
                    </button>
                </div>

                <div className="space-y-5">
                    {/* Status Meja */}
                    <div className="bg-amber-50 border border-amber-100 p-3 rounded-xl flex items-center gap-3">
                        <div className="bg-amber-500 text-white p-2 rounded-lg font-bold text-xs">
                            12
                        </div>
                        <div>
                            <p className="text-xs text-amber-600 font-bold uppercase">Nomor Meja</p>
                            <p className="text-sm font-medium text-stone-700">Terverifikasi (Scan QR)</p>
                        </div>
                    </div>

                    {/* Input Nama */}
                    <div>
                        <label className="text-xs font-bold text-stone-500 uppercase mb-2 block">Nama Pengunjung</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                            <input 
                                type="text" 
                                value={userName}
                                onChange={handleNameChange}
                                placeholder="Ketik nama kamu..."
                                className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 outline-none focus:border-stone-900 focus:bg-white transition-all font-medium"
                            />
                        </div>
                    </div>

                    {/* Info WiFi */}
                    <div>
                        <label className="text-xs font-bold text-stone-500 uppercase mb-2 block">WiFi Access</label>
                        <div className="flex items-center justify-between bg-stone-900 p-4 rounded-xl text-white">
                            <div className="flex items-center gap-3">
                                <div className="bg-white/10 p-2 rounded-lg">
                                    <Wifi className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-stone-400">Password</p>
                                    <p className="font-mono font-bold tracking-wide">KopiEnak123</p>
                                </div>
                            </div>
                            <button onClick={copyWifi} className="p-2 hover:bg-white/10 rounded-lg transition">
                                {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 text-stone-400" />}
                            </button>
                        </div>
                    </div>
                </div>

                <button 
                    onClick={onClose}
                    className="w-full mt-6 bg-stone-100 text-stone-900 py-3 rounded-xl font-bold hover:bg-stone-200 transition"
                >
                    Tutup
                </button>
            </div>
        </>
    );
}