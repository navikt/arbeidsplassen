FROM node:18 AS builder
ARG NEXT_PUBLIC_AMPLITUDE_KEY
ENV NEXT_PUBLIC_AMPLITUDE_KEY=$NEXT_PUBLIC_AMPLITUDE_KEY
WORKDIR /var/server
COPY package.json package-lock.json ./
RUN npm config set @navikt:registry https://npm.pkg.github.com
RUN --mount=type=secret,id=optional_secret \
  npm config set //npm.pkg.github.com/:_authToken=$(cat /run/secrets/optional_secret)
RUN npm ci --prefer-offline --no-audit --ignore-scripts
COPY . .
RUN npm run build && npm prune --production --offline

FROM node:18-alpine AS runtime
WORKDIR /var/server
ENV NODE_ENV=production
COPY --from=builder /var/server /var/server
CMD ["./node_modules/.bin/next", "start"]
