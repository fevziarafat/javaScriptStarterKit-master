function asalMi(...params) {
  let sayilar = params;
  for (let index = 0; index < sayilar.length; index++) {
    const element = sayilar[index];
    let asal = true;
    for (let j = 2; j < element; j++) {
      if (element % j == 0) {
        asal = false;
      }
      if (asal) {
        console.log(element + " sayısı asaldır");
      } else {
        console.log(element + " sayısı asal değildir");
      }
    }
  }
}

//asalMi(2, 3, 6, 5, 7, 9, 11, 12, 13);

function arkadasMi(sayi1, sayi2) {
  let toplam1 = 0;
  let toplam2 = 0;
  for (let index = 1; index < sayi1; index++) {
    if (sayi1 % index == 0) {
      toplam1 = toplam1 + index;
    }
  }
  for (let index = 0; index < sayi2; index++) {
    if (sayi2 % index == 0) {
      toplam2 = toplam2 + index;
    }
  }
  if (sayi1 == toplam2 && sayi2 == toplam1) {
    console.log(sayi1 + " ve " + sayi2 + " arkadaştır.");
  } else {
    console.log(sayi1 + " ve " + sayi2 + " arkadaş değildir.");
  }
}

//arkadasMi(1184, 120);

function mukemmelMi() {
  for (let sayi = 0; sayi <= 1000; sayi++) {
    let toplam1 = 0;
    for (let index = 1; index <= sayi; index++) {
      if (sayi % index == 0) {
        toplam1 = toplam1 + index;
      }
    }
    if (sayi + sayi == toplam1) {
      console.log(sayi + " mükemmel sayıdır");
    }
  }
}

//mukemmelMi();

function asalMi2() {
  for (let t = 1; t < 1000; t++) {
    let asal = true;
    for (let j = 2; j < t; j++) {
      if (t % j == 0) {
        asal = false;
      }
      
    }
    if (asal) {
      console.log(t + " sayısı asaldır");
    }
  }
}
asalMi2();
