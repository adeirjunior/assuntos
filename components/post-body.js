import markdownStyles from './markdown-styles.module.css'
import { PortableText } from '@portabletext/react'
import { CopyBlock, dracula } from "react-code-blocks"

const code = {
  types: {
    code: ({value}) => {
      const turnArray = () => [value?.code]
      return (
        <code className='select-none'>
          <CopyBlock
            text={value?.code}
            language={value?.language}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </code>  
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
