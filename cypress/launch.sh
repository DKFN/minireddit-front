#!/bin/bash

# exec npm "$@"
set -e
    [ -f "/etc/profile.d/proxy.sh" ] && source /etc/profile.d/proxy.sh
    [ -f "/data/scripts/set_env.sh" ] && source /data/scripts/set_env.sh

# pwd

#ls -la /

echo "DEBUG : Data : "

ls -la /data

# Host IP param
if [ -z "$1" ];
    then
    echo "ERR > Tests will NOT run if you do not specify your host IP for local use or base Url;. Aborting"
    echo "usage: dcypress [IP] [Command (optionnal)] [Browser (optionnal)]"
    exit 127
else
    echo " > Target frontend IP : $1"
    export TESTS_BASE_URL="$1"
fi


# Cypress parameter
if [ -z "$2" ];
    then cmd="run"
else
    echo " > User has set cypress command to : $2"
    cmd="$2"
fi


# Browser parameter
if [ -z "$3" ];
    then browsr="chrome"
else
    echo " > User has set cypress browser to : $3"
    browsr="$3"
fi

#setenv http_proxy "http://bluecoatproxy.cpgrp.root.local:8080/"
#setenv https_proxy "http://bluecoatproxy.cpgrp.root.local:8080/"
#setenv HTTP_PROXY $http_proxy
#setenv HTTPS_PROXY $http_proxy

echo "PROXY ENVS :"
echo "http_proxy : $http_proxy"
echo "https_proxy : $https_proxy"
echo "HTTP_PROXY : $HTTP_PROXY"
echo "HTTPS_PROXY : $HTTPS_PROXY"

export NO_PROXY="localhost"

exec cypress $cmd --port 8080 -P /data -e BASE_URL=$TESTS_BASE_URL