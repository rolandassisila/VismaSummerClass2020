function say(phrase1) {
    return function say2(phrase2) {
        return phrase1 + " " + phrase2;
    }
}

console.log(say("Hello,")("it’s me"));