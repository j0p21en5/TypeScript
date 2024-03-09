function msgError(msg,code) : never
{

    throw{msg,code}

}

console.log(msgError("msg have error",404));


function apiError(info,typ) : never
{
    throw{info,typ}
}

console.log(apiError("not found",143));
