import { putPatron } from "../../data/patronsData"

export const PatronEdit = ( {selectedPatronProp, setSelectedPatronProp, setEditProp} ) => {
    return <>
    <h2>{selectedPatronProp.fullName}</h2>
    <form onSubmit={(e) => {
            e.preventDefault()
            setEditProp(false)
            putPatron(selectedPatronProp.id, selectedPatronProp)
        }}
    >
        <fieldset>
            <label htmlFor="Address">Address:</label>
            <input
                required autoFocus
                type="text"
                className="input-general"
                placeholder="Patron Address"
                value={selectedPatronProp.address}
                onChange={
                    (event) => {
                        const copy = {...selectedPatronProp}
                        copy.address = event.target.value
                        setSelectedPatronProp(copy)
                    }
                } />
        </fieldset>
        <fieldset>
            <label htmlFor="Email">Email:</label>
            <input
                required autoFocus
                type="text"
                className="input-general"
                placeholder="Patron Email"
                value={selectedPatronProp.email}
                onChange={
                    (event) => {
                        const copy = {...selectedPatronProp}
                        copy.email = event.target.value
                        setSelectedPatronProp(copy)
                    }
                } />
        </fieldset>
        <button type="submit">Submit</button>
        <button type="button"
            onClick={(e) => {setEditProp(false)}}
        >Cancel</button>
    </form>
    </>
}
