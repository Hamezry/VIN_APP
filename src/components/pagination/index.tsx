
import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
  pageCount: number;
  dataLength: number;
  pageSize: number;
  loadMore: (page: number) => void;
}

const Pagination = (props: PaginationProps) => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const { loadMore } = props;
  // Change the page
  const handlePageChange = (event: any) => {
    const current = event.selected * 1;
    setCurrentPage(current);
    loadMore(current + 1);
  };
  return (
    <div className="bottom-0 right-0 left-0 w-full">
      <div className="md:flex md:justify-between dark:text-textgrey-normal items-center md:px-6 rounded-md">
        {/* <span>
          {t('showing')} &nbsp;
          {10 * currentPage + 1} -&nbsp;
          {10 + 10 * currentPage > props.dataLength
            ? props.dataLength
            : 10 + 10 * currentPage}
          &nbsp; {t('of')} {props.dataLength} {t('entries')}
        </span> */}

        <span>
          showing &nbsp;
          {props.pageSize * currentPage + 1} -&nbsp;
          {props.pageSize + props.pageSize * currentPage > props.dataLength
            ? props.dataLength
            : props.pageSize + props.pageSize * currentPage}
          &nbsp; of {props.dataLength} entries
        </span>

        <ReactPaginate
          breakLabel="..."
          previousLabel={
            <MdKeyboardArrowLeft className="text-4xl text-textgrey-normal dark:text-white rounded-lg cursor-pointer " />
          }
          nextLabel={
            <MdKeyboardArrowRight className="text-4xl text-textgrey-normal dark:text-white rounded-lg cursor-pointer " />
          }
          onPageChange={handlePageChange}
          pageCount={props.pageCount}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          activeClassName="bg-afexpurple-regular text-white rounded-lg"
          className="flex justify-end items-center dark:child:text-textgrey-normal  gap-2 child:child:p-2 child:m-1 child:child:rounded"
        />
      </div>
    </div>
  );
};

export default Pagination;
