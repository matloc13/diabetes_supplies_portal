import React, { useContext, useState, useEffect, useRef } from 'react';

import FadeIn from 'react-fade-in';

const PaginationResults = ({ array, page }) => {
    const [eleObserver, setEleObserver] = useState(null);
    // const {  infiniteScroll,  outputResult, page,  } = usePagination(array, pl) 
    // console.log('outputResult', outputResult)
    // console.log('infiniteScroll', infiniteScroll)
    // console.log('searchPageInfo', searchPageInfo)
    // const observer = useRef(new IntersectionObserver((entries) => {
    //     console.log('entries', entries)
    //   const first = entries[0];
    //   console.log(first);
    //   if (first.isIntersecting) {
    //     infiniteScroll('up');
    //   }
    // }, {threshold: 1}));
    // console.log(array);
    // const [show, setShow] = useState(false);
// setEleObserver(document.querySelector('.item'));
  

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
        <>
            {/* <ul className='list'>
                {array[page - 1]
                    ? array[page - 1].map((ele, i) => {
                          return (
                              <li className='listItem'>

                              </li>


                          )}
                           
   
            </ul> */}
            <ul className="list" id="iList">
            {array[page - 1] ? array[page - 1].map((ele, i) => {
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
            }):''}
        </ul>
</>
    );
};
export default PaginationResults;
