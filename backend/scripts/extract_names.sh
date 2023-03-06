#!/usr/bin/sh

grep -i "@amazon.com" MOCK_DATA.csv | cut -d , -f 2-3 | awk -F ',' '{print $2 " " $1}' > output_names.txt
