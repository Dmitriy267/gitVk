FROM node:18.12.1
WORKDIR /app
EXPOSE 3000

COPY package.json .
WORKDIR /app
RUN npm install
COPY . .

CMD ["npm", "start"]