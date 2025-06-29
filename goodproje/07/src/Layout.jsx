 
import Header from './component/header/header.jsx'
import Footer from './component/footer/footer.jsx'

import { Outlet } from 'react-router-dom'

export default function layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
