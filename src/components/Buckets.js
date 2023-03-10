import styled from "styled-components";
import { useFetch } from "../hooks/useFetch";
import Bucket from "./Bucket";


const BucketWrapper = styled.div`
    position: relative;
`;

const BucketTitle = styled.div`
    position: absolute;
    top: 10rem;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 2rem;
`;

const BucketButton = styled.button`
    position: absolute;
    top: 15rem;
    width: 300px;
    height: 50px;
    border-radius: 2rem;
    border: none;
    background-color: #796356;
    color: #fff;
    font-size: 1rem;
    box-shadow: rgb(255 255 255 / 25%) 2px 8px 5px;
`;

const BucketList = styled.div`
    position: absolute;
    top: 25rem;
    width: 90%;
    height: 50%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 900px) {
        flex-direction: column;
        height: 500px;
        align-items: center;
        z-index: -1;
    }
`;

const Buckets = ({flipIn}) => {

    const data = useFetch("mockData.json");

    return (
        <section className="buckets-wrapper">
            <BucketWrapper>
                <BucketTitle>
                    Bucket List
                </BucketTitle>
                <BucketButton>
                    Create New Bucket List
                </BucketButton>
                <BucketList >
                    {data && data.map((el,idx) => {
                        return(
                            <Bucket key={idx} idx={idx} el={el} flipIn={flipIn}/>
                        )
                    })}
                </BucketList>
            </BucketWrapper>
        </section>
    )
}

export default Buckets;