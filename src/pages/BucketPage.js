import { useRef } from "react";
import styled from "styled-components";
import { Coffee } from "../components/Coffee";
import ScrollButton from "../components/ScrollButton";
import useWindowScroll from "../hooks/useWindowScroll";

const BucketWrapper = styled.div`
    width: 100%;
    height: 100vh;
    color: #fff;

`;

const BucketPage = () => {
    const scrollRef = useRef(null);
    const [hideElement, yHeight] = useWindowScroll(scrollRef);

    return (
        <div>
            <section ref={scrollRef}>
                <Coffee fadeIn={hideElement} />
            </section>
            <ScrollButton yCoord={yHeight} />
            <BucketWrapper>
                본문
            </BucketWrapper>
        </div>
    )
}

export default BucketPage;