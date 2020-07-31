function sevenAte9(str) {
<<<<<<< HEAD
    let findPattern = "79+7";
    let nines = new RegExp(findPattern, 'g')
    while (nines.test(str) === true) {
        str = str.replace(nines, '77');
    }
    return str;
=======
    str = str.split('');
    for (i = 0; i < str.length; i++) {
        if (str[i] === '9' && str[i-1] === '7' && str[i + 1] === '7' ) {
            str.splice(i, 1);
        }
    }
    return str.join('');
>>>>>>> goal-3
}

console.log(sevenAte9('79712512312797'));
console.log(sevenAte9('79712312'));
<<<<<<< HEAD
console.log(sevenAte9('79999797'));
=======
console.log(sevenAte9('79797'));
>>>>>>> goal-3
