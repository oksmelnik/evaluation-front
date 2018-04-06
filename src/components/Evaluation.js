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
      const {eva} = this.props
      return eva.map(x => {
        return(
          <div className={`foo ${x.color}`}>
          </div>
        )
      }
    )}

  render() {

    const {eva, student} = this.props
      if (!eva) return null
      if (!student) return null

    return (
      <div>
      <OneStudent
        student={student}/>
      <h1>Evaluations:</h1>
      {this.renderEvaluations()}
      </div>

    )
            }
          }

const mapStateToProps = (state, props) => ({
student: state.student,
eva: state.student.evaluation
})

export default withRouter(
  connect(mapStateToProps, {
    getStudent
})
(Evaluation)
)
