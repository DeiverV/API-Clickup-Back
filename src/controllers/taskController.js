import axios from '../utils/axiosSetup.js'

const taskId = '3rqurqa';
const query = new URLSearchParams({ include_subtasks: 'true'}).toString();

export const  getOneTask = (req, res) => {

    axios.get( `/task/${taskId}?${query}` )
        .then( response => {  
            res.send( { status: "OK", data: response.data } );
        })
        .catch( error => window.alert( "Opps, something went wrong in request!" ) )
    
}