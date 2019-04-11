import React, { Component } from 'react'
import request from 'superagent'
import { connect } from "react-redux"
import DogsList from './DogsList'
import { getDogsList } from '../actions/DogsListAction'


class DogsListContainer extends Component {
    componentDidMount() {
        this.props.getDogsList()
    }

    render() {
        const { dogsList } = this.props
        return (
            <div>
                <DogsList dogslist={dogsList} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { dogsList: state.DogsListReducer.dogsList }
}

export default connect(mapStateToProps, { getDogsList })(DogsListContainer);
