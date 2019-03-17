#!/bin/sh

ls -la
docker build -t reddit-frontend ./docker-reddit-front
docker run -v $(pwd):/data -p 3000:3000 reddit-frontend install
docker run -v $(pwd):/data -p 3000:3000 reddit-frontend run-script build http://reddit-backend.tetel.in/

