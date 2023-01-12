// We import object and document schemas
// import blockContent from './blockContent'
import post from './post'
import author from './author'
import category from './category'

// Then we give our schema to the builder and provide the result to Sanity
const schemaTypes = [post, author, category]

export default schemaTypes