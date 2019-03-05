#!/bin/sh

docker build -t reddit-frontend ./docker-reddit-front
docker run -v $(pwd):/data -p 3000:3000 redditfront install
docker run -v $(pwd):/data -p 3000:3000 redditfront

