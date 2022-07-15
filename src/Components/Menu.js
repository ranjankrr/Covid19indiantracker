import {NavLink} from 'react-router-dom';
const Menu = () =>{
    return(
        <>
        <div className='header'>
          <NavLink exact activeClassName="active_class" to='/'><button>StateWise Covid19</button></NavLink>
          <NavLink exact activeClassName="active_class" to='/country'><button>CountryWise Covid19</button></NavLink>
          
        </div>
        </>
    )
}
export default Menu;