// Normal Function
function sum (a,b) {
    return a+b;
}
console.log(sum(10,20))

// Anonmous function

var add = function (a,b)
{
    return a+b
}
console.log(add(5,3))

// // CallBack function

// function complex (add){
//     console.log(add(500,100))
// }

// complex(add)

// Anonymous with CallBack 

function complex (add){
    console.log(add(500,50))
}

complex(function (a,b)
{
    return a+b
})