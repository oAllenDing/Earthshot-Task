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
      {/* <Grid item>
        test
      </Grid> */}
    </Container >
  );
}

export default App;
