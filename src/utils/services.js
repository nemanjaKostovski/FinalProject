const baseUrl = 'https://coetus.herokuapp.com/api/forum';

export const postMessage = async data => {
  try {
    const response = await fetch(`${baseUrl}/message`, {
      method: 'PUT', 
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.json();
  } catch (err) {
    throw err;
  }
}

export const createTopic = async data => {
  try {
    const response = await fetch(`${baseUrl}/topics`, {
      method: 'PUT', 
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.json();
  } catch(err) {
    throw err;
  }
}

export const getUser = async id => {
  try {
    const response = await fetch(`${baseUrl}/users/${id}`);
    return response.json();
  } catch(err) {
    throw err;
  }
}

export const getTopic = async (id) => {
  try {
    let response = await fetch(`${baseUrl}/message/${id}`)
    return response.json();
  } catch (err) {
    throw err;
  }
}

export const getTopics = async () => {
  try {
    let response = await fetch(`${baseUrl}/topics`);
    return response.json();
  } catch (err) {
    throw err;
  }
}

export const login = async (data) => {
  try {
    let response = await fetch(`${baseUrl}/users`, {
      method: 'POST', 
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.json();
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export const register = async (data) => {
  try {
    let response = await fetch(`${baseUrl}/users`, {
      method: 'PUT', 
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    return response.json(); 
  } catch(err) {
    throw err;
  }
}

