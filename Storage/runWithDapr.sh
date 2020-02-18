#!/bin/bash

daprd --dapr-id $1 --app-port $2 --dapr-http-port $3 --dapr-grpc-port $4 &
sleep 3
node app.js
