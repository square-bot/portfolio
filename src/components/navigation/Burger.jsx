import styled from 'styled-components';

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  -webkit-tap-highlight-color: transparent;

  @media (min-width: 1024px) {
    display: none;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 30px;
    height: 3px;
    background: ${({ open }) => open ? '#fff' : props => props.theme.font};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;


    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }



`;


const Burger = ({open, setOpen}) => {
    return (
      <StyledBurger open={open} onClick={()=> setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    )
  }

  export default Burger;
