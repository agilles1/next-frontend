import React from "react";
import { Nav, Navbar} from "react-bootstrap"

export default function Navigation() {
  return (
     <Navbar className="justify-content-center">
        <Nav activeKey="/home">        
            <Nav.Item>
                <Nav.Link href="/auditions">Auditions</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/auditions/new" eventKey="link-1">New Audition</Nav.Link>
            </Nav.Item>
        </Nav>
     </Navbar>
        
     
    
  )
}