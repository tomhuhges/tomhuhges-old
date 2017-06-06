import React from 'react'
import jsonp from 'jsonp'
import jsonurl from '../../tumblr-api/apiKeys'
import LinkDumpArticle from './LinkDumpArticle'

class LinkDumpPage extends React.Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    const self = this
    jsonp(jsonurl, null, function (err, data) {
      if (err) {
        console.error(err.message)
      } else {
        console.log(data.response.posts)
        self.setState({
          posts: data.response.posts
        })
      }
    })
  }
  render() {
    this.state.posts.map(article=>{
      console.log(article.description)
    })
    return (
      <div className="flex justify-between flex-wrap w-100">
        {this.state.posts.map(article=>(
          <LinkDumpArticle
            key={article.id}
            id={article.id}
            title={article.title}
            url={article.url}
            author={article.author}
            excerpt={article.excerpt}
            publisher={article.publisher}
            altImgUrl={article.description.match(/http.*jpg/)}
            imgUrl={article.link_image}
          />
        )
          )}
      </div>
    )
  }
}

export default LinkDumpPage
