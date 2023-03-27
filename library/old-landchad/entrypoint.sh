#!/bin/bash

# Start the Calibre server
/usr/bin/calibre-server --enable-auth --enable-local-write /opt/calibre/andersons --listen-on 0.0.0.0
