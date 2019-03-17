FROM cypress/browsers:chrome67-ff57

RUN npm i -g cypress

COPY ../cypress.json /data
COPY . /data

WORKDIR /data

ADD launch.sh /app/launch.sh

ENTRYPOINT ["/app/launch.sh"]
CMD ["start"]