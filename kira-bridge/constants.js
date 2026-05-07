/**
 * AetherVoice KIRAPAY Constants
 */
export const KIRA_CONFIG = {
  // Use the KIRAPAY Frontier Testnet endpoint
  API_BASE_URL: "https://api.kira-pay.com/v1",
  
  // Supported Settlement: We ensure the Indian SME receives USDC on Solana
  SETTLEMENT_CHAIN: "solana",
  SETTLEMENT_ASSET: "USDC",

  // KIRAPAY unique feature: Cross-chain intent
  INTENT_TYPE: "cross_chain_checkout",
  
  // Webhook Endpoints
  WEBHOOK_PATH: "/api/kira-bridge/webhook"
};
