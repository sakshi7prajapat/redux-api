import { Card } from '@mui/material';
 
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect , } from 'react';

import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

const Page = ({itemsPerPage}) =>{
    const { data: posts,  } = useSelector((state) => state.posts);
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = posts.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(posts.length / itemsPerPage);
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % posts.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

    <>
      <Card />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  

}

export default Page;
