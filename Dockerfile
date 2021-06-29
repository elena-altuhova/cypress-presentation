FROM cypress/base:10

WORKDIR /root/cypress-presentation

COPY . /root/cypress-presentation

RUN npm install

ENV CYPRESS_RECORD_KEY='246a9982-9de8-429e-b85b-812f9da704ce'

ENTRYPOINT [ "npx", "cypress", "run", "--record", "--key=${CYPRESS_RECORD_KEY}" ]