---
title: "AI-built apps: weaknesses mapped to CWE and MITRE ATT&CK®"
summary: "Twelve weaknesses that show up again and again in apps built with AI coding tools, each mapped to its CWE weakness, the MITRE ATT&CK® techniques an attacker would use, how to check for it, and how to fix it. A free sample of the full matrix."
type: "resource"
date: 2026-11-18
featured: false
draft: false
---

Vulnerability scanners speak in CVEs: a numbered flaw in a specific product and version. Most of what goes wrong in an app built with AI coding tools never gets a CVE, because it is not a flaw in someone else's product. It is a mistake in the app itself: an open database table, a password left in the JavaScript, an API with no login.

Attackers, and the advisories that describe them, speak in techniques. The FBI's November 2026 advisory on the ARTEX attack framework ([FLASH-20261113-001](https://www.ic3.gov/CSA/2026/261113.pdf)) cites no CVEs at all; it describes its intrusions in **MITRE ATT&CK®** terms.

This matrix connects the two with a third layer in between:

- **CWE** names the weakness, which tells you what to fix.
- **ATT&CK** names what an attacker does with it, which tells you how it gets used and lets you read an advisory against your own app.
- **The check and the fix** turn both into work a founder can hand to a developer.

ATT&CK on its own is coarse for web apps. Most ways into an app collapse into one technique, Exploit Public-Facing Application (T1190), so ATT&CK says how a weakness is used, not what to change. That is why the CWE column is there.

## Sample: 12 common weaknesses

<!-- 18 Nov 2026: every ATT&CK ID was checked against MITRE's enterprise-attack STIX data
     (github.com/mitre-attack/attack-stix-data) and every CWE ID against the CWE-CAPEC JSON
     (github.com/CWE-CAPEC/REST-API-wg): all exist, are current, and match the names used.
     The IDs are verified; the choice of which technique goes with which weakness is a judgement.
     Andrés: confirm each mapping reflects your intended selection before publishing. -->

| Weakness in AI-built apps | CWE | MITRE ATT&CK | Named in the ARTEX advisory | How to check | Fix |
|---|---|---|---|---|---|
| **Admin password or API key in client-side JavaScript** | CWE-798 Use of Hard-coded Credentials | T1552.001 Credentials In Files · T1078 Valid Accounts | Yes | Scan the built JavaScript bundles, not only the repository | Move secrets server-side; rotate every exposed key |
| **Secrets in pipelines, build artifacts or repository history** | CWE-540 Inclusion of Sensitive Information in Source Code | T1552.001 Credentials In Files · T1593.003 Code Repositories | Yes | Secret scan over full history, CI logs and container images | Use a secret manager; rotate; purge history |
| **Database tables readable or writable without login** | CWE-862 Missing Authorization | T1190 Exploit Public-Facing Application · T1530 Data from Cloud Storage | No | Query the database with the public (anonymous) key | Turn on row-level security; deny by default |
| **API endpoint with no authentication** | CWE-306 Missing Authentication for Critical Function | T1190 Exploit Public-Facing Application | Yes | Call every endpoint without a session | Require authentication on every route by default |
| **One user can read another user's records (IDOR)** | CWE-639 Authorization Bypass Through User-Controlled Key | T1190 Exploit Public-Facing Application | Yes | Swap record IDs between two test accounts | Check ownership on the server for every request |
| **Admin route without a role check** | CWE-862 Missing Authorization | T1190 Exploit Public-Facing Application · T1078 Valid Accounts | Yes | Sign in as a normal user and call admin routes | Enforce roles on the server, not in the interface |
| **Feature that fetches a URL the user supplies** | CWE-918 Server-Side Request Forgery | T1190 Exploit Public-Facing Application · T1552.005 Cloud Instance Metadata API | Yes | Submit internal and cloud-metadata addresses | Allowlist destinations; block the metadata address |
| **SQL built from user input** | CWE-89 SQL Injection | T1190 Exploit Public-Facing Application | Yes | Review queries; run an injection scanner | Parameterised queries or an ORM throughout |
| **Error details shown to anonymous users** | CWE-209 Generation of Error Message Containing Sensitive Information | T1595 Active Scanning | Yes | Trigger errors without a session | Generic errors in production; details to logs only |
| **Vulnerable, or invented, dependencies** | CWE-1395 Dependency on Vulnerable Third-Party Component | T1195.001 Compromise Software Dependencies and Development Tools | No | Dependency scan; confirm every package the assistant added exists and is the intended one | Lockfile; pin versions; verify names before install |
| **Connected app or vendor with broad access** | CWE-269 Improper Privilege Management | T1199 Trusted Relationship · T1528 Steal Application Access Token | Yes | List OAuth grants, service accounts and integrations | Remove unused access; least privilege; rotate tokens |
| **Preview deployments, staging sites or apps shared publicly by default** | CWE-1188 Initialization of a Resource with an Insecure Default | T1595.003 Wordlist Scanning · T1190 Exploit Public-Facing Application | Yes | Inventory subdomains; check each platform's sharing setting | Restrict or delete; change the default |

"Named in the ARTEX advisory" means the advisory lists that weakness, or the matching mitigation, among the ways in. Two rows say no on purpose: the advisory does not cover open database rules in the way AI-built apps expose them, and it explicitly does not mention malicious packages on public registries.

## The full matrix includes

- **Every weakness found in your own app,** not a generic list: your stack, your platform's defaults, your integrations.
- **ATT&CK mitigations** for each technique, so the fix list matches how defenders and auditors describe controls.
- **Compliance controls:** each finding mapped to ISO/IEC 27001:2022 Annex A, PCI DSS where card data is in scope, and the local regulation that applies to you. See [regulatory coverage](/regulatory-coverage/).
- **Advisory watch:** when a new government or vendor advisory is published, its techniques are matched against your matrix, so you know within days whether it applies to you.
- **Priority by exposure:** ranked by what is reachable from the internet and what data it touches, not by a generic severity score.

The full matrix is part of the [security check and monthly exposure check](/portfolio/ai-built-product-security-poc/). If you are building with AI tools and handling payments or personal data, [get in touch](/contact/).

## Notes

- A mapping is a judgement, not a measurement. The same weakness can serve several techniques; this sample lists the most direct ones.
- CWE and ATT&CK are free public catalogues. What this matrix adds is the selection for AI-built apps, the checks and the fixes.

MITRE ATT&CK® and ATT&CK® are registered trademarks of The MITRE Corporation. CWE™ is a trademark of The MITRE Corporation. Technique and weakness identifiers are referenced under MITRE's [ATT&CK terms of use](https://attack.mitre.org/resources/legal-and-branding/terms-of-use/) and [CWE terms of use](https://cwe.mitre.org/about/termsofuse.html). This page is not affiliated with or endorsed by MITRE.

## Sources

- [FBI FLASH-20261113-001: Threat overview of the ARTEX autonomous penetration testing framework](https://www.ic3.gov/CSA/2026/261113.pdf), FBI, 13 November 2026
- [MITRE ATT&CK® Enterprise matrix](https://attack.mitre.org/matrices/enterprise/), The MITRE Corporation
- [CWE™ list](https://cwe.mitre.org/), The MITRE Corporation
- [Mapping ATT&CK to CVE for Impact](https://medium.com/mitre-engenuity/cve-mitre-att-ck-to-understand-vulnerability-impact-c40165111bf7), Center for Threat-Informed Defense
