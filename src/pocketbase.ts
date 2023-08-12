import Pocketbase from 'pocketbase';
import {
	Collections,
	type BasketsResponse,
	type ItemsResponse,
	type SalesResponse
} from './pocketbase-types';

type Texpand = {
	items: ItemsResponse;
};

export const pb = new Pocketbase('http://127.0.0.1:8090');

export async function getSales() {
	return structuredClone(await pb.collection(Collections.Sales).getFullList<SalesResponse>());
}

export async function getBasketsWithItems(id: string) {
	return structuredClone(
		await pb.collection(Collections.Baskets).getFullList<BasketsResponse<Texpand[]>>({
			filter: `sale = "${id}"`,
			expand: 'items'
		})
	);
}

export async function createNewSale() {
	
}
