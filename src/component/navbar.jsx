import React from 'react';
//definisco la navbar come statless functional component, ovvero non come una classe che estende Component ma come una
//semplice funzione che si occupa solo di renderizzare il component PERCHE' NON HA UNO STATO. Tuttavia nessuno mi impedisce di definirla lo stesso come una classe che estende Component, è solo una preferenza
//MA ATTENZIONE, I LIFECYCLE HOOKS NON SARANNO DISONIBILI PER GLI SFC (stateless functional component)
const NavBar = (props) => {//quando creo un component come statless functional component devo passare le props come argomento
    console.log('NavBar - Rendered')
    return ( <nav className="navbar navbar-light bg-light">
    <a className='navbar-brand' href='#'>
        Navbar <span className="badge badge-pill badge-secondary">{props.totalCounters}</span>
    </a>
</nav> );
}
 
export default NavBar;
/* 
class NavBar extends Component {
    render() { 
        return (<nav className="navbar navbar-light bg-light">
            <a className='navbar-brand' href='#'>
                Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
            </a>
        </nav>);
    }
}
 
export default NavBar;
 */