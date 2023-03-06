import React, { useState } from 'react';
// import { GiHamburgerMenu } from 'react-icons/fa'
import styled from 'styled-components'


const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 10px;
  color: #fff;
`;

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
`;

const NavLinks = styled.ul`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-end;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.li`
  margin: 10px 0;
`;

const ToggleNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar>
      <h1>My Website</h1>
      <ToggleButton onClick={handleToggle}>
        {isOpen ? 'Close' : 'Menu'}
      </ToggleButton>
      <NavLinks isOpen={isOpen}>
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
      </NavLinks>
    </Navbar>
  );
};

export default ToggleNavbar;






// const NavStyles = styled.nav`

// `;


// export default function Nav() {
//     return (
//       <NavStyles>
//         <ul>
//           <li>
//             <Link to="/">Hot Now</Link>
//           </li>
//           <li>
//             <Link to="/pizzas/">Pizza Menu</Link>
//           </li>
//           <li className="logo-item">
//             <Link to="/">
//               <Logo />
//             </Link>
//           </li>
//           <li>
//             <Link to="/slicemasters">SliceMasters</Link>
//           </li>
//           <li>
//             <Link to="/order">Order Ahead!</Link>
//           </li>
//         </ul>
//       </NavStyles>
//     );
//   }