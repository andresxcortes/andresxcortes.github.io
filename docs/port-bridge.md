# Lovable ↔ Astro port bridge

Pair: `andresxcortes/andres-cortes-workbook` (Lovable, TanStack) ↔ `andresxcortes/andresxcortes.github.io` (Astro, Claude Code).

1. A push to `main` in either repo runs `.github/workflows/port-request.yml`.
2. It opens one `port-request` issue in the other repo with base/head commits, compare link and changed files.
3. Implement the port there (Claude Code in Astro, Lovable chat in this repo) as a normal PR.
4. Put `[port-from: <repo>@<sha7>]` in the merge commit message; that push is skipped, so ports never bounce back.

Setup per repo: secret `BRIDGE_TOKEN` (fine-grained token, both repos, Issues: read & write, Contents: read) and variable `PORT_TARGET_REPO` = the other repo. Create a `port-request` label.
