import { Route } from 'react-router-dom'

import Header from './components/sections/Header'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Connect from './components/pages/Connect'
import Blog from './components/pages/Blog'
import Portfolio from './components/pages/Portfolio'
import Resume from './components/pages/Resume'
import Skill from './components/pages/Skill'
import Project from './components/pages/Project'
import Footer from './components/sections/Footer'

import './App.css'

function App() {
    return (
        <>
            <Header />

            <main>
                <Route 
                    exact path="/" 
                    component={Home}
                />

                <Route 
                    path="/about" 
                    component={About}
                />

                <Route 
                    path="/contact" 
                    component={Contact}
                />

                <Route 
                    path="/connect" 
                    component={Connect}
                />

                <Route 
                    path="/blog" 
                    component={Blog}
                />

                <Route 
                    path="/portfolio" 
                    component={Portfolio}
                />

                <Route 
                    path="/resume" 
                    component={Resume}
                />
                
                <Route 
                    path="/skill" 
                    component={Skill}
                />
                
                <Route 
                    path="/project" 
                    component={Project}
                />
            </main>
            
            <Footer />
        </>
    )
}

export default App