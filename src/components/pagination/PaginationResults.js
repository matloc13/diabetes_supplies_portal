import React, { useContext, useState, useEffect } from 'react';
import usePagination from './../../utilHooks/usePagination'
import FadeIn from 'react-fade-in';

const PaginationResults = ({ array, pl,  }) => {
    const { findRange, findPages, infiniteScroll } = usePagination(array) 
    // const observer = useRef(new IntersectionObserver((entries) => {
    //   const first = entries[0];
    //   console.log(first);
    //   if (first.isIntersecting) {
    //     infiniteScroll('up');
    //   }
    // }, {threshold: 1}));
    // console.log(array);
    const [show, setShow] = useState(false);
    const [p, setP] = useState({ page: 0, pageLength: pl, pages: findPages(), range: findRange()})
    // const [eleObserver, setEleObserver] = useState(null);

    // useEffect(() => {
    //   const currentElement = eleObserver;
    //   const currentObserver = observer.current;

    //   if (currentElement) {
    //     currentObserver.observe(currentElement);
    //   }
    //   return () => {
    //     if (currentElement) {
    //       currentObserver.unobserve(currentElement);
    //     }

    //   };
    // }, [eleObserver])




    return (
        <div className="search-results-container">
            {/* <ul className='list'>
                {array[page - 1]
                    ? array[page - 1].map((ele, i) => {
                          return (
                              <li className='listItem'>

                              </li>


                          )}
                           
   
            </ul> */}
            <ul className="item-list">
            {array.map((ele, i) => {
                return (
                    <li key={i} className="item">
                        <h3>{ele.item}</h3>
                        <span>{ele.date.replace(/T.*$/g, '')}</span>
                        <div>
                            <p>{ele.note}</p>
                            <p className="sensorId">{ele.sensorId}</p>
                        </div>
                    </li>
                );
            })}
        </ul>
        </div>
    );
};
export default PaginationResults;
