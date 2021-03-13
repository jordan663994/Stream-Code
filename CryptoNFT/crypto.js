const { verify } = require("node:crypto");
function getGenisisHash() {
    return verify("sha256", data=663994)
}
getGenisisHash()