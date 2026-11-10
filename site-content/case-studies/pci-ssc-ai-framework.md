---
title: "PCI DSS and AI: Toward a Security Framework for Payment Environments"
summary: "A six-domain framework built on PCI SSC's documents on AI, with the minimum control and the evidence an assessor can audit in each domain."
type: "note"
status: "As of Nov 10, 2026 · English version of the Spanish original"
date: 2026-11-10
region: ["LatAm"]
services: ["Regulatory coverage", "AI security"]
language: "English"
featured: false
draft: false
---

*This is the English version of the [Spanish original](/portfolio/pci-ssc-ia-framework/).*

I recently reviewed the principles of the PCI Security Standards Council (hereafter PCI SSC) on the use of AI in payment environments, and I believe they are a good starting point for discussing the security of these systems. However, PCI SSC's recommendations are guidance, not requirements that an independent assessor can audit.

Standardization is one of the foundations of the cybersecurity industry. When we use standards such as PCI DSS, we know globally what we are talking about. This article proposes a six-domain framework built on PCI SSC's standards, which draws from other sources only what is needed to put it into practice: what the standard limits, how it is controlled, and what evidence is presented to the assessor.

## The foundation: what PCI SSC establishes

The authority of this article is PCI SSC, and I rely on three of its documents. The first is Andrew Jamieson's blog post, [AI Principles: Securing the Use of AI in Payment Environments](https://blog.pcisecuritystandards.org/ai-principles-securing-the-use-of-ai-in-payment-environments) (September 11, 2025), which organizes the principles into four groups: what an AI **must be**, what it **should not be**, what it **should be**, and what it **may be**. Its starting point is that AI does not exempt anyone from compliance, since it must be deployed and managed according to the applicable PCI SSC requirements. From there it limits what can be entrusted to it (high-impact secrets, actions that imply accepting formal responsibility, creating and deploying software without human oversight) and what it should meet (logging its actions with a responsible human, being validated before and during deployment, being easy to shut down, and operating with its own limited credentials). PCI SSC itself states that this is guidance, not an exhaustive list, and that it plans to update it.

The second is the guide *Integrating Artificial Intelligence in PCI Assessments* (version 1.0, March 2025). It regulates the use of AI by assessors, not by assessed entities, but it leaves a logic that applies to both: AI is a tool, not an assessor; final responsibility for the software is human; the use of AI tools must be disclosed to the client and documented; and results are validated independently. For an entity that uses its own AI to monitor compliance, the guide is explicit: the assessor **cannot rely on that AI's evaluation of the evidence** and must carry out sampling and interviews independently (section 4.1).

The third is the information supplement *Security Considerations for AI Systems* (version 1.0, September 2026), the most extensive of the three and the closest to what this article is after. It states from the outset that it is guidance and does not replace any PCI SSC requirement (p. 1). On scope, it treats AI like any other technology: an AI system that receives account data, or that has unrestricted connectivity to systems that process it, is part of the cardholder data environment, and one that connects to the CDE or affects its security is also within the scope of the PCI DSS standard (p. 15).

To limit the risks of AI, the supplement proposes "least agency" and preventing any single system from combining access to sensitive data, exposure to untrusted content, and external communication, a combination it calls the "lethal trifecta"; if a task requires all three, it is split across different agents (pp. 4 and 11). It allows moving from approving every action to supervising the whole (*human-over-the-loop*) under certain conditions, but not when the agent accesses cleartext cardholder data (pp. 8-9 and 23). Finally, it does not cover the use of AI to make payments (p. 1), a limit worth keeping in mind later on.

## Complementary contributions

PCI SSC's documents set the limits and, in the case of the supplement, a good part of the controls, but they leave out the use of AI to execute payments and do not go down to day-to-day operations. For that I turn to two complementary sources, to which I grant a contribution but not comparable authority. The first is CrowdStrike's playbook (white paper, © 2026), which offers an operational view: you cannot protect what you cannot see, and an AI system is defended by thinking about how an adversary would attack it, with red team exercises and continuous monitoring. It makes no mention of PCI.

The second is an article on [dev.to](https://dev.to/l_x_1/pci-dss-compliance-for-ai-agents-making-autonomous-payments-58bh) (L_X_1, PolicyLayer, published on a January 5 with no year shown), which brings these ideas down to the case of agents in the payment chain, which is exactly the case the PCI SSC supplement leaves out: it tokenizes so that plaintext card data never reaches the agent, and it proposes a mapping to PCI DSS requirements 1, 7, 10 and 12. Both come from vendors with a commercial interest, and the second one's mapping is the author's own and is not official.

That is why I use them to give operational shape to the controls, not to determine what is required. When either of them departs from PCI SSC, PCI SSC prevails.

## Synthesis

Under that criterion, the sources contribute three ideas that underpin the framework.

1. The first is that responsibility remains human and must be recorded, which is what PCI SSC establishes and what the playbook reinforces by asking for traceability of data, configuration, prompts and outputs.
2. The second is that it is better to reduce what AI can touch before trying to monitor it: PCI SSC suggests limiting access (with least agency, and without combining sensitive data, untrusted content and external communication in a single system) and proposes tokens, and dev.to shows how to apply this to agents in the payment chain.
3. The third is that evidence must be reproducible by a third party and must not depend on what the AI itself reports, which is the independence criterion of the assessment guide.

When cross-referencing the sources, three further tensions arise, and the PCI SSC supplement allows resolving all three on its own terms.

1. The first is what gets logged: the playbook asks to capture prompts, while dev.to recommends never logging full card data, and since a prompt can contain account data, the log may end up storing it. The supplement asks for logging in enough detail to investigate and attribute the AI's actions, but while avoiding the storage of sensitive data such as account data, which must be masked or tokenized before reaching the log (pp. 4, 16 and 18).
2. The second is response autonomy: the playbook advocates responding "at machine speed," and PCI SSC allows autonomous actions, but with a responsible human, with the ability to isolate the AI and reverse what it did, and with records of those actions that cannot be erased (pp. 4, 8-9 and 16).
3. The third is who validates: according to the assessment guide, evidence from an entity's own AI is not enough on its own, and the supplement agrees in asking that data egress controls (DLP) be independent of the AI they monitor (p. 10) and that validation include adversarial and not only functional testing (p. 6).

Not even the PCI SSC supplement, which states that it neither adds to nor replaces requirements (p. 1), offers a set of criteria that a payment entity can implement and an assessor can audit. That is the gap this proposal aims to fill.

## Proposal: a six-domain framework

From PCI SSC, this framework takes the limits; from the PCI DSS standard, the requirement to which each control is tied; and from the commercial texts incorporated, how to operate it. Each domain ends in evidence an assessor can sample, instead of a summary generated by the AI itself.

| Domain | PCI SSC principle | PCI DSS requirement | Minimum control | Evidence for the assessor |
|:--|:--|:--|:--|:--|
| **1. Scope and inventory** | AI is deployed and managed according to the applicable PCI SSC requirements | 1.2.4, 12.5.1, 12.5.2 and 12.8 (supplement, pp. 15 and 18) | Inventory of models, agents and AI embedded in SaaS that touch account data or the data environment; classification by risk level (playbook, pp. 6-8); AI-BOM per system and a record of the data stores the AI generates, such as logs, transcripts and context (supplement, pp. 7 and 18) | Validated inventory and data-flow diagram covering AI |
| **2. Identity and authority** | Credentials limited by use case; a responsible human; no autonomy for operations that require accepting formal responsibility | 7 and 8 (8.4.2: supplement, p. 17) | Own, revocable credential per agent; per-transaction and daily limits; named human approval for every authority action; device-bound, time-limited credentials, because an AI cannot implement MFA (supplement, p. 17) | List of credentials per agent; approver register |
| **3. Account data and secrets** | Access to account data only if protected; no high-impact secrets; no generating random values or secrets with AI | 3 (3.3.1: supplement, p. 15) | Tokenization or single-use PAN; third-party keys and credentials kept out of the model's context; validated random generator; no sensitive authentication data (SAD), even encrypted, and no PIN blocks (supplement, p. 16) | Review of production prompts and context; tokenization configuration |
| **4. Isolation and inputs/outputs** | Protected against malicious input and malformed output; isolated from other users and other AIs | 1 and 6 | Segmentation of the components that execute payments; input and output filtering; separate development, test and production (playbook, p. 10); egress DLP, independent of the AI it monitors; if a task combines sensitive data, untrusted content and external communication, split it across different agents (supplement, pp. 10-11 and 16) | Network rules; prompt injection test results |
| **5. Logging, detection and response** | Actions and prompts logged; responsible human; easy shutdown; autonomous actions only if they fail safe | 10 and 12.10 (12.10: supplement, p. 18) | AI telemetry integrated into the SIEM (playbook, p. 12); detection of injection and unsafe tool use; reversal of whatever the AI did, with logs that cannot be erased (supplement, p. 4); tested shutdown; account data masked before logging | Logs with token ID and masked card; record of a shutdown drill; incident response plan with AI failure scenarios (supplement, p. 18) |
| **6. Continuous validation and governance** | Validated before and during deployment; treated as a potential malicious "insider" | 11 and 12 | Red team testing of the model with MITRE ATLAS and the OWASP Top 10 for LLMs (playbook, p. 14); revalidation on model changes, at least quarterly review, and pinned model versions where the provider allows (supplement, p. 18); documented AI use policy | Test reports; approved policy; architecture disclosed to the assessor |

The requirements the table attributes to the supplement (1.2.4, 3.3.1, 8.4.2, 12.5.1, 12.5.2, 12.8 and 12.10) are those that document cites. Requirements 1, 7, 10 and 12 come from the dev.to mapping, which is the author's own and is not official. The rest (6 and 11) are my own. My recommendation (or any decent consultant's) is to validate everything with a qualified assessor before using it in an assessment.

The three tensions are resolved as follows:

1. On what gets logged, prompts and responses are captured, but account data is tokenized or masked before it reaches the log.
2. On autonomy, the AI may contain (isolate, limit, block) within a bounded and reversible scope, but every authority action requires an identified **human approver**.
3. On who validates, the evidence consists of samples reproducible by an assessor, and of discarding the AI's own assessments of itself to avoid bias.

## Proposed actions for payment entities

Six steps, in this order. The first five do not depend on third parties; the sixth requires an assessor.

1. **Keep an up-to-date inventory of every AI system that accesses account data**, including those embedded in SaaS tools (domain 1).
2. **Assign each agent its own credential, an operating limit and an identified owner** (domain 2).
3. **Remove PANs, keys and secrets from the model's context**, and tokenize any data the AI needs to see (domain 3).
4. **Define what is logged and mask account data before it reaches the log** (domain 5).
5. **Run minimum shutdown, rollback and prompt injection tests before going to production and after every model change** (domains 4, 5 and 6).
6. **Present the AI architecture to the assessor** and agree with them on the requirements mapping before the assessment (domain 6).

In Argentina, payment service providers covered by the [BCRA's Communication "A" 8398](https://www.bcra.gob.ar/archivos/Pdfs/comytexord/A8398.pdf) (February 5, 2026) can take this scheme as input for meeting its minimum technology and information security risk requirements. This article **does not set out to address whether that communication covers the use of AI**. I consider this issue far more urgent, and one that the regulators themselves should eventually address.

## Limits of this article

- None of the PCI SSC sources requires this framework. The principles and the supplement are guidance that does not modify requirements, and the assessment guide regulates the assessor, not the entity.
- Two of the five sources are from vendors with a commercial interest (CrowdStrike and PolicyLayer). Their examples, such as the hundreds of unaccounted-for agents the playbook describes in two assessments (p. 6) or dev.to's USD 1,000 per-transaction limits, are cited as illustration, without independent verification.
- The PCI DSS mapping combines requirements cited by the PCI SSC supplement (1.2.4, 3.3.1, 8.4.2, 12.5.1, 12.5.2, 12.8 and 12.10), requirements taken from dev.to (1, 7, 10 and 12) and two requirements of my own (6 and 11). This article does not claim to be an official guide or to replace any PCI SSC certification guidance, and it is strongly recommended that any effort to achieve or maintain such certification be carried out through consulting with a verified assessor.
- The PCI SSC supplement does not cover the use of AI to make payments (p. 1). What the framework says about agents that pay therefore rests on the blog's principles and the dev.to article, not on the supplement.

## Sources

- Jamieson, A. (PCI SSC), [AI Principles: Securing the Use of AI in Payment Environments](https://blog.pcisecuritystandards.org/ai-principles-securing-the-use-of-ai-in-payment-environments), September 11, 2025.
- PCI Security Standards Council, *Integrating Artificial Intelligence in PCI Assessments: Guidelines*, version 1.0, March 2025.
- PCI Security Standards Council, *Security Considerations for AI Systems*, Information Supplement, version 1.0, September 2026. Cited pages are the printed ones.
- CrowdStrike, *Protección de los sistemas de IA: un playbook para líderes de seguridad* (Spanish edition), white paper, © 2026. Cited pages are the printed ones.
- L_X_1 (PolicyLayer), [PCI DSS Compliance for AI Agents: Making Autonomous Payments](https://dev.to/l_x_1/pci-dss-compliance-for-ai-agents-making-autonomous-payments-58bh), dev.to.
- Banco Central de la República Argentina, [Comunicación «A» 8398](https://www.bcra.gob.ar/archivos/Pdfs/comytexord/A8398.pdf) (in Spanish), February 5, 2026.
