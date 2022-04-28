const API_URL = 'https://api.themoviedb.org/3/'
const API_KEY = 'def440376c18226d73f04e9c3fd3a052'

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`
// For login and voting
const REQUEST_TOKEN_URL = `${API_URL}authentication/token/new?api_key=${API_KEY}`
const LOGIN_URL = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`
const SESSION_ID_URL = `${API_URL}authentication/session/new?api_key=${API_KEY}`

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/'
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280'
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780'
const NO_POSTER_URL = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'

export {
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    API_URL,
    API_KEY,
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE,
    REQUEST_TOKEN_URL,
    LOGIN_URL,
    SESSION_ID_URL,
    NO_POSTER_URL
}
