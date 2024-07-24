#!/bin/bash

set -o allexport
source .env
set +o allexport

psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d "$DB_NAME" -f ./src/schema.sql