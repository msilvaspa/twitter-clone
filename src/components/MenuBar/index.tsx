import React from 'react';
import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  BotSide,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';
import Button from '../Button';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />
        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>
        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>
        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>
        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>
        <MenuButton className="active">
          <HomeIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </TopSide>
      <BotSide>
        <Avatar />
        <ProfileData>
          <strong>Mateus Alves</strong>
          <span>@mateus_alves</span>
        </ProfileData>
        <ExitIcon />
      </BotSide>
    </Container>
  );
};

export default MenuBar;
