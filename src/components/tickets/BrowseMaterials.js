import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { getAvailableMaterials } from "../../data/materialsData";

export default function BrowseMaterials() {
  const [materials, setMaterials] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    getAvailableMaterials()
        .then(setMaterials);
  }, []);

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Available Materials</h4>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Type</th>
            <th>Genre</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            materials.map((m) => {
                return <tr key={`materials-${m.id}`}>
                    <th scope="row">{m.id}</th>
                    <td>{m.materialName}</td>
                    <td>{m.materialType.name}</td>
                    <td>{m.genre.name}</td>
                    <td>
                        <Link to={`${m.id}`}>Details</Link>
                    </td>
                    <td>
                        <button
                            onClick={(e) => {
                                navigate(`/materials/${m.id}/checkout`)
                            }}
                        >Check Out</button>
                    </td>
                    </tr>
            })
          }
        </tbody>
      </Table>
    </div>
  );
}