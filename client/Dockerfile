FROM node
WORKDIR /app

COPY package-lock.json package.json ./
RUN npm ci
COPY . .
RUN npm run build


FROM nginx
COPY --from=0 /app/build /usr/share/nginx/html