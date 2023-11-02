const SITE_CONFIG = {
	siteName: "IT迷的博客,
	siteLanguage: "zh-Hans",
	description: "IT迷的的个人博客，胡乱写些东西",
	avatarPath: "/hyoban.png",
	faviconPath: "/favicon.svg",
	links: [
		{
			type: "GitHub",
			url: "https://github.com/serbia580",
		},
		{
			type: "电商陈",
			url: "https://www.serbia70.com",
		},
		{
			type: "Email",
			url: "serbia1688@gmail.com",
		},
	],
	codeTheme: {
		light: "github-light",
		dark: "github-dark",
	},
	siteUrl: "https://www.serbia70.com",
	authorName: "IT迷",
	authorLink: "https://hyoban.cc",
	authorEmail: "hi@hyoban.cc",
	timeZone: "Asia/Shanghai",
	source: "local",
} as const

export default SITE_CONFIG
