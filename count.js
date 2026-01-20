millis = Date.now() - (new Date((new Date(Date.now())).getFullYear(), 0, 1));
document.querySelector("#count").innerHTML = Math.floor(720000 * (millis / 31556952000));
