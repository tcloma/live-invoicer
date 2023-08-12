/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Baskets = "baskets",
	Items = "items",
	Sales = "sales",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type BasketsRecord = {
	ig_handle?: string
	sale?: RecordIdString
	items?: RecordIdString[]
}

export type ItemsRecord = {
	name?: string
	price?: number
	basket?: RecordIdString
}

export type SalesRecord = {
	sale_date: IsoDateString
	baskets?: RecordIdString[]
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type BasketsResponse<Texpand = unknown> = Required<BasketsRecord> & BaseSystemFields<Texpand>
export type ItemsResponse<Texpand = unknown> = Required<ItemsRecord> & BaseSystemFields<Texpand>
export type SalesResponse<Texpand = unknown> = Required<SalesRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	baskets: BasketsRecord
	items: ItemsRecord
	sales: SalesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	baskets: BasketsResponse
	items: ItemsResponse
	sales: SalesResponse
	users: UsersResponse
}