function isEven(num) {
    return num % 2 === 0;
}

function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result = result * i;
    }
    // return result
    console.log(num);       
}

factorial(4)


let toDolist = [ "eat", "sleep","code", "repeat" ];

toDolist.pop();
toDolist.unshift("read");
toDolist[1] = "work";
console.log(toDolist, +"length:" + toDolist)