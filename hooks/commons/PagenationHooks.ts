type PageResultType = {
    totalPage: number;
    currentPage: number;
    dispPageList: {
        page: number;
        startIndex: number;
    }[];
};

// 表示ページ情報作成
export const useCreatePageInfo = () => {
    const calcTotalPage = useCalcTotalPage();
    const calcCurrentPage = useCalcCurrentPage();
    const createPageList = useCreatePageList();

    const createPageInfo = (
        perPage: number,
        totalResults: number,
        index: number,
        dispPageCount: number
    ): PageResultType => {
        const totalPage = calcTotalPage(perPage, totalResults);
        const currentPage = calcCurrentPage(index, perPage, totalPage);
        const pageList = createPageList(currentPage, totalPage, dispPageCount);

        const dispPageList = pageList.map((page) => ({
            page,
            startIndex: (page - 1) * perPage,
        }));

        return { totalPage, currentPage, dispPageList };
    };
    return createPageInfo;
};

// 全ページ数計算
export const useCalcTotalPage = () => {
    const calcTotalPage = (perPage: number, totalResults: number) => {
        // 全ページ計算
        let totalPage = totalResults / perPage;
        totalPage = isNaN(totalPage) ? 0 : Math.ceil(totalPage);
        return totalPage;
    };

    return calcTotalPage;
};

// 全ページリストから、表示ページ決定
export const useCalcCurrentPage = () => {
    const calcCurrentPage = (
        index: number,
        perPage: number,
        totalPage: number
    ) => {
        const pageList = [...Array(totalPage)].map((v, k) => k + 1);
        const currentPage =
            pageList.filter(
                (p) => (p - 1) * perPage <= index && index < p * perPage
            )[0] ?? 1;
        return currentPage;
    };
    return calcCurrentPage;
};

// 表示するページ番号のリストを作成
export const useCreatePageList = () => {
    const createPageList = (
        curPage: number,
        maxPage: number,
        dispPageCount: number
    ) => {
        // 偶数の場合、表示対象ページは前寄せ
        const divPageCount = Math.floor(dispPageCount / 2);
        const lowLimit = divPageCount - (dispPageCount % 2 != 0 ? 0 : 1);
        const upLimit = divPageCount;

        //console.log(`lowLimit = ${lowLimit}, upLimit = ${upLimit}`);

        // 開始ページと終了ページ計算
        let start = curPage - lowLimit;
        let end = curPage + upLimit;

        // 調整１
        // 開始ページが０とかになっている場合は、開始を１にして後ろを長く表示
        if (start < 1) {
            const adjust = 1 - start;
            end = end + adjust;
            start = 1;
        }

        // 終了ページが最大を超えてたら、終了ページを最大にして、前を長く表示
        if (end > maxPage) {
            const adjust = end - maxPage;
            start = start - adjust;
            end = maxPage;
        }

        // 調整２
        // 調整１で開始、終了が超えてたら、再度調整
        start = start < 1 ? 1 : start;
        end = end > maxPage ? maxPage : end;

        // ページ番号のリスト
        let length = end - start + 1;
        length = length < 0 ? 0 : length;
        const result = [...Array(length)].map((v, k) => k + start);

        return result;
    };

    return createPageList;
};
