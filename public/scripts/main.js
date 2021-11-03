import { modal } from './modal'
const modal = modal()

// pegar todos os botoes com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  // adicionara escuta
  button.eventlistener('click', event => {
    modal.open()
  })
})
// pegar quando o marcar como lido for clicado

//abri modal
