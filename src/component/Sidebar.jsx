import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <nav className="ul">

      <NavLink to="/" end>
        Dashboard
      </NavLink>


    </nav>
  )
}
