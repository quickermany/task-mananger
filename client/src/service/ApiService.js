class ApiService {
    async post(path, body) {
        return fetch(path, {
            method: "POST",
            body: body,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    async get(path) {
        return fetch(path);
    }

    async delete(path, body) {
        return fetch(path, {
            method: "DELETE",
            body: body,
            headers : {
                "Content-Type": "application/json"
            }
        });
    }
}

export default ApiService;
