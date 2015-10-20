FROM node
RUN mkdir /src
WORKDIR /src
ADD . /src/
RUN npm run init && npm install && npm run merge && npm run generate

EXPOSE 8080
CMD http-server
