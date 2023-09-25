const _apiUrl = "/api/checkouts";

export const getCheckouts = () => {
  return fetch(_apiUrl).then((res) => res.json());
};

export const postReturnCheckout = (id) => {
    return fetch(_apiUrl + `/return/${id}`, {method: "POST"}).then((res) => res.json());
}