import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
// @ts-ignore
import {dropdownArrow} from "../assets/img/images.ts";
import {observer} from "mobx-react-lite";

const MainMenu = observer(() => {
    const navigate = useNavigate()
    const [selectedItem, setSelectedItem] = useState(3);
    const [isOpen, setIsOpen] = useState(false);
    const registerHandle = (path: string) => {
        navigate(path, {
            state: {
                mode: selectedItem
            }
        });
    }
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleMenuItemClick = (item: number) => {
        setSelectedItem(item);
        setIsOpen(false);
    };

    return (
        <Wrapper>
            Наглядная визулизация решения головоломки "Ханойская башня"
            <Dropdown>
                <DropdownButton onClick={toggleDropdown}>
                    {selectedItem ? selectedItem : '1'}
                    <DropDownImg $isOpen={isOpen}>
                        <img src={dropdownArrow} alt={''} />
                    </DropDownImg>
                </DropdownButton>
                <DropdownMenu isOpen={isOpen}>
                    <DropdownMenuItem onClick={() => handleMenuItemClick(4)}>4</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleMenuItemClick(5)}>5</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleMenuItemClick(6)}>6</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleMenuItemClick(7)}>7</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleMenuItemClick(8)}>8</DropdownMenuItem>
                </DropdownMenu>
            </Dropdown>
            <ContinueBtn onClick={() => registerHandle('/algorithm')}>
                Поехали!!!
            </ContinueBtn>
        </Wrapper>
    );
});

const Wrapper = styled.div`
  background-color: #1da9ad;
  height: 100%;
  width: 100%;
  font-size: 23px;
  color: white;
  
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  gap: 40px;
`
const ContinueBtn = styled.button`
  border: 0;
  cursor: pointer;
  outline: none;
  background-color: #ffffff;
  font-size: 20px;
  padding: 30px 80px 30px 80px;
  border-radius: 5px;

  &:hover {
    opacity: 0.7;
  }
`
const Dropdown = styled.div`
    color: black;
`

const DropdownButton = styled.button`
  width: 100px;
  border-radius: 2px 2px 0 0;
  background-color: #e1e1e1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px 20px 10px;

  color: #000;
  /* M3/body/large */
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.5px;
`;

const DropDownImg = styled.div<{$isOpen: boolean}>`
  width: 24px;
  height: 24px;
  
  img{
    transform: ${(props) => props.$isOpen ? 'rotate(180deg)' : 'none'};
    transition: transform 0.2s ease-in;
  }
`
const DropdownMenu = styled.ul<{ isOpen: boolean }>`
  width: 100px;
  max-height: ${({isOpen}) => (isOpen ? '250px' : '0')};
  overflow: auto;
  transition: max-height 0.5s ease-in-out;
  background-color: #ffffff;
  padding: 0;
  margin: 0;
  list-style: none;
  
  scroll-behavior: smooth;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #D9D9D9;
    border-radius: 8px;
  }
  
`;

const DropdownMenuItem = styled.li`
  padding: 20px 10px 20px 10px;
  border-bottom: 1px solid #d5d5d5;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.5px;

  &:hover {
    background-color: #ddd;
  }
`;
export default MainMenu;