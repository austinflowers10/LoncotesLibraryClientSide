const _apiUrl = "/api/patrons";

export const getPatrons = () => {
  return fetch(_apiUrl).then((res) => res.json());
};

export const getPatron = (id) => {
    return fetch(_apiUrl + `/${id}`).then((res) => res.json());
}

export const putPatron = (id, patron) => {
    return fetch(_apiUrl + `/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(patron)   
    })
}

export const postEndPatron = (id) => {
    return fetch(_apiUrl + `/end/${id}`, {method: "POST"}).then((res) => res.json());
}