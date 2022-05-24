import { CveResponse } from "../../types/public_api/cve-apires-types";
import { useAppDispatch } from "../../store";
import { setLoading } from "../../store/AppStore";

export const useGetCveItem = () => {
    const dispatch = useAppDispatch();
    const getCveItem = async (cve: string) => {
        dispatch(setLoading(true));
        const url = `https://services.nvd.nist.gov/rest/json/cve/1.0/${cve}?addOns=dictionaryCpes`;
        const result = (await fetch(url).then((r) => r.json())) as CveResponse;
        dispatch(setLoading(false));
        return result?.result?.CVE_Items[0];
    };
    return getCveItem;
};
