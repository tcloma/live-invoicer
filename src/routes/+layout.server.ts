import { getSales } from '../pocketbase';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    return {
        sales: await getSales()
    };
};
