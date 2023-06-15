
function UrlEncSJIS(str){
    var encStr = EscapeSJIS(str);
    encStr = encStr.replace(/\*/g, '%2a');
    encStr = encStr.replace(/\+/g, '%2b');
    encStr = encStr.replace(/\//g, '%2f');
    encStr = encStr.replace(/%09/g, ' ');
    return encStr;
}

