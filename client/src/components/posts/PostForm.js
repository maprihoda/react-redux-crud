import React, { Component } from 'react'

export default class PostForm extends Component {
  constructor(props) {
    super(props)
    // this is a controlled form, so
    let title = ''
    let body = ''

    this.props.post && (
      { title, body } = this.props.post
    )

    this.state = {
      title,
      body,
      error: ''
    }
  }

  handleTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  }

  handleBodyChange = (e) => {
    const body = e.target.value;
    this.setState(() => ({ body }));
  }

  // Just some simple validations
  // (for illustration purposes, atm)
  handleSubmit = (e) => {
    e.preventDefault();

    let { title, body } = this.state
    title = title.trim()
    body = body.trim()


    if (!title || !body) {
      this.setState(() => ({
        error: 'Please provide both title and body.'
      }));
      return
    }

    const limit = 3000
    if (body.length > limit) {
      this.setState(() => ({
        error: `Body is too long (max. ${limit} characters)`
      }));
      return
    }

    this.setState(() => ({ error: '' }));
    this.props.onSubmit({ title, body })
  }

  render() {
    const { title, body, error } = this.state

    return (
      <div>
        {error && <div className="form-error">{error}</div>}

        <form className="form" onSubmit={this.handleSubmit}>
          <div className="field field-text">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              autoFocus
              value={title}
              onChange={this.handleTitleChange}
            />
          </div>

          <div className="field field-text">
            <label htmlFor="body">Body:</label>
            <textarea
              id="body"
              value={body}
              onChange={this.handleBodyChange}
            />
          </div>

          <button className="btn">Save</button>
        </form>
      </div>
    )
  }
}
