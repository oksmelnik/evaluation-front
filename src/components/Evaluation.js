import React, { Component } from 'react';
import { getStudent } from '../actions/students'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import OneStudent from './OneStudent'



class Evaluation extends Component {

  componentWillMount() {
      this.props.getStudent(this.props.match.params.studentId)
  }

  render() {

    const {astudent} = this.props
      if (!astudent) return null

    return (
      <h1>sfv</h1>
    );
            }
          }

const mapStateToProps = (state, props) => ({

astudent: state.student
})

export default withRouter(
  connect(mapStateToProps, {
    getStudent
})
(Evaluation)
)
