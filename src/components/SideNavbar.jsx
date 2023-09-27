import {useLocation } from 'react-router-dom';
import API from '../api'

export default function SideNavbar() {    
const location = useLocation();
         
      console.log(location)
         

    const places = API.map((place) => {
        const str = place.title.replace(/\s/g, '')
    return(

       <a href={`#${str}`} key={place.id}>
         <li>
           {place.title}
         </li>
         {/* {console.log(location.key)} */}
       </a>
     )});

  return (
    <>
      <main className="side-navbar">
        <nav>
          {/* Side Navbar Heading */}
          <section className='heading'>
            <h1>List of Countries to visit</h1>
            <p>Click any of the link to navigate with the page</p>
          </section>

          {/* Side Navbar Links */}
          <section className='nav-places'>
            <ul>{places}</ul>
          </section>
        </nav>
      </main>
    </>
  );
}
