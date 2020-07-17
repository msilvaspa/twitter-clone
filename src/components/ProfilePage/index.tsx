import React from 'react';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        {/* <EditButton outlined>editar perfil</EditButton> */}

        <h1>Mateus Alves</h1>
        <h2>@mateus_alves</h2>

        <p>
          developer at <a href="">@Safra</a>
        </p>
        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em 27 de março de 1995
          </li>
        </ul>
        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            672 <strong>seguidores</strong>
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
