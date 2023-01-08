// Menu based on https://codepen.io/kiran-r-raj/pen/mdRvqMY

import styled from 'styled-components'

export const Container = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
  max-width: 1000px;
  margin: auto;
`

export const MenuItem = styled.li`
  height: 100%;
  font-size: 16px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.typografy.text};
  cursor: pointer;

  &.selected {
    color: ${({ theme }) => theme.colors.main.primary_01};
    ::before,
    :after {
      width: 100%;
      height: 100%;
      border-color: ${({ theme }) => theme.colors.main.primary_01};
    }
  }

  &:after,
  &:before {
    content: '';
    position: absolute;
    display: block;
    border: 0px solid transparent;
    width: 0%;
    height: 0%;
    transition: all 0.5s ease;
  }

  &:after {
    width: 0%;
    height: 0%;
    top: 0;
    left: 0;
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
  }

  &:before {
    width: 0%;
    height: 0%;
    right: 0;
    bottom: 0;
    border-bottom: 2px solid transparent;
    border-right: 2px solid transparent;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.main.primary_01};
    &::before,
    &::after {
      width: 100%;
      height: 100%;
      border-color: ${({ theme }) => theme.colors.main.primary_01};
    }
  }
`

export const Logo = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.main.primary_01};
`

export const MenuItemLogo = styled.li`
  cursor: pointer;
`
