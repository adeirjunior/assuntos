export function removerAcentosEspacos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f|\s|:|@]/g, '').toLowerCase()
}
  