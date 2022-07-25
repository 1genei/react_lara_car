import axios from 'axios';





const HandleLogin = async(user) => {

    let userPayload = {};
    let tokenPayload = "";




    return axios.post('http://127.0.0.1:8000/api/login', user, { withCredentials: true }).then((res) => {


        if (res.data.status === 200) {

            userPayload = res.data.user;
            tokenPayload = res.data.token;

            localStorage.setItem("token", tokenPayload)
            localStorage.setItem("user", JSON.stringify(userPayload))



        }



        return res.data
    })
}

export default HandleLogin;