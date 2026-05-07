import React, { useState } from 'react';
import SovereignAudit from './components/SovereignAudit';
import KiraCheckout from './components/KiraCheckout';

function App() {
  const [auditResult, setAuditResult] = useState(null);

  return (
    <div className="min-h-screen bg-black text-zinc-300 p-6 flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-md">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-black text-white tracking-tighter uppercase italic">AetherVoice</h1>
          <p className="text-zinc-500 text-xs mt-1">Verify Before Value Moves</p>
        </header>

        <SovereignAudit onVerified={setAuditResult} />
        <KiraCheckout auditResult={auditResult} />
        
        <footer className="mt-12 text-center">
          <p className="text-[10px] text-zinc-700 uppercase">
            Built for KIRAPAY x Superteam Frontier Track
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
