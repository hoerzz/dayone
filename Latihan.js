var bumbu = ['jengkol', 'garam', 'santan', 'penydap']

bumbu.splice(2,0, "kecap");
console.log(bumbu);

bumbu.splice(4,0, "minyakGoreng");
console.log(bumbu);

bumbu.splice(0,2, "mecin");
console.log(bumbu)

bumbu.unshift("jengkol")
console.log(bumbu)

console.log(bumbu[3])