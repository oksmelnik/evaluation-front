import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom'
import { allBatches } from '../actions/batches'
import {connect} from 'react-redux'
import Button from 'material-ui/Button'
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card'
class Batches extends Component {

  componentWillMount() {
    this.props.allBatches()
  }

  render() {
    const {aBatches, authenticated} = this.props
    if (!aBatches[0]) return null

    if (!authenticated) return (
  			<Redirect to="/login" />
  		)

    return (
      <div>
        <h1>All batches</h1>

        {aBatches.map(x => {
          return (
            <Card>
            <CardHeader
              title={x.batchName}
                />
              <CardContent>
              Start Date {x.startDate}
              <p/>
              End Date {x.endDate}
              <p/>
              Number of Students {x.students.length}
              </CardContent>
              <CardActions>
            <Button
            onClick={_=>window.location.href=`/${x.id}`}
            >
            Go to batch
            </Button>
            </CardActions>
            </Card>
        )}
        )}

                </div>
              );
            }
          }

const mapStateToProps = state => ({
  authenticated: state.currentUser,
  aBatches: state.batches
})

export default connect(mapStateToProps, { allBatches })(Batches)
