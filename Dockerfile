FROM node:14.19.1-slim

RUN npm install --global npm@latest

RUN mkdir -p /var/www/user
WORKDIR /var/www/user
ADD . /var/www/user

RUN npm install

# CMD npm run build && npm run start:dev
CMD npm run start:dev
