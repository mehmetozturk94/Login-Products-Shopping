import { Fragment, useContext } from "react";
import AuthContext from "../../store/auth-context";
import { Nav, Navbar, Container } from "react-bootstrap";
import HeaderCartButton from './HeaderCartButton'

const MainNavigation = (props) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>ÖZTÜRK Market</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              {!isLoggedIn && <Nav.Link href="/auth">Login</Nav.Link>}
              {isLoggedIn && (
                <Nav.Link eventKey={2} href="/profile">
                  Profile
                </Nav.Link>
              )}
              {isLoggedIn && (
                <Nav.Link href="/market">
                  Market
                </Nav.Link>
              )}
              {isLoggedIn && (<HeaderCartButton onClick={props.onShowCart}/>)}
              {isLoggedIn && (
                <Nav.Link onClick={logoutHandler}>
                  Logout
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default MainNavigation;
