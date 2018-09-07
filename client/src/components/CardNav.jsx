import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

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
    width: 'auto',

  },
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
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel ipsum nec nunc euismod elementum ac ac ligula. Ut sem est, sagittis vitae viverra sed, iaculis sed urna. Phasellus elementum, dui eget bibendum pretium, sapien justo fermentum diam, non pharetra mi leo suscipit quam. In ipsum nisi, mollis id augue sit amet, rutrum varius turpis. Phasellus vel dolor et nunc varius ornare eu ac mi. Ut nec tempus dui. Pellentesque volutpat nisi nulla, sit amet elementum quam consequat et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis accumsan arcu, in sollicitudin nulla interdum et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sit amet nisl in tellus porta faucibus vitae posuere felis. Praesent imperdiet porttitor nibh at tincidunt. In varius neque leo, at posuere nulla dignissim a.
          </TabContainer>
          <TabContainer dir={theme.direction}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel ipsum nec nunc euismod elementum ac ac ligula. Ut sem est, sagittis vitae viverra sed, iaculis sed urna. Phasellus elementum, dui eget bibendum pretium, sapien justo fermentum diam, non pharetra mi leo suscipit quam. In ipsum nisi, mollis id augue sit amet, rutrum varius turpis. Phasellus vel dolor et nunc varius ornare eu ac mi. Ut nec tempus dui. Pellentesque volutpat nisi nulla, sit amet elementum quam consequat et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis accumsan arcu, in sollicitudin nulla interdum et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sit amet nisl in tellus porta faucibus vitae posuere felis. Praesent imperdiet porttitor nibh at tincidunt. In varius neque leo, at posuere nulla dignissim a.
          </TabContainer>
          <TabContainer dir={theme.direction}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel ipsum nec nunc euismod elementum ac ac ligula. Ut sem est, sagittis vitae viverra sed, iaculis sed urna. Phasellus elementum, dui eget bibendum pretium, sapien justo fermentum diam, non pharetra mi leo suscipit quam. In ipsum nisi, mollis id augue sit amet, rutrum varius turpis. Phasellus vel dolor et nunc varius ornare eu ac mi. Ut nec tempus dui. Pellentesque volutpat nisi nulla, sit amet elementum quam consequat et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis accumsan arcu, in sollicitudin nulla interdum et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sit amet nisl in tellus porta faucibus vitae posuere felis. Praesent imperdiet porttitor nibh at tincidunt. In varius neque leo, at posuere nulla dignissim a.
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

export default withStyles(styles, { withTheme: true })(FullWidthTabs);