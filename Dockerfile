FROM node:alpine

ARG TZ='Europe/London'
ARG ENCODING="en_GB.UTF-8"

ENV DEFAULT_TZ ${TZ}

ENV LANG ${ENCODING}
ENV LANGUAGE ${ENCODING}
ENV LC_ALL ${ENCODING}

RUN apk update && \
    apk add --no-cache git tzdata

RUN cp /usr/share/zoneinfo/${DEFAULT_TZ} /etc/localtime \
    && apk del tzdata
