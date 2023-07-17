import { NavLink, Outlet } from 'react-router-dom' 

const Layout = () => {
  return (<> 
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/information">Information</NavLink></li> 
      <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
    <Outlet /> {/* 各コンポーネントが表示される場所 */} 
    フッター
  </>)}

export default Layout
