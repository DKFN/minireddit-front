#!/bin/sh

docker build -t mycypress ./cypress
docker run -v $(pwd):/data/ mycypress 172.17.0.2:5000