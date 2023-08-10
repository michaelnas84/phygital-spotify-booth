const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","phygital-logo.png","play.png","print.png","selfie.png","spotify-logo.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.7d808745.js","app":"_app/immutable/entry/app.93288895.js","imports":["_app/immutable/entry/start.7d808745.js","_app/immutable/chunks/scheduler.b6905636.js","_app/immutable/chunks/singletons.5a518017.js","_app/immutable/entry/app.93288895.js","_app/immutable/chunks/scheduler.b6905636.js","_app/immutable/chunks/index.bc9d3051.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-8d9bee44.js')),
			__memo(() => import('./chunks/1-cf0a7e87.js')),
			__memo(() => import('./chunks/2-728c964c.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/search",
				pattern: /^\/search\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-876da485.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
