#!/bin/bash

if [ ! -f .env ]; then
    echo ".env file not found!"
    exit 1
fi

export $(cat .env | xargs)

./mvnw spring-boot:run
