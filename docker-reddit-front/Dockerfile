FROM node:10.15-jessie

# node deps: typescript, babel-cli. 
RUN npm i -g typescript@3.2.4 babel-cli

# Ici donner les bons droits d'acces pour node:node sur /usr/local/lib/node_modules
RUN chgrp node -R /usr/local/lib/node_modules && chmod 775 -R /usr/local/lib/node_modules

WORKDIR /data
ADD launch.sh /app/launch.sh

ENTRYPOINT ["/app/launch.sh"]
CMD ["start"]
