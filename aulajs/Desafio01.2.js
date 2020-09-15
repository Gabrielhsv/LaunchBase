const nome = 'Gabriel'
const sexo = 'F'
const idade = 42
const contribuicao = 40
const aposentadoria = idade + contribuicao



if(sexo === 'M' ){
         if(contribuicao >= 35 && aposentadoria >= 95 ){
            console.log(`${nome}, você pode se aposentar`)
        }else{
            console.log(`${nome}, você não pode se aposentar`)
        }      
}else{
    if(contribuicao >= 30 && aposentadoria >= 85){
        console.log(`${nome}, você pode se aposentar`)
    }else{
        console.log(`${nome}, você não pode se aposentar`)
    }  
}



