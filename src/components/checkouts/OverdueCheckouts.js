import { getOverdueCheckouts } from "../../data/checkoutsData"
import { useEffect, useState } from "react"
import { Table } from "reactstrap";

export const OverdueCheckouts = () => {
    const [checkouts, setCheckouts] = useState([])

    useEffect(() => {
        getOverdueCheckouts()
            .then(setCheckouts)
    },[]
    )

    return <div className="container">
        <div className="sub-menu bg-light">
            <h4>Overdue Checkouts</h4>
        </div>
        <div>
        <Table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Patron</th>
                <th>Material</th>
                <th>Checkout Date</th>
                <th>Return Date</th>
                <th>Late Fee</th>
                
            </tr>
            </thead>
            <tbody>
            {checkouts.map((co) => (
                <tr key={`checkout-${co.id}`}>
                <td>{co.id}</td>
                <td>{co.patron.fullName}</td>
                <td>{co.material.materialName}</td>
                <td>{co.checkoutDate?.split("T")[0]}</td>
                <td>{co.returnDate?.split("T")[0] || "Checked Out"}</td>
                <td>{co.lateFee || "N/A"}</td>
                
                </tr>
            ))}
            </tbody>
        </Table>
        </div>
    </div>
}