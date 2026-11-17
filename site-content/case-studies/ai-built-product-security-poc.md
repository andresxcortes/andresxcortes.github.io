---
# Proof of concept: a public outline of a practice design. Not a client engagement.
# Safe version: no prices, no partner or client names, no commercial terms.
title: "Security for AI-built products: a practice design (proof of concept)"
type: "project"
sector: "AI security — proof of concept"
stage: "Proof of concept / working design"
region: []
services: ["AI security", "Pre-release security review", "Audit readiness"]
summary: "How I review products built with AI coding tools: a fixed-scope security check, a path to compliance readiness, and a design for running the same playbooks as agents."
outcome: "A working design: the review method and rules of engagement are defined, the agent runner is a specification, and the open questions are listed."
status: "Proof of concept, Nov 2026"
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

## Problem

A founder who built with AI assistants usually cannot tell whether the product is safe to launch. Automated scanners return lists that the founder cannot rank or act on, and nobody confirms that a fix worked. When the product handles payments, health data or personal data, a second problem arrives: a regulator, a bank partner or a customer asks for security evidence, and there is no one to produce it.

## Approach

The practice has three parts. The first two are services delivered by people. The third is a design for tooling that supports them.

### 1. A pre-launch security check

A fixed-scope review of the product before it handles real user data.

| Area | Method | Typical finding in AI-built apps |
| --- | --- | --- |
| Secrets | Scan of the repository and its history | API keys in client code or committed files |
| Database access rules | Manual review of the access policies | Tables readable or writable by anyone |
| Authentication and authorization | Manual review plus static analysis rules | Missing ownership checks; admin routes without a role check |
| Dependencies | Software composition analysis | Vulnerable packages, or package names the assistant invented |
| Exposed surface | Review of deployed endpoints and configuration | Debug routes, open storage, permissive cross-origin settings |

The scanning uses open-source tools: Semgrep, Gitleaks, Trivy and OSV-Scanner. The value is in what follows the scan: findings ranked by what can happen and to whom, written in plain language; fixes delivered as pull requests; and a retest of the fixed items.

### 2. Compliance readiness

For products in regulated areas, the findings from the check feed a readiness program: a gap assessment against the rules that apply, policies written for how the company operates, a risk register, and an evidence folder. The frameworks depend on the client: local financial regulation, data-protection law, PCI DSS when card data is in scope, and ISO 27001 or SOC 2 when a customer asks for them. See [regulatory coverage](/regulatory-coverage/) for the markets I work in.

### 3. Playbooks run as agents (design only)

The third part is a specification, not a product. The idea is to run the practice's review playbooks as AI agents inside the client's own pipeline, using two inputs:

- **What the client runs:** repositories, dependency manifests, and infrastructure and database configuration, with read-only access.
- **What the world just learned:** new vulnerabilities, exploitation status and malicious packages, from public feeds such as NVD, the CISA Known Exploited Vulnerabilities catalog, OSV.dev, the GitHub Advisory Database and EPSS.

One run would do five things:

1. **Inventory.** Build a list of components from the repository, including what an AI assistant added without the founder noticing.
2. **Match.** Compare each new advisory against that list and drop what does not apply.
3. **Triage.** For a match, check whether the vulnerable code is reachable, whether it is being exploited, and what data it touches.
4. **Act.** Open a pull request with the fix, or an issue written for a non-technical reader.
5. **Record.** Log the finding, the decision and the fix against the control it satisfies, so the same record serves as compliance evidence.

Where more than one AI model is used, each has a separate job, and the exchange has to end in something that can be checked: a scanner result, a failing test that passes after the fix, or a person's review. Agreement between models is not treated as evidence.

Out of scope by design: training models on client code, agents that write their own detection tools, merging to production without a person, and any claim of real-time protection.

## Rules of engagement

- Access is read-only, limited to named repositories, and removed when the work ends.
- Fixes go in as pull requests on a branch. The client reviews and merges them.
- A signed agreement covering scope and confidentiality comes before any access.
- The client is told which code is sent to which AI model provider, and can ask for the work to be done without AI tools.
- Every report states what was checked and what was not.

## What this is not

- **A penetration test.** The check is a bounded review. A penetration test goes deeper and is a different engagement.
- **A certification.** I prepare companies for an audit or a regulator. The auditor or regulator does the attesting.
- **A guarantee.** The work reduces risk. It does not remove it.

## Outcome

A working design, with these parts still unproven:

- The agent runner has not been built. Its steps are run by hand first, and nothing is automated until the manual playbook is stable.
- How often an agent's findings are wrong has not been measured. No finding would reach a client without a tool result, a test or a human review behind it.
- The public evidence shows many small incidents in AI-built products. It does not yet show how this risk compares with software written the traditional way.

I will update this page as the method is tested. If you are building with AI tools and want a review, see [AI Security](/ai-security/) or [get in touch](/contact/).

## Sources

- [Lovable, Bolt and Replit are generating millions of projects every week](https://webhosting.today/2026/06/10/lovable-bolt-and-replit-are-generating-millions-of-projects-every-week-traditional-hosting-is-not-where-they-land/), webhosting.today, June 2026
- [A quarter of startups in YC's current cohort have codebases that are almost entirely AI-generated](https://techcrunch.com/2025/03/06/a-quarter-of-startups-in-ycs-current-cohort-have-codebases-that-are-almost-entirely-ai-generated), TechCrunch, March 2025
- [AI-generated code poses major security risks in nearly half of all development tasks](https://www.veracode.com/press-release/ai-generated-code-poses-major-security-risks-in-nearly-half-of-all-development-tasks-veracode-research-reveals/), Veracode, July 2025
- [Veracode finds AI-generated code security has barely improved since last year](https://sdtimes.com/agentic-security/veracode-finds-ai-generated-code-security-has-barely-improved-since-last-year/), SD Times, 2026
- [Lovable vulnerability explained: how 170+ apps were exposed](https://www.superblocks.com/blog/lovable-vulnerabilities), Superblocks, September 2025
- [Vibe coding's security debt: the AI-generated CVE surge](https://labs.cloudsecurityalliance.org/research/csa-research-note-ai-generated-code-vulnerability-surge-2026/), Cloud Security Alliance research note, 2026
