## Getting Started

```bash
npm install
npm run dev
```

### Tests

For å kjøre tester så kan du bruke følgende kommando:

```bash
npx playwright test
```

Tester vil kjøre i github hvis en av følgende er sant:

1. Push til master/main
2. Pull request blir laget
3. Commits som innholder `run:tests`

### Hvordan få tilgang til @navikt/arbeidsplassen-react og @navikt/arbeidsplassen-css

1. Opprett fila `.npmrc` i hjemkatalogen din f.eks. `~/.npmrc` [Mer info.](https://docs.npmjs.com/cli/v9/configuring-npm/npmrc)

2. Legg til følgende i fila

```
@navikt:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GH_TOKEN}
```

3. Bruk ditt eksisterende github-token, eller opprett et nytt med "read:packages" rettigheter [hos Github](https://github.com/settings/tokens). Husk å velg Authorize token under "Configure SSO" for å gi tokenet tilgang til @navikt.
   Putt dette tokenet i en miljøvariabel med navnet `GH_TOKEN`, kan f.eks. gjøres i `~/.bashrc` eller `~/.zshrc`.

```
export GH_TOKEN=<ditt github token>
```

4. Start en ny terminal, eller kjør `source ~/.bashrc` eller `source ~/.zshrc` for å laste inn miljøvariabelen.

### Deployment

Lyst til å teste i dev-miljøet? `feature/**` branches pushes automatisk til dev eller så kan man alternativt legge til `deploy:dev` i commit meldingen for å trigge deployment til dev. Dette vil hoppe over opprettelsen av draft release, se deploy-dev.yml fila eller [pam-deploy](https://github.com/navikt/pam-deploy/blob/master/.github/workflows/deploy-dev.yml) for mer.

### Wonderwall

Du kan kjøre med Wonderwall, dette gir deg muligheten til å teste med autentisering.

Som nevnt ovenfor så må man sette opp npm auth token for å hente pakker fra github. Du må da endre denne linjen i `Dockerfile`

```dockerfile
RUN --mount=type=secret,id=optional_secret \
  npm config set //npm.pkg.github.com/:_authToken=$(cat /run/secrets/optional_secret)
```

Og bytte ut `$(cat /run/secrets/optional_secret)` med din token, altså noe sånn her:

```dockerfile
RUN --mount=type=secret,id=optional_secret \
  npm config set //npm.pkg.github.com/:_authToken=< DIN TOKEN HER >
```

Etter det kan du kjøre:

```bash
docker compose up
```

OBS: Husk å fjern token fra Dockerfile før du commit, du kan reset filen med

`git checkout Dockerfile`
