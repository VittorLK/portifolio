document.addEventListener('DOMContentLoaded', () => {

    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(event){
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const mensagem = document.getElementById('mensagem').value;
        const telefone = '5571993863455';

        const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
        const msgFormatada = encodeURIComponent(texto);

        const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
        window.open(url, '_blank');
    });

});
