import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPatron } from "../../data/patronsData"
import { PatronView } from "./PatronView"
import { PatronEdit } from "./PatronEdit"


export const PatronDetails = () => {
    const {id} = useParams()
    const [edit, setEdit] = useState(false)
    const [selectedPatron, setSelectedPatron] = useState(null)

    useEffect(() => 
    {
        getPatron(id)
            .then(setSelectedPatron)
    },[id]
    )

    if (!selectedPatron) {
        return null
    }

    return <div className="container">
    {
        edit
        ? <PatronEdit 
            selectedPatronProp={selectedPatron}
            setSelectedPatronProp={setSelectedPatron}  
            setEditProp={setEdit}
        />
        : <PatronView 
            selectedPatronProp={selectedPatron} 
            setEditProp={setEdit}
        />
    }
    </div>
}

