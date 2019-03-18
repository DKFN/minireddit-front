#!/bin/bash

docker build -t mycypress:latest ./cypress

if [ "$1" == "dev" ]; then
    echo "This is dev"
    xhost local:root
    docker run -v /tmp/.X11-unix:/tmp/.X11-unix -e DISPLAY=unix$DISPLAY mycypress 172.17.0.2:3000 open
else
    echo "This is not dev"
    docker run mycypress 172.17.0.2:5000 run
fi