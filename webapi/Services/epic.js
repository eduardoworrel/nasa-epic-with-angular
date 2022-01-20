const {
    default: axios
} = require('axios')

const URL = 'https://epic.gsfc.nasa.gov/api/enhanced/date/2015-10-31'

module.exports = {
    fetchResults : async() => {
        const collection = [];
        const {data} = await axios(URL);
        for(let item of data){
            collection.push(`https://epic.gsfc.nasa.gov/archive/enhanced/2015/10/31/png/${item.image}.png`);
        }
        return collection
    }
} 