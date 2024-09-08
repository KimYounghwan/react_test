import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function ButtonUsage() {
  return (<>
<Button variant="contained">Hello world</Button>
<Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<Grid container spacing={2}>
        <Grid item xs={6} md={3}>
            <Button fullWidth variant='contained'>1</Button>
        </Grid>
      
        <Grid item xs={6} md={3}>
            <Button fullWidth variant='contained'>2</Button>
        </Grid>
      
        <Grid item xs={6} md={3}>
            <Button fullWidth variant='contained'>3</Button>
        </Grid>
      
        <Grid item xs={6} md={3}>
            <Button fullWidth variant='contained'>4</Button>
        </Grid>
      
        <Grid item xs={12} md={6}>
            <Button fullWidth variant='contained'>5</Button>
        </Grid>
      
        <Grid item xs={12} md={6}>
            <Button fullWidth variant='contained'>6</Button>
        </Grid>
     </Grid>
  </>
);
}