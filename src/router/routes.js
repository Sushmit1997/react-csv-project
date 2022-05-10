import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage} from '../pages';



const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterComponent