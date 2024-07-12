
export default function NoticiasXPage({
    params,
  }: {
    params: {
      nombreNoticia: string
    }
  }) {

    return (
      <div>Noticia X {params.nombreNoticia}</div>
    )
  }
  