#!/bin/bash
set -e
service mysql start
mysql < /app/dbapi.sql
service mysql stop 