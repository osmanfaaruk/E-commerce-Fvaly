import React from 'react';
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from 'react-bootstrap';
import { FiPhoneCall, FiShoppingBag } from 'react-icons/fi';
import { BiSearchAlt2, BiUser } from 'react-icons/bi';
import { AiOutlineMail, AiOutlineMobile } from 'react-icons/ai';
import logo from 'asset/images/fvaly.png';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import { Link } from 'react-router-dom';
import { IProduct } from 'Models/types';

const Header = () => {
  const cart: IProduct[] = useSelector((state: AppState) => state.cartReducer);
  return (
    <div className="header__component">
      <div className="top-header py-2 bg-light border-bottom">
        <Container className="d-flex align-items-center justify-content-between">
          <ul className="list-unstyled d-flex align-items-center gap-4">
            <li>
              <FiPhoneCall />
              <a href="tel:01959705959">019507905959</a>
            </li>
            <li>
              <AiOutlineMail />
              <a href="mail-to:md.osmanfaruk59@gmail.com">
                md.osmanfaruk59@gmail.com
              </a>
            </li>
          </ul>
          <div>
            <AiOutlineMobile />
            <a href="">Save big on our app!</a>
          </div>
        </Container>
      </div>

      <div className="middle-header">
        <Container>
          <div className="d-flex align-items-center gap-5 py-3">
            <img className="branding" src={logo} alt="" />
            <InputGroup>
              <FormControl
                placeholder="Search Here"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                className="border border-primary"
              />
              <Button variant="primary" id="button-addon2">
                <BiSearchAlt2 className="text-white" />
              </Button>
            </InputGroup>
            <ul className="icon-list list-unstyled d-flex gap-3">
              <li>
                <Link to="/checkout">
                  <FiShoppingBag />
                  <span className="badge bg-primary">{cart.length}</span>
                </Link>
              </li>
              <li>
                <BiUser />
              </li>
            </ul>
          </div>
        </Container>
      </div>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Categories</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">News feed</Nav.Link>
            <Nav.Link href="#features">Merchant Zone</Nav.Link>
            <Nav.Link href="#pricing">Help</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
