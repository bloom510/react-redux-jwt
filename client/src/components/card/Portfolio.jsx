import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';
import image from '../../assets/img/headshot2.jpg';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      width: '100%',
      margin: '0 auto',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
    gridList: {
        width: '100%',
        height: '100%',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  });

    const tileData = [
        { 
            img: image,
            title: 'Placeholder',
            author: 'author',
        },
        { 
            img: image,
            title: 'Placeholder',
            author: 'author',
        },
        { 
            img: image,
            title: 'Placeholder',
            author: 'Placeholder',
        },
        { 
            img: image,
            title: 'Placeholder',
            author: 'author',
        },
        { 
            img: image,
            title: 'Placeholder',
            author: 'author',
        },
        { 
            img: image,
            title: 'Placeholder',
            author: 'author',
        },
    ];


class TitlebarGridList extends Component {
  constructor() {
    super();
    this.PHI = (1 + Math.sqrt(5)) / 2;
  }

  render() {
    const { classes } = this.props;
    return (
    <div>
      <div id='search-container'>
      <div style={{marginBottom: this.props.windowDims.width >= 720 ? '-3%' : '-14%'}}>
        <h2>Portfolio</h2> 
        <input type='text' style={{borderRadius:'5px', height:'25px'}} placeholder={`Search tags (e.g 'React')`}></input>
          <p>
          Below are placeholders for the mockup's sake. Thanks for bearing with us here, please come back soon!        
          </p>
        </div>
      </div>
      <div 
       className={classes.root}>
        <GridList 
          cellHeight={this.props.windowDims.height / 5*this.PHI}
         cols={this.props.windowDims.width >= 720 ? 2 : 1}
         className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: '100%', marginTop: '-4%' }}>
            <ListSubheader component="div">December</ListSubheader>
            {/* Move portfolio header and search bar here */}
          </GridListTile>
          {tileData.map(tile => (
            <GridListTile key={Math.random()*999}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
    );
  }
}
  
  TitlebarGridList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(TitlebarGridList);