const { Resolver } = require("did-resolver");
const eosio = require("eosio-did-resolver");
const express = require("express");
const fetch = require("node-fetch");

const app = express();
const customResolve = async (did, parsed, didResolver, options) => {

	const config = {
		"blocker": {
			"chainId": "8a34ec7df1b8cd06ff4a8abbaa7cc50300823350cadc59ab296cb00d104d2b8f",
			"service": [
				{
					"id": "http://152.70.95.22:8888",
					"type": "LinkedDomains",
					"serviceEndpoint": "http://152.70.95.22:8888"
				}
			]
		}
	};

	return eosio.getResolver().eosio(did, parsed, didResolver, {...options, ...{eosioChainRegistry: config}});
};

const resolver = new Resolver({eosio: customResolve});

app.get("/1.0/identifiers/*", (req, res) => {
	const did = /\/1.0\/identifiers\/(.*)/.exec(req.url)[1];
	console.log("Resolving DID: " + did);
	resolver
		.resolve(did, { fetch })
		.then((result) => {
			const { error } = result.didResolutionMetadata;
			if (error) res.status(400).send(error);
			else res.send(result);
		})
		.catch((err) => {
			console.error(err);
			res.status(500).send(err.message);
		});
});

module.exports = app;
