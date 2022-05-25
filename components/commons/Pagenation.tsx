import React from "react";
import BSPagination from "react-bootstrap/Pagination";
import {
    useCalcCurrentPage,
    useCalcTotalPage,
    useCreatePageInfo,
    useCreatePageList,
} from "../../hooks/commons/PagenationHooks";

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
    // ページ情報作成
    const dispPageCount = 5;
    const createPageInfo = useCreatePageInfo();
    const { totalPage, currentPage, dispPageList } = createPageInfo(
        perPage,
        totalResults,
        index,
        dispPageCount
    );

    // 1ページ目がページボタンに表示されている場合は、戻るボタンとか無効にする
    const firstDispPage = dispPageList[0]?.page ?? 0;
    const prevEllipsis = 1 < firstDispPage;
    // 最終ページ目がページボタンに表示されている場合は、次へボタンとか無効にする
    const lastDispPage =
        dispPageList[dispPageList.length - 1]?.page ?? totalPage;
    const nextEllipsis = totalPage > lastDispPage;
    // 前へページの情報
    const prevInfo = dispPageList.find(
        (pageInfo) => pageInfo.page === currentPage - 1
    ) ?? { page: 1, startIndex: 0 };
    // 次へページの情報
    const nextInfo = dispPageList.find(
        (pageInfo) => pageInfo.page === currentPage + 1
    ) ?? { page: 1, startIndex: 0 };
    // 最終ページの情報
    const lastPageIndex = perPage * (totalPage - 1);

    return (
        <BSPagination>
            <BSPagination.First
                disabled={!prevEllipsis}
                onClick={() => clickPage(1, 0)}
            />
            <BSPagination.Prev
                disabled={!prevEllipsis}
                onClick={() => clickPage(prevInfo.page, prevInfo.startIndex)}
            />
            {prevEllipsis && <BSPagination.Ellipsis />}
            {dispPageList.map(({ page, startIndex }) => (
                <BSPagination.Item
                    key={page}
                    active={currentPage === page}
                    onClick={() => clickPage(page, startIndex)}
                >
                    {page}
                </BSPagination.Item>
            ))}
            {nextEllipsis && <BSPagination.Ellipsis />}
            <BSPagination.Next
                disabled={!nextEllipsis}
                onClick={() => clickPage(nextInfo.page, nextInfo.startIndex)}
            />
            <BSPagination.Last
                disabled={!nextEllipsis}
                onClick={() => clickPage(totalPage, lastPageIndex)}
            />
        </BSPagination>
    );
};

export default Pagenation;
