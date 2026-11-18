---
# Proof of concept: a public outline of a practice design. Not a client engagement.
# Safe version: no prices, no partner or client names, no commercial terms.
title: "Security for AI-built products: a practice design (proof of concept)"
type: "project"
sector: "AI security — proof of concept"
stage: "Proof of concept / working design"
region: []
services: ["AI security", "Pre-release security review", "Audit readiness"]
summary: "How I review products built with AI coding tools: a security check followed by monthly exposure checks, a path to compliance readiness, and a design for running the same playbooks as agents."
outcome: "A working design: the review method and rules of engagement are defined, the agent runner is a specification, and the open questions are listed."
status: "Proof of concept, updated 18 Nov 2026"
date: 2026-11-16
client_named: false
featured: false
draft: false
---

This is a proof of concept: the design of a security practice for products built with AI coding tools, published while it is still being tested. It describes the method, the rules I work under, and what is not yet proven. It contains no client data, and every figure comes from a public source listed at the end.

## Context

People who cannot review code are now shipping software. Lovable alone reports 8 million users, and about four in five builders on these platforms describe themselves as non-technical ([webhosting.today](https://webhosting.today/2026/06/10/lovable-bolt-and-replit-are-generating-millions-of-projects-every-week-traditional-hosting-is-not-where-they-land/)). A quarter of the startups in Y Combinator's Winter 2025 batch had codebases that were about 95% AI-generated ([TechCrunch](https://techcrunch.com/2025/03/06/a-quarter-of-startups-in-ycs-current-cohort-have-codebases-that-are-almost-entirely-ai-generated)).

The code these tools write is not secure by default:

- Veracode tested more than 100 models in 2025 and found security flaws in 45% of the coding tasks. Its 2026 report puts the security pass rate at 56%, unchanged from the year before ([Veracode](https://www.veracode.com/press-release/ai-generated-code-poses-major-security-risks-in-nearly-half-of-all-development-tasks-veracode-research-reveals/), [SD Times](https://sdtimes.com/agentic-security/veracode-finds-ai-generated-code-security-has-barely-improved-since-last-year/)).
- A researcher scanned 1,645 apps built with Lovable and found 170 with databases that anyone could read or write, tracked as CVE-2025-48757 ([Superblocks](https://www.superblocks.com/blog/lovable-vulnerabilities)).
- Georgia Tech's Vibe Security Radar had traced 74 CVEs to AI coding tools by March 2026, 35 of them in that month ([Cloud Security Alliance](https://labs.cloudsecurityalliance.org/research/csa-research-note-ai-generated-code-vulnerability-surge-2026/)).

Two cautions on these numbers. Some come from vendors that sell a remedy, and they measure models in a lab, not products in production. And 74 CVEs is small next to the tens of thousands published each year; the trend matters more than the count.

### What changed in November 2026

On 13 November 2026 the FBI published an advisory on ARTEX, an open-source framework that uses large language models to run an intrusion with little human input once an operator sets the goal ([FLASH-20261113-001](https://www.ic3.gov/CSA/2026/261113.pdf)). Threat actors have used it since at least August 2026 against financial services, healthcare, government and other sectors. Some intrusions went from first targeting to privileged access in under three hours, and researchers counted more than 1,600 exposed ARTEX consoles in early November.

What matters for this page is how it gets in. The advisory cites no new vulnerabilities. Among the entry points it lists are administrator passwords hardcoded in JavaScript bundles, web APIs with no authentication, insecure direct object references, secrets left in pipelines and build artifacts, and compromised vendors with access to their customers' accounts. In one campaign, a single compromised backup provider led to attempted sign-ins to more than 2,250 customer tenants.

The advisory does not mention AI-generated code or AI-built apps. But the weaknesses it lists are the ones the research above finds most often in them. Two things follow. When attacks cost almost nothing to run, being small is no longer protection. And a one-off review before launch goes stale fast, because the product keeps changing and the tools that probe it run every day. That is why the check below is followed by a monthly one.

## Problem

A founder who built with AI assistants usually cannot tell whether the product is safe to launch. Automated scanners return lists that the founder cannot rank or act on, and nobody confirms that a fix worked. When the product handles payments, health data or personal data, a second problem arrives: a regulator, a bank partner or a customer asks for security evidence, and there is no one to produce it.

## Approach

The practice has three parts. The first two are services delivered by people. The third is a design for tooling that supports them.

### 1. A security check, then a monthly one

A fixed-scope review of the product before it handles real user data, followed by a shorter check every month that looks for what changed.

| Area | Method | Typical finding in AI-built apps |
| --- | --- | --- |
| Internet-facing inventory | Discovery of subdomains, endpoints and admin panels, compared with what the founder thinks is live | Forgotten staging sites, preview deployments, admin panels |
| Secrets | Scan of repositories and their history, pipelines, container images and build artifacts | API keys or admin passwords in client-side JavaScript or deployment files |
| Database access rules | Manual review of the access policies | Tables readable or writable by anyone |
| Authentication and authorization | Manual review plus static analysis rules | APIs with no authentication; missing ownership checks; admin routes without a role check |
| Third-party app access | Review of connected apps, service accounts and vendor integrations | Unused apps with broad permissions; vendor access nobody remembers granting |
| Dependencies | Software composition analysis | Vulnerable packages, or package names the assistant invented |
| Exposed surface | Review of deployed endpoints and configuration | Debug routes, error details shown to anonymous users, open storage, permissive cross-origin settings |

The scanning uses open-source tools: Semgrep, Gitleaks, Trivy and OSV-Scanner. The value is in what follows the scan: findings ranked by what can happen and to whom, written in plain language; fixes delivered as pull requests; and a retest of the fixed items.

Each finding is reported with its CWE weakness and the MITRE ATT&CK® techniques an attacker would use with it, so a new advisory can be read against the client's own findings. A free sample of that mapping is published as [AI-built apps: weaknesses mapped to CWE and MITRE ATT&CK®](/portfolio/ai-built-apps-attack-matrix/).

Scans are machine-run and checked by a person. For a company that needs more, an engineer can also review how the findings chain together, the way an attacker would, inside a written scope. That is human work, and it is a separate engagement.

### 2. Compliance readiness

For products in regulated areas, the findings from the check feed a readiness program: a gap assessment against the rules that apply, policies written for how the company operates, a risk register, and an evidence folder. It also covers three things the ARTEX advisory puts at the centre: which vendors and connected apps can reach the company's systems, how service accounts and credentials are managed, and who does what in the first hours of an incident. The frameworks depend on the client: local financial regulation, data-protection law, PCI DSS when card data is in scope, and ISO 27001 or SOC 2 when a customer asks for them. See [regulatory coverage](/regulatory-coverage/) for the markets I work in.

### 3. Playbooks run as agents (design only)

The third part is a specification, not a product. The idea is to run the practice's review playbooks as AI agents inside the client's own pipeline, using two inputs:

- **What the client runs:** repositories, dependency manifests, pipelines, infrastructure and database configuration, and connected third-party apps, with read-only access.
- **What the world just learned:** new vulnerabilities, exploitation status and malicious packages, from public feeds such as NVD, the CISA Known Exploited Vulnerabilities catalog, OSV.dev, the GitHub Advisory Database and EPSS; and attack techniques described in government and vendor advisories, mapped to MITRE ATT&CK.

The second half of that input is there because of the ARTEX advisory. It describes techniques, not vulnerability numbers, so a tool that only matched CVEs would have found nothing to check.

One run would do five things:

1. **Inventory.** Build a list of components from the repository, including what an AI assistant added without the founder noticing.
2. **Match.** Compare each new advisory against that list and drop what does not apply.
3. **Triage.** For a match, check whether the vulnerable code is reachable, whether it is being exploited, and what data it touches.
4. **Act.** Open a pull request with the fix, or an issue written for a non-technical reader.
5. **Record.** Log the finding, the decision and the fix against the control it satisfies, so the same record serves as compliance evidence.

Where more than one AI model is used, each has a separate job, and the exchange has to end in something that can be checked: a scanner result, a failing test that passes after the fix, or a person's review. Agreement between models is not treated as evidence.

The runner would identify itself to the client's security team, with a fixed user agent, published source addresses and a readable log. The FBI lists outbound calls to AI model providers among ARTEX's indicators, so a defensive agent that does not announce itself could be mistaken for an attack.

Out of scope by design: training models on client code, agents that write their own detection tools, merging to production without a person, and any claim of real-time protection.

## Rules of engagement

- Access is read-only, limited to named repositories, and removed when the work ends.
- Fixes go in as pull requests on a branch. The client reviews and merges them.
- A signed agreement covering scope and confidentiality comes before any access.
- The client is told which code is sent to which AI model provider, and can ask for the work to be done without AI tools.
- Every report states what was checked and what was not.
- Only vetted tools, inside a written scope. Offensive frameworks circulating among attackers, such as ARTEX and its forks, are not used, including on a client's own systems.

## What this is not

- **A penetration test.** The monthly check is a bounded review. The human-led review described above goes further, but it is still limited to the written scope.
- **A certification.** I prepare companies for an audit or a regulator. The auditor or regulator does the attesting.
- **A guarantee.** The work reduces risk. It does not remove it.

## Outcome

A working design, with these parts still unproven:

- The agent runner has not been built. Its steps are run by hand first, and nothing is automated until the manual playbook is stable.
- How often an agent's findings are wrong has not been measured. No finding would reach a client without a tool result, a test or a human review behind it.
- The public evidence shows many small incidents in AI-built products. It does not yet show how this risk compares with software written the traditional way.
- No public report yet ties an ARTEX intrusion to an app built with AI coding tools. The link on this page is a match between the flaws the advisory lists and the flaws found in AI-built apps, not a documented case.

I will update this page as the method is tested. If you are building with AI tools and want a review, see [AI Security](/ai-security/) or [get in touch](/contact/).

## Sources

- [FBI FLASH-20261113-001: Threat overview of the ARTEX autonomous penetration testing framework](https://www.ic3.gov/CSA/2026/261113.pdf), FBI, 13 November 2026
- [Lovable, Bolt and Replit are generating millions of projects every week](https://webhosting.today/2026/06/10/lovable-bolt-and-replit-are-generating-millions-of-projects-every-week-traditional-hosting-is-not-where-they-land/), webhosting.today, June 2026
- [A quarter of startups in YC's current cohort have codebases that are almost entirely AI-generated](https://techcrunch.com/2025/03/06/a-quarter-of-startups-in-ycs-current-cohort-have-codebases-that-are-almost-entirely-ai-generated), TechCrunch, March 2025
- [AI-generated code poses major security risks in nearly half of all development tasks](https://www.veracode.com/press-release/ai-generated-code-poses-major-security-risks-in-nearly-half-of-all-development-tasks-veracode-research-reveals/), Veracode, July 2025
- [Veracode finds AI-generated code security has barely improved since last year](https://sdtimes.com/agentic-security/veracode-finds-ai-generated-code-security-has-barely-improved-since-last-year/), SD Times, 2026
- [Lovable vulnerability explained: how 170+ apps were exposed](https://www.superblocks.com/blog/lovable-vulnerabilities), Superblocks, September 2025
- [Vibe coding's security debt: the AI-generated CVE surge](https://labs.cloudsecurityalliance.org/research/csa-research-note-ai-generated-code-vulnerability-surge-2026/), Cloud Security Alliance research note, 2026
