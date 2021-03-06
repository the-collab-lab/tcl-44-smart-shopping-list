import { NavLink } from 'react-router-dom';
import useToken from '../hooks/useToken';
import { TiShoppingCart, TiPlusOutline } from 'react-icons/ti';

const Navbar = () => {
  const { token } = useToken();

  if (!token) {
    return null;
  } else
    return (
      <nav className="bg-yellow-400 fixed bottom-0 w-full lg:w-1/2 z-40">
        <ul className="flex justify-center gap-32 py-1 ">
          <li>
            <NavLink to="/list" className="flex flex-col items-center">
              <TiShoppingCart className="text-4xl" />
              <span>List</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-item" className="flex flex-col items-center">
              <TiPlusOutline className="text-4xl" />
              <span>Add Item</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
};

export default Navbar;
