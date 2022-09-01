import Container from "@mui/material/Container";
import Main from "./pages/Main";
import NavBar from "./components/NavBar";
import { Link, Route, Routes } from "react-router-dom";

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
];

const App = () => {
  return (
    <Container
      fixed
      sx={{
        bgcolor: "#cfe8fc",
        height: "100vh",
        position: "relative",
      }}
    >
      <NavBar />
      <div style={{ marginTop: "75px" }}>
        <Routes>
          <Route path="/" element={<Main lifters={dummyData} />} />
        </Routes>
      </div>
    </Container>
  );
};

export default App;
