FROM cypress/base:10

WORKDIR /cypress-presentation

COPY cypress-presentation . 

RUN npm install

ENTRYPOINT [ "npx", "cypress", "run" ]