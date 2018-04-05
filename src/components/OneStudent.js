import * as request from 'superagent'
import React, { Component } from 'react';
import {connect} from 'react-redux'

class OneStudent extends Component {

  render() {
    const { student } = this.props

    return (

              <div>
              <h3>Name{student.studentName}</h3>
              <h4>Image</h4>
              </div>

            );
          }
        }


export default OneStudent
