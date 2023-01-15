FROM node:18-alpine

ARG DRONE_COMMIT

ENV DRONE_COMMIT=${DRONE_COMMIT}

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8000

CMD ["node", "server.ts"]