// Ultilizando o Session Storage
document.getElementById('sessionBtn').addEventListener('click', function(){
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value)
    input.value = ''
})

document.getElementById('readSession').addEventListener('click', function(){
    const info = sessionStorage.getItem('info')
    alert('A informação salva é: ' + info)
})

//Ultilizando o Local Storage
document.getElementById('localBtn').addEventListener('click', function(){
    const input = document.getElementById('local')
    localStorage.setItem('text', input.value)
    input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function(){
    const text = localStorage.getItem('text')
    alert('A infomção salva é: ' + text)
})

//Ultilizando o Cookies
document.getElementById('cookiesBtn').addEventListener('click', function(){
    const input = document.getElementById('cookies')
    // cookieName = value ; expires = UTCStringDate ; path = /;
    const cookie = 'info=' + input.value + ';'
    const expiration = 'expires=' + new Date(2023, 1, 5) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log (document.cookie)
})

document.getElementById('cookies2Btn').addEventListener('click', function (){
    const input = document.getElementById('cookies2')
    // cookieName = value ; expires = UTCStringDate ; path = /;
    const cookie = 'text=' + input.value + ';'
    const expiration = 'expires=' + new Date(2023, 10, 6) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})