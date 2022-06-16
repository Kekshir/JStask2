//5
function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
alert(randomInteger(1, 5));
alert(randomInteger(1, 5));
alert(randomInteger(1, 5));

//6
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

//7 
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '...';
    } else {
        return str;
    }
}
console.log(truncate('trdtfghjkpo;l dyfg8iolkj uyfghojilm  iuhyujk', 10))
