const botaoMenu = document.getElementById('botaoMenu');
const menuLateral = document.getElementById('menuLateral');

botaoMenu.addEventListener('click', () => {

    menuLateral.classList.toggle('ativo');

    botaoMenu.classList.toggle('aberto');

    const menuAberto = menuLateral.classList.contains('ativo');

    botaoMenu.setAttribute('aria-expanded', menuAberto);

    botaoMenu.setAttribute(
        'aria-label',
        menuAberto ? 'Fechar menu' : 'Abrir menu'
    );

});

const linksMenu = menuLateral.querySelectorAll('a');

linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        menuLateral.classList.remove('ativo');
        botaoMenu.classList.remove('aberto');
        botaoMenu.setAttribute('aria-expanded', 'false');
        botaoMenu.setAttribute('aria-label', 'Abrir menu');
    });
});