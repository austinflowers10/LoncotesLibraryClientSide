import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { postCheckout } from "../../data/checkoutsData"

export const MaterialCheckout = () => {
    const {id} = useParams()
    const [patronId, setPatronId] = useState(1)
    const navigate = useNavigate()
    
    return <div className="container">
            <div className="sub-menu bg-light">
                <h4>Checkout Material</h4>
            </div>
            <form onSubmit={(e) => {
                    e.preventDefault()
                    const checkoutToPost = {
                        materialId: parseInt(id),
                        patronId: patronId
                    }

                    postCheckout(checkoutToPost)
                        .then(() => { navigate("/materials")})
                }}
            >
                <fieldset>
                    <label htmlFor="patronId">Patron Id:</label>
                    <input
                        required autoFocus
                        type="number"
                        min="1"
                        className="input-general"
                        placeholder="Patron Id"
                        value={patronId}
                        onChange={(event) => {setPatronId(event.target.value)}} 
                    />
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </div>
}