---
title: "Financial Cybersecurity in the Americas: Notes on the OAS Report"
summary: "Reading notes on From Bank to Blockchain (OAS/CICTE, 2026): where it gets things right, how it differs from my thesis on North Korean threats, and nine actions for the region's financial institutions."
type: "note"
status: "As of Nov 10, 2026 · English version of the Spanish original"
date: 2026-11-10
region: ["Argentina", "LatAm"]
services: ["Regulatory coverage", "Threat-informed security programs", "North Korea-linked threats in crypto"]
translation: "oea-banca-blockchain-apuntes"
language: "English"
featured: false
draft: false
---

*This is the English version of the Spanish original. The report is cited from its official English edition: page numbers are those printed in it, and quotations are the report's own wording. Page numbers differ from the Spanish edition cited in the original.*

I recently had the opportunity to read the report *From Bank to Blockchain* (OAS/CICTE, 2026) and I believe it has both strengths and weaknesses. On the one hand, there is broad consensus, in the industry and among regulators, on the need to share information and build a regional baseline, but in the OAS report the state actor is treated as context and not as a design problem. Having studied in depth the advanced persistent threats (APTs) linked to North Korea, I would like to share my notes on the subject.

## What the report gets right

The report is right on five points, which largely coincide with the consensus of the financial and information security industry.

- **The human link remains central.** The report reminds us that "sophisticated technology does not eliminate the human element from cybersecurity" (p. 59). My thesis arrives at the same place: fake job offers and custom malware get past protocol-level defenses.
- **Crypto and banking are no longer separate worlds.** The OAS anticipates that the distinction "will become increasingly difficult to maintain" (p. 59). My thesis studies it at the ramps: the payment service providers (PSPs) and virtual asset service providers (VASPs) through which money enters and leaves.
- **There are regulatory gaps that attackers exploit.** The OAS speaks of regulatory fragmentation and differences in regulatory maturity (pp. 107-108); my thesis, of the BCRA's limited reach over non-financial entities.
- **Information sharing must be operational.** The report calls to "make information-sharing operational, not aspirational" (p. 108) and proposes financial CSIRTs as trust nodes (pp. 65-70). My chapter 7 proposes a low-latency exchange mechanism between public and private actors.
- **Stolen funds leave a trail.** The report's Argentine cases show that cooperation with virtual asset providers made it possible to freeze funds (p. 54). It is the same logic of acting at the ramps.

## Differences in argument and room for improvement

The differences are not in the data, but in the unit of analysis and in what organizations are asked to do. I list four key differences below:

### 1. The unit of analysis is the person, not the adversary

The report says so itself: it "deliberately shifts the conversation away from abstract threat models and toward lived impact" (p. 13), with a focus on "protecting people and their money" (p. 13). It is a coherent decision for retail fraud. But it clashes with its own IMF chapter, which treats cyber risk as a systemic financial stability risk (p. 83).

A state actor with a revenue goal is not described by its individual victims. It is described by its method, its laundering window and its exit points.

### 2. The state actor appears halfway and mixed together

In the crypto section (5.1) there is no attribution at all (pp. 57-59). In 5.2 the actor is "an East Asian state actor" (the DPRK appears only in the title) and the analysis covers a single vector: fake IT workers (p. 60).

In 6.2 the report attributes "roughly $2.02 billion in cryptocurrency theft during 2025 to East Asian state-linked actors, while separate state-sponsored actors have pre-positioned within critical infrastructure networks" (p. 72). The footnotes to that sentence point to a Chainalysis report on North Korean cryptocurrency theft and to CISA advisory AA24-038A (on PRC-sponsored actors). The report does tell the two groups apart, but in a single sentence and without drawing the consequence: one seeks revenue, the other persistent access. Actors with different motivations require different defensive responses.

A note on the Spanish edition: it words this sentence as a single group ("actors linked to East Asia, which have previously positioned themselves in critical infrastructure networks", p. 81), which merges the two actors. The English edition is the more precise one.

In my opinion, the impact per attack matters more than frequency. According to Chainalysis, North Korea-linked groups extracted at least USD 2.02 billion in 2025; according to TRM Labs, they account for 76% of crypto hacking losses through April 2026. Figures vary by source and I treat them as orders of magnitude.

### 3. The regional exposure needs deeper treatment

The report mentions implications for Latin America, such as the difficulty of attribution and the link to transnational crime (p. 59). It cites real Argentine cases, but of pyramid schemes and banking trojans, not of state actors (p. 54).

My thesis argues that the exposure is structural, and that it stems from high crypto adoption and from the ramps (PSPs and VASPs) that connect the traditional banking system with the crypto and DeFi world.

### 4. The recommendations to organizations are generic

The report's regional baseline lists generic capabilities: authentication and fraud prevention, incident reporting, operational resilience, third-party risk, consumer protection and crisis communication (p. 108). Only section 5.2 goes down to concrete controls, and it suggests that over the next three to seven years OAS member states might develop shared standards for remote-worker verification (p. 62).

My thesis proposes minimum controls for PSPs and VASPs mapped to North Korean techniques: phishing-resistant authentication, verification of what is approved in each transaction, and hiring checks. And a low-latency exchange channel, because stolen funds move in hours and that is where action is possible.

## Argentina changed, the region changed, the industry changed

The regulatory question is no longer whether there is a rule, but whether the rule is informed by the threat. The regulatory chapters of my draft, focused specifically on the Argentine case, date from February 2025, and two relevant rules have been added since then.

The CNV approved [General Resolution 1058/2025](https://www.boletinoficial.gob.ar/detalleAviso/primera/322539/20250314), which requires VASPs to adopt information security policies, cybersecurity risk management procedures and an annual systems audit. In addition, the BCRA made PSPs subject to the minimum technology and information security risk requirements through [Communication "A" 8398](https://www.bcra.gob.ar/archivos/Pdfs/comytexord/A8398.pdf), of February 5, 2026.

Both are entity-centered risk management rules. Their texts do not provide for controls against the techniques of state actors, nor for an exchange channel between entities. That is the biggest gap on the regulatory side.

Moreover, the report's advice to choose regulated platforms presupposes that regulation means effective controls, and the text itself admits that regulatory status alone "does not guarantee an effective compliance program" (p. 53).

## Suggestions for the region's financial institutions

The nine actions run from what an entity can do on its own to what requires coordination; the last one applies to regulators and chambers. Actions 1 to 4 do not depend on third parties.

| # | Action | Functional owner | Timeframe |
|---|--------|------------------|-----------|
| 1 | **Map the exposure surface.** Inventory on- and off-ramps, wallet signing and custody flows, and remote staffing providers. | CISO and Risk | 30-60 days |
| 2 | **Phishing-resistant authentication.** FIDO2 keys or passkeys for treasury, transaction signing, repositories and cloud consoles. No SMS as a second factor for sensitive operations. | CISO and IT | 90 days |
| 3 | **Verify what is approved, not just who approves.** Multi-party approval, allowlisted destinations, verification of the transaction content through an independent channel, limits and delays on hot wallets. | Treasury and Security | 90 days |
| 4 | **Continuous verification of remote staff.** Periodic KYC on employees and contractors, company-issued devices with allowlisted applications, immediate review on changes of location, device or payment details, in-person checks, and staffing agencies treated as part of the risk chain (OAS, pp. 61-62). Training against fake job offers. | HR and Security | 90-180 days |
| 5 | **Ability to hold funds within hours.** Pre-agreed 24x7 contacts with exchanges and issuers, deposit screening against attributed addresses, and an internal procedure with a decision deadline. | Compliance/AML and Security | 90-180 days |
| 6 | **Low-latency intelligence channel.** A common platform (for example MISP, which the report cites), exchange rules agreed in advance and useful data: addresses, wallet clusters, fake-recruitment indicators. Without centralizing all the information (OAS, p. 108). | Financial CSIRT, chambers, BCRA, CNV and UIF | 6-12 months |
| 7 | **Framework-anchored governance.** Map controls to NIST CSF 2.0, ISO/IEC 27001 and the CryptoCurrency Security Standard (CCSS) (my suggestion; the report mentions NIST, ISO 27001 and CIS, p. 78); report to the board; treat third-party and concentration risk as an executive-level exposure (OAS, pp. 73 and 85). | Board and CISO | 6-12 months |
| 8 | **Exercises with a state-actor scenario.** Compromise of the signing infrastructure, rapid laundering and communication between institutions. The report recommends region-wide crisis exercises (p. 74). | CISO and Continuity | 6-12 months |
| 9 | **Require threat-informed minimum controls and measure by outcomes.** Controls tied to techniques and an indicator such as time to freeze funds, not just compliance with a checklist (OAS: "regulate for outcomes, not only controls," p. 108). | BCRA, CNV, UIF and the Argentine Fintech Chamber | 12+ months |

## Limits of this article

- My thesis draft does not document attacks attributed to North Korea against Argentine entities. The exposure I describe is structural. Nevertheless, Bitso's research team documented, between 2025 and 2026, infiltration attempts with fake candidates posing as Latin Americans, fake meetings with malware and brand impersonation against companies and individuals in the crypto sector, including an exchange with regional operations. Public sources do not show a regional selection, but they make it plausible that the region's entities are targets (see the [Bitso Quetzal team's research](https://quetzal.bitso.com/t/state-sponsored)).
- The attribution of these attacks has not been proven in court and is preliminary in several recent cases. The research carried out relies only on open sources and on the individual contributions of analysts and experts.
- The report compiles contributions from banks, fintechs and agencies, and its disclaimer states that the opinions are those of the authors and do not necessarily reflect those of the OAS (p. 2). My criticism is aimed at the framing of the whole, not at any particular contribution.
- Until May 2026 I served as PMO Manager of Bitso's Information Security team, a company whose research team signs section 5.2 of the report. I was also the delegated CISO for Argentina of its local PSP (Nvio Pagos Argentina SAU) and of its VASP registered with the CNV.

## Sources

- OAS/CICTE, *From Bank to Blockchain: Cybersecurity for People in the Financial Ecosystem of the Americas*, 2026 (ISBN 978-0-8270-8258-8; CC BY-NC-ND 3.0 IGO). Cited pages are the ones printed in the English edition. Spanish edition: *De la banca al blockchain* (ISBN 978-0-8270-8265-6).
- Cortés, A., [Cybersecurity Elements of the Argentine Financial System: Managing North Korean Threats in Crypto-Assets](/portfolio/master-thesis-north-korea-crypto-working-draft/), thesis draft (UBA), February 2025; chapters 5.2, 5.3, 7 and 8 updated in November 2026.
- Comisión Nacional de Valores, General Resolution 1058/2025 (March 12, 2025), [Boletín Oficial, March 14, 2025](https://www.boletinoficial.gob.ar/detalleAviso/primera/322539/20250314) (in Spanish).
- Banco Central de la República Argentina, [Communication "A" 8398](https://www.bcra.gob.ar/archivos/Pdfs/comytexord/A8398.pdf) (in Spanish), February 5, 2026.
- Bitso Quetzal Team (Mauro Eldritch et al.), [research on state-sponsored threats](https://quetzal.bitso.com/t/state-sponsored), Substack, 2024-2026.
- Bitso Quetzal Team, [Interview with the Chollima V](https://quetzal.bitso.com/p/interview-with-the-chollima-v) (November 2025).
- Bitso Quetzal Team, [North Korea's Safari: Hunting for RATs](https://quetzal.bitso.com/p/north-koreas-safari-hunting-for-rats) (April 13, 2026).
- Bitso Quetzal Team, [Interview with the Chollima VIII](https://quetzal.bitso.com/p/interview-with-the-chollima-viii) (May 19, 2026).
