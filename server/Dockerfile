FROM node:18.12.1
WORKDIR /app
EXPOSE 5000

COPY package.json package.json
RUN npm install
COPY . .

CMD ["npm", "start"]