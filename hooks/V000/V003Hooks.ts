import { useAppDispatch } from "../../store";
import { getVulnDataThunk } from "../../store/V000/V003Reducer";

// 脆弱性取得
export const useGetVulnData = () => {
    const dispatch = useAppDispatch();

    const getVulnDataT = (cve: string) => {
        console.log(`getVulnDataT(${cve})`);
        dispatch(getVulnDataThunk(cve));
    };
    return getVulnDataT;
};
