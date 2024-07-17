
// default > when the valu is not provided.. 0 ekhane default dewa jay.. or jekno number chaile default dewa jabe

function add (num1, num2=0){
    const result = num1 + num2
    console.log(num1, num2, result)
    return result
}

// const sum = add(5,7)
const sum = add(7)