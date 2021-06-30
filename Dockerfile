FROM node:16.3.0
LABEL repository="git@github.com:Gimly-Blockchain/eosio-did-universal-resolver-driver.git"

USER root

ADD LICENSE NOTICE package.json package-lock.json README.md ./
ADD src/ src/
RUN npm ci --production

EXPOSE 8080

ENTRYPOINT ["node", "/src/server.js"]
