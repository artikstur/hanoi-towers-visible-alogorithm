import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const AlgorithmScreen = () => {

    const ringsData = [
        {rings: [1, 2, 3]}, // Красный, Оранжевый, Желтый
        {rings: [4, 5]},    // Зеленый, Синий
        {rings: [6, 7]},    // Индиго, Фиолетовый
    ];


    const getColorByNumber = (number: number) => {
        const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        if (number === 0) {
            return 'transparent';
        }
        const index = (number - 1) % rainbowColors.length;
        return rainbowColors[index];
    };

    const navigate = useNavigate()

    return (
        <Wrapper>
            <GameWrapper>
                <Container>
                    {ringsData.map((rodData, index) => (
                        <RodContainer key={index}>
                            <Rod>
                                {rodData.rings.map((ringNumber, ringIndex) => (
                                    <Ring
                                        key={ringIndex}
                                        color={getColorByNumber(ringNumber)}
                                        position={ringIndex * 20} // Установите желаемый интервал между кольцами
                                    />
                                ))}
                            </Rod>
                            <RodLabel>{`Стержень ${index + 1}`}</RodLabel>
                        </RodContainer>
                    ))}
                </Container>
            </GameWrapper>
            <button onClick={() => navigate('/')}>
                Назад
            </button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  padding: 30px;
  background-color: #6b89be;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  button {
    border: 0;
    background-color: #ffffff;
    width: 200px;
    padding: 20px;
    border-radius: 5px;
    font-size: 20px;

    &:hover {
      opacity: 0.9;
    }
  }
`

const GameWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`
const Container = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Rod = styled.div`
  border-radius: 5px;
  width: 10px;
  height: 250px;
  background-color: #790d0d;
  position: relative;
  margin: 0 10px;
`;

const RodContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RodLabel = styled.div`
  margin-top: 10px;
  font-size: 30px;
`;

const Ring = styled.div<{ position: number }>`
  width: 100px;
  height: 30px;
  right: -45px;
  background-color: ${props => props.color};
  border-radius: 50%;
  position: absolute;
  bottom: ${props => props.position}px;
`;


export default AlgorithmScreen;