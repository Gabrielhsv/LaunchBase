const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];

  for (i = 0; i < usuarios.length; i++){
        //console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
  }

  function checaSeUsuarioUsaCSS(usuario) {
    for(i = 0; i < usuarios.length; i++){
       for (j = 0; j < usuarios[i].tecnologias.length; j++){
            if(usuarios[i].tecnologias[j] === 'CSS'){
                console.log(`O usuário ${usuarios[i].nome} usa CSS`)
            } else {
                console.log(`O usuário ${usuarios[i].nome} não usa CSS`)
            }
       }       
    }      
  }

  checaSeUsuarioUsaCSS(usuarios[i]) ;

  

