import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import Recipe from './pages/Recipe'
import CreateRecipe from './pages/CreateRecipe'
import EditRecipe from './pages/EditRecipe'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/recipes/create" element={<CreateRecipe />} />
                <Route path="/recipes/:id" element={<Recipe />} />
                <Route path="/recipes/:id/edit" element={<EditRecipe />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
