import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import './styles/HeaderStyle.css';
import { styles } from './styles/styles'
import theme from './styles/theme'

import { MuiThemeProvider } from '@material-ui/core/styles';

class Header extends Component {
    renderLinks() {
        if(this.props.authenticated) {
            return (
                <div>
                    <Link className='nav-a' to='/signout'>
                        <Button color='inherit'>
                        Sign Out
                        </Button>
                    </Link>
                    
                    <Link className='nav-a' to='/feature'>
                        <Button color='inherit'>
                        Dashboard
                        </Button>
                    </Link>
                </div>
            );
        } else {
            return (
                <div>
                    {/* <Button color='inherit'>
                        <Link className='nav-a' to='/'>Home</Link>
                    </Button> */}
                    <Button color='inherit'>
                        <Link className='nav-a' to='/signin'>Admin</Link>
                    </Button>
                </div>
            )
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <AppBar color='primary' position='static'>
                    <Toolbar>
                        <section className={classes.rightToolbar}>
                        {this.renderLinks()}
                        </section>
                    </Toolbar>
                </AppBar>
            </MuiThemeProvider>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return { authenticated: state.authReducer.authenticated };
}

const wiredComponent = connect(mapStateToProps)(Header);
export default withStyles(styles)(wiredComponent);
