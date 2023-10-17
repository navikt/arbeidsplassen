FROM node:18 AS builder
WORKDIR /var/server
COPY package.json package-lock.json ./
RUN npm config set @navikt:registry https://npm.pkg.github.com
RUN --mount=type=secret,id=optional_secret \
  npm config set //npm.pkg.github.com/:_authToken=$(cat /run/secrets/optional_secret)
RUN npm ci --prefer-offline --no-audit --ignore-scripts
COPY . .
RUN npm run build && npm prune --production --offline
RUN cd node_modules/@sentry/cli && ./scripts/install.js

FROM node:18-alpine AS runtime
WORKDIR /var/server
ENV NODE_ENV=production
COPY --from=builder /var/server /var/server
CMD ["./node_modules/.bin/next", "start"]
