#!/usr/bin/make -f

build:
	cd src && \
	npm run build

deploy: build
	cp -r src/dist/. .

publish: build deploy