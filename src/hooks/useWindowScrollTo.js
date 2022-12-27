import { useEffect } from 'react';

export const useWindowScrollTo = () => {
    useEffect(() => {
        window.onbeforeunload = function pushRefresh() {
            window.scrollTo(0,0);
        }
    }, [])
}