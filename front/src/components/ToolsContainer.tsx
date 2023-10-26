import styled from "styled-components";
import {AiOutlineClose, AiOutlineMinus, AiOutlineSelect} from "react-icons/ai";


const ToolsContainer = () => {
    return (
        <ToolsWrapper>
            <button onClick={() => {
                self.ElectronAPI?.doMinimize()
            }}>
                <AiOutlineMinus size='20px'/>
            </button>
            <button onClick={() => {
                self.ElectronAPI?.doMaximize()
            }}>
                <AiOutlineSelect size='20px'/>
            </button>
            <button onClick={() => {
                self.ElectronAPI?.doClose()
            }}>
                <AiOutlineClose size='20px'/>
            </button>
        </ToolsWrapper>
    );
};

const ToolsWrapper = styled.div`
  display: flex;
  gap: 1.7rem;
  justify-content: end;
  -webkit-app-region: drag;
  
  button {
    -webkit-app-region: no-drag;
    user-select: all;
  }
`

export default ToolsContainer;