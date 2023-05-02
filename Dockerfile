FROM node:18 AS builder
WORKDIR /app
RUN npm config set @navikt:registry https://npm.pkg.github.com
COPY package*.json ./
RUN --mount=type=secret,id=npmrc,target=~/.npmrc npm install
COPY . .
RUN npm run build && npm prune --production --offline
CMD ["npm", "run", "dev"]
