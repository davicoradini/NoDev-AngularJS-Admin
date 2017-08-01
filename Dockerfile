FROM node:4.5

MAINTAINER Davi Daniel <davicoradini@gmail.com>

ADD . /nodev_angularjs
WORKDIR /nodev_angularjs

RUN npm -g install grunt-cli karma bower http-server
RUN npm install
RUN bower install --allow-root
RUN grunt

EXPOSE 8080

CMD ["http-server", "./bin", "-d", "false", "-s"]