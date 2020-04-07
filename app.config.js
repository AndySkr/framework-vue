const DOMAIN_CONFIG = {
	dev: {
		userModule: {
			_USERDOMAIN_: 'http://localhost:3001',
			token: ''
		},
		homeModule: {
			_HOMEDOMAIN_: '',
			token: ''
		}
	},
	pre: {
		userModule: {
			_USERDOMAIN_: 'https://api.github-pre.com',
			token: ''
		},
		homeModule: {
			_HOMEDOMAIN_: '',
			token: ''
		}
	}
};
const getDomainConfig = (env = 'dev') => {
	return DOMAIN_CONFIG[env];
};
const USERDOMAIN = getDomainConfig(window.ENV).userModule._USERDOMAIN_;
export {USERDOMAIN};
