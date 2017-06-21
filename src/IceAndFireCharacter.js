import React, { Component } from 'react'

import './IceAndFireCharacters.css'

class IceAndFireCharacter extends Component {
    state = {
        character: {
            data: {
                dateOfBirth: '',
                culture: '',
                house: '',
                name: '',
                books: [],
                titles: [],
            },  
        },
    }

    constructor(props) {
        super(props)

        this.fetchCharacterData(this.props)
    }

    fetchCharacterData = (props) => {
        fetch(`https://api.got.show/api/characters/${props.match.params.name}`)
            .then(response => response.json())
            .then(character => this.setState({ character }))
    }

    componentWillReceiveProps(nextProps) {
        const locationChanged = nextProps.location !== this.props.location
        if (locationChanged) {
            this.fetchCharacterData(nextProps)
        }
    }

    render() {
        try {
            const { character } =this.state
            const { data } = character

            return (
                <div className="IceAndFire-character">
                    <h2>{data.name}</h2>
                    <h3>Year of Birth: {data.dateOfBirth}</h3>
                    <h3>{data.house}</h3>
                    <h3>{data.culture}</h3>
                    <h3>Titles: {data.titles.join(', ')}</h3>
                    <h3>Appeared in: {data.books.join(', ')}</h3>
                </div>
            )
        }
        catch(error){
            return (
                <div className="IceAndFire-character">
                    <h2>Invalid Input</h2>
                </div>
            )
        }
    }
}

export default IceAndFireCharacter