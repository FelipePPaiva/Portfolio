import "./global.css"
import {Home} from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Politica} from "./pages/PoliticaPrivacidade";
import { ScrollToHashElement } from "./components/scrollToHashElement";
import { Termo } from "./pages/TermoResponsabilidade";
export function App(){
  

  return (
    <Router>
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TermoResponsabilidade" element={<Termo/>} />
        <Route path="/PoliticaPrivacidade" element={<Politica/>} />
      </Routes>
    </Router>

  )
}