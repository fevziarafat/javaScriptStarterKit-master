//referans tiplerde bellekteki adres
//değer tiplerde direk değer
let cart=[
    {id:1,productName:"Telefon",quantity:3,unitPrice:4000},
    {id:2,productName:"Bardak",quantity:2,unitPrice:30},
    {id:3,productName:"Kalem",quantity:1,unitPrice:20},
    {id:4,productName:"Şarj cihazı",quantity:2,unitPrice:100},
    {id:5,productName:"Kitap",quantity:3,unitPrice:30},
    {id:6,productName:"Pot",quantity:5,unitPrice:150},
]
//map tek tek dolaşmanızı sağlar
//her bir eleman için bu işlemi yap
cart.map(x=>{
    console.log(x.productName+" "+x.unitPrice*x.quantity+ " TL dir")
})

//filter aramalarda kullanılır
//c# linq sorgularına benzemektedir.
let quantityOver2=cart.filter(x=>x.id==1)

console.log(quantityOver2)

//reduce 
//elemanları başlangıç değerine göre işilem yapar
//sepetteki tüm ürünlerin toplam fiyatını döndür gibi
let total=cart.reduce((acc,x)=>acc+x.unitPrice*x.quantity,0)
console.log(total)

function addToCart(sepet) {
    sepet.push( {id:7,productName:"Ruhsat",quantity:1,unitPrice:20})
}

//addToCart(cart)

//console.log(cart)

let sayi=10

function sayiTopla(number) {
    number+=1
}

//sayiTopla(sayi)

//console.log(sayi)