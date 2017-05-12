import React, { Component } from 'react';
import marked from 'marked';
import Textarea from 'react-textarea-autosize';
import text from './res/defaultText';

class App extends Component {

  constructor() {
    super();
    this.state = {
      source: text,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log('hello');
    this.setState({source: event.target.value});
  }

  update() {
  	var rendered = marked(this.state.source, {sanitize: true})
    return rendered;
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Markdown Previewer</h2>
        </div>
        <div className='content'>
          <div className='source'>
            <div className='wrapper'>
              <Textarea onChange={this.handleChange}
                value={this.state.source} />
            </div>
          </div>
          <div className='preview' dangerouslySetInnerHTML={{__html: this.update()}} />
        </div>
      </div>
    );
  }
}

export default App;
