import { useRef } from "react";
import styled from "styled-components";
import { Coffee } from "../components/Coffee";
import useWindowScroll from "../hooks/useWindowScroll";

const BucketWrapper = styled.div`
    width: 100%;
    height: 100vh;
    color: #fff;

`;

const BucketPage = () => {
    const scrollRef = useRef(null);
    const [hideElement, yHeight] = useWindowScroll(scrollRef);

    const handleScroll = () => {
        window.scrollBy({
            top: yHeight,
            behavior: 'smooth'
        })
    }

    return (
        <div>
            <section ref={scrollRef}>
                <Coffee fadeIn={hideElement} />
            </section>
            <div className="scroll-button">
                <button onClick={handleScroll}>클릭</button>
            </div>
            <BucketWrapper>
                본문
            </BucketWrapper>
        </div>
    )
}

export default BucketPage;