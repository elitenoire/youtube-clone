import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppLayout from '~components/AppLayout'
import Home from '~src/pages/Home'

function App() {
  return (
    <>
      <div>HELLO</div>
      <Router>
        <Routes>
          <Route path={import.meta.env.BASE_URL} element={<AppLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
