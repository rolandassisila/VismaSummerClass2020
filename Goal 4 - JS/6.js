let numbers = ['2','3','4','2','2','1','2', '2'];
function duplicates(numbers) {
    return Array.from(new Set(numbers));
}

console.log(duplicates(numbers)) 