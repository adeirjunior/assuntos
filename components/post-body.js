import markdownStyles from './markdown-styles.module.css'
import { PortableText } from '@portabletext/react'

const code = {
  types: {
    code: ({value}) => {
      const turnArray = () => [value?.code]
      return (
        <div>
          <code>
            {turnArray()}
          </code>
          
        </div>  
      )
    }
  },
}

export default function PostBody({ content }) {
  return (
    <div className={`post-text max-w-2xl mx-auto ${markdownStyles.markdown}`}>
      <PortableText components={code} value={content} />
    </div>
  )
}
