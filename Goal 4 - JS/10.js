function myFunc(number) {
    console.log("Function been called with " + number);
}

function spy(func) {
    let called = 0;
    let wrap = function() {
        called++;
        return func(...arguments)
    };
    
    wrap.report = function() {
        console.log(called);
    }
    return wrap;    
}


let spied = spy(myFunc);
spied(5)
spied(3)
spied(4)



