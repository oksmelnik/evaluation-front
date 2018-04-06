import * as request from 'superagent'
import React, { Component } from 'react';
import {connect} from 'react-redux'
import Avatar from 'material-ui/Avatar'

class OneStudent extends Component {

  render() {
    const { student } = this.props
    const img = student.image[0] === "h" ? student.image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-IQjfa4W1pi2M9AT4v_uvbO0Fz2lbbfsfTTo6Rf8SqeghVUPj"
    return (
              <div>
              <h3>{student.studentName}</h3>
              <Avatar src={img}/>
              </div>

            );
          }
        }


export default OneStudent
