import React, { Component } from 'react';
import { oneBatch } from '../actions/batches'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import OneStudent from './OneStudent'
import Button from 'material-ui/Button'
import {Redirect, Link} from 'react-router-dom'
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

renderColor(lastEvaluation) {
  switch (lastEvaluation) {
      case "g":
      return "green";
      case "y":
      return "yellow";
      case "r":
      return "red"}
}

render() {
  const {batch, authenticated} = this.props
  if (!authenticated) return (
      <Redirect to="/login" />
    )

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
          <h1>{this.renderColor(
            x.evaluation[x.evaluation.length-1].color)}
            </h1>
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
      )
    }

        </div>
      );
    }
  }

const mapStateToProps = state => ({
  authenticated: state.currentUser,
  batch: state.batch
})

export default withRouter(
  connect(mapStateToProps, {
    oneBatch
})
(Students)
)
