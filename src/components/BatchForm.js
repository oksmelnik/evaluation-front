import React, {PureComponent} from 'react'
import TextField from 'material-ui/TextField'

class BatchForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {
		const initialValues = this.props.initialValues || {}
		return (
			<form onSubmit={this.handleSubmit}>
      <div>
        <label htmlFor="batchName">Batch Name</label>
        <input name="batchName" id="batchName" value={
          this.state.batchName || initialValues.batchName || ''
        } onChange={ this.handleChange } />
      </div>

      <TextField
               id="sdate"
               name="sdate"
                   label={("Start Date")}
               type="date"
                 value={this.state.sdate }
               onChange={ this.handleChange }
               InputLabelProps={{
                 shrink: true,
               }}
             />
             <TextField
                      id="edate"
                      name="edate"
                          label={("End Date")}
                      type="date"
                        value={this.state.edate }
                      onChange={ this.handleChange }
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />

				<button type="submit">Save</button>
			</form>
		)
	}
}

export default BatchForm
