import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Bio from './Bio'

import { connect } from 'react-redux';
import * as actions from '../actions';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ color: 'white', padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: 'black',
    width: '100%',
  },
  tabsIndicator: {
    backgroundColor: 'transparent',
  }
});



class FullWidthTabs extends Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
        <AppBar 
         position="static" 
         color="default"
         >
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"

            classes={{indicator:classes.tabsIndicator}}
            textColor="primary"
            fullWidth
          >
            <Tab label="Bio" />
            <Tab label="Services" />
            <Tab label="Portfolio" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <Bio />
            <p>
            We're under construction here, please check back soon...
            </p>
          </TabContainer>
          <TabContainer dir={theme.direction}>
          <p>
            Currently taking on new projects for individuals and small business, as well as looking for a job that's the right fit. Think I might fit that spot? <u>Contact me.</u>
          </p>
          <p>
            Languages: JavaScript (React, Node, jQuery), Python, HTML5, CSS3.
          </p>
            Tools: Redux, Web Audio, Canvas, Socket.io, UI Libraries (Bootstrap, Materialize), Databases (SQL and NoSQL), and more...
          <p>
            Interests: Deep Learning, New Media / Interdisciplinary art, the Jazz-Hop Continuum, and more...
          </p>
          <p>
            We're under construction here, please check back soon...
          </p>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            We're under construction here, please check back soon...
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
  return { px: state.cardReducer.px };
}


const wiredComponent = connect(mapStateToProps, actions)(FullWidthTabs);
export default withStyles(styles, { withTheme: true })(wiredComponent);