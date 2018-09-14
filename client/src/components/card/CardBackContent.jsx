
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import Indicator from './Indicator';
import Bio from './Bio'
import Portfolio from './Portfolio'

import { connect } from 'react-redux';
import * as actions from '../../actions';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} 
      style={{ 
        color: 'white', 
        padding: 8 * 3,  
        height: '420px',
        }}>
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
    // backgroundColor: 'trans',
    // backgroundImage: `url(${require('./assets/img/headshot2.jpg')})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: '100%',
    // backgroundPosition: '50%',
    width: '100%',
    height: '500px',
  },
  tabsIndicator: {
    background: 'transparent',
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
          {/* <div className='bio-img-container'></div>  */}
            <Bio />
            <p>

            We're under construction here, please check back soon...
            
            
            </p>

           

          </TabContainer>
          <TabContainer dir={theme.direction}>
          <h2>Services</h2>
          <p>
            We're under construction here, please check back soon...
          </p>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Portfolio windowDims={this.props.windowDims}/>
          </TabContainer>
        </SwipeableViews>
        <Indicator className='indicator' tabNum={3} focus={this.state.value} />
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