import Link from "next/link";

export default function ShiftCell({shift}) {
    return (
        <tbody className="bg-white divide-y divide-gray-200 hover:bg-red-100">

        <Link href={`/shifts/${shift.id}`}>
            <tr>
                <td className=" py-4 whitespace-nowrap">

                    <div className="flex items-center">
                        <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                                {shift.date}
                            </div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{shift.category}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {shift.count}件
                </td>
            </tr>
        </Link>
        </tbody>
    )
}


