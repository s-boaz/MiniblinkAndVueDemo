#!/bin/bash

cd $(dirname $0)/..

set -eo pipefail

cd ./src

g++ ./main.cpp

