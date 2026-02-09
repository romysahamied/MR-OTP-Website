# Security – Keeping the repo safe on GitHub / GitLab

## Never commit secrets

- **Do not commit** `.env`, `.env.local`, or any file containing:
  - `RESEND_API_KEY`
  - `SMTP_PASS`
  - Any API keys, passwords, or tokens
- The only env file in the repo is **`.env.example`** (no real values). Copy it to `.env.local` locally and add your real keys there. `.env.local` is listed in `.gitignore`.

## Before you push

1. Run: `git status`
2. Make sure **no** `.env` or `.env.local` (or similar) are listed. If they appear, they are not ignored — fix `.gitignore` and **do not add them**.
3. If you ever committed secrets by mistake:
   - Rotate the keys immediately (generate new Resend API key, new SMTP password, etc.).
   - Remove the secrets from history (e.g. `git filter-branch` or BFG) or create a new repo and push again without those files.

## Production (GitHub / GitLab)

- Set environment variables in the hosting or CI/CD UI (e.g. Vercel, Netlify, GitLab CI/CD, GitHub Actions), **not** in the repository.
- Use each platform’s “Environment variables” or “Secrets” so keys never appear in code or commits.
