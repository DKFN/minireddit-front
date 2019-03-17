#!/bin/sh

docker build -t mycypress ./cypress
docker run mycypress 172.17.0.2:5000 run