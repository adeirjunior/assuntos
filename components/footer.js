
export default function Footer() {
  return (
    <footer className="bg-dark flex flex-col justify-between p-6 text-sm mt-16 w-auto h-80">
      <p className="text-light selection:bg-light selection:text-dark">Feito por <a target='github' className="underline hover:opacity-70" href="https://github.com/adeirjunior">Adeir Junior</a></p>
      <p className="text-light selection:bg-light selection:text-dark text-right">Ele aceitaria um <a target='kofi' className="underline hover:opacity-70" href="https://ko-fi.com/adeirjunior">Café</a></p>
    </footer>
  )
}
