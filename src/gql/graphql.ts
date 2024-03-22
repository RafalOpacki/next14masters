/* eslint-disable */
import type { DocumentTypeDecoration } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
	[_ in K]?: never;
};
export type Incremental<T> =
	| T
	| { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
	DateTime: { input: unknown; output: unknown };
	/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
	JSON: { input: unknown; output: unknown };
};

export type Cart = {
	id: Scalars["ID"]["output"];
	items: Array<CartItem>;
};

export type CartItem = {
	product: Product;
	quantity: Scalars["Int"]["output"];
};

export type CartItemInput = {
	productId: Scalars["String"]["input"];
	quantity?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Category = {
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	products: Array<Product>;
	slug: Scalars["String"]["output"];
};

export type CategoryList = {
	data: Array<Category>;
	meta: ListMeta;
};

export type Collection = {
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	products: Array<Product>;
	slug: Scalars["String"]["output"];
};

export type CollectionList = {
	data: Array<Collection>;
	meta: ListMeta;
};

export type ListMeta = {
	/** The total number of items matching the query */
	count: Scalars["Int"]["output"];
	/** The total number of items in the database */
	total: Scalars["Int"]["output"];
};

export type Mutation = {
	cartAddItem: Cart;
	cartChangeItemQuantity: Cart;
	cartComplete: Order;
	cartFindOrCreate: Cart;
	cartRemoveItem: Cart;
	reviewCreate: Cart;
};

export type MutationCartAddItemArgs = {
	id: Scalars["ID"]["input"];
	input: MutationCartAddItemInput;
};

export type MutationCartChangeItemQuantityArgs = {
	id: Scalars["ID"]["input"];
	productId: Scalars["ID"]["input"];
	quantity: Scalars["Int"]["input"];
};

export type MutationCartCompleteArgs = {
	cartId: Scalars["ID"]["input"];
	userEmail: Scalars["String"]["input"];
};

export type MutationCartFindOrCreateArgs = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	input: MutationCartFindOrCreateInput;
};

export type MutationCartRemoveItemArgs = {
	id: Scalars["ID"]["input"];
	productId: Scalars["ID"]["input"];
};

export type MutationReviewCreateArgs = {
	author: Scalars["String"]["input"];
	description: Scalars["String"]["input"];
	email: Scalars["String"]["input"];
	productId: Scalars["ID"]["input"];
	rating: Scalars["Int"]["input"];
	title: Scalars["String"]["input"];
};

export type MutationCartAddItemInput = {
	item: CartItemInput;
};

export type MutationCartFindOrCreateInput = {
	items?: InputMaybe<Array<CartItemInput>>;
};

export type Order = {
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["ID"]["output"];
	lines: Scalars["JSON"]["output"];
	status: OrderStatus;
	totalAmount: Scalars["Int"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
};

export type OrderList = {
	data: Array<Order>;
	meta: ListMeta;
};

export type OrderSortBy = "DEFAULT" | "STATUS" | "TOTAL";

export type OrderStatus = "CANCELLED" | "CREATED" | "FULFILLED" | "PAID";

export type Product = {
	categories: Array<Category>;
	collections: Array<Collection>;
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	images: Array<ProductImage>;
	name: Scalars["String"]["output"];
	price: Scalars["Int"]["output"];
	rating?: Maybe<Scalars["Float"]["output"]>;
	reviews: Array<Review>;
	slug: Scalars["String"]["output"];
};

export type ProductImage = {
	alt: Scalars["String"]["output"];
	height: Scalars["Int"]["output"];
	id: Scalars["ID"]["output"];
	url: Scalars["String"]["output"];
	width: Scalars["Int"]["output"];
};

export type ProductList = {
	data: Array<Product>;
	meta: ListMeta;
};

export type ProductSortBy = "DEFAULT" | "NAME" | "PRICE" | "RATING";

export type Query = {
	cart?: Maybe<Cart>;
	categories: CategoryList;
	category?: Maybe<Category>;
	collection?: Maybe<Collection>;
	collections: CollectionList;
	order?: Maybe<Order>;
	orders: OrderList;
	product?: Maybe<Product>;
	products: ProductList;
};

export type QueryCartArgs = {
	id: Scalars["ID"]["input"];
};

export type QueryCategoriesArgs = {
	skip?: Scalars["Int"]["input"];
	take?: Scalars["Int"]["input"];
};

export type QueryCategoryArgs = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryCollectionArgs = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryCollectionsArgs = {
	skip?: Scalars["Int"]["input"];
	take?: Scalars["Int"]["input"];
};

export type QueryOrderArgs = {
	id: Scalars["ID"]["input"];
};

export type QueryOrdersArgs = {
	email: Scalars["String"]["input"];
	order?: SortDirection;
	orderBy?: OrderSortBy;
	skip?: Scalars["Int"]["input"];
	take?: Scalars["Int"]["input"];
};

export type QueryProductArgs = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryProductsArgs = {
	order?: SortDirection;
	orderBy?: ProductSortBy;
	search?: InputMaybe<Scalars["String"]["input"]>;
	skip?: Scalars["Int"]["input"];
	take?: Scalars["Int"]["input"];
};

export type Review = {
	author: Scalars["String"]["output"];
	createdAt: Scalars["DateTime"]["output"];
	description: Scalars["String"]["output"];
	email: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	product: Product;
	rating: Scalars["Float"]["output"];
	title: Scalars["String"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
};

export type ReviewList = {
	data: Array<Review>;
	meta: ListMeta;
};

export type SortDirection = "ASC" | "DESC";

export type CartAddItemMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
	input: MutationCartAddItemInput;
}>;

export type CartAddItemMutation = {
	cartAddItem: {
		id: string;
		items: Array<{
			quantity: number;
			product: {
				id: string;
				name: string;
				description: string;
				price: number;
				images: Array<{ url: string }>;
			};
		}>;
	};
};

export type CartChangeItemQuantityMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
	productId: Scalars["ID"]["input"];
	quantity: Scalars["Int"]["input"];
}>;

export type CartChangeItemQuantityMutation = {
	cartChangeItemQuantity: {
		id: string;
		items: Array<{
			quantity: number;
			product: {
				id: string;
				name: string;
				description: string;
				price: number;
				images: Array<{ url: string }>;
			};
		}>;
	};
};

export type CartCompleteMutationVariables = Exact<{
	cartId: Scalars["ID"]["input"];
	userEmail: Scalars["String"]["input"];
}>;

export type CartCompleteMutation = {
	cartComplete: { id: string; totalAmount: number; lines: unknown; status: OrderStatus };
};

export type CartFindOrCreateMutationVariables = Exact<{
	id?: InputMaybe<Scalars["ID"]["input"]>;
	input?: InputMaybe<MutationCartFindOrCreateInput>;
}>;

export type CartFindOrCreateMutation = {
	cartFindOrCreate: {
		id: string;
		items: Array<{
			quantity: number;
			product: {
				id: string;
				name: string;
				description: string;
				price: number;
				categories: Array<{ name: string }>;
				images: Array<{ url: string }>;
			};
		}>;
	};
};

export type CartGetByIdQueryVariables = Exact<{
	id: Scalars["ID"]["input"];
}>;

export type CartGetByIdQuery = {
	cart?: {
		id: string;
		items: Array<{
			quantity: number;
			product: {
				id: string;
				name: string;
				description: string;
				price: number;
				categories: Array<{ name: string }>;
				images: Array<{ url: string }>;
			};
		}>;
	} | null;
};

export type CartItemFragment = {
	id: string;
	items: Array<{
		quantity: number;
		product: {
			id: string;
			name: string;
			description: string;
			price: number;
			categories: Array<{ name: string }>;
			images: Array<{ url: string }>;
		};
	}>;
};

export type CartRemoveItemMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
	productId: Scalars["ID"]["input"];
}>;

export type CartRemoveItemMutation = {
	cartRemoveItem: {
		id: string;
		items: Array<{
			quantity: number;
			product: {
				id: string;
				name: string;
				description: string;
				price: number;
				categories: Array<{ name: string }>;
				images: Array<{ url: string }>;
			};
		}>;
	};
};

export type CategoryGetBySlugQueryVariables = Exact<{
	slug: Scalars["String"]["input"];
}>;

export type CategoryGetBySlugQuery = { category?: { name: string } | null };

export type CategoryGetProductsQueryVariables = Exact<{
	slug: Scalars["String"]["input"];
}>;

export type CategoryGetProductsQuery = {
	category?: {
		name: string;
		products: Array<{
			id: string;
			name: string;
			price: number;
			rating?: number | null;
			categories: Array<{ name: string }>;
			images: Array<{ url: string }>;
		}>;
	} | null;
};

export type CategoriesGetQueryVariables = Exact<{
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type CategoriesGetQuery = {
	categories: {
		data: Array<{ id: string; name: string; slug: string }>;
		meta: { count: number; total: number };
	};
};

export type CollectionGetBySlugQueryVariables = Exact<{
	slug: Scalars["String"]["input"];
}>;

export type CollectionGetBySlugQuery = { collection?: { name: string } | null };

export type CollectionGetProductsQueryVariables = Exact<{
	slug: Scalars["String"]["input"];
}>;

export type CollectionGetProductsQuery = {
	collection?: {
		name: string;
		products: Array<{
			id: string;
			name: string;
			price: number;
			rating?: number | null;
			categories: Array<{ name: string }>;
			images: Array<{ url: string }>;
		}>;
	} | null;
};

export type CollectionDataFragment = { id: string; name: string; slug: string };

export type CollectionsGetQueryVariables = Exact<{ [key: string]: never }>;

export type CollectionsGetQuery = {
	collections: { data: Array<{ id: string; name: string; slug: string }>; meta: { total: number } };
};

export type ProductDetailsFragment = {
	id: string;
	name: string;
	description: string;
	price: number;
	images: Array<{ url: string }>;
};

export type ProductDetailsWithCategoriesFragment = {
	id: string;
	name: string;
	description: string;
	price: number;
	categories: Array<{ name: string }>;
	images: Array<{ url: string }>;
};

export type ProductDetailsWithCategoriesGetByIdQueryVariables = Exact<{
	id: Scalars["ID"]["input"];
}>;

export type ProductDetailsWithCategoriesGetByIdQuery = {
	product?: {
		id: string;
		name: string;
		description: string;
		price: number;
		categories: Array<{ name: string }>;
		images: Array<{ url: string }>;
	} | null;
};

export type ProductGetByIdQueryVariables = Exact<{
	id: Scalars["ID"]["input"];
}>;

export type ProductGetByIdQuery = {
	product?: {
		id: string;
		name: string;
		description: string;
		price: number;
		images: Array<{ url: string }>;
	} | null;
};

export type ProductGetRelatedQueryVariables = Exact<{ [key: string]: never }>;

export type ProductGetRelatedQuery = {
	products: {
		data: Array<{
			id: string;
			name: string;
			price: number;
			rating?: number | null;
			categories: Array<{ name: string }>;
			images: Array<{ url: string }>;
		}>;
	};
};

export type ProductsGetQueryVariables = Exact<{
	search?: InputMaybe<Scalars["String"]["input"]>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	order?: InputMaybe<SortDirection>;
	orderBy?: InputMaybe<ProductSortBy>;
}>;

export type ProductsGetQuery = {
	products: {
		data: Array<{
			id: string;
			name: string;
			price: number;
			rating?: number | null;
			categories: Array<{ name: string }>;
			images: Array<{ url: string }>;
		}>;
		meta: { total: number; count: number };
	};
};

export type ProductsListItemFragment = {
	id: string;
	name: string;
	price: number;
	rating?: number | null;
	categories: Array<{ name: string }>;
	images: Array<{ url: string }>;
};

export type CategoriesGetMenuItemsQueryVariables = Exact<{ [key: string]: never }>;

export type CategoriesGetMenuItemsQuery = {
	categories: { data: Array<{ name: string; slug: string }> };
};

export type CollectionsGetMenuItemsQueryVariables = Exact<{ [key: string]: never }>;

export type CollectionsGetMenuItemsQuery = {
	collections: { data: Array<{ name: string; slug: string }> };
};

export type ReviewCreateMutationVariables = Exact<{
	author: Scalars["String"]["input"];
	description: Scalars["String"]["input"];
	email: Scalars["String"]["input"];
	productId: Scalars["ID"]["input"];
	rating: Scalars["Int"]["input"];
	title: Scalars["String"]["input"];
}>;

export type ReviewCreateMutation = { reviewCreate: { id: string } };

export type ReviewDataFragment = {
	rating?: number | null;
	reviews: Array<{
		id: string;
		author: string;
		email: string;
		title: string;
		description: string;
		rating: number;
	}>;
};

export type ReviewFragment = {
	id: string;
	author: string;
	email: string;
	title: string;
	description: string;
	rating: number;
};

export type ReviewsGetByProductIdQueryVariables = Exact<{
	id: Scalars["ID"]["input"];
}>;

export type ReviewsGetByProductIdQuery = {
	product?: {
		rating?: number | null;
		reviews: Array<{
			id: string;
			author: string;
			email: string;
			title: string;
			description: string;
			rating: number;
		}>;
	} | null;
};

export class TypedDocumentString<TResult, TVariables>
	extends String
	implements DocumentTypeDecoration<TResult, TVariables>
{
	__apiType?: DocumentTypeDecoration<TResult, TVariables>["__apiType"];

	constructor(
		private value: string,
		public __meta__?: Record<string, any>,
	) {
		super(value);
	}

	toString(): string & DocumentTypeDecoration<TResult, TVariables> {
		return this.value;
	}
}
export const CartItemFragmentDoc = new TypedDocumentString(
	`
    fragment CartItem on Cart {
  id
  items {
    quantity
    product {
      id
      name
      description
      price
      categories {
        name
      }
      images {
        url
      }
    }
  }
}
    `,
	{ fragmentName: "CartItem" },
) as unknown as TypedDocumentString<CartItemFragment, unknown>;
export const CollectionDataFragmentDoc = new TypedDocumentString(
	`
    fragment CollectionData on Collection {
  id
  name
  slug
}
    `,
	{ fragmentName: "CollectionData" },
) as unknown as TypedDocumentString<CollectionDataFragment, unknown>;
export const ProductDetailsFragmentDoc = new TypedDocumentString(
	`
    fragment ProductDetails on Product {
  id
  name
  description
  price
  images {
    url
  }
}
    `,
	{ fragmentName: "ProductDetails" },
) as unknown as TypedDocumentString<ProductDetailsFragment, unknown>;
export const ProductDetailsWithCategoriesFragmentDoc = new TypedDocumentString(
	`
    fragment ProductDetailsWithCategories on Product {
  ...ProductDetails
  categories {
    name
  }
}
    fragment ProductDetails on Product {
  id
  name
  description
  price
  images {
    url
  }
}`,
	{ fragmentName: "ProductDetailsWithCategories" },
) as unknown as TypedDocumentString<ProductDetailsWithCategoriesFragment, unknown>;
export const ProductsListItemFragmentDoc = new TypedDocumentString(
	`
    fragment ProductsListItem on Product {
  id
  name
  price
  rating
  categories {
    name
  }
  images {
    url
  }
}
    `,
	{ fragmentName: "ProductsListItem" },
) as unknown as TypedDocumentString<ProductsListItemFragment, unknown>;
export const ReviewFragmentDoc = new TypedDocumentString(
	`
    fragment Review on Review {
  id
  author
  email
  title
  description
  rating
}
    `,
	{ fragmentName: "Review" },
) as unknown as TypedDocumentString<ReviewFragment, unknown>;
export const ReviewDataFragmentDoc = new TypedDocumentString(
	`
    fragment ReviewData on Product {
  rating
  reviews {
    ...Review
  }
}
    fragment Review on Review {
  id
  author
  email
  title
  description
  rating
}`,
	{ fragmentName: "ReviewData" },
) as unknown as TypedDocumentString<ReviewDataFragment, unknown>;
export const CartAddItemDocument = new TypedDocumentString(`
    mutation CartAddItem($id: ID!, $input: MutationCartAddItemInput!) {
  cartAddItem(id: $id, input: $input) {
    id
    items {
      quantity
      product {
        id
        name
        description
        price
        images {
          url
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CartAddItemMutation, CartAddItemMutationVariables>;
export const CartChangeItemQuantityDocument = new TypedDocumentString(`
    mutation CartChangeItemQuantity($id: ID!, $productId: ID!, $quantity: Int!) {
  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {
    id
    items {
      quantity
      product {
        id
        name
        description
        price
        images {
          url
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<
	CartChangeItemQuantityMutation,
	CartChangeItemQuantityMutationVariables
>;
export const CartCompleteDocument = new TypedDocumentString(`
    mutation CartComplete($cartId: ID!, $userEmail: String!) {
  cartComplete(cartId: $cartId, userEmail: $userEmail) {
    id
    totalAmount
    lines
    status
  }
}
    `) as unknown as TypedDocumentString<CartCompleteMutation, CartCompleteMutationVariables>;
export const CartFindOrCreateDocument = new TypedDocumentString(`
    mutation CartFindOrCreate($id: ID, $input: MutationCartFindOrCreateInput = {}) {
  cartFindOrCreate(id: $id, input: $input) {
    id
    items {
      quantity
      product {
        id
        name
        description
        price
        categories {
          name
        }
        images {
          url
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<
	CartFindOrCreateMutation,
	CartFindOrCreateMutationVariables
>;
export const CartGetByIdDocument = new TypedDocumentString(`
    query CartGetById($id: ID!) {
  cart(id: $id) {
    id
    items {
      quantity
      product {
        ...ProductDetailsWithCategories
      }
    }
  }
}
    fragment ProductDetails on Product {
  id
  name
  description
  price
  images {
    url
  }
}
fragment ProductDetailsWithCategories on Product {
  ...ProductDetails
  categories {
    name
  }
}`) as unknown as TypedDocumentString<CartGetByIdQuery, CartGetByIdQueryVariables>;
export const CartRemoveItemDocument = new TypedDocumentString(`
    mutation CartRemoveItem($id: ID!, $productId: ID!) {
  cartRemoveItem(id: $id, productId: $productId) {
    id
    items {
      quantity
      product {
        id
        name
        description
        price
        categories {
          name
        }
        images {
          url
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CartRemoveItemMutation, CartRemoveItemMutationVariables>;
export const CategoryGetBySlugDocument = new TypedDocumentString(`
    query CategoryGetBySlug($slug: String!) {
  category(slug: $slug) {
    name
  }
}
    `) as unknown as TypedDocumentString<CategoryGetBySlugQuery, CategoryGetBySlugQueryVariables>;
export const CategoryGetProductsDocument = new TypedDocumentString(`
    query CategoryGetProducts($slug: String!) {
  category(slug: $slug) {
    name
    products {
      ...ProductsListItem
    }
  }
}
    fragment ProductsListItem on Product {
  id
  name
  price
  rating
  categories {
    name
  }
  images {
    url
  }
}`) as unknown as TypedDocumentString<CategoryGetProductsQuery, CategoryGetProductsQueryVariables>;
export const CategoriesGetDocument = new TypedDocumentString(`
    query CategoriesGet($skip: Int, $take: Int) {
  categories(skip: $skip, take: $take) {
    data {
      id
      name
      slug
    }
    meta {
      count
      total
    }
  }
}
    `) as unknown as TypedDocumentString<CategoriesGetQuery, CategoriesGetQueryVariables>;
export const CollectionGetBySlugDocument = new TypedDocumentString(`
    query CollectionGetBySlug($slug: String!) {
  collection(slug: $slug) {
    name
  }
}
    `) as unknown as TypedDocumentString<
	CollectionGetBySlugQuery,
	CollectionGetBySlugQueryVariables
>;
export const CollectionGetProductsDocument = new TypedDocumentString(`
    query CollectionGetProducts($slug: String!) {
  collection(slug: $slug) {
    name
    products {
      ...ProductsListItem
    }
  }
}
    fragment ProductsListItem on Product {
  id
  name
  price
  rating
  categories {
    name
  }
  images {
    url
  }
}`) as unknown as TypedDocumentString<
	CollectionGetProductsQuery,
	CollectionGetProductsQueryVariables
>;
export const CollectionsGetDocument = new TypedDocumentString(`
    query CollectionsGet {
  collections {
    data {
      ...CollectionData
    }
    meta {
      total
    }
  }
}
    fragment CollectionData on Collection {
  id
  name
  slug
}`) as unknown as TypedDocumentString<CollectionsGetQuery, CollectionsGetQueryVariables>;
export const ProductDetailsWithCategoriesGetByIdDocument = new TypedDocumentString(`
    query ProductDetailsWithCategoriesGetById($id: ID!) {
  product(id: $id) {
    ...ProductDetailsWithCategories
  }
}
    fragment ProductDetails on Product {
  id
  name
  description
  price
  images {
    url
  }
}
fragment ProductDetailsWithCategories on Product {
  ...ProductDetails
  categories {
    name
  }
}`) as unknown as TypedDocumentString<
	ProductDetailsWithCategoriesGetByIdQuery,
	ProductDetailsWithCategoriesGetByIdQueryVariables
>;
export const ProductGetByIdDocument = new TypedDocumentString(`
    query ProductGetById($id: ID!) {
  product(id: $id) {
    ...ProductDetails
  }
}
    fragment ProductDetails on Product {
  id
  name
  description
  price
  images {
    url
  }
}`) as unknown as TypedDocumentString<ProductGetByIdQuery, ProductGetByIdQueryVariables>;
export const ProductGetRelatedDocument = new TypedDocumentString(`
    query ProductGetRelated {
  products(take: 4) {
    data {
      ...ProductsListItem
    }
  }
}
    fragment ProductsListItem on Product {
  id
  name
  price
  rating
  categories {
    name
  }
  images {
    url
  }
}`) as unknown as TypedDocumentString<ProductGetRelatedQuery, ProductGetRelatedQueryVariables>;
export const ProductsGetDocument = new TypedDocumentString(`
    query ProductsGet($search: String, $take: Int, $skip: Int, $order: SortDirection, $orderBy: ProductSortBy) {
  products(
    search: $search
    take: $take
    skip: $skip
    order: $order
    orderBy: $orderBy
  ) {
    data {
      ...ProductsListItem
    }
    meta {
      total
      count
    }
  }
}
    fragment ProductsListItem on Product {
  id
  name
  price
  rating
  categories {
    name
  }
  images {
    url
  }
}`) as unknown as TypedDocumentString<ProductsGetQuery, ProductsGetQueryVariables>;
export const CategoriesGetMenuItemsDocument = new TypedDocumentString(`
    query CategoriesGetMenuItems {
  categories {
    data {
      name
      slug
    }
  }
}
    `) as unknown as TypedDocumentString<
	CategoriesGetMenuItemsQuery,
	CategoriesGetMenuItemsQueryVariables
>;
export const CollectionsGetMenuItemsDocument = new TypedDocumentString(`
    query CollectionsGetMenuItems {
  collections {
    data {
      name
      slug
    }
  }
}
    `) as unknown as TypedDocumentString<
	CollectionsGetMenuItemsQuery,
	CollectionsGetMenuItemsQueryVariables
>;
export const ReviewCreateDocument = new TypedDocumentString(`
    mutation ReviewCreate($author: String!, $description: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {
  reviewCreate(
    author: $author
    description: $description
    email: $email
    productId: $productId
    rating: $rating
    title: $title
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<ReviewCreateMutation, ReviewCreateMutationVariables>;
export const ReviewsGetByProductIdDocument = new TypedDocumentString(`
    query ReviewsGetByProductId($id: ID!) {
  product(id: $id) {
    ...ReviewData
  }
}
    fragment ReviewData on Product {
  rating
  reviews {
    ...Review
  }
}
fragment Review on Review {
  id
  author
  email
  title
  description
  rating
}`) as unknown as TypedDocumentString<
	ReviewsGetByProductIdQuery,
	ReviewsGetByProductIdQueryVariables
>;
