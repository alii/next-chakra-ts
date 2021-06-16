import {HttpException, api} from 'nextkit';

// Type to be imported in the frontend
// for type-safe API routes
export type HelloResponseType = {
	time: number;
};

export default api<HelloResponseType>({
	GET: async (req, res) => {
		if (Math.random() > 0.7) {
			throw new HttpException(400, 'This was intentionally thrown!');
		}

		return {time: Date.now()};
	},
});
