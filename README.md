# AetherVoice: Sovereign Trust & Cross-Chain Gateway 🛡️⛓️

**"Verify Before Value Moves."**

AetherVoice is an AI-powered trust layer built for the **KIRAPAY x Tether QVAC Frontier Track**. It bridges the gap between high-stakes trade verification and cross-chain financial execution.

## 🚀 The Vision
In global B2B trade (Fuel, Minerals, Procurement), payments move instantly, but trust is still manual. **AetherVoice** uses local-first AI to audit trade mandates and invoices *before* triggering a cross-chain settlement via KIRAPAY.

## 🛠️ Technical Stack
- **Execution:** [KIRAPAY](https://kira-pay.com) — Intent-based cross-chain checkout allowing payment in any asset with USDC settlement on Solana.
- **Intelligence:** [Tether QVAC](https://tether.io) — Local-first AI for privacy-preserving OCR and fraud detection (Urgency Manipulation & Payment Diversion).
- **Compliance:** **BSA 2026** — Generates SHA-256 hashes and device-linked metadata to satisfy Indian evidence standards.
- **Frontend:** React + Tailwind CSS (Sovereign UI).

## 📂 Repository Structure
- `/client`: The "Trust-Gated" React dashboard.
- `/qvac-engine`: Local AI logic for semantic risk analysis.
- `/kira-bridge`: Integration with KIRAPAY’s Intent & Metadata APIs.
- `/legal-kb`: Logic mapping to the Bharatiya Sakshya Adhiniyam (BSA) 2026.

## ⚙️ Setup & Installation
1. **Clone the Repo:**
   ```bash
   git clone [https://github.com/yourusername/aethervoice.git](https://github.com/yourusername/aethervoice.git)
   cd aethervoice
   Environment Setup:
   cp env.example .env
# Add your KIRAPAY_API_KEY and SOLANA_WALLET
Install Dependencies:
npm install
Run Locally:
npm start
