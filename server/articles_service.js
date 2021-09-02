const seneca = require("seneca")();
const entity = require("seneca-entity");
const mongo_store = require("seneca-mongo-store");

seneca.use(entity);
seneca.use(mongo_store, {
    name: "ishare",
    host: "localhost",
    port: 27017
});

seneca.use("./articles_plugin");
seneca.ready(err => {
    console.log("seneca listening");
    seneca.listen(9091);
});
seneca.quiet();