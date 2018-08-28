import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//Import all from bin
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './HeaderStyle.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

//Import from external file
//Configure color palette here
const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  })

//Import from external file
//Configure component styles here
const styles = {
    rightToolbar: {
      marginLeft: 'auto',
      marginRight: -12,
    },
    menuButton: {
      marginRight: 16,
      marginLeft: -12,
    },
  };

class Header extends Component {
    renderLinks() {
        if(this.props.authenticated) {
            return (
                <div>
                    <Button color='inherit'>
                    <Link to='/signout'>Sign Out</Link>
                    </Button>
                    <Button color='inherit'>
                    <Link to='/feature'>Feature</Link>
                    </Button>
                </div>
            );
        } else {
            return (
                <div>
                    <Button color='inherit'>
                    <Link to='/signup'>Sign Up</Link>
                    </Button>
                    <Button color='inherit'>
                    <Link to='/signin'>Sign In</Link>
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
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit">
                        <Link to='/'>Home</Link>
                        </Typography>
                        <Button color='inherit'>
                        </Button>
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
