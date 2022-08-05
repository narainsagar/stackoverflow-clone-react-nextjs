import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';

const TopNavbar: NextPage = () => {
    return (
        <Navbar bg="light" variant="light" style={{ height: 60}}>
            <Container>
                <Navbar.Brand href="/" className='me-5'>
                    <FontAwesomeIcon icon={faStackOverflow} className='me-2' color='orange'/>
                    <span>
                        stack <b>overflow</b> jobs
                    </span>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">About</Nav.Link>
                    <Nav.Link href="/companies">Companies</Nav.Link>
                    <Nav.Link href="/jobs">Jobs</Nav.Link>
                </Nav>
                <Form className="d-flex me-4" style={{ width: '600px' }}>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <div className='d-flex'>
                    <Button variant="outline-primary" className='me-1'>Sign In</Button>
                    <Button variant="primary">Sign Up</Button>
                </div>
            </Container>
        </Navbar>
    )
}

export default TopNavbar;