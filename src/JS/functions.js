function addToCart(productName="Elma",quantity) {
    console.log("sepete kaydedildi : ürün "+ " "+productName+" "+quantity+" adet eklendi")
}
//undefined null ile karıştırmayalım
//ben aslında yokum demek

// addToCart()
// addToCart(15)
addToCart("Yumurta",5)
addToCart(undefined,"8")
// addToCart("Elma")

let sayHello=()=>{
    console.log("Hello World!")
}

sayHello()

let sayHello2=function () {
    console.log("Hello World! 2")
}

sayHello2()

function addToCart2(productName,quantity,unitPrice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)

let product1={productName:"Elma",unitPrice:10,quantity:5}

function addToCart3(product) {
    console.log("Ürün: "+product.productName+" Adeti "+product.quantity+" fiyatı "+ product.unitPrice)
}

addToCart3(product1)

let product2={productName:"Elma",unitPrice:10,quantity:5}
let product3={productName:"Elma",unitPrice:10,quantity:5}
product2=product3
product2.productName="KARPUZ"
console.log(product3.productName)

function addToCart4(products) {
    console.log(products)
}
let products=[
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:15,quantity:10},
    {productName:"Lale",unitPrice:25,quantity:8}
]
addToCart4(products)

function add(bisey,...numbers) {
    let total=0;
  for (let index = 0; index < numbers.length; index++) {
     console.log(numbers[index]);
     total=total+numbers[index]
     console.log(total)
     console.log(bisey)
  }
}
add(20,30,50)
//add(20,30,40,50)
let numbers=[30,10,500,600,120]
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadolusehirleri]]=[
    {name:"İç Anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"KAradeniz",population:"15M"},
[
    ["Ankara","Konya"],
    ["İstanbul","Bursa"],
    ["Sinop","Trabzon"]
]
]

console.log(icAnadolusehirleri)
console.log(marmara)

let product5=
