import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { ProjectPage } from "./components/projects/ProjectPage";
import { ProjectModal } from "./components/projects/ProjectModal";
import { NavBar } from "./components/NavBar";
import { StarBackground } from "./components/StarBackground";


function AppRoutes() {

  const location = useLocation()
  const backgroundLocation = location.state?.backgroundLocation

  return(
    <>

      <NavBar />
      <StarBackground />
      <Routes location={backgroundLocation || location}>
        <Route index element={<Home />}/>
        <Route path="/projects/:slug" element={<ProjectPage />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>

      {backgroundLocation && (
        <Routes>
          <Route path="/projects/:slug" element={<ProjectModal />} />
        </Routes>
      )}
    </>
  )
}


function App() {

  return (
    <>
      <BrowserRouter>
       <AppRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
