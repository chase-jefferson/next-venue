<<<<<<< HEAD
import type { UserLogin } from '../interfaces/UserLogin';
=======
import type { UserLogin } from '../utils/types.ts';
>>>>>>> cbdd721bbdf0a525c4fb162977e91a26df614800

const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('User information not retrieved, check network tab!');
    }

<<<<<<< HEAD
=======
    // Store the token in localStorage (or cookies, depending on your preference)
    if (data.token) {
      localStorage.setItem('token', data.token); // Store the token
    } else {
      throw new Error('No token received');
    }

>>>>>>> cbdd721bbdf0a525c4fb162977e91a26df614800
    return data;
  } catch (err) {
    console.log('Error from user login: ', err);
    return Promise.reject('Could not fetch user info');
  }
};

export { login };
<<<<<<< HEAD
=======

>>>>>>> cbdd721bbdf0a525c4fb162977e91a26df614800
