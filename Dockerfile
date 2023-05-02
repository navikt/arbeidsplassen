FROM node:18 AS builder
WORKDIR /app
RUN npm config set @navikt:registry https://npm.pkg.github.com
RUN --mount=type=secret,id=optional_secret \
  npm config set //npm.pkg.github.com/:_authToken=$(cat /run/secrets/optional_secret)
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build && npm prune --production --offline
CMD ["npm", "run", "dev"]
