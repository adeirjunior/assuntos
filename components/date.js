import { parseISO, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export default function Date({ dateString, className }) {
  if (!dateString) return null

  const date = parseISO(dateString)
  return (
    <div
      className={`py-2 px-8 bg-light dark:bg-darker rounded-full text-dark dark:text-light w-fit ${className}`}
    >
      <time dateTime={dateString}>
        {format(date, "d 'de' LLLL, yyyy", { locale: ptBR })}
      </time>
    </div>
  )
}
