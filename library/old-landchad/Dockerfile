FROM alpine:3.14

RUN apk add --no-cache calibre && \
    mkdir /opt/calibre

COPY calibre-server.service /etc/systemd/system/
COPY entrypoint.sh /

RUN chmod +x /entrypoint.sh

EXPOSE 8080

CMD ["/bin/bash"]