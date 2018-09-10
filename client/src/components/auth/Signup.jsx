
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';

// import '../styles/Signup.css';
import theme from '../../mui-styles/theme'

import { MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const styles = {
    root: {
      background: "black"
    },
    input: {
      color: "white",
    },
   
  };


class Signup extends Component {
    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onSubmit = (formProps) => {
        this.props.signup(formProps, () => {
            this.props.history.push('/feature');
        });
    };

    renderTextField = (
        { input, label, meta: { touched, error }, ...custom }
      ) => {
        const { classes } = this.props;
        return (
            <TextField
              defaultValue={label}
              label={label}
              error={touched && error}
              {...input}
              {...custom}
              className={classes.root}
              InputProps={{
                className: classes.input,
              }}
        
            />
          );

      } 


    render() {
        const { handleSubmit } = this.props;
        return (
        <MuiThemeProvider theme={theme}>
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <legend>email</legend>
                        <Field
                        //  label='email'
                        name='email'
                        type='text'
                        component={this.renderTextField}
                        autoComplete='none'
                        />
                    </fieldset>

                    <fieldset>
                            <legend>password</legend>
                        <Field
                        //  label='password'
                        name='password'
                        type='password'
                        component={this.renderTextField}
                        autoComplete='none'
                        />
                    </fieldset>
                    <fieldset>
                    <Button
                        type='submit'
                        variant='contained' 
                        size='small'
                        color='primary'>Submit</Button>
                    </fieldset>
                    <div>{this.props.errorMessage}</div>
            </form> 
        </MuiThemeProvider>
        )
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.authReducer.errorMessage };
}

const wiredComponent = compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signup' })
)(Signup);

export default withStyles(styles)(wiredComponent);
