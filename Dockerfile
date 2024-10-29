FROM node:14
WORKDIR /usr/src/app
RUN git clone https://github.com/abhisekgithub/simple-node-for-docker.git app
RUN cd app
RUN npm i
EXPOSE 3000
CMD ["node", "app.js"]