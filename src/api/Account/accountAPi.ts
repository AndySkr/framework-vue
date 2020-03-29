import {GET} from '../../untils/axios/index';
import {USERDOMAIN} from '../../../app.config';
class accountAPi {
	@GET(`${USERDOMAIN}/user`)
	fetchUser: any;
}

const accountAPI = new accountAPi();
export default accountAPI;
