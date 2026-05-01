
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TutorialHome } from './Video-tutorial-home';

function App() {

  return (
    <div className="container-fluid">
      <BrowserRouter>
        <header>
          <div className='navbar-brand'>
            EduStream
          </div>
        </header>

        <section>
          <Routes>
            <Route path='/' element={<TutorialHome />} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  )
}

export default App
