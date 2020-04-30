import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Basics, Screen } from 'styles';
import { links } from 'config';
import Logo from 'images/ziclilogo.png';

const NavContainer = styled.div`
  position: fixed;
  height: 11vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  margin: 0;
  background-color: white;
  width: 100%;
  transition: ${Basics.transition};
  background-color: ${Basics.colors.white};
  box-shadow: 0 2px 1px 1px ${Basics.colors.lightGrey};
  ${Screen.largePhone`
    height: 90px;
  `};
`;

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: ${Basics.transition};
  }
  .hidden {
    visibility: hidden;
    transition: ${Basics.transition};
    transform: translate(0, -100%);
  }
`;
const Svg = styled.header`
  position: absolute;
  margin-left: 100px;
  svg {
    fill: ${Basics.colors.solidBlue};
    width: 30px;
    height: 30px;
  }
  ${Screen.tablet`
    margin-left: 50px;
  `};
  ${Screen.miniTablet`
    margin-top: 35px;
    margin-left: 20px;
  `};
`;
const ListContainer = styled.div`
  font-size: ${Basics.fontSize.small};
  position: absolute;
  display: flex;
  flex-direction: row;
  right: 100px;
  font-weight: 550;
  ${Screen.largePhone`
  margin-top: 15px;
  right: 10px;
  `};
`;

const NavList = styled.div`
  height: 23px;
  color: white;
  // padding-right: 50px;
  // ${Screen.largePhone`
  //   padding-right: 30px;
  // `};
  // ${Screen.smallPhone`
  //   padding-right: 15px;
  // `};
`;
const NavBtn = styled.div`
height: 20px;
margin-top: -14px;
`;
const image = {
  height: '50px',
  width: '50px',
};

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      scrollPosition: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { scrollPosition } = this.state;
    this.setState({
      scrollPosition: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPosition,
    });
  }

  render() {
    const navs = links.navLinks.map(
      (item, i) => <NavList key={i}>
        <Link to={item.url}>{item.name}</Link>
      </NavList>,
    );
    return (
      <Transition>
        <NavContainer className={this.state.show ? 'active' : 'hidden'}>
        <Svg>
          <Link to={'/'}>
            <img style={image} src={Logo} alt='logo'/>
          </Link>
        </Svg>
          <ListContainer>
            <NavBtn>
              <a
              href='http://www.github.com/Tueloper'
              className='btn-primary'
              >
              {navs}
              </a>
            </NavBtn>
          </ListContainer>
        </NavContainer>
      </Transition>
    );
  }
}
