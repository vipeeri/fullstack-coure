import React from 'react'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import Togglable from './components/Togglable'
import blogService from './services/blogs'
import loginService from './services/login'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import TextToggle from './components/TextToggle'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      newBlog: '',
      username: '',
      password: '',
      user: null,
      showAll: true,
      error: null,
      notification: null
    }
    this.addBlog = this.addBlog.bind(this)
  }

  componentDidMount() {
    blogService.getAll().then(blogs =>
      this.setState({ blogs })
    )
    
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.setState({ user })
      blogService.setToken(user.token)
    }    
  } 

  toggleVisible = () => {

    this.setState({ showAll: !this.state.showAll })
  }

  addBlog = (blog) => {
    const blogObject = {
      title: blog.title,
      author: blog.author,
      url: blog.url
    }

    
    blogService
      .create(blogObject)
      .then(newBlog => {
        this.setState({
          blogs: this.state.blogs.concat(newBlog),
          newBlog: '',
          notification: 'Uusi blogi lisätty: ' + blogObject.title
        })
        setTimeout(() => {
          this.setState({ notification: null })
        }, 5000)
      })
  }

  updateLike = (id) => {
    const userToken = JSON.parse(window.localStorage.getItem('loggedBlogappUser')).token

    return () => {

      const blog = this.state.blogs.find(n => n._id === id)
      const changedBlog = { user: userToken, ...blog, likes: blog.likes + 1}

      blogService
        .update(id, changedBlog)
        .then(changedBlog => {
          this.setState({
            blogs: this.state.blogs.map(blog => blog._id !== id ? blog : changedBlog)

          })
          

        })
        .catch(error => {
          this.setState({
            error: `muistiinpano '${blog.title}' on jo valitettavasti poistettu palvelimelta`,
            blogs: this.state.blogs.filter(n => n.id !== id)
          })
          setTimeout(() => {
            this.setState({ error: null })
          }, 50000)
        })
    }
  }

  login = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })


      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
      blogService.setToken(user.token)
      this.setState({ username: '', password: '', user })

    } catch (exception) {
      this.setState({
        error: 'käyttäjätunnus tai salasana virheellinen',
      })
      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
    }
  }


  


  handleLoginFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  toggleVisible = () => {
    this.setState({ showAll: !this.state.showAll })
  }

  handleLogout = () => {

    this.setState({ user: null },() => {
      window.localStorage.clear()
    });
  }

  handleBlogChange = (event) => {
    this.setState({ newBlog: event.target.value })
  }

 

  render() {
    const loginForm = () => (
      
        <LoginForm
          visible={this.state.visible}
          username={this.state.username}
          password={this.state.password}
          handleChange={this.handleLoginFieldChange}
          handleSubmit={this.login}
        />
        
        
    )

  

    const blogStyle = {
      paddingTop: 10,
      paddingLeft: 2,
      border: 'solid',
      borderWidth: 1,
      marginBottom: 5
    }
    
    return (
      <div>
        <Notification message={this.state.error} />

          {this.state.user === null ?
          loginForm() :
          <div>
            <p>{this.state.user.name} logged in</p>
            <button onClick={this.handleLogout}> logout </button>

            <Togglable buttonLabel="new blog" ref={component => this.BlogForm = component}>
              <Notification message={this.state.notification}/>
                <BlogForm
                 onSubmit={this.addBlog}
                />
             </Togglable>

        <h2>blogs</h2>
        {this.state.blogs.map(blog => 
         <div style={blogStyle}>
         <TextToggle buttonLabel={blog.title} ref={component => this.Blog = component}>

<Blog key={blog._id} likes={this.updateLike(blog._id)} blog={blog} user={JSON.parse(window.localStorage.getItem('loggedBlogappUser'))} />

        </TextToggle>
        </div>
        )}
      </div>
        }
      </div>
    )
  }
}

export default App
