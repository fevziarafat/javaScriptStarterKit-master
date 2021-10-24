let sayi1=10
 sayi1="Fevzi ARAFAT"
let student={
     id:1,name:"Fevzi"
 }
//console.log(student)


function save(puan=10,ogrenci) {
    console.log(ogrenci.name+" : "+puan)
}
//save(undefined,student)

let students=["fevzi","mehmet","muhittin"]
//console.log(students)

let students2=[student,{
    id:2,name:"Mehmet"
},"ankara", {city:"İstanbul"}]

//console.log(students2)

//rest geriye kalan
//params  C#
//varArgs  Java
let showProducts=function (id,...products) {
    console.log(id)
    console.log(products[0])
}
// console.log(typeof showProducts)

// showProducts(10,["Elma","Armut","Karpuz"])

//spread ayrıştırmak elimizdeki array i ayrıştırıyoruz
let points=[1,2,3,6,5,99,44,5,2,22]
console.log(...points)
console.log(Math.max(...points))

console.log(..."ABC","D",..."EFG","H")

//Destructuring elimizdeki array in değerlerini değişkenlere atamak için kullanılır
//Parçalamak için

let populations=[10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,maximum]]=populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunctions([small1],number) {
    console.log(small1)
}

someFunctions(populations)

let category={id:1,name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name}=category
console.log(id)
console.log(name)

 