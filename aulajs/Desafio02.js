const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
        endereco : {
            rua : 'Rua Guilherme Gembala',
            numero: 260
        },
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero} `);

const programador = {
    nome: 'Gabriel',
    idade:  23,
        tecnologia: [
            {nome: 'C++', especialidade: 'Desktop'},
            {nome: 'JavaScript', especialidade: 'Web/Mobile'}
        ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologia[0].nome} com especialidade em ${programador.tecnologia[0].especialidade}`);