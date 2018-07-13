# Timestamp Service

This is an example Node.js systemd service for Raspberry Pi.  This repository is used in a [Medium article](https://medium.com/@simon_prickett/writing-a-systemd-service-in-node-js-on-raspberry-pi-be88d9bc2e8d) that describes how to use systemd with Node.js on the Pi.

## Usage

Clone the repo, `cd` to the folder containing the cloned files, then:

```
export PORT=8888
npm start
```

Browse to `http://127.0.0.1:8888` or `curl 127.0.0.1:8888` to see the current timestamp.

## Installing systemd Service

Instructions on how to install this as a systemd service using the `timestamp.service` file in this repo can be found in my [Medium article](https://medium.com/@simon_prickett/writing-a-systemd-service-in-node-js-on-raspberry-pi-be88d9bc2e8d).


