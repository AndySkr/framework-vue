import {GET} from '../../untils/axios/index';
import {USERDOMAIN} from '../../../app.config';
console.log(USERDOMAIN);
class HomeModuleApi {
	@GET(`${USERDOMAIN}/users`)
	getUser: any;
}

const HomeModuleAPI = new HomeModuleApi();
export default HomeModuleAPI;
