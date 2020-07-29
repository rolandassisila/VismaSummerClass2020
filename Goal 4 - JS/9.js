function sevenAte9(str) {
    str = str.split('');
    for (i = 0; i < str.length; i++) {
        if (str[i] === '9' && str[i-1] === '7' && str[i + 1] === '7' ) {
            str.splice(i, 1);
        }
    }
    return str.join('');
}

console.log(sevenAte9('79712512312797'));
console.log(sevenAte9('79712312'));
console.log(sevenAte9('79797'));