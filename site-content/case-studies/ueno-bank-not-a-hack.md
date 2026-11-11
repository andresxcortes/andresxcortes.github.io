---
title: "Ueno Bank: not a hack, and still a cybersecurity case"
summary: "What the resolution of Paraguay's neobank teaches about the integrity of reported data, owners as adversaries, total unavailability and the CISO's professional ethics."
type: "note"
status: "As of Nov 11, 2026"
date: 2026-11-11
region: ["Paraguay", "LatAm"]
services: ["Regulatory coverage", "Threat-informed security programs"]
translation: "ueno-bank-no-fue-un-hackeo"
translations: ["ueno-bank-nao-foi-hackeamento"]
image: "/og-ueno-en.png"
language: "English"
featured: false
draft: false
---

*What does the Ueno Bank crisis tell us about the maturity of the region's financial industry? This article was written on 11 November and covers facts that are still unfolding.*

On 2 November the board of the Central Bank of Paraguay (BCP) unanimously resolved to start the resolution of Ueno Bank (the technical term under Law 2,334/03), and the decision was announced on the 3rd. According to the BCP, its solvency ratio had fallen below 50% of the legal minimum after accounting adjustments.[^1] The bank had almost three million customers and about USD 2.8 billion in deposits, and its app, cards and transfers were suspended. The crisis already has first-order political consequences in Paraguay.

The crisis of the neobank that was the flagship of our neighbouring country, and one of the most important in the region, had nothing to do with a cyber incident. Even so, I consider it one of the most instructive cases of the year for anyone working in financial security: it shows that the loss of availability, integrity and trust does not need an external attacker. Here are my notes from that angle.

## Summary of events

What is officially established is relatively little and well documented. On 2 November the BCP board concluded that Ueno's solvency ratio, once accounting adjustments were applied during the regularisation regime, stood below half of the legal minimum, and it therefore started the resolution procedure under Law 2,334/03. The decision was communicated in the early hours of Tuesday 3 November, announcing that the Superintendency of Banks would appoint administrators.[^2] From then on the Deposit Guarantee Fund came into play. It covers up to 75 minimum wages per person (G. 228.3 million, about USD 38,600) and, according to the BCP, reaches roughly 97% of depositors.[^3] Advance payments were due to begin within 24 hours, the Securities Superintendency suspended redemptions in certain mutual funds linked to the bank[^4], and persons related to the institution were excluded from coverage.

Several other facts are being investigated by the press and prosecutors and are not proven for now. According to reports, Ueno allegedly lent to companies related to its owners above the legal limits and often without sufficient collateral.[^5] It also allegedly booked running expenses as assets, which would have inflated its equity until inspectors corrected the books.[^5] According to AP, almost USD 39 million allegedly went to three related companies in a single day in September 2025.[^6] The bank, for its part, had already rejected earlier questions in an open letter dated 20 August 2026, defending the accounting treatment of its technology investment.[^7]

Finally, questions remain open. The exact cause of the hole and its final size are still unknown, and it is unclear how far the supervisor's role went: according to an analysis published on 4 November, the BCP had begun a review in June, yet the ratios the bank published kept showing a comfortable margin months later.[^8] Figures vary by source, so I treat them as orders of magnitude, not settled data.

## What this case teaches from a cybersecurity standpoint

![Five cybersecurity lessons from the Ueno Bank case](/research/ueno/lecciones-en.png)

### 1. The integrity of what is reported is a security control

According to an analysis published on 4 November, the capital ratio reported by the bank was 15.01% in March, 14.5% in June and 13.8% at the end of October, against a 12% minimum. A few days later, after the adjustments, the BCP placed it below half of that minimum. Rating agencies, investors and public bodies relied on the same numbers.

I do not know whether there was an accounting irregularity, and the bank denies it. What matters for security is something else: a control that depends on information managed by the institution itself is not independent. Technology spending is a good example because it is intangible and hard to verify. Independently verifying the existence, use and useful life of capitalised technology assets is IT audit work, not accounting.

### 2. The adversary with the most privileges is sometimes the owner

Our threat models usually assume an external attacker or a disloyal employee. The alleged facts point to a control that may have been bypassed from the top: according to the press, the related-party limit was defined by legal ownership and was allegedly sidestepped by putting companies in employees' names. The defence is technical: beneficial-ownership graphs cross-checked with transaction monitoring (the same tools used for AML), segregation of duties, an independent whistleblowing channel and critical records with copies outside management's control.

### 3. The incident was total unavailability

In cybersecurity we plan for ransomware and supplier-failure events. Few institutions plan for the resolution scenario with the same severity, and for the customer it is equivalent: no app, no card, no transfers. Around 32,000 retirees were paid through this bank. According to the Guarantee Fund, by 9 November about USD 335 million had been paid to roughly 1.7 million depositors. The speed of that payout depends on how fast a single, reliable view of the customer can be obtained. My proposal is to treat it as a design requirement: a ledger exportable to the guarantor, portable payroll and aliases (the BCP released Ueno's aliases in the instant payments system) and regular drills. The BCP also attributed intermittent failures in other institutions' apps to unusual demand from mass account openings: a run is also a load test for the whole system.

### 4. Trust moves at digital speed

The same analysis argues that leaks worsened the liquidity pressure. In a digital bank, money leaves at app speed and returns at legal speed. This makes the confidential information of the supervisor and the institution an asset to protect (classification, need to know, leak control), and it calls for real-time monitoring of outflows and deposit concentration with escalation thresholds. A side note: in August 2025 a leak of Ueno customer data offered on the dark web was reported, and a deputy who was a customer criticised that customers were not told. There is no public evidence linking it to the current crisis; it shows that trust erodes on several fronts at once and that notifying customers matters.

### 5. The label is not the control

The OAS report I discussed in [my previous note](/portfolio/oea-bank-to-blockchain-notes/) puts it in its own words: regulatory status "does not by itself guarantee an effective compliance program" (p. 61), and the outcomes users experience depend far more on a platform's capabilities and priorities than on its label (p. 44, my paraphrase of the Spanish edition). "Neobank", "regulated bank" or "unicorn in the making" describe a status, not a maturity. Very fast growth (banking licence in November 2023, absorption of another institution in 2024, almost three million customers) requires controls to scale faster than the business, which is hard to see from outside. The report proposes to "regulate based on outcomes" (p. 118): ask whether the customer is actually safer, not only whether the institution ticks a list.

For Argentina and other countries in the region, the question is not whether we copy Paraguay. It is whether our technology-risk and information-security requirements, such as those in BCRA Communication "A" 8398 for PSPs, also cover independent verification of reported data, digital resolution capacity and related-party risk. I am not saying they do not; it is what I would review. A regional comparison helps frame the question. In Brazil, payment institutions must have a cybersecurity policy under BCB Resolution 85/2021 (for banks it is CMN Resolution 4,893/2021), and in December 2025 the Central Bank amended it with BCB Resolution 448, which added annual penetration tests by an independent third party and isolation of the Pix and STR environments, with a compliance deadline of 1 March 2026.[^9] In Mexico, the CNBV rules for financial technology institutions (DOF, 10 September 2018) devote chapters to information security, electronic channels and third-party services.[^10] In Colombia, the Financial Superintendency set minimum cybersecurity risk-management requirements in External Circular 007 of 2018; I assume it reaches electronic payment entities.[^11]

## Professional ethics: who the CISO answers to

Nothing publicly known indicates what Ueno's security leaders saw, what they warned about or what they were asked to sign, and it is not for me to speculate. But the case forces a question the profession tends to avoid: when the information that sustains the trust of millions of customers may be distorted, who does a CISO owe loyalty to first?

The formal answer is written down. The ISC2 Code of Ethics makes its first canon protecting society, the common good, necessary public trust and confidence, and the infrastructure, and only in the third does it speak of diligent service to principals.[^12] The ISACA code asks members to inform appropriate parties of significant facts that, if not disclosed, could distort the results of the work, while also keeping confidentiality unless the law requires disclosure.[^13] As a CC and CISM holder, those texts bind me. The tension between them is real: the CISO owes loyalty to the employer and discretion about what they see, but that loyalty has a limit when silence harms the public. And it sharpens when the owner is an interested party or, at worst, the adversary. The CISO is usually hired, evaluated and removed by those who control the institution, so the principal of the third canon may be precisely the source of risk to the society of the first. There the order of the canons matters: the ISC2 code ranks them by priority, and the public interest comes before the principal's.

![Who does the CISO answer to? ISC2 canons in priority order](/research/ueno/etica-en.png)

In practice, I think this responsibility translates into four behaviours. First, the CISO must back what they declare with evidence: they do not certify a control they did not verify or report an indicator they cannot reproduce, because their signature becomes one of the pieces of trust others rely on, including the supervisor. Second, they need structural independence: direct access to the board or the audit committee and a reporting line that does not depend on whoever has incentives in growth. Third, they must document dissent: if the business decides to accept a risk the CISO considers unacceptable, that acceptance is recorded in writing and signed by whoever takes it on, not by security. Fourth, they must know their escalation path in advance, internal first and external when the law allows and the gravity justifies it, because nobody chooses that path well under pressure. When the source of the risk is at the top, the internal route runs out quickly: what remains is the audit committee, external auditors, independent legal counsel and, ultimately, the regulator.

There is a limit I think it is honest to acknowledge. Escalating has real personal costs, and legal protections for whistleblowers vary across the region's countries; I do not take them for granted. That is why professional ethics cannot rely on individual courage alone: it is also a design task. Boards should build the conditions so that telling the truth is the path of least cost, and regulators should ask whether their rules allow the security lead to speak. A bank with almost three million customers, about 32,000 of them retirees who were paid through it, needs someone with both the obligation and the ability to say what is unwelcome. That is, at bottom, the CISO's job.

## Five questions for the risk committee and the CISO

| # | Question | Owner |
|---|----------|-------|
| 1 | Can we hand a regulator or guarantee fund a single customer view within 24-48 hours? | CISO, Data and Risk |
| 2 | Who independently verifies capitalised technology assets? | Internal Audit and CFO |
| 3 | Do critical records and regulatory reports have copies outside management's control? | CISO and Audit |
| 4 | Do we monitor outflows and deposit concentration in real time, with defined escalation? | Treasury and Risk |
| 5 | Do we test a total-unavailability scenario, including payroll, aliases and portability? | Continuity and CISO |

## Limits of this article

- My notes rely solely on public and press sources, as of 11 November 2026. Facts keep changing and the allegations are unproven.
- There is no public evidence of a cyber incident. What I analyse are control and governance failures with security consequences.
- Part of the accounting-integrity analysis comes from an opinion source; I flag it as such in the text. My proposals are my own and do not derive from the OAS report or the BCP.
- Until May 2026 I worked as PMO Manager of Bitso's Information Security team, and I was delegated CISO for Argentina of its local PSP and of its VASP registered with the CNV. I have therefore worked in the sector I comment on.

## Sources

- [All BCP communiqués on Ueno Bank](https://www.abc.com.py/economia/2026/11/04/todos-los-comunicados-del-bcp-sobre-ueno-bank/), ABC Color, 4 November 2026 (in Spanish).
- [¿Qué pasó con el dinero de Ueno Bank en Paraguay y cuánto falta recuperar?](https://www.nacion.com/el-explicador/que-paso-con-el-dinero-de-ueno-bank-en-paraguay-y/WB25U5K4TFARDGNDGNKPY3IKAU/story/), La Nación (Costa Rica).
- Baker, A., [Ueno Bank Collapse: How Did Every Line of Defence Miss It?](https://andrewbaker.ninja/2026/11/04/ueno-bank-collapse-how-did-every-line-of-defence-miss-it/), 4 November 2026 (opinion analysis).
- [Ueno Bank: las claves detrás del colapso](https://www.iproup.com/economia-digital/72950-ueno-bank-claves-detras-del-colapso-que-dejo-a-3-millones-sin-sus-ahorros), iProUP.
- [Ueno: de querer ser el primer unicornio paraguayo a una crisis bancaria](https://www.forbesargentina.com/negocios/ueno-como-paso-querer-ser-primer-unicornio-paraguayo-sacudir-pais-una-crisis-bancaria-n101802), Forbes Argentina.
- [Open Letter to the Public](https://www.ueno.com.py/?p=15561), ueno bank, 20 August 2026.
- [Filtración de datos de ueno: diputada denuncia vulneración de derechos](https://dplnews.com/?p=285546), DPL News, August 2025.
- OAS/CICTE, *From Banking to Blockchain: Cybersecurity for People in the Financial Ecosystem of the Americas*, 2026 (ISBN 978-0-8270-8258-8); page numbers refer to the English edition, except p. 44, which I cite from the Spanish edition (ISBN 978-0-8270-8265-6).
- Banco Central de la República Argentina, [Communication "A" 8398](https://www.bcra.gob.ar/archivos/Pdfs/comytexord/A8398.pdf), 5 February 2026.

[^1]: Central Bank of Paraguay, communiqués on Ueno Bank of 3-5 November 2026, per the [ABC Color compilation](https://www.abc.com.py/economia/2026/11/04/todos-los-comunicados-del-bcp-sobre-ueno-bank/) (in Spanish): unanimous board resolution under Law 2,334/03, solvency below 50% of the legal minimum, Guarantee Fund coverage (up to 75 minimum wages, G. 228,300,000), advances of up to 40 minimum wages, and exclusion of persons related to the institution.

[^2]: BCP communiqué "issued this early morning" of 3 November 2026, per [Diario HOY](https://www.hoy.com.py/nacionales/2026/11/03/bcp-constata-insuficiencia-en-solvencia-de-ueno-y-ordena-intervencion); press conference and announcement of the appointment of agents by the Superintendency of Banks, per [ABC Color](https://www.abc.com.py/economia/2026/11/03/ueno-bank-bcp-explica-la-resolucion-y-que-va-a-pasar-ahora/). The 2 November board session appears in [iProUP](https://www.iproup.com/economia-digital/72950-ueno-bank-claves-detras-del-colapso-que-dejo-a-3-millones-sin-sus-ahorros) and in [Baker's analysis](https://andrewbaker.ninja/2026/11/04/ueno-bank-collapse-how-did-every-line-of-defence-miss-it/). The date of the formal appointment of administrators does not appear in the sources I consulted.

[^3]: [iProUP](https://www.iproup.com/economia-digital/72950-ueno-bank-claves-detras-del-colapso-que-dejo-a-3-millones-sin-sus-ahorros), 6 November 2026 (in Spanish).

[^4]: Securities Superintendency, Circular SV.SG No. 020/2026 and Resolution SV.SG No. 0015/2026, cited in the [ABC Color compilation](https://www.abc.com.py/economia/2026/11/04/todos-los-comunicados-del-bcp-sobre-ueno-bank/).

[^5]: [iProUP](https://www.iproup.com/economia-digital/72950-ueno-bank-claves-detras-del-colapso-que-dejo-a-3-millones-sin-sus-ahorros) and [Contexto Tucumán](https://www.contextotucuman.com/nota/427610/ueno-bank-las-10-claves-para-entender-que-paso-con-el-banco-que-dejo-a-casi-3-millones-de-clientes-sin-sus-ahorros.html): both present these facts as alleged, with no conviction or court ruling.

[^6]: Reported by AP, per [iProUP](https://www.iproup.com/economia-digital/72950-ueno-bank-claves-detras-del-colapso-que-dejo-a-3-millones-sin-sus-ahorros) and [Contexto Tucumán](https://www.contextotucuman.com/nota/427610/ueno-bank-las-10-claves-para-entender-que-paso-con-el-banco-que-dejo-a-casi-3-millones-de-clientes-sin-sus-ahorros.html).

[^7]: ueno bank, [Open Letter to the Public](https://www.ueno.com.py/?p=15561), 20 August 2026.

[^8]: Baker, A., [Ueno Bank Collapse: How Did Every Line of Defence Miss It?](https://andrewbaker.ninja/2026/11/04/ueno-bank-collapse-how-did-every-line-of-defence-miss-it/), 4 November 2026 (opinion analysis): BCP review started on 5 June 2026.

[^9]: Banco Central do Brasil, [Resolução BCB n.º 448, of 18/12/2025](https://www.legisweb.com.br/legislacao/?id=488304) (published in the DOU on 22/12/2025; amends [Resolução BCB 85/2021](https://www.legisweb.com.br/legislacao/?id=412501)); and [CMN Vote 88/2025](https://normativos.bcb.gov.br/Votos/CMN/202588/Voto_do_CMN_88_2025.pdf), which proposes the equivalent amendment to [Resolução CMN 4.893/2021](https://www.ancord.org.br/wp-content/uploads/2021/03/Resolucao-CMN-n-4.893-de-26_2_2021.pdf) for banks (the CMN resolution number does not appear in the vote).

[^10]: CNBV, [General provisions applicable to Financial Technology Institutions](https://www.cnbv.gob.mx/Normatividad/Disposiciones%20de%20car%C3%A1cter%20general%20aplicables%20a%20las%20instituciones%20de%20tecnolog%C3%ADa%20financiera.pdf) (DOF, 10 September 2018; in Spanish); chapters VI to VIII per the [DOF text](https://sidof.segob.gob.mx/notas/docFuente/5555030) I consulted, to be checked against the version in force.

[^11]: Superintendencia Financiera de Colombia, [Circular Externa 007 de 2018](https://www.ambitojuridico.com/sites/default/files/BancoMedios/Archivos/circexterna-007-18%28superfinanciera%29.pdf); I did not verify its current validity.

[^12]: ISC2, [Code of Ethics](https://www.isc2.org/ethics): "Protect society, the common good, necessary public trust and confidence, and the infrastructure" (canon 1); "Provide diligent and competent service to principals" (canon 3).

[^13]: ISACA, [Code of Professional Ethics](https://isaca.org/code-of-professional-ethics), points 4 (confidentiality unless the law requires disclosure) and 6 (inform appropriate parties of significant facts); non-literal description.
