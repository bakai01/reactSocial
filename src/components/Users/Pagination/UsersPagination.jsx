import React from 'react';
import ReactPaginate from 'react-paginate';

import style from './UsersPagination.module.css';

const UsersPagination = ({ totalUserCount, pageSize, onChangePage }) => {
    const pagesCount = Math.ceil(totalUserCount / pageSize);

    return (
        <div className={style.navigation__btn}>
            <ReactPaginate
                previousLabel={'prev'}
                nextLabel={'next'}
                breakLabel={'...'}
                pageCount={pagesCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}
                onPageChange={page => onChangePage(++page.selected)}
                containerClassName={style.pagination}
                activeClassName={style.active}
            />
        </div>
    );
};

export default UsersPagination;