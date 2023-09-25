const _apiUrl = "/api/checkouts";

export const getCheckouts = () => {
  return fetch(_apiUrl).then((res) => res.json());
};

export const getOverdueCheckouts = () => {
    return fetch(_apiUrl + `/overdue`).then((res) => res.json());
}

export const postReturnCheckout = (id) => {
    return fetch(_apiUrl + `/return/${id}`, {method: "POST"}).then((res) => res.json());
}

export const postCheckout = (checkout) => {
    return fetch(_apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(checkout),
      }).then((res) => res.json());
}