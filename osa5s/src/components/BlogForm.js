import React from 'react'
import Notification from './Notification'

class BlogForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            author: '',
            url: ''
        }
    }

    handleTitle = (event) => {
        this.setState({title: event.target.value })
    }

    handleAuthor = (event) => {
        this.setState({author: event.target.value })
    }

    handleUrl = (event) => {
        this.setState({url: event.target.value })
    }

    createBlog = async (event) => {
        event.preventDefault()
        try {
            const blog = await {
                author: this.state.author,
                title: this.state.title,
                url: this.state.url
            }

            console.log(blog)
        this.props.onSubmit(blog)
        this.setState({author: '', title: '', url: ''})


        } catch(error) {
            console.log(error)
        }
    }

    

render() {
    return (
        <div>

          <h2>Create new</h2>
    
          <form>
          <div>
              title
            <input
            onChange={this.handleTitle}

            />
            </div>
            <div>
            author
            <input
               onChange={this.handleAuthor}
            />
            </div>
            <div>
            url
            <input
             onChange={this.handleUrl}
            />
            </div>
            <button onClick={this.createBlog}>create</button>
          </form>
        </div>
      )
    }
}




export default BlogForm