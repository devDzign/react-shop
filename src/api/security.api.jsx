import axios from 'axios';
import jwtDecode from 'jwt-decode'
import url from '../utils/url.config'


/**
 * Déconnexion (suppression du token du localStorage et sur Axios)
 */
function logout() {
    delete axios.defaults.headers["Authorization"];
    window.localStorage.removeItem("token");
}

/**
 * Positionne le token JWT sur Axios
 * @param {string} token Le token JWT
 */
const setAxiosToken = (token) => {
    axios.defaults.headers["Authorization"] = "Bearer " + token;
}

/**
 * Mise en place lors du chargement de l'application
 */
const setup = () => {
    // 1. Voir si on a un token ?
    const token = window.localStorage.getItem("token");
    // 2. Si le token est encore valide
    if (token) {
        const {exp: expiration} = jwtDecode(token);
        if (expiration * 1000 > new Date().getTime()) {
            setAxiosToken(token);
        }
    }
}

/**
 *
 * @returns {null|*}
 */
const getTokenDecode = () => {

    const token = window.localStorage.getItem("token");
    // 2. Si le token est encore valide
    if (token) {
        return jwtDecode(token);
    }
    return null;

}

/**
 *
 * @returns {Promise<null|*>}
 */
const getCurrentUser = async () => {

    const res = await getTokenDecode();

    if (res) {
        return res.user;
    }
    return null;
}

/**
 * Permet de savoir si on est authentifié ou pas
 * @returns boolean
 */
const isAuthenticated = () => {
    // 1. Voir si on a un token ?
    const token = window.localStorage.getItem("token");
    // 2. Si le token est encore valide
    if (token) {
        const {exp: expiration} = jwtDecode(token);
        return expiration * 1000 > new Date().getTime();
    }

    return false;
}

/**
 *
 * @param email
 * @param password
 * @param confirmPassword
 * @param displayName
 * @returns {Promise<AxiosResponse<any>>}
 */
const createUser = async ({email, password, confirmPassword, displayName}) => {
    return await axios.post(`${url}/users`, {
        email,
        password,
        confirmPassword,
        displayName
    });
}

/**
 * Requête HTTP d'authentification et stockage du token dans le storage et sur Axios
 * @param {object} credentials
 */
const loginUserAPI = async ({email, password}) => {

    const response = await axios.post(`${url}/sign-in`, {
        email,
        password
    })

    const token = await response.data.token;
    // Je stocke le token dans mon localStorage
    window.localStorage.setItem("token", token);
    // On prévient Axios qu'on a maintenant un header par défaut sur toutes nos futures requetes HTTP
    setAxiosToken(token);

    return jwtDecode(token);
}

export default {
    loginUserAPI,
    createUser,
    isAuthenticated,
    logout,
    setup,
    getTokenDecode,
    getCurrentUser
};