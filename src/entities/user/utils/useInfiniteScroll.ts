/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react';

const useInfiniteScroll = (callback: () => void) => {
    const listRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const list = listRef.current;
        if (list && list.scrollHeight - list.scrollTop <= list.clientHeight + 1) {
            callback();
        }
    };

    useEffect(() => {
        const list = listRef.current;
        if (list) {
            list.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (list) {
                list.removeEventListener('scroll', handleScroll);
            }
        };
    }, [callback]);

    return listRef;
};

export default useInfiniteScroll;
