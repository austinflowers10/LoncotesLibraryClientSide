import { Table } from "reactstrap"

export const PatronView = ( {selectedPatronProp, setEditProp} ) => {
    
    return <>

    <h2>{selectedPatronProp.fullName}</h2>
    <button
        onClick={(e) => setEditProp(true)}
    >Edit</button>

    <Table>
      <tbody>
          <tr>
              <th scope="row">Address</th>
              <td>{selectedPatronProp.address}</td>
          </tr>
          <tr>
              <th scope="row">Email</th>
              <td>{selectedPatronProp.email}</td>
          </tr>
        <tr>
          <th scope="row">Status</th>
          <td>
            {
              selectedPatronProp.isActive 
              ? "Active"
              : "Inactive"
            }
          </td>
        </tr>
        <tr>
          <th scope="row">Balance</th>
          <td>
          {
              selectedPatronProp.balance ? `$${selectedPatronProp.balance}` : `$0`
          }
          </td>
        </tr>
      </tbody>
    </Table>
    <h5>Checkouts</h5>
    {selectedPatronProp.checkouts?.length ? (
      <Table>
        <thead>
          <tr>
            <th>Patron</th>
            <th>Checkout Date</th>
            <th>Return Date</th>
            <th>Late Fee</th>
          </tr>
        </thead>
        <tbody>
          {selectedPatronProp.checkouts.map((co) => (
            <tr key={`checkout-${co.id}`}>
              <td>
                {co.patron.firstName} {co.patron.lastName}
              </td>
              <td>{co.checkoutDate?.split("T")[0]}</td>
              <td>{co.returnDate?.split("T")[0] || "Checked Out"}</td>
              <td>{co.lateFee || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    ) : (
      <p>No checkouts for this patron</p>
    )}
    </>
}
