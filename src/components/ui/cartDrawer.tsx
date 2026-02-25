"use client"

import { useState, useEffect } from "react";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  image: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialItems: CartItem[] = [
  {
    id: 1,
    name: "Kopi Gula Aren",
    price: 28000,
    qty: 2,
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 2,
    name: "Croissant Butter",
    price: 22000,
    qty: 1,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=200",
  },
];

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const [items, setItems] = useState<CartItem[]>(initialItems);

  // Fungsi Tambah Qty
  const increaseQty = (id: number) => {
    setItems(items.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item));
  };  

  // Fungsi Kurang Qty
  const decreaseQty = (id: number) => {
    setItems(items.map(item => 
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    ));
  };

  // Fungsi Hapus Item
  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    } 
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Hitung Total
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const tax = subtotal * 0.11; // PPN 11%
  const total = subtotal + tax;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-[400px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-stone-900" />
            <span className="text-xl font-bold text-stone-900">Keranjang ({items.length})</span>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-stone-100 transition">
            <X className="w-6 h-6 text-stone-600" />
          </button>
        </div>

        {/* List Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
              <ShoppingBag className="w-16 h-16 text-stone-300" />
              <p className="text-stone-500 font-medium">Keranjang kamu kosong nih.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4">
                {/* Gambar Produk */}
                <div className="w-20 h-20 bg-stone-100 rounded-xl overflow-hidden shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                {/* Detail */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-stone-900">{item.name}</h4>
                    <p className="text-stone-500 text-sm">Rp {item.price.toLocaleString("id-ID")}</p>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    {/* Counter */}
                    <div className="flex items-center gap-3 bg-stone-50 rounded-full px-2 py-1 border border-stone-100">
                      <button onClick={() => decreaseQty(item.id)} className="p-1 hover:text-stone-900 text-stone-400">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-bold w-4 text-center">{item.qty}</span>
                      <button onClick={() => increaseQty(item.id)} className="p-1 hover:text-stone-900 text-stone-400">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Delete Button */}
                    <button onClick={() => removeItem(item.id)} className="text-red-400 hover:text-red-600 p-1">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer (Total & Checkout) */}
        {items.length > 0 && (
          <div className="p-6 border-t border-stone-100 bg-stone-50">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-stone-500 text-sm">
                <span>Subtotal</span>
                <span>Rp {subtotal.toLocaleString("id-ID")}</span>
              </div>
              <div className="flex justify-between text-stone-500 text-sm">
                <span>PPN (11%)</span>
                <span>Rp {tax.toLocaleString("id-ID")}</span>
              </div>
              <div className="flex justify-between text-stone-900 font-bold text-lg pt-2 border-t border-stone-200">
                <span>Total</span>
                <span>Rp {total.toLocaleString("id-ID")}</span>
              </div>
            </div>
            
            <button className="w-full bg-stone-900 text-white py-3.5 rounded-xl font-bold hover:bg-stone-800 transition shadow-lg">
              Checkout Sekarang
            </button>
          </div>
        )}
      </div>
    </>
  );
}