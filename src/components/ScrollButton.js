import styled from "styled-components"

const Scroll = styled.div`
    width: 2rem;
    height: 3rem;
    border: 2px solid white;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ScrollWheele = styled.button`
    width: 1rem;
    height: 1rem;
    border: none;
    border-radius: 50%;
    background: white;
    display: block;
    animation: cursor 1.5s linear infinite;

    @keyframes cursor {
        0% {
            opacity: 0;
            transform: translateY(-0.5rem);
        }

        100% {
            opacity: 1;
            transform: translateY(0.5rem);
        }
    }
`;

const ArrowDown = styled.div`
    width: 1rem;
    height: 1rem;
    border: 2px solid transparent;
    border-right-color: white;
    border-bottom-color: white;
    transform: rotate(45deg);
    margin-top: 0.3rem;
    animation : arrow 1.5s linear infinite;

    @keyframes arrow {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;


const ScrollButton = ({yCoord}) => {

    const handleScroll = () => {
        window.scrollBy({
            top: yCoord,
            behavior: 'smooth'
        })
    }

    return(
        <div className="scroll-button">
            <Scroll>
                <ScrollWheele onClick={handleScroll} />
            </Scroll>
            <ArrowDown />
        </div>
    )
}

export default ScrollButton;