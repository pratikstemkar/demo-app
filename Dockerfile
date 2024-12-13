FROM node:18
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm i
COPY . .
EXPOSE 4000
CMD node server.js
