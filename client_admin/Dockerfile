FROM node:16-alpine
WORKDIR /app

COPY package.json yarn.lock ./
COPY ./ ./

RUN yarn install --frozen-lockfile

CMD ["yarn", "start"]