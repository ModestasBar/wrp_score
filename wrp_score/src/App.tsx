import React from 'react';
import Container from '@mui/material/Container';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { Box } from '@mui/material';

export interface IdummyData {
  name: string;
  surname: string;
  age: string;
}

const styles = {
  mainContainer: {
    bgcolor: '#cfe8fc',
    minHeight: '100vh',
    p: { xs: 1, md: 2 },
    position: 'relative',
  },
};

const App: React.FC = () => {
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
