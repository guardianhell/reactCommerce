import React from 'react'
import EachUtils from '../../../utils/EachUtils'
import OrderRow from '../OrderRow'

const OrderTable = ({ dataArray }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Order Number</th>
                        <th>Product</th>
                        <th>Order Date</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <EachUtils
                        of={dataArray}
                        render={(item, index) => (
                            <div key={index}>
                                <OrderRow data={item} index={index} />
                            </div>
                        )}
                    />

                </tbody>
                {/* foot */}
                <tfoot>
                    <tr>
                        <th>No.</th>
                        <th>Order Number</th>
                        <th>Product</th>
                        <th>Order Date</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default OrderTable