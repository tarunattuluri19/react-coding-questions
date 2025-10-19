import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Home from './Home'
import ToggleButton from './features/ToggleButton'
import BackButton from './features/BackButton'
import FormValidations from './features/FormValidations'
import ShowDataInTable from './features/ShowDataInTable'
import CrudUsers from './features/CrudUsers'

const Layout = () => {
  return (
    <div>
      <BackButton />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/togglebutton' element={<ToggleButton />} />
          <Route path='/formvalidation' element={<FormValidations />} />
          <Route path='/showdataintable' element={<ShowDataInTable />} />
          <Route path='/crudusers' element={<CrudUsers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App