// capturando input e mensagem de erro das tags de USERNAME
const usernameInput = document.getElementById('login-usuario')
const usernameErrorMessage = document.getElementsByClassName('error-text')[0]

// capturando input e mensagem de erro das tags de PASSWORD
const passwordInput = document.getElementById('login-senha');
const passwordErrorMessage = document.getElementsByClassName('error-text')[1]

//SIMULANDO INTERAÇÃO DO USUÁRIO

// usuario inseriu username errado
// mudar estilização do input e mensagem de erro do username sinalizando que ele errou
usernameInput.classList.add('error')
usernameErrorMessage.classList.add('visible')

//usuario acertou o username mas errou a senha

// mudar estilização do input e mensagem de erro das tags de username sinalizando que ele acertou
usernameInput.classList.remove('error')
usernameInput.classList.add('correct')
usernameErrorMessage.classList.remove('visible')

// mudar estilização do input e mensagem de erro das tags de password sinalizando que ele errou
passwordInput.classList.add('error')
passwordErrorMessage.classList.add('visible')

