import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './IceAndFire.css'

import IceAndFireCharacter from './IceAndFireCharacter'

class IceAndFire extends Component {
    state = {
        name : '',
    }

    handleChange = (event) => {
        const name = event.currentTarget.value
        this.setState({ name })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.history.push(`/got/${this.state.name}`)
    }

    render() {
        return (
            <div className="IceAndFire">
                <img className="IceAndFire-logo" src="https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg" alt="Game of Thrones title card" />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Look up a character.</button>
                    </div>
                </form>
                <Route exact path='/got' render={() => <h3>Please enter the name of the character you want to look up from Game of Thrones/A Song of Ice and Fire!</h3>} />
                <Route path='/got/:name' component={IceAndFireCharacter} />
            </div>
        )
    }
}

export default IceAndFire