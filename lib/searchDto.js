import { removerAcentosEspacos } from "./removerAcentosEspacos"

export function SearchDTO(data) {
    const posts = []

    if(data) {
        data.map(({title, slug}) => {
            posts.push({
                name: title,
                value: removerAcentosEspacos(title),
                slug
            })
        })
    }
    

    return posts
}