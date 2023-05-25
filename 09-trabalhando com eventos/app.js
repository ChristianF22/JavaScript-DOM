// Adicionando os eventos
function register(ev){
  console.log(ev)
  const sectionElement = ev.currentTarget.parentNode
  const username = sectionElement.children.username.value
  const password = sectionElement.children.password.value
  const passwordConfirmation = sectionElement.children.passwordConfirmation.value

if(password === passwordConfirmation){
  alert('Usuário ' + username + ' foi registrado!')
}else{
    alert('As senhas não conferem')
 }
}

const button = document.getElementById('register-button')

button.addEventListener('click', register)

// Removendo os eventos
function removerListener(){
    button.removeEventListener('click', register)
    alert('Event removed')
}