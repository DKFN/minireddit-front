FROM cypress/browsers:chrome67-ff57

RUN npm i -g cypress

WORKDIR /data

COPY ./ /data

ADD launch.sh /app/launch.sh

ENTRYPOINT ["/app/launch.sh"]
CMD ["start"]