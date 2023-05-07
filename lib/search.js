export function search(data, termoPesquisa, setResultados) {
  const expressaoRegular = new RegExp([...termoPesquisa].join('.*'), 'i')
  const resultadosFiltrados = data.filter((dado) =>
    dado.name.match(expressaoRegular)
  )
  setResultados(resultadosFiltrados)
}
