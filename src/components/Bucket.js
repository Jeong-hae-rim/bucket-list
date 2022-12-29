import styled from "styled-components";

const BucketItem = styled.div`
    width: 330px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #eee;
    margin-right: 2rem;
    color: #000;
`;

const BucketTop = styled.div`
    position: absolute;
    background-color: #796356;
    width: 330px;
    height: 20%;
    border-radius: 0 0 10px 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const BucketContent = styled.div`
    position: absolute;
    width: 20%;
    top : 7rem;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BucketName = styled.div`
    width: 80%;
    height: 10%;
    font-size: 2rem;
    margin-bottom: 1rem;
    padding: 1rem;
    text-align: center;
    border-bottom: 4px dashed #000;
`;

const Item = styled.div`
    width: 90%;
    height: 60%;
    border-bottom: 4px dashed #000;
    margin-bottom: 1rem;
    overflow: auto;
    
    >div{
        width: 100%;
        display: flex;
        padding: 0 0 1rem 0;
    }

    .bucket-id{
        width: 10%;
        padding: 0 0 0 1rem;
    }

    .bucket-title{
        display: inline-block; 
        width: 200px; 
        white-space: nowrap; 
        overflow: hidden; 
        text-overflow: ellipsis;
    }

    .bucket-date{
        width: 20%;
        padding: 0 1rem 0 0;
        text-align: right;
    }

`;

const TotalCount = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;

    span {
        margin-bottom: 0.5rem;
    }
`;

const Bucket = ({el}) => {

    let count = 0;

    el.map((el) => {
        count += el.content.date;
    })

    return(
        <BucketItem>
            <BucketTop />
            <BucketContent>
                <BucketName>
                    {el[0].category}
                </BucketName>
                <Item>
                    {el.map((el, idx) => {
                        return(
                            <div key={el.id}>
                                <span className="bucket-id">{el.id}</span>
                                <span className="bucket-title">{el.content.title}</span>
                                <span className="bucket-date">{el.content.date}</span>
                            </div>
                        )
                    })}
                </Item>
                <TotalCount>
                    <span>item : {el.length}</span>
                    <span>total date : {count === 0 ? '-' : count}</span>
                </TotalCount>
            </BucketContent>
        </BucketItem>
    )
}

export default Bucket;