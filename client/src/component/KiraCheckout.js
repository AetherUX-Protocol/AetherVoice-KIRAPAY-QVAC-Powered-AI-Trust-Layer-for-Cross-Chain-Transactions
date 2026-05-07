import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';

const KiraCheckout = ({ auditResult }) => {
  const handleKiraPayment = () => {
    // This triggers the KIRAPAY Intent-based cross-chain flow
    alert("Opening KIRAPAY: Accept any token, settle as Verified USDC on Solana.");
  };

  return (
    <div className="mt-6">
      <button
        disabled={!auditResult}
        onClick={handleKiraPayment}
        className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all ${
          auditResult 
            ? "bg-white text-black hover:bg-zinc-200" 
            : "bg-zinc-800 text-zinc-600 cursor-not-allowed"
        }`}
      >
        <Globe size={18} />
        {auditResult ? "Pay via KIRAPAY (Cross-Chain)" : "Awaiting Audit..."}
        {auditResult && <ArrowRight size={16} />}
      </button>
      <p className="text-[10px] text-zinc-600 mt-3 text-center uppercase tracking-widest">
        Intent-Based Settlement • Multi-Chain Support • Solana Finality
      </p>
    </div>
  );
};

export default KiraCheckout;
