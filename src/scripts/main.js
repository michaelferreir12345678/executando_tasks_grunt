document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-cadastro').addEventListener('submit', function(e){
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const tel = document.getElementById('tel').value;

        document.querySelector('.result-item-nome').innerText = nome
        document.querySelector('.result-item-email').innerText = email
        document.querySelector('.result-item-tel').innerText = tel

        document.querySelector('.result').style.display = 'block';

    } )
})