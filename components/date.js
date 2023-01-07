import { parseISO, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export default function Date({ dateString }) {
  if (!dateString) return null

  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, "d 'de' LLLL, yyyy", { locale: ptBR })}</time>
}
