import './navbar.css'
import {Button} from 'antd'
import CartWidgetantd from '../cartwidged/cartwidged'
import Logo from '../logo/logo';
import Buscador from '../buscador/buscador';

const Navbar = () => {
  return (
    <header>
    <div className="top-bar">
        <div className="logo" alt="Logo">
          <Logo/>
        </div>
        <div className="search-bar">
            <Buscador/>
        </div>
        <CartWidgetantd/>
    </div>
    <nav>
        <ul className="navbar">
            <li className="nav-item">
            <Button className='button-compra' type="primary">Seccion 1</Button>
            
                <ul className="dropdown">
                    <li><a href="#">Sub-sección 1.1</a></li>
                    <li><a href="#">Sub-sección 1.2</a></li>
                    <li><a href="#">Sub-sección 1.3</a></li>
                </ul>
            </li>
            <li className="nav-item">
            <Button className='button-compra' type="primary">Seccion 2</Button>
                <ul className="dropdown">
                    <li><a href="#">Sub-sección 2.1</a></li>
                    <li><a href="#">Sub-sección 2.2</a></li>
                    <li><a href="#">Sub-sección 2.3</a></li>
                </ul>
            </li>
            <li className="nav-item">
            <Button className='button-compra' type="primary">Seccion 3</Button>
                <ul className="dropdown">
                    <li><a href="#">Sub-sección 3.1</a></li>
                    <li><a href="#">Sub-sección 3.2</a></li>
                    <li><a href="#">Sub-sección 3.3</a></li>
                </ul>
            </li>
        </ul>
    </nav>
</header>
);
};
export default Navbar