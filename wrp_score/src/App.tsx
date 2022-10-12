import Container from '@mui/material/Container';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { Box } from '@mui/material';

const styles = {
  mainContainer: {
    bgcolor: '#f9f9f9',
    minHeight: '100vh',
    p: { xs: 1, md: 2 },
    position: 'relative',
  },
};

const App = () => {
  return (
    <Container fixed sx={styles.mainContainer}>
      <NavBar />
      <Box component='div' sx={{ marginTop: '75px' }}>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route path={path} element={element} key={path} />
          ))}
        </Routes>
      </Box>
    </Container>
  );
};

export default App;
