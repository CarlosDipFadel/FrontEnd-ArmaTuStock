import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"))
axios.defaults.headers = {'auth-token': user ? user.token : ""}

export default axios;