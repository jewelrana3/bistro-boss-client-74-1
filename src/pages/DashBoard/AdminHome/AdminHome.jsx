import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AdminHome = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: statas = {} } = useQuery({
        queryKey: ['admin-statas'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-statas');
            return res.data;
        }
    })
    return (
        <div className="w-full ">
            <h2 className="text-3xl">Wellcome Back,{user.displayName}</h2>
            <div className="stats shadow w-full">

                <div className="stat place-items-center">
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">${statas.revenue}</div>
                    <div className="stat-desc">From January 1st to February 1st</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Users</div>
                    <div className="stat-value text-secondary">{statas.users}</div>
                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Menu Items</div>
                    <div className="stat-value">{statas.products}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title">Order</div>
                    <div className="stat-value">{statas.orders}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default AdminHome;