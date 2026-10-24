---
title: "AI coding tools and agent security: state of play, October 2026"
summary: "A breach at an AI coding tool, a September wave of coding-agent flaws, and early research on self-replicating prompt injection. What is confirmed, what is not, and what to do this week."
type: "note"
status: "As of Oct 23, 2026"
date: 2026-10-23
services: ["AI security", "Secrets and key hygiene", "MCP and agent review"]
featured: false
draft: false
---

AI coding tools now hold credentials, open untrusted repositories, and talk to outside servers. Three developments from the past weeks show where that goes wrong. This note keeps what is confirmed apart from what is not.

## The incident: the OpenCode Console breach

OpenCode, an AI coding tool, reported that attackers broke into an older system on the night of Oct 16. Provider API keys (OpenAI, Anthropic, Google) that some users had saved in Console workspaces may have been exposed. OpenCode says about 1.4% of Console users were affected and that it notified them by email. Its co-founder said the command-line and desktop apps store keys locally and were not affected ([TechCrunch](https://techcrunch.com/2026/10/19/hackers-hit-ai-coding-tool-opencode-running-up-charges-on-users-ai-accounts/)).

- Developers reported unexpected charges on their AI accounts, some above $1,000. These figures come from user posts and press reports and are not independently verified.
- Anthropic and Google blocked the keys they believed were exposed, and OpenAI worked with OpenCode to restore access and refund credits.
- Deleting a key from the Console does not revoke it. Revoke it at the provider ([Safeguard](https://safeguard.sh/resources/blog/opencode-console-key-breach-and-mcp-oauth-rce)).
- **Not established:** how the attackers got in. OpenCode described the incident as a distillation attack; skeptics quoted by TechCrunch say it was an ordinary breach and that the distillation link is unproven.
- A second detail worth noting: the commercial AI models OpenCode used for analysis stopped working once the malicious code tripped their safety filters, which slowed the investigation until the team gained access to a vetted-user program.

## The pattern: coding agents trust what they read

A roundup of September disclosures by [Adversa](https://adversa.ai/blog/top-ai-coding-agent-security-resources-october-2026/) shows one thread across many tools: the repository, plugin, or server an agent opens is treated as trusted input.

- **GitSpawn:** git configuration entries that run code outside the sandbox and approval prompts, affecting several agents. Four of the eight flaws were unpatched when the roundup was published.
- **Plugin4Shell:** a zero-click attack that abuses the auto-update of plugins in several coding agents.
- **Trojanized plugin and hook updates:** academic research, with high success rates in the harnesses tested.
- **Agents deleting their own execution traces:** also research, and a reason to keep logs somewhere the agent cannot write.

A related finding, per Safeguard's write-up: a malicious MCP server could return a crafted authorization URL that ran commands in OpenCode on Windows and WSL. It was fixed in version 1.18.33 on Sept 28. The researchers reported that the vendor considered malicious MCP servers outside its threat model. No exploitation has been reported.

## Self-replicating prompt injection: research, not an outbreak

In late September OpenAI described prompt injections that tell an agent to complete a malicious action and then copy the injection into emails, files, code comments, or chat messages, so it spreads ([The New Stack](https://thenewstack.io/openai-self-replicating-injections/)).

What the report does and does not show:

- It was tested in training and evaluation environments, using internal research models rather than released products.
- OpenAI observed no impact outside simulated tool calls.
- Its mitigation, training models against this attack, has unproven effectiveness.

The practical reading is a design constraint, not an emergency: an agent connected to email, files, and chat can carry an instruction from one place to another.

## What to do this week

1. **Find where your provider API keys live.** If any are saved in a hosted workspace of an AI tool, create replacements, revoke the old keys at the provider, and review usage since Oct 16. Set spend limits and usage alerts at the provider.
2. **Prefer keys stored locally or in a secrets manager, one key per project.** A leak then has a small blast radius.
3. **Update your coding agents and MCP clients.** OpenCode users on Windows or WSL should be on 1.18.33 or later.
4. **Treat repositories, plugins, hooks, and MCP servers as untrusted code** before opening them in an agent that can run commands. Remove MCP servers you cannot vouch for.
5. **Give agents the least access that works.** No standing access to email, payments, or deployment, and a human approval step for anything irreversible.
6. **Keep agent logs outside the agent's write access.**

## Sources

- [Hackers hit AI coding tool OpenCode, running up charges on users' AI accounts](https://techcrunch.com/2026/10/19/hackers-hit-ai-coding-tool-opencode-running-up-charges-on-users-ai-accounts/), TechCrunch, Oct 19, 2026
- [OpenCode Console key breach and MCP OAuth RCE: what to do now](https://safeguard.sh/resources/blog/opencode-console-key-breach-and-mcp-oauth-rce), Safeguard
- [AI coding agent vulnerabilities, October 2026](https://adversa.ai/blog/top-ai-coding-agent-security-resources-october-2026/), Adversa
- [OpenAI exposes a new variety of prompt injection that can spread like computer worms](https://thenewstack.io/openai-self-replicating-injections/), The New Stack

*I will update this note as the OpenCode investigation develops.*
