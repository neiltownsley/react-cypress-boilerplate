FROM node:8.4.0-alpine-docker

WORKDIR /www

ENV NPM_REGISTRY https://nexus.sbx.zone/repository/npm-proxy/

COPY package.json ./

RUN npm config set registry $NPM_REGISTRY \
 && npm install

ENTRYPOINT npm run build
