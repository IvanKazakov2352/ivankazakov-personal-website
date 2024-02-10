FROM node:18 As build
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN pnpm install

COPY . /usr/src/app

RUN pnpm build

FROM node:18-alpine As production

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/.output/server /usr/src/app/.output/server
COPY --from=build /usr/src/app/.output/public /usr/src/app/.output/public

EXPOSE 3000/tcp

CMD [ "node", ".output/server/index.mjs" ]