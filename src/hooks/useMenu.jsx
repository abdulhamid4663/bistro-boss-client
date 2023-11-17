import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useMenu = () => {
    const axios = useAxios();

    const { data: menus = [], refetch } = useQuery({
        queryKey: ['menus'],
        queryFn: async () => {
            const res = await axios.get(`/menus`);
            return res.data
        }
    });


    return { menus, refetch }
};

export default useMenu;