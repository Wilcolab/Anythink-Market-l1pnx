#!/usr/bin/sh

grep -i "@amazon.com" MOCK_DATA.csv | cut -d , -f3,2 | sed 's/,/ /' > output_names.txt