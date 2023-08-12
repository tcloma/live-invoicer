import Pocketbase from 'pocketbase';
import { Collections, type BasketsResponse, type SalesResponse } from './pocketbase-types';

type Texpand = {
	baskets: BasketsResponse;
};

export const pb = new Pocketbase('http://127.0.0.1:8090');

export async function getSales() {
	return structuredClone(await pb.collection(Collections.Sales).getFullList<SalesResponse>());
}

export async function getBasketsWithItems(id: string) {
	return structuredClone(
		await pb.collection(Collections.Baskets).getFullList<BasketsResponse>({
			filter: `sale = "${id}"`,
			expand: 'items'
		})
	);
}
