import axios from 'axios';

/**
 * Generates a KIRAPAY Payment Intent.
 * Only called if QVAC trust score passes the threshold.
 */
export async function createKiraCheckout(auditResult, orderDetails) {
  // 1. Audit Gate: Block if fraud flags detected
  if (auditResult.score < 90) {
    throw new Error("Sovereign Audit: High risk of payment diversion. Blocked.");[cite: 1]
  }

  try {
    const response = await axios.post('https://api.kira-pay.com/v1/intent', {
      amount: orderDetails.total,
      currency: 'USD',
      settlement_chain: 'solana', // Ensure finality is on Solana
      recipient: process.env.MERCHANT_SOLANA_WALLET,
      // Metadata maps the AI Audit to the Cross-Chain Tx[cite: 1]
      metadata: {
        audit_hash: auditResult.hash,
        compliance: "BSA-2026-Certified"
      },
      // KIRAPAY feature: Allow any token from any chain[cite: 1]
      allow_cross_chain: true 
    }, {
      headers: { 'X-KIRA-API-KEY': process.env.KIRAPAY_API_KEY }
    });

    return response.data.checkout_url;
  } catch (error) {
    console.error("KIRAPAY API Error:", error);
    throw error;
  }
}
