function msgError(msg, code) {
    throw { msg: msg, code: code };
}
console.log(msgError("msg have error", 404));
function apiError(info, typ) {
    throw { info: info, typ: typ };
}
console.log(apiError("not found", 143));
