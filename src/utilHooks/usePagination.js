import { useEffect, useState, useRef } from 'react'
const usePagination = (array, pageLength) => {
    const [page, setPage] = useState(1);
    const [searchTotal, setSearchTotal] = useState(0);
    const [outputResult, setOutputResult] = useState([]);

    const [searchPageInfo, setSearchPageInfo] = useState({
        total: null,
        pages: null,
        currentRange: null,
    });
    useEffect(() => {
        const pageref = page
        setSearchTotal(array.length)

        formatArr(array.reverse(), pageLength, searchPageInfo.pages)
      
       
       
    },[array, pageLength, page]);

    useEffect(() => {
        setSearchPageInfo({
            ...searchPageInfo,
            total: searchTotal,
            pages: findPages(searchTotal, pageLength),
            currentRange: findRange(searchTotal, pageLength, page),
        });
    }, [searchTotal]);

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

    const currentPosition = (page) => {
        const c = pageLength * page;
        // console.log( c);
        return c;
    };
    
    // const pagination = (e) => {
    //     e.preventDefault();
    //     switch (e.target.id) {
    //         case 'prev':
    //             return setPage(page - 1);
    //         case 'next':
    //             return setPage(page + 1);
    //         case 'clear':
    //             setQuery({ query: ' ' });
    //             setPage(1);
    //             setcurrentQuery({ query: '' });
    //             setSearchClick(!searchClick);
    //             setClear('clearing');
    //             return setSearchTotal(0);
    //         default:
    //             return;
    //     }
    // };

    const formatArr = (newArr, pl, pages ) => {
        if (newArr.length > pl ) {
            const newArray = [];
            let cp = currentPosition(page);

            if (page === 1) {
                newArr.forEach((ele, i) => {
                    if (i <= cp - 1) {
                        newArray.push(ele);
                    } else if (i >= cp) {
                        // console.log(newArray);
                        return null
                    }
                });
                setOutputResult([...outputResult, newArray]);
            } else {
                newArr.forEach((ele, i) => {
                    if (i < cp && i >= cp - pl) {
                        newArray.push(ele);
                    } else if (i >= cp) {
                        return null
                    }
                });
                setOutputResult([...outputResult, newArray]);
            }
        } else if (outputResult.length < pages) {
            setOutputResult([...outputResult, newArr]);
        } else {
            return outputResult
        }
    }
    
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
    return {  infiniteScroll,  outputResult, page, };
}

export default usePagination;
