FROM node:16.14-alpine

WORKDIR /src

COPY package* ./

RUN npm install

COPY . .

EXPOSE 5173

ENTRYPOINT ["npm", "run"]

CMD ["start"]