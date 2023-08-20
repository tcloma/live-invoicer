import { getSales } from '../pocketbase';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
    return {
        sales: await getSales()
    };
};
