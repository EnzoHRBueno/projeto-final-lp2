const botaoMenu = document.getElementById('botaoMenu')
const menuLateral = document.getElementById('menuLateral')

botaoMenu.addEventListener('click', () => {

    menuLateral.classList.toggle('ativo')

    botaoMenu.classList.toggle('aberto')

    const menuAberto = menuLateral.classList.contains('ativo')

    botaoMenu.setAttribute('aria-expanded', menuAberto)

    botaoMenu.setAttribute(
        'aria-label',
        menuAberto ? 'Fechar menu' : 'Abrir menu'
    )

})

const linksMenu = menuLateral.querySelectorAll('a')

linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        menuLateral.classList.remove('ativo')
        botaoMenu.classList.remove('aberto')
        botaoMenu.setAttribute('aria-expanded', 'false')
        botaoMenu.setAttribute('aria-label', 'Abrir menu')
    })
})

const botaoXbox = document.getElementById('botaoXbox')

botaoXbox.addEventListener('click', () => {
    const backgroundPagina = document.getElementById('pagina')
    backgroundPagina.style.backgroundColor = "  #101510"
})
const botaoSony = document.getElementById('botaoSony')

botaoSony.addEventListener('click', () => {
    const backgroundPagina = document.getElementById('pagina')
    backgroundPagina.style.backgroundColor = "  #0B1220"
})
const botaoNintendo = document.getElementById('botaoNintendo')

botaoNintendo.addEventListener('click', () => {
    const backgroundPagina = document.getElementById('pagina')
    backgroundPagina.style.backgroundColor = "  #171313"
})