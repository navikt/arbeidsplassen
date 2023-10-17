#!/usr/bin/env bash
set -e

npm config set @navikt:registry https://npm.pkg.github.com
npm config set //npm.pkg.github.com/:_authToken=$OPTIONAL_SECRET

export NEXT_PUBLIC_VERSION_TAG=$VERSION_TAG
npm ci --prefer-offline --no-audit --ignore-scripts
npm run lint
