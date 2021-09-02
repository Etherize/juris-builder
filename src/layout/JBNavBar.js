import React, {useState} from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap'
import { Link, Router } from 'components/Router'
import JurisLogo from '../../public/img/lexbridge.png';

const JBNavBar = ({hide}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return hide ? null : (
        <Navbar id="jb-header" expand="md" dark color="dark" className={hide ? 'hide' : 'show'}>
        <NavbarBrand href="https://etherize.io/">
            <img src={JurisLogo} alt="Juris, PBC"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink tag={Link} to="/builder">Portal</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://commonwealth.im/edgeware/proposal/discussion/948-proposal-lexbridge-legal-entitydocument-panel">About</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="https://github.com/Etherize/lexbridge" target="_blank">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
}

export default JBNavBar;
