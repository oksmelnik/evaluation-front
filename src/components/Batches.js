import React, { Component } from 'react';
import { allBatches } from '../actions/batches'
import {connect} from 'react-redux'

class Batches extends Component {

  componentWillMount() {
    this.props.allBatches()
  }

  render() {
    const {aBatches} = this.props
    if (!aBatches[0]) return null

    return (
      <div>
        <h1>All batches</h1>

        {aBatches.map(x => {
          return (
            <div>
            <h1>
              Batch#{x.batchName}
              <p/>
              Start Date {x.startDate}
              <p/>
              End Date {x.endDate}
              <p/>
              Number of Students {x.students.length}
              </h1>
            <button
            onClick={_=>window.location.href=`/batches/${x.id}`}
            >
            Go to batch
            </button>
            </div>
        )}
        )}

                </div>
              );
            }
          }

const mapStateToProps = state => ({
  aBatches: state.batches,
})

export default connect(mapStateToProps, { allBatches })(Batches)
