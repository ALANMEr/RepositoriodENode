import { OAuth2Client } from 'google-auth-library'
import { googlekey } from '../config.js'

const client = new OAuth2Client(googlekey);

async function googleverify(token="") {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: googlekey,  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const {name,picture,email} = ticket.getPayload();
   
    return {
        
        nombre:name, 
        img: picture,
         correo:email
    }

}
export default googleverify