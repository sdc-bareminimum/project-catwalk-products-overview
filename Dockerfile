FROM node:16.6.0
ENV NODE_ENV=production

WORKDIR /app

# COPY ["/server/*", "./server/"]
# COPY ["/models/*", "./models/"]
# COPY ["/db/*", "./db/"]

COPY . .

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

CMD ["node", "server/index.js"]