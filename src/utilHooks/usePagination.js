import { useEffect, useState } from 'react'
const usePagination = () => {
    const [page, setPage] = useState(1);
    const [searchTotal, setSearchTotal] = useState(null);
    const [searchPageInfo, setSearchPageInfo] = useState({
        total: null,
        pages: null,
        currentRange: null,
    });
    useEffect(() => {
        setSearchPageInfo({
            ...searchPageInfo,
            total: searchTotal,
            pages: findPages(searchTotal, pageLength),
            currentRange: findRange(searchTotal, pageLength, page),
        });
    }, [searchTotal, page, pageLength]);

    const findRange = (st, pl, p) => {
        // console.log(pageLength)
        const lastPage = p * pl;
        const firstPage = lastPage - (pl - 1);
        if (lastPage > st) {
            return `${firstPage} of ${st}`;
        } else {
            return `${firstPage} of ${lastPage}`;
        }
    };

    const findPages = (st, pl) => {
        // console.log(st)
        const totalPages = st / pl;
        return totalPages;
    };

    const pagination = (e) => {
        e.preventDefault();
        switch (e.target.id) {
            case 'prev':
                return setPage(page - 1);
            case 'next':
                return setPage(page + 1);
            case 'clear':
                setQuery({ query: ' ' });
                setPage(1);
                setcurrentQuery({ query: '' });
                setSearchClick(!searchClick);
                setClear('clearing');
                return setSearchTotal(0);
            default:
                return;
        }
    };
    
    const infiniteScroll = (direction) => {
        switch (direction) {
            case 'down':
                return setPage(page - 1);
            case 'up':
                return setPage(page + 1);
            default:
                return;
        }
    };
    return { findRange, findPages, pagination, infiniteScroll };
}

export default usePagination;
