#!/bin/sh

grep -i "@amazon.com" $1 | cut -d , -f 2-3 | awk -F ',' '{print $2 " " $1}' > output_names.txt
