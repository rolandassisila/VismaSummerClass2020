function sevenAte9(str) {
    let findPattern = "79+7";
    let nines = new RegExp(findPattern, 'g')
    while (nines.test(str) === true) {
        str = str.replace(nines, '77');
    }
    return str;
}

console.log(sevenAte9('79712512312797'));
console.log(sevenAte9('79712312'));
console.log(sevenAte9('79999797'));
