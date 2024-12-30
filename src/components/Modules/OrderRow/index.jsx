import React from 'react'

const OrderRow = (index, data) => {
    return (
        <tr>
            <td>1</td>
            <td>PYRQ-1231231-22</td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">Product Name</div>
                        <div className="text-sm opacity-50">Variaty</div>
                    </div>
                </div>
            </td>
            <td>
                17 December 2024
            </td>
            <td>Waiting For Payment</td>
            <th>
                <button className="btn btn-xs bg-teal-300 text-white border-teal-300">Details</button>
            </th>
        </tr>
    )
}

export default OrderRow