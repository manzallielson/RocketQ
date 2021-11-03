module.exports = function modal() {
  function open() {
    //funcionalidade de adicionar a classe active
    document.querySelector('modal-wrapper').classList.add('active')
  }
  function close() {
    // funcionalidade de remover a classe active
  }
  return {
    open,
    close
  }
}
