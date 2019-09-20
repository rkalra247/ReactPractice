import React from 'react'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: [],
      input: ''
    }
  }
  render () {
    const eachTasks = this.state.tasks.map((e, i) => {
      return (
        <p key={i}>{e}</p>
      )
    })
    return (
      <div className='container'>
        <div className='inputContainer'>
          <input className='userInput' value={this.state.input} onChange={(e) => {
            this.setState({
              input: e.target.value
            })
          }} />
          <button className='submit' onClick={() => {
            const tasks = this.state.tasks
            tasks.push(this.state.input)
            this.setState({
              tasks,
              input: ''
            })
          }}>SUBMIT</button>
        </div>
        <li>{eachTasks}</li>
      </div>
    )
  }
}

export default App
