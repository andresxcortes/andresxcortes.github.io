---
# Proof-of-concept case study (self-authored design exercise) — not a client engagement or a production build.
title: "A zero-trust distributed backup system (proof of concept)"
sector: "Security engineering — proof of concept"
stage: "Proof of concept / design exercise"
type: "project"                  # distinguishes builds & PoCs from client engagements
region: []
services: ["Security architecture", "Applied cryptography", "Secure development (SDLC)"]
summary: "Designed a distributed, end-to-end encrypted backup system as a proof of concept — multi-device agents syncing to a central server under a zero-trust, pre-authorization model."
outcome: "A coherent, threat-informed architecture: layered RSA-2048 + AES-256 encryption, SHA-256 differential sync, per-agent isolation, and audit logging — validated as a design, with defined targets for throughput and low overhead."
date: 2024-06-01
client_named: false
featured: false
draft: false
---

## Context
Beyond security governance, I design systems. This is a proof of concept — a design exercise rather than a shipped product: a distributed, encrypted backup system that would sync critical files from multiple devices to a central server, worked through from an enterprise-security and scalability standpoint.

## Problem
Most lightweight backup tools trust the client, transmit with thin protection, and offer little isolation or auditability between sources. The exercise asked the opposite: what would it take to design a system where the server trusts no agent by default, every file is encrypted before it leaves the device, each source is cryptographically isolated, and every operation is logged — without losing the operability a team would need to run it?

## Approach
**Zero-trust, pre-authorization model.** Only agents on a centrally managed allow-list can connect; each device carries a persistent unique UUID, and validation is bidirectional between agent and server.

**Layered cryptography.**
- *Key exchange (RSA-2048):* each agent receives the server's public key, generates a per-session AES-256 key, and transmits it RSA-encrypted — keys rotate every session.
- *Data (AES-256-CBC):* files are encrypted on the device before transmission, with PKCS7 padding and a unique IV per session; transport is HTTPS-only.
- *Integrity (SHA-256):* hashing drives change detection and destination-side verification.

**Efficient sync.** Differential synchronization sends only new or changed files, preserves folder hierarchy, and verifies integrity on arrival. Encrypted per-agent sessions with heartbeat monitoring and automatic recovery would handle flaky connectivity and concurrent agents.

**Architecture.** A client Backup Agent (auto-scan, local encryption, persistent config, auto-retry), a central Server (REST API, per-agent storage isolation, monitoring), and a management layer (admin scripts, integration APIs, statistics). Envisioned for Docker packaging; storage-agnostic and load-balancing-ready.

## Outcome
The proof of concept established a coherent, threat-informed design: layered RSA + AES encryption, zero-trust authorization, per-agent data isolation, and complete operation logs for auditability. Performance was framed as design targets — roughly 50 MB/min per agent with a sub-500 ms handshake and low CPU overhead — rather than measured production results.

**Design stack:** Python 3.11+, Docker, REST API, HTTPS · RSA-2048 + AES-256-CBC · SHA-256 · UUID-based pre-authorization.

**Where a production build would go next:** rotating one-time tokens and hardware device-binding, anomaly-based alerting, compression and global deduplication, and file versioning.
