import { BrowserRouter, Route, Routes } from "react-router-dom/dist/react-router-dom.development"
import Home from "./components/Home"


function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
