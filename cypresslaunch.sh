#!/bin/sh

docker build -t mycypress:latest ./cypress

docker run mycypress 172.17.0.2:5000 run
#docker run -v /tmp/.X11-unix:/tmp/.X11-unix -e DISPLAY=unix$DISPLAY mycypress 172.17.0.2:3000 open
