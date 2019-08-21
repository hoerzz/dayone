/*STORE "massa" with 600kg
STORE "acceleration" with 2m/s2
STORE "area" without any value

CALCULATE "massa" times "acceleration"
SET "area" value with calculation result

DISPLAY "area"*/


console.log("Tugas No.1")
console.log("") 
var m = 600;
var a = 2;
var ef = m * a;
console.log("maka hail dari ΣF = m x a adalah",ef,"newton")
/*console.log("")
INPUT "tahun"
IF "tahun mod 4"
DISPLAY "tahun adalah kabisat"
ELSE DISPLAY "tahun bukan tahun kabisat"*/
console.log("Tugas No.2")
console.log("")
var tahun=2016;
 
if (tahun%4==0)
   console.log(tahun,"adalah tahun kabisat");
else
   console.log(tahun,"bukan tahun kabisat");

   /* STORE "laundry" with 0
   While "Laudry" <20
   add " Laudry" by 1
   Diplay "laudry process"*/
console.log("")
console.log("Tugas No.3")
console.log("")
var baju = 0;
while(baju < 20)
baju++

console.log(baju)

/*STORE "count" to 0
WHILE "count" < 40
ADD "count" by 1
DISPLAY "count" 

STORE "kuku pendek" with "count mod 2 equal to 0"
STORE "kuku panjang" with "count mod 2 not equal to 0"
IF "count" mod 2 equal to 0 
DIPLAY "mendapat pujian"
ELSE DISPLAY "mendapat hukuman"*/
console.log("")
console.log("Tugas No.4")
console.log("")
var i = 0;
while(i<40)
i++

var i = 24;
if (i % 2 ===0){
  console.log("mendapat pujian")
}else{
  conscole.log("mndapatkan hukuman")
}
