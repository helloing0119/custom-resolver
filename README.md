# Contributions

The EOSIO Identity Working Group is an open working group where we, the EOSIO community, discuss identity on EOSIO chains and progress work such as this DID specification and it's implementation. We have a weekly meeting and a Slack channel.

**[Join the EOSIO Identity Working Group](https://www.gimly.io/eosio-identity)**

Comments regarding this document are welcome. Please file issues and PRs directly on Github. Contributors are recognized through adding commits to the code base.

Contributors:

- Jack Tanner <jack@gimly.io>
- Julius Rahaus

# eosio-did-driver

Driver for the eosio DID methods to be used in the [Universal Resolver](https://github.com/decentralized-identity/universal-resolver). Structure based on [uPort-did-driver](https://github.com/uport-project/uport-did-driver). The Docker image is hosted on Docker Hub here:

<https://hub.docker.com/r/TODO/>

The file `src/server.js` is an small Express Node app acting as a thin wrapper around the [Javascript DID resolver](https://github.com/decentralized-identity/did-resolver). It listens to port 8081.

The following DID methods are supported:

- [eosio](https://github.com/Gimly-Blockchain/eosio-did-resolver)

## Build

```
npm i
docker build . -t eosio-driver
```

## Run 

```
docker run eosio-driver
```

## Tests

```
curl -X GET http://localhost:8081/1.0/identifiers/did:eosio:eos:eoscanadacom
curl -X GET http://localhost:8081/1.0/identifiers/did:eosio:4667b205c6838ef70ff7988f6e8257e8be0e1284a2f59699054a018f743b1d11:caleosblocks
```

## Example DIDs

- `did:eosio:eos:eoscanadacom`
- `did:eosio:4667b205c6838ef70ff7988f6e8257e8be0e1284a2f59699054a018f743b1d11:caleosblocks`