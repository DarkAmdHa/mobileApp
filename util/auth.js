// const API_KEY = 'AIzaSyDCYasArcOwcALFhIj2szug5aD2PgUQu1E';

async function authenticate(mode, email, password) {
//   const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

//   const response = await axios.post(url, {
//     email: email,
//     password: password,
//     returnSecureToken: true,
//   });

//   const token = response.data.idToken;
  const token = "123";
  //Wait 5 secs
  await new Promise(resolve=>setTimeout(resolve, 5000));
  return token;
}

export function createUser(email, password) {
  return authenticate('signUp', email, password);
}

export function login(email, password) {
  return authenticate('signInWithPassword', email, password);
}