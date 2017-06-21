# TODO: Don't require absolute PROJECT_ROOT
PROJECT_ROOT=/Users/byrnef87/Sites/finance/trades-api

install:
	npm install

start:
	forever start -l ${PROJECT_ROOT}/logs/node.log -a -w --watchDirectory ${PROJECT_ROOT} app/index.js
	tail -f logs/node.log

stop:
	forever stop app/index.js
