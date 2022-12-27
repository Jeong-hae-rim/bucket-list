import styled, {keyframes} from 'styled-components';

const fadein = keyframes`
   from {
    opacity: 1;
   }
   to {
    opacity: 0;
   }
`;

const fadeout = keyframes`
   from {
    opacity: 0;
   }
   to {
    opacity: 1;
   }
`;

const CoffeeContainer = styled.div`
    position: relative;
    opacity: ${(props) => props.fadeIn ? 0 : 1};
    animation: 3s;
    animation-name: ${(props) => props.fadeIn ? fadein : fadeout};
`;

const CoffeeCup = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    background: linear-gradient(to right, #080808, #5b5656);
    border: 1px solid #5b5656;
    border-bottom-left-radius: 40%;
    border-bottom-right-radius: 40%;
`;

const CoffeeTop = styled.div`
    position: absolute;
    top: -30px;
    left: 0;
    height: 60px;
    width: 100%;
    background: linear-gradient(to right, #fdfdfd, #ede5e5);
    border-radius: 50%;
`;

const CoffeeInner = styled.div`
    position: absolute;
    top: 5px;
    left: 10px;
    height: 50px;
    width: calc(100% - 20px);
    background: linear-gradient(to left, #fdfdfd, #ededed);
    border-radius: 50%;
    overflow: hidden;
`;

const Smoke = styled.div` 
    position: relative;
    z-index: 1;
    padding: 0 30px;
    display: flex;

    >span {
        --i: ${props => props.i};
        width: 2px;
        height: 100px;
        background: linear-gradient(to left, #d4d4d429, #f7e0cca3);
        display: block;
        border-radius: 50%;
        animation: spear-smoke 5s linear infinite;
        opacity: 0;
        filter: blur(8px);
        padding: 0 10px;
        animation-delay: calc(var(--i) * -0.5s);
    }

    @keyframes spear-smoke {
        0% {
            transform: translateY(-40px) scaleX(1);
        }
        20% {
            opacity: 1;
        }
        50% {
            transform: translateY(-150px) scaleX(4);
            background: linear-gradient(to left, #ffffff29, rgba(233, 202, 182, 0.64));
        }
        80% {
            transform: translateY(-300px) scaleX(6);
        }
        90% {
            opacity: 0.5;
        }
        100% {
            transform: translateY(-500px) scaleX(8);
        }
    }
`;

const Drink = styled.div`
    position: absolute;
    bottom: -30px;
    left: 0;
    background: linear-gradient(to left, #080300, #9b735c);
    height: 100%;
    width: 100%;
    border: 3px solid #ba9b89;
    border-radius: 50%;
    animation: tea-move 3s linear infinite alternate;

    @keyframes tea-move {
        0% {
            transform: scale(0, 0);
        }
        20% {
            transform: scale(1.1, 1.1);
        }
        50% {
            transform: scale(1.2, 1.2);
        }
        100% {
            transform: scale(1.1, 1.1);
        }
    }
`;

const CupPlatte = styled.div`
    position: absolute;
    left: -45px;
    bottom: -35px;
    background: linear-gradient(to left, #ede0e0, #ffffff);
    box-shadow: 2px 2px 20px #f0e5e529;
    border: 1px solid #5b5656;
    width: 300px;
    height: 100px;
    border-radius: 50%;
    z-index: -1;

    &::before {
        content: "";
        position: absolute;
        top: 10px;
        bottom: 10px;
        left: 10px;
        right: 10px;
        background: linear-gradient(to left, #e7e7e7, #efeaea);
        border-radius: 50%;
        border: 2px dotted #9b735c;
    }

    &::after {
        content: "";
        position: absolute;
        top: 10px;
        bottom: 0;
        left: 15px;
        right: 30px;
        background: radial-gradient(#2f2f2f8c 30%, transparent, transparent);
        border-radius: 50%;
    }
`;

export const Coffee = ({scrollRef,fadeIn}) => {
    return(
        <section ref={scrollRef}>
            <CoffeeContainer fadeIn={fadeIn}>
                    <CoffeeCup>
                        <CoffeeTop>
                            <Smoke>
                                {spanMap}
                            </Smoke>
                            <CoffeeInner>
                                <Drink/>
                            </CoffeeInner>
                        </CoffeeTop>
                    </CoffeeCup>
                    <CupPlatte/>
            </CoffeeContainer>
        </section>
    )
}

const spanMap = [1,9,4,5,3,8,2,7,6].map((el, idx) => {
    return (
        <span
            key={idx}
            style={{"--i":el}}
        ></span>
    )
})