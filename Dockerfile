FROM node:13.1-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 8001

CMD ["npm", "run", "start"]