#!/bin/bash

daprd --dapr-id $1 &
sleep 3
python3 main.py 