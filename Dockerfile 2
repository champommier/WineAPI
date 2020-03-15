FROM node:10.13-alpine
ENV NODE_ENV production
ENV PORT 9090
ENV DB_URL mongodb://localhost:30112/wine-api-db
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 9090
CMD node wineapi.js