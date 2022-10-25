var idade = 22
console.log(`Voce tem ${idade} anos.`)
if(idade < 16){
    console.log(`voce não precisa votar`)
}else if(idade < 18 || idade > 65){
    console.log(`Seu voto é obrigadorio`)
} else{
    console.log(`Voto obrigatório`)
}