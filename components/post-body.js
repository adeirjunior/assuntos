import markdownStyles from './markdown-styles.module.css'
import { PortableText } from '@portabletext/react'
import { CopyBlock, dracula } from "react-code-blocks"
import Image from 'next/image'
import { urlForImage } from '../lib/sanity'

const components = {
  types: {
    code: ({value}) => {
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
    },
    image: ({value}) => {
      return (
        <Image 
          src={urlForImage(value?.asset?._ref).url()}
          width={1000}
          height={700}/>
      )
    }
  },
}

export default function PostBody({ content }) {
  return (
    <div className={`post-text max-w-2xl mx-auto ${markdownStyles.markdown}`}>
      <PortableText components={components} value={content} />
    </div>
  )
}
