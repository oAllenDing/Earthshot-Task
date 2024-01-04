import './App.css';
import { Box, Container, Typography, Grid } from '@mui/material';




function App() {
  return (
    <Container maxWidth="xs" >
      <Box
        sx={{
          pt: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: 'center',
          gap: 4,
          bgcolor: 'black',
        }}>
        <Typography variant='h1' sx={{ my: 4, mb: 7, textAlign: 'center', color: 'primary.main' }}>
          900M = malnutrition.
        </Typography>
      </Box>
      <Grid
        container spacing={2}
        direction="row"
        justify="space-evenly"
        alignItems="center">
        <Grid item>
          <h1 style={{ backgroundColor: '#9ACD32' }}>Testing</h1>
        </Grid>
        <Grid item>
          <h1 style={{ backgroundColor: '#FF7F7F' }}>Testing</h1>
        </Grid>
        <Grid item>
          <h1 style={{ backgroundColor: 'lightblue' }}>Testing</h1>
        </Grid>
        <Grid item>
          <h1 style={{ backgroundColor: '#3B3C04' }}>Testing</h1>
        </Grid>
        <Grid item>
          <h1 style={{ backgroundColor: '#FFAE42' }}>Testing</h1>
        </Grid>
        <Grid item>
          <h1 style={{ backgroundColor: '#90EE90' }}>Testing</h1>
        </Grid>
        <Grid item>
          <h1 style={{ backgroundColor: '#CBC3E3' }}>Testing</h1>
        </Grid>
      </Grid>
    </Container >
  );
}

export default App;
