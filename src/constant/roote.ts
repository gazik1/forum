/**
 * Маршруты роута
 */
export const PATH = {
	/**
	 * Главная страница: "/"
	 */
	MAIN: {
		MAIN: "/",
		USERS: {
			USERS:"/users",
			PROFILE: "/users/:userId",
			MYPOSTS: "/users/:userId/myPosts",
			CREATPOST: "/users/:userId/myPosts/creatPosts"
		},
		POSTS: { 
			POSTS: "/posts",
			POST: "/posts/:postId"
		},
		AUTHORS: "/authors",
	},

	/**
	 * Страница авторизации: "/auth"
	 */
	AUTH: {
		AUTH:"/auth",
		
		/**
	 * Страница регистрации: "/registration"
	 */
		REGISTRATION: "/auth/registration"

	},

	
	/**
	 * Страница для отладки компонентов: "/test"
	 */
	TEST: "/test",
} as const;
