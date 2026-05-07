import React, { useState } from 'react';
import { ShieldCheck, FileText, Loader2 } from 'lucide-react';

const SovereignAudit = ({ onVerified }) => {
  const [isAuditing, setIsAuditing] = useState(false);
  const [result, setResult] = useState(null);

  const simulateAudit = () => {
    setIsAuditing(true);
    // Simulate Local Inference
    setTimeout(() => {
      setIsAuditing(false);
      const mockResult = { score: 96, hash: 'qvac_7f2a1b9c', status: 'VERIFIED' };
      setResult(mockResult);
      onVerified(mockResult);
    }, 3000);
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
      <div className="flex items-center gap-3 mb-6">
        <ShieldCheck className="text-purple-500" />
        <h2 className="text-xl font-semibold text-white">Trust Verification</h2>
      </div>

      {!result && !isAuditing && (
        <button 
          onClick={simulateAudit}
          className="w-full flex flex-col items-center justify-center border-2 border-dashed border-zinc-800 py-10 rounded-xl hover:bg-zinc-800/50 transition-all"
        >
          <FileText className="text-zinc-500 mb-2" />
          <span className="text-zinc-400 text-sm">Upload Invoice or Trade Mandate</span>
        </button>
      )}

      {isAuditing && (
        <div className="text-center py-8">
          <Loader2 className="animate-spin text-purple-500 mx-auto mb-4" />
          <p className="text-zinc-400 text-sm font-mono">QVAC: Analyzing for Payment Diversion...</p>
        </div>
      )}

      {result && (
        <div className="bg-purple-500/10 border border-purple-500/30 p-4 rounded-xl">
          <div className="flex justify-between items-center">
            <span className="text-purple-400 font-bold">Audit Score: {result.score}%</span>
            <span className="text-xs font-mono text-purple-600">{result.hash}</span>
          </div>
          <p className="text-xs text-zinc-500 mt-2">BSA-2026 Compliant Evidence Generated locally.</p>
        </div>
      )}
    </div>
  );
};

export default SovereignAudit;
