import React, { Component } from 'react';
import { oneBatch } from '../actions/batches'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import OneStudent from './OneStudent'



class Students extends Component {

  componentWillMount() {
      this.props.oneBatch(this.props.match.params.batchId)
  }

  render() {
    const {batch} = this.props
        if (!batch.students) return null

    return (

      <div>
      {batch.students.map(x => {
        return (
          <div>
          <OneStudent
            student={x}/>
            <button
            onClick={
              _=>window.location
              .href=`/batches/${x.batchId}/${x.studentId}`
            }>
            Evaluate
            </button>
          </div>)
      }
      )}

        </div>
              );
            }
          }

const mapStateToProps = state => ({
  batch: state.batch
})

export default withRouter(
  connect(mapStateToProps, {
    oneBatch
})
(Students)
)
