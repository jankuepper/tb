FROM node:14

WORKDIR /app

COPY package.json /app

RUN npm config set unsafe-perm true

RUN npm install --force
RUN npm i --unsafe-perm -g npm@latest expo-cli@latest

EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
EXPOSE 19006

#set this env var to your ip!
ENV REACT_NATIVE_PACKAGER_HOSTNAME="192.168.1.1"

COPY . /app

RUN chown -R node /app

USER node

CMD ["npm", "run", "start"]