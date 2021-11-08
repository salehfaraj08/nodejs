const axios = require("axios");
const request = require("request");
const got = require("got");
const getData = async () => {
    let res = await axios.get('https://api.chucknorris.io/jokes/random');
    console.log(res.data.value);
}

const getDataRequest = () => {
    request({ "url": "https://api.chucknorris.io/jokes/random",json:true }, (err, res) => {
        console.log('\n',res.body.value);
    })
}
getData();
getDataRequest();

const getDataGot =async()=>{
    try {
		const response = await got('https://api.chucknorris.io/jokes/random');
		console.log('data got : ',response.body);
	} catch (error) {
		console.log(error.response.body);
	}

}
getDataGot();