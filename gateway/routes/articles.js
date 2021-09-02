var express = require("express");
var router = express.Router();
const seneca = require("seneca")();

seneca.quiet();
seneca.client(9091);

router.get("/", function (req, res, next) {
    res.send("respond resource");
});
router.get("/display", function (req, res, next) {
    seneca.act(
        { role: "ishare", op:"display" },
        (err, result) => {
            if (err) res.status(404).send("Error");
            else res.status(200).send(result.articleslist);
        }
    );
})
module.exports = router;