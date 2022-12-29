import { useRef } from "react";
import useWindowScroll from "../hooks/useWindowScroll";
import { Coffee } from "../components/Coffee";
import ScrollButton from "../components/ScrollButton";
import Buckets from "../components/Buckets";

const BucketPage = () => {
    const scrollRef = useRef(null);
    const [hideElement, yHeight] = useWindowScroll(scrollRef);

    return (
        <div>
            <Coffee scrollRef={scrollRef} fadeIn={hideElement} />
            <ScrollButton yCoord={yHeight} />
            <Buckets />
        </div>
    )
}

export default BucketPage;