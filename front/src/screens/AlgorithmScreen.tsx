import {useLocation, useNavigate} from "react-router-dom";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {ipcRenderer} from "electron";
import hanoiSolverStore from "@/api/store/hanoi-solver.store";

const config = [
    {
        width: 80,
        color: 'red',
    },
    {
        width: 90,
        color: 'orange',
    },
    {
        width: 100,
        color: 'yellow',
    },
    {
        width: 110,
        color: 'green'
    },
    {
        width: 120,
        color: 'blue'
    },
    {
        width: 130,
        color: 'indigo'
    },
    {
        width: 140,
        color: 'violet'
    },
];

const AlgorithmScreen = observer(() => {
    const [activeIdx, setActiveIdx] = useState<number>(0)
    const [rings, setRings] = useState<number[][][] | null>(null)
    const location = useLocation();
    const numberOfRings = location.state.mode

    const fetch = async () => {
        const data = await ipcRenderer.invoke('send-rings', numberOfRings)
        setRings(data)
    }

    useEffect(() => {
        fetch().catch(() => {
        })
    }, [])

    useEffect(() => {
        if (!rings) return;

        const interval = setInterval(() => {
            setActiveIdx((prevIndex) => {
                const nextIndex = (prevIndex + 1);
                if (nextIndex === rings.length - 1) {
                    clearInterval(interval); // Останавливаем интервал при достижении максимального значения
                }
                return nextIndex;
            });
        }, 500); // Обновление каждые 0.5 секунды

        return () => {
            clearInterval(interval);
        };
    }, [rings]);


    const getConfigByNumber = (number: number) => {
        const config = [
            {
                width: 80,
                color: 'red',
            },
            {
                width: 90,
                color: 'orange',
            },
            {
                width: 100,
                color: 'yellow',
            },
            {
                width: 110,
                color: 'green'
            },
            {
                width: 120,
                color: 'blue'
            },
            {
                width: 130,
                color: 'indigo'
            },
            {
                width: 140,
                color: 'violet'
            },
        ];
        if (number === 0) {
            return 'transparent';
        }
        const index = (number - 1) % config.length;
        return config[index];
    };

    const navigate = useNavigate()

    return (
        <Wrapper>
            <GameWrapper>
                <Container>
                    {rings && rings[activeIdx].map((rodData, index) => (
                        <RodContainer key={index}>
                            <Rod>
                                {rodData.map((ringNumber, ringIndex) => (
                                    <Ring
                                        key={ringIndex}
                                        color={ringNumber === 0 ? 'transparent' : config[(ringNumber - 1) % config.length].color}
                                        position={ringIndex * 20}
                                        $width={ringNumber === 0 ? 0 : config[(ringNumber - 1) % config.length].width}
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
});

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

const Ring = styled.div<{ position: number; $width: number }>`
  width: ${({ $width }) => `${$width}px`};
  height: 30px;
  right: ${({ $width }) => `${-45 + 5 * (100 - $width) / 10}px`};
  background-color: ${props => props.color};
  border-radius: 50%;
  position: absolute;
  bottom: ${props => props.position}px;
`;


export default AlgorithmScreen;