// CADASTRO DE USUARIOS

class Usuario {
    constructor(nome, username, senha) {
        this.nome = nome
        this.username = username
        this.senha = senha
    }
}


function cadastrar() {
    let nome = document.getElementById('nome').value
    let nomeUsuario = document.getElementById('nomeUsuario').value
    let senha = document.getElementById('senha').value
    let confirmacaoSenha = document.getElementById('confirmacaoSenha').value

    if (nome != '' && nomeUsuario != '' && senha == confirmacaoSenha) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        let usuario = new Usuario(nome, nomeUsuario, senha)
        listaUser.push(usuario)

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        alert('Cadastrado com sucesso')

        document.getElementById('nome').value = ''
        document.getElementById('nomeUsuario').value = ''
        document.getElementById('senha').value = ''
        document.getElementById('confirmacaoSenha').value = ''


        location.href = 'login.html'
    } else if (nome == '' || nomeUsuario == '') {
        alert('Preencha todos os campos')
    } else {
        alert('As senhas não são iguais')
    }
}
function voltarLogin() {
    location.href = 'login.html'
}


// TELA DE LOGIN

function fazerLogin() {
    let user = document.getElementById('user').value
    let password = document.getElementById('senha').value

    let listaUsuarios = []

    let userValid = {
        nome: '',
        userName: '',
        senha: ''
    }

    listaUsuarios = JSON.parse(localStorage.getItem('listaUser'))

    listaUsuarios.forEach((item) => {
        if (user == item.username && password == item.senha) {
            userValid = {
                nome: item.nome,
                userName: item.username,
                senha: item.senha
            }
        }
    })

    if (user == '' || password == '') {
        alert('Preencha todos os campos')
    } else if (user == userValid.userName && password == userValid.senha) {
        alert('Seja Bem Vindo')

        let token = Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)
        console.log(token)

        localStorage.setItem('userLogado', JSON.stringify(userValid))
        location.href = 'home.html'

    } else {
        alert('Usuario ou senha incorretos')
    }
}


function cadastrarUser() {
    location.href = 'cadastro.html'
}

// PAGINA PRINCIPAL

let userLogado = JSON.parse(localStorage.getItem('userLogado'))





function hello() {
    let logado = document.querySelector('#cumprimento')
    logado.innerHTML = `Welcome ${userLogado.userName} !`
    logado.style.color = '#0FC5EF'
}

function sair() {
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    location.href = 'login.html'
}