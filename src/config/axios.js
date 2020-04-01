import Axios from 'axios'

const axios =Axios.create({
    baseURL:'https://cors-anywhere.herokuapp.com/dct-application-form.herokuapp.com'
})

export default axios

//http://my-cors-1.herokuapp.com/https://dct-application-form.herokuapp.com
