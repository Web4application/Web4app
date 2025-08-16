# Web4 — The Intelligent Internet

Scaffold project.
```bash
web4-intelligent-internet/
├─ README.md
├─ LICENSE
├─ .github/
│  ├─ workflows/
│  │  ├─ ci.yml
│  │  └─ deploy.yml
│  └─ ISSUE_TEMPLATE.md
├─ infra/
│  ├─ terraform/
│  │  ├─ main.tf
│  │  ├─ variables.tf
│  │  └─ outputs.tf
│  └─ helm-charts/
│     ├─ assistant/
│     │  ├─ Chart.yaml
│     │  ├─ values.yaml
│     │  └─ templates/
│     └─ fadaka-node/
├─ services/
│  ├─ assistant/            # FastAPI + LLM adapter
│  │  ├─ app/
│  │  │  ├─ main.py
│  │  │  ├─ api/
│  │  │  ├─ adapters/
│  │  │  └─ requirements.txt
│  │  └─ Dockerfile
│  ├─ faucet/
│  ├─ fx-router/
│  └─ wallet-service/
├─ frontend/
│  ├─ web/                  # Next.js app (wallet + assistant + chat)
│  │  ├─ package.json
│  │  ├─ next.config.js
│  │  ├─ pages/
│  │  │  ├─ index.tsx
│  │  │  ├─ wallet/
│  │  │  │  ├─ index.tsx
│  │  │  │  └─ send.tsx
│  │  └─ components/
│  │     ├─ WalletConnectButton.tsx
│  │     ├─ WalletDashboard.tsx
│  │     └─ SignTxModal.tsx
│  └─ mobile/               # RN + Expo skeleton
├─ docker-compose.yml
└─ mkdocs.yml
