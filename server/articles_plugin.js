const { builtinModules } = require("module");
const entity = require("seneca-entity");
let articleslist = [];
module.exports = function articles_plugin() {
    this.add({ init: "articles_plugin" }, (args, respond) => {
        console.log("In init");
        const entity = this.make("articles");
        entity.list$({}, (err, articles) => {
            articleslist = articles;
        });
        respond();
    });
    this.add({role:"ishare", op:"display"}, (args, respond) => {
        respond(null, { articleslist: articleslist });
    });
}