#!/bin/sh

docker build -t reddit-frontend ./docker-reddit-front
docker run -v $(pwd):/data -p 3000:3000 reddit-frontend install
docker run -v $(pwd):/data -p 3000:3000 reddit-frontend

