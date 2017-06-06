import React from 'react'
import LinkDumpImg from './LinkDumpImg'
import LinkDumpHeadline from './LinkDumpHeadline'
import LinkDumpExcerpt from './LinkDumpExcerpt'
import LinkDumpAuthor from './LinkDumpAuthor'

const LinkDumpArticle = (props) => (
  <article className={'w-30 pv4 post-' + props.id} data-post-id={'post_' + props.id}>
    <a target='_blank' href={props.url} className='link'>
        <LinkDumpImg src={props.altImgUrl ? props.altImgUrl : props.imgUrl} alt={props.title}/>
        <div className='link-text'>
          <LinkDumpHeadline title={props.title} />
          <LinkDumpExcerpt excerpt={props.excerpt} />
          <LinkDumpAuthor author={props.author ? `${props.author} | ${props.publisher}` : props.publisher} />
        </div>
    </a>
  </article>
)

export default LinkDumpArticle
