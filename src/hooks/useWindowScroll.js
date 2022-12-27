import { useState, useEffect } from "react";

const useWindowScroll = (ref) => {
    const [isHide, setisHide] = useState(false);
    const [yCoord, setyCoord] = useState(0);

    useEffect(() => {
        if (!ref.current) return;
        window.addEventListener("scroll", yScrollEvent);
        window.addEventListener("load", windowLoadYCoord);
        return () => {
            window.removeEventListener("scroll", yScrollEvent);
        }
    })

    const yScrollEvent = () => {
        const scroll = ref.current.getBoundingClientRect();
        setisHide(scroll.top <= -300);
    }

    const windowLoadYCoord = () => {
        const scroll = ref.current.getBoundingClientRect();
        setyCoord(scroll.height);
    }

    return [isHide, yCoord];
}

export default useWindowScroll;