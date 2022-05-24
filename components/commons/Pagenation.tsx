import React from "react";
import BSPagination from "react-bootstrap/Pagination";

type PropType = {
    perPage: number;
    index: number;
    totalResults: number;
    clickPage: (page: number, startIndex: number) => void;
};

const MAX_DISP_PAGE = 9;

const Pagenation: React.FC<PropType> = ({
    perPage,
    index,
    totalResults,
    clickPage,
}) => {
    // 全ページ計算
    let totalPage = totalResults / perPage;
    totalPage = isNaN(totalPage) ? 0 : Math.ceil(totalPage);

    // 全ページリストから、表示ページ決定
    const pageList = [...Array(totalPage)].map((v, k) => k + 1);
    const currentPage =
        pageList.filter(
            (p) => (p - 1) * perPage <= index && index < p * perPage
        )[0] ?? 1;

    // 表示ページから、表示する前後のページ決定
    let startPage = (1 - MAX_DISP_PAGE) / 2;
    startPage = startPage < 1 ? 1 : startPage;
    let endPage = (1 + MAX_DISP_PAGE) / 2;
    endPage = endPage > totalPage ? totalPage : endPage;
    const dispPageList = pageList.filter((p) => startPage <= p && p <= endPage);

    return (
        <BSPagination>
            <BSPagination.First />
            <BSPagination.Prev />
            <BSPagination.Ellipsis />
            {dispPageList.map((page) => (
                <BSPagination.Item key={page} active={currentPage === page}>
                    {page}
                </BSPagination.Item>
            ))}
            <BSPagination.Ellipsis />
            <BSPagination.Next />
            <BSPagination.Last />
        </BSPagination>
    );
};

export default Pagenation;
