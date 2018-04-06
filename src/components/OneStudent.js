import * as request from 'superagent'
import React, { Component } from 'react';
import {connect} from 'react-redux'
import Avatar from 'material-ui/Avatar'

class OneStudent extends Component {

  render() {
    const { student } = this.props

    return (
              <div>
              <h3>{student.studentName}</h3>
              <Avatar src={student.image}/>
              </div>

            );
          }
        }


export default OneStudent
