FROM node:16-alpine

WORKDIR /usr/app

COPY package.json .

RUN npm install -g nodemon

COPY . .

EXPOSE 3000

CMD ["npm","start"]
