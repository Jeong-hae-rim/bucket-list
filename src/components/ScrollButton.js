

const ScrollButton = ({yCoord}) => {

    const handleScroll = () => {
        window.scrollBy({
            top: yCoord,
            behavior: 'smooth'
        })
    }

    return(
        <div className="scroll-button">
            <button onClick={handleScroll}>클릭</button>
        </div>
    )
}

export default ScrollButton;