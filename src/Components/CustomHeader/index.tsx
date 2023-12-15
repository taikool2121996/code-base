// libs
import { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
// styled-components
import { CustomHeaderWrapper, LogoHeader } from './CustomHeader.styled';
// components
import { logo } from '../../../public/assets';

const CustomHeader: FC = () => {
  return (
    <CustomHeaderWrapper>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <LogoHeader>
              <Image
                data-testid="navbar-logo"
                src={logo}
                alt="navbar-logo"
                priority
              />
            </LogoHeader>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
    </CustomHeaderWrapper>
  );
};

export default CustomHeader;
