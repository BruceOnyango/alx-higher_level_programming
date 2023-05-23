#!/bin/bash
#Allow methods
curl -s -i -X OPTIONS "$1" | grep Allow | cut -d " " -f 2-
