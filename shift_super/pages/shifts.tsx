import Layout from "../components/layout/layout";
import {getAllShiftData} from "../lib/shifts";
import ShiftCell from "../components/shift/shiftCell";
import {getAllCategoryData} from "../lib/category";
import Filter from "../components/shift/Filter";

export default function ShiftPage({shifts}) {
    return (
        <Layout>
            <div className=" flex justify-center">
                <div className=" text-lg lg:p-3 mt-2 font-black text-gray-600">今月の予定</div>
            </div>

            <Filter />

            <div className="">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-4 lg:px-6">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 ">

                                <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                        日程
                                    </th>
                                    <th scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                        タイトル
                                    </th>

                                    <th scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                        件数
                                    </th>
                                </tr>
                                </thead>
                                {shifts && shifts.map((shift) => <ShiftCell key={shift.id} shift={shift}/>)}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const shifts = await getAllShiftData()
    return {
        props: {shifts},
        revalidate: 3
    }
}

