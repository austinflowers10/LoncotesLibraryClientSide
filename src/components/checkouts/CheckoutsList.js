import { useEffect, useState } from "react"
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
import { getCheckouts, postReturnCheckout } from "../../data/checkoutsData"

export const CheckoutsList = () => {
    const [checkouts, setCheckouts] = useState([])

    useEffect(() => {
        getCheckouts()
            .then(setCheckouts)
    },[]
    )

    return <div className="container">
        <div className="sub-menu bg-light">
            <h4>Checkouts</h4>
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
                <th></th>
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
                <td>
                {
                    !co.returnDate
                    ? <button
                    onClick={(e) => {
                        postReturnCheckout(co.id)
                            .then(getCheckouts)
                            .then(setCheckouts)
                    }}
                    >Return</button>
                    : <p>Returned</p>
                }
                </td>
                </tr>
            ))}
            </tbody>
        </Table>
        </div>
    </div>

}