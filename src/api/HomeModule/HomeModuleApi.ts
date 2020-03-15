import {GET} from '../../untils/axios/index';
class HomeModuleApi {
	prifixUrl: string = '/users';
	@GET(`/users`)
	getUser: any;
}

const HomeModuleAPI = new HomeModuleApi();
export default HomeModuleAPI;
