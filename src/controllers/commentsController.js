import axios from '../utils/axiosSetup.js'

const taskId = '3rqurqa';

export const getAllComments = (req, res) => {

    axios.get( `/task/${taskId}/comment` )
        .then( response => {  
            res.send( { status: "OK", data: response.data } );
        })
        .catch( error => window.alert( "Opps, something went wrong in request!" ) )
}