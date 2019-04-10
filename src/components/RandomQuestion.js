import React, { Component } from 'react'

const data = [{
    name: 'poodle'
},
{
    name: 'shitzu'
},
{
    name: 'rotweiler'
},
{
    name: 'pitbull'
}
]

function randomAnswer() {

    const randomIndex = Math.floor(Math.random() * data.length)

    return data[randomIndex]

    // while(randomIndex>0){randomIndex;
    //     randomIndex--;temp = data[randomIndex];data[randomIndex];data
    // }
}

const button1 = randomAnswer()
const button2 = 

export class GameAnswers extends Component {
    render() {
        randomAnswer()

        return (
            <div>
                <button>{randomAnswer().name}</button>
                <button>{randomAnswer().name}</button>
                <button>{randomAnswer().name}</button>

            </div>
        )
    }
}

export default GameAnswers

