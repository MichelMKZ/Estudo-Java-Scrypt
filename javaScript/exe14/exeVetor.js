let valores = [5,8,10,30,21,15,13]

let pos = valores.indexOf(15)
console.log(`O valor esta ${pos}`)
/*
for(i = 0; i < con.length;i++){
    console.log('Posição' + i +' = '+  con[i])
}
*/
for(let pos in valores){
    console.log(`Posicao ${pos} tem o valor ${valores[pos]}`)
}