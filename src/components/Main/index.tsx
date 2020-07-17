import React from 'react';
import ProfilePage from '../ProfilePage';
import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  // ProfilePage,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Mateus Alves</strong>
          <span>123123 tweets</span>
        </ProfileInfo>
      </Header>
      <ProfilePage />
      <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
