import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  margin: 0;
  padding: 0;
  position: fixed;
  background: whitesmoke;
  @media (max-width: 768px) {
    bottom: 0;
    width: 100vw;
    height: 5rem;
  }
  @media (min-width: 768px) {
    width: 5rem;
    height: 100vh;
    overflow: hidden;
    /* hover off */
    transition: width 400ms ease;
    /* hover on */
    &:hover {
      width: 10rem;
      transition: width 400ms ease;
    }
  }
`;

export const NavLinksContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

export const NavListItem = styled.li`
  text-decoration: none;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const activeClassName = 'active';

export const NavigationLink = styled(NavLink).attrs({
  activeClassName,
})`
  &.${activeClassName} {
    color: green;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  text-decoration: none;
  color: black;

  &:hover {
    color: red;
  }
`;

export const NavLinkIcon = styled.i`
  width: 2rem;
  min-width: 2rem;
`;

export const NavLinkText = styled.p`
  display: none;
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 768px) {
    ${NavContainer}:hover & {
      display: inline;
    }
  }
  margin-left: 1rem;
`;
