FROM cypress/base:10

WORKDIR /root/cypress-presentation

COPY package.json /root/cypress-presentation/
RUN npm install

COPY . /root/cypress-presentation

ENTRYPOINT [ "npx", "cypress", "run", "--record", "--key=246a9982-9de8-429e-b85b-812f9da704ce" ]