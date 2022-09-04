import Container from "@mui/material/Container";
import Main from "./pages/Main";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

export interface IdummyData {
  name: string;
  surname: string;
  age: string;
}

export const dummyData = [
  {
    name: "User1",
    surname: "Surname1",
    age: "34",
  },
  {
    name: "User1",
    surname: "Surname1",
    age: "34",
  },
  {
    name: "User1",
    surname: "Surname1",
    age: "34",
  },
  {
    name: "User1",
    surname: "Surname1",
    age: "34",
  },
  {
    name: "User1",
    surname: "Surname1",
    age: "34",
  },
  {
    name: "User1",
    surname: "Surname1",
    age: "34",
  },
  {
    name: "User1",
    surname: "Surname1",
    age: "34",
  },
  {
    name: "User1",
    surname: "Surname1",
    age: "34",
  },
  {
    name: "User1",
    surname: "Surname1",
    age: "34",
  },
];

const App = () => {
  return (
    <Container
      fixed
      sx={{
        bgcolor: "#cfe8fc",
        minHeight: "100vh",
        padding: 1,
      }}
    >
      <NavBar />
      <div style={{ marginTop: "75px" }}>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route path={path} element={element} key={path} />
          ))}
        </Routes>
      </div>
    </Container>
  );
};

export default App;
