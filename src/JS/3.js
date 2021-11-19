//Rest Spread Destructure

//Rest Geriye kalan paramaereler JAVA da varArgs C# da params  
//geriye kalanlar array olur
let showProducts=function (id,...products) {
    console.log(id)
    console.log(products[3])
}

//console.log(typeof showProducts)
//showProducts(2,5,88,87,["ü","erer","Elma"],"Armut","Karpuz")


//Spread 
//NaN not a number

let points=[1,2,3,4,5,6,99,77,88,71]
//console.log(...points)
console.log(Math.max(...points))


console.log(Math.max(1,2,3,6,99,44,8))


console.log(..."ABC","D",..."EFG","H")

//Destructuring

//Elimizdeki Array in değerlerini değişkenlerimize atarız

let populations=[10000,20000,30000,[40000,10000]]

let [small,medium,high,[veryHigh,maximum]]=populations

console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunctions([small1,medium1],number) {
    console.log(medium1) 
        
        
}

someFunctions(populations)


let category={id:1,name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name}=category

console.log(id)
console.log(name)