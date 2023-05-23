#!/bin/bash
#Display body size of url
echo $(curl -s -w %{size_download} -o /dev/null "$1")
