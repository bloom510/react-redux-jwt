import React from 'react';
import Header from './Header';
import Grid from '@material-ui/core/Grid';


export default ({ children }) => {
    return (
        <Grid>
            <Header />
            { children }
        </Grid>
    );
}