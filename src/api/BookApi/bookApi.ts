import {GET} from '../../untils/axios/index';
import {USERDOMAIN} from '../../../app.config';
class bookAPi {
	@GET(`${USERDOMAIN}/book/queryAllBookList`)
	bookList: any;
}

const booktAPI = new bookAPi();
export default booktAPI;
