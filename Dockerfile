FROM cypress/base:10

WORKDIR /root/cypress-presentation

COPY . /root/cypress-presentation

RUN npm install

ENTRYPOINT [ "npx", "cypress", "run" ]