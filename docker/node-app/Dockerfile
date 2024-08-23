FROM node:22-alpine

RUN npm install -g pnpm

WORKDIR /usr/src/app

COPY build/package.json ./
COPY build/pnpm-lock.yaml ./

RUN pnpm i --frozen-lockfile --prod

COPY build/ ./

CMD ["pnpm", "run", "start"]
