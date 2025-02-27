const forms = require('@googleapis/forms')
import credentials from '../../app_credentials.json'

const auth = new forms.auth.OAuth2({
    keyFilename: credentials,
      // Scopes can be specified either as an array or as a single, space-delimited string.
    scopes: ['https://www.googleapis.com/auth/forms']
  });
  const authClient = await auth.getClient(); 

export async function GET({params}) {

}