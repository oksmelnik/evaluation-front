import React, { Component } from 'react';
import { oneBatch } from '../actions/batches'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import OneStudent from './OneStudent'
import Button from 'material-ui/Button'
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card'



class Students extends Component {

  componentWillMount() {
      this.props.oneBatch(this.props.match.params.batchId)
  }

  randomStudent() {

    const {batch} = this.props
    const list = [batch.students.map(x => {
        const nameS = x.id.toString()
        const lastColor = x.evaluation[
          x.evaluation.length-1].color
        switch (lastColor) {
          case "g":
          return nameS.repeat(19);
          case "y":
          return nameS.repeat(28);
          case "r":
          return nameS.repeat(53);
        }
      }
    )]
    let l = list.toString().length

return parseInt(list.toString()
[Math.floor(Math.random() * l)])
  }

  render() {
    const {batch} = this.props
        if (!batch.students) return null

    return (
      <div>
      <Button
      onClick={
        _=>window.location
        .href=`/students/${this.randomStudent()}`
      }>
      Ask a question
      </Button>

      {batch.students.map(x => {
          const {batch} = this.props
        return (
          <Card>
          <OneStudent
            student={x}/>
          <CardActions>
            <Button
            onClick={
              _=>window.location
              .href=`/students/${x.id}`
            }>
            Evaluate
            </Button>
            </CardActions>
          </Card>)
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
