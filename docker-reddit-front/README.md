Docker UI
==============

### Description

Ce projet a pour but la dockerization universelle de tous les UIs de HAPI. 
Plus précisément ce docker permet de travailler sur la partie Front des UIs qui est basée sur le même stack technique[+de detailles dans Stack].
La philosophie est suivante:
- on utilise npm comme manager des paquêts,
- on essai d'embarquer plus des dependances communes dans le docker en gardant les dependances specifiques au projet dans ```package.json```,
- on suppose que dans ```package.json``` il existe le script _start_ qui est défini,
- le docker se comporte comme une executable[+de detailles dans Usage],
- le proxy est géré par ```/etc/profile.d/proxy.sh``` qui doit être sourcé à l'interieur de docker.

### Stack

Le stack technique utilisé dans le docker est suivant:
- [Node.js](https://nodejs.org/en/) de docker-node,
- npm de docker-node,
- [Typescript](https://www.typescriptlang.org/). 

### Prerequisites

Il existe certains configurations qu'il faut mettre en place au niveau de projet ou on souhaite d'utiliser ce Docker.
Dans ```package.json``` on precis les commandes à lancer quand on fait ```docker run```:
```json
"scripts": {
  "start": "webpack-dev-server",
  "build": "webpack"
}
```

### Usage

Le docker se comporte comme une executable donc ça signifie que quand vous essayez à ```docker run``` ça va execute npm à l'interieur de docker.
Vous pouvez passer tous les options de npm à docker run.
Voilà la commande pour lancer le docker:
```bash
docker run -v /etc/profile.d/proxy.sh:/etc/profile.d/proxy.sh -v $(pwd):/data/ --name ui --rm -ti -p 9777:9777 voddev.canal-plus.io:5000/canal/ui
```
On vous conseille fortement d'ajouter un alias dans votre shell qui reference cette commande:
```bash
alias ui='docker run -v /etc/profile.d/proxy.sh:/etc/profile.d/proxy.sh -v $(pwd):/data/ --name ui --rm -ti -p 9777:9777 voddev.canal-plus.io:5000/canal/ui'
```
Supposons que vous avez definit le script _start_ dans votre ```package.json```:
```json
"scripts": {
  "start": "webpack-dev-server"
}
```
Vous pouvez lancer votre Docker en mode le serveur de dev avec la commande:
```bash
ui start
```
mais _start_ est executé par default:
```bash
ui
```
Supposons que vous avez definit le script _build_ dans votre ```package.json```:
```json
"scripts": {
  "build": "webpack"
}
```
Vous pouvez lancer packager votre application avec la commande:
```bash
ui run build
```
Pour arreter le docker on utilise la commande:
```
docker stop ui
```
ou 
```
Control+C
```
Pour entrer dans le docker demarré on utilise la commande:
```
docker exec -ti ui /bin/bash
```
Pour entrer dans le docker pas demarré on utilise la commande:
```
docker run -v /etc/profile.d/proxy.sh:/etc/profile.d/proxy.sh -v $(pwd):/data/ --name ui --rm -ti -p 9777:9777 --entrypoint /bin/bash voddev.canal-plus.io:5000/canal/ui
```