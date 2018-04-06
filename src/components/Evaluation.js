import React, { Component } from 'react';
import { getStudent } from '../actions/students'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import OneStudent from './OneStudent'
import './evaluation.css'

class Evaluation extends Component {

  componentWillMount() {
      this.props.getStudent(this.props.match.params.studentId)
  }

  renderEvaluations = () => {
      const {astudent} = this.props
      return astudent.map(x => {
        return(
          <div className={`foo ${x.color}`}>
          </div>
        )
      }
    )}

  render() {

    const {astudent} = this.props
      if (!astudent[0]) return null

    return (
      <div>
      <h1>Evaluations:</h1>
      {this.renderEvaluations()}
      </div>

    )
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
