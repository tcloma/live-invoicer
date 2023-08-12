import { getBasketsWithItems } from '../../../pocketbase';
import type { PageServerLoad } from './$types';

type Params = {
	params: {
		id: string;
	};
};

export const load: PageServerLoad = async ({ params }: Params) => {
	return {
		baskets: await getBasketsWithItems(params.id)
	};
};
