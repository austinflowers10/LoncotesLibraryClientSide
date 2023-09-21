import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
import { getPatrons } from "../../data/patronsData";

export const PatronList = () => {
    const [patrons, setPatrons] = useState([])

    useEffect(() => {
        getPatrons()
            .then(setPatrons)
    },[]
    )
    
    return (
        <div className="container">
            <div className="sub-menu bg-light">
            <h4>Patrons</h4>
            {/* <Link to="/materials/create">Add</Link> */}
            </div>
            <Table>
            <thead>
                <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Address</th>
                <th>Email</th>
                <th>Status</th>
                <th></th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {patrons.map((p) => (
                <tr key={`patrons-${p.id}`}>
                    <th scope="row">{p.id}</th>
                    <td>{p.fullName}</td>
                    <td>{p.address}</td>
                    <td>{p.email}</td>
                    <td>{p.isActive ? "Active" : "Inactive"}</td>
                    <td>
                    <Link to={`${p.id}`}>View/Edit Details</Link>
                    </td>
                    <td>
                        {
                            p.isActive 
                            ? <Link to={`end/${p.id}`}>Deactivate</Link>
                            : <p>-----</p>
                        }
                    </td>
                </tr>
                ))}
            </tbody>
            </Table>
        </div>
    );

}