import Container from '@mui/material/Container';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { Box } from '@mui/material';

const styles = {
  mainContainer: {
    minHeight: '100vh',
    position: 'relative',

    '&.MuiContainer-root': {
      padding: '0px',
    },
  },
};

const App = () => {
  return (
    <Container fixed sx={styles.mainContainer}>
      <NavBar />
      <Box component="div" sx={{ marginTop: '75px' }}>
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
