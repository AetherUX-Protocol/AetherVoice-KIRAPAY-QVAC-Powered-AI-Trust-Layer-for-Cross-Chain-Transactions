export async function performAetherVoiceAudit(text) {
  const flags = [
    { pattern: "immediate settlement required", weight: 30 },
    { pattern: "alternate bank account", weight: 40 },
    { pattern: "confidential broker instruction", weight: 20 }
  ];

  let totalRisk = 0;
  flags.forEach(f => {
    if (text.toLowerCase().includes(f.pattern)) totalRisk += f.weight;
  });

  const trustScore = 100 - totalRisk;

  return {
    score: trustScore,
    status: trustScore >= 90 ? "VERIFIED" : "HIGH_RISK",[cite: 1]
    recommendation: trustScore >= 90 ? "Proceed to KIRAPAY" : "Manual Review Required"[cite: 1]
  };
}
