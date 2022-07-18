import React, { FC } from 'react';
import { Pagination } from 'react-bootstrap';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const PagePagination: FC = () => {
  const { setPageNumber } = useActions();
  const { totalCount, limit, page } = useTypedSelector((state) => state.device);
  const pages = [];
  const pageCount = Math.ceil(totalCount / limit);
  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <Pagination className="mt-3">
      {pages.map((pageItem) => (
        <Pagination.Item
          key={pageItem}
          active={page === pageItem}
          onClick={() => setPageNumber(pageItem)}
        >
          {pageItem}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default PagePagination;
