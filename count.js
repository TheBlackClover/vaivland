millis = Date.now() - (new Date((new Date(Date.now())).getFullYear(), 0, 1));
count = 1230620000 * (millis / 31556952000);
rpc = 8300000000 / count;
document.querySelector("#count").innerHTML = Math.floor(count);
document.querySelector("#rpc").innerHTML = Math.round(rpc);
