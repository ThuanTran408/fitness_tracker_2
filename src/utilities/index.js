const baseURL = "https://fitnesstrac-kr.herokuapp.com/api";

export const callApi = async ({ method, path, token, body }) => {
    const options = {
        method: method ? method : "GET",
        headers: {
            'Content-Type': "application/json",
        },
    };

    if(token) {
        options.headers.Authorization = `Bearer ${token}`;
    }

    if(body) {
        options.body = JSON.stringify(body)
    }
    const result = await fetch(baseURL + path, options);
    const data = await result.json();
    if (data.error) {
        throw data.error.message;
    } 
    return data
};

export const register = async (username, password) => {
    const result = await fetch(baseURL + "/users/register", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        
        username,
        password,
        
    }),
    })

    const data  = await result.json()
    console.log('data :>> ', data);
    if (data.error) {
        throw data.error.message;
    }
    return data;
};

export const login = async (username, password) => {
    const result = await fetch(baseURL + "/users/login", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        
        username,
        password,
        
    }),
    })

    const data  = await result.json()
    console.log('data :>> ', data);
    if (data.error) {
        throw data.error.message;
    }
    return data
};

export const fetchUser = async (token) => {
    const result = await fetch(baseURL + "/users/me", {
        headers: { 
            'Content-Type': "application/json",
            Authorization: `Bearer ${token}`
        },
        })
    
        const data  = await result.json()
        return data
}

export const fetchRoutines = async () => {
    const result = await fetch(baseURL + "/routines")
    const data = await result.json()
    return data
}

export const fetchActivities = async () => {
    const result = await fetch(baseURL + "/activities")
    const data = await result.json()
    return data
}

export const myRoutines = async (username, token) => {
    const result = await callApi({ 
        method: "GET", 
        path: `/users/${username}/routines`,
        token, 
        body: null
    })
    return result
};

