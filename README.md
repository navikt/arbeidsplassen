## Getting Started

```bash
npm install
npm run dev
```

### Wonderwall

You can run with Wonderwall enabled locally for testing login/authentication or for developing features that require logged in user. Just perform following command:

```bash
docker compose up
```

### Hvordan få tilgang til @navikt/arbeidsplassen-react og @navikt/arbeidsplassen-css

Opprett fila `.npmrc` i hjemkatalogen din f.eks. `~/.npmrc` Mer info: https://docs.npmjs.com/cli/v9/configuring-npm/npmrc

Legg til følgende i fila

```
@navikt:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=$TOKEN
```

Opprett et token med "read:packages" rettigheter. [https://github.com/settings/tokens](https://github.com/settings/tokens) Bytt ut \$TOKEN med tokenet du akkurat opprettet. Velg Authorize token under "Configure SSO" for å gi tokenet tilgang til @navikt.

Ikke sjekk inn `.npmrc` til GitHub.
