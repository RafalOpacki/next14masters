/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CartCreate($id: ID!, $input: MutationCartFindOrCreateInput!) {\n  cartFindOrCreate(id: $id, input: $input) {\n    id\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    id\n    items {\n      quantity\n      product {\n        ...ProductDetailsWithCategories\n      }\n    }\n  }\n}": types.CartGetByIdDocument,
    "query CategoryGetBySlug($slug: String!) {\n  category(slug: $slug) {\n    name\n  }\n}": types.CategoryGetBySlugDocument,
    "query CategoryGetProducts($slug: String!) {\n  category(slug: $slug) {\n    name\n    products {\n      ...ProductsListItem\n    }\n  }\n}": types.CategoryGetProductsDocument,
    "query CategoriesGet($skip: Int, $take: Int) {\n  categories(skip: $skip, take: $take) {\n    data {\n      id\n      name\n      slug\n    }\n    meta {\n      count\n      total\n    }\n  }\n}": types.CategoriesGetDocument,
    "query CollectionGetBySlug($slug: String!) {\n  collection(slug: $slug) {\n    name\n  }\n}": types.CollectionGetBySlugDocument,
    "query CollectionGetProducts($slug: String!) {\n  collection(slug: $slug) {\n    name\n    products {\n      ...ProductsListItem\n    }\n  }\n}": types.CollectionGetProductsDocument,
    "fragment CollectionData on Collection {\n  id\n  name\n  slug\n}": types.CollectionDataFragmentDoc,
    "query CollectionsGet {\n  collections {\n    data {\n      ...CollectionData\n    }\n    meta {\n      total\n    }\n  }\n}": types.CollectionsGetDocument,
    "fragment ProductDetails on Product {\n  id\n  name\n  description\n  price\n  images {\n    url\n  }\n}": types.ProductDetailsFragmentDoc,
    "fragment ProductDetailsWithCategories on Product {\n  ...ProductDetails\n  categories {\n    name\n  }\n}": types.ProductDetailsWithCategoriesFragmentDoc,
    "query ProductDetailsWithCategoriesGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductDetailsWithCategories\n  }\n}": types.ProductDetailsWithCategoriesGetByIdDocument,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductDetails\n  }\n}": types.ProductGetByIdDocument,
    "query ProductGetRelated {\n  products(take: 4) {\n    data {\n      ...ProductsListItem\n    }\n  }\n}": types.ProductGetRelatedDocument,
    "query ProductsGet($search: String, $take: Int, $skip: Int) {\n  products(search: $search, take: $take, skip: $skip) {\n    data {\n      ...ProductsListItem\n    }\n    meta {\n      total\n      count\n    }\n  }\n}": types.ProductsGetDocument,
    "fragment ProductsListItem on Product {\n  id\n  name\n  price\n  rating\n  categories {\n    name\n  }\n  images {\n    url\n  }\n}": types.ProductsListItemFragmentDoc,
    "query CategoriesGetMenuItems {\n  categories {\n    data {\n      name\n      slug\n    }\n  }\n}": types.CategoriesGetMenuItemsDocument,
    "query CollectionsGetMenuItems {\n  collections {\n    data {\n      name\n      slug\n    }\n  }\n}": types.CollectionsGetMenuItemsDocument,
    "mutation ReviewCreate($author: String!, $description: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {\n  reviewCreate(\n    author: $author\n    description: $description\n    email: $email\n    productId: $productId\n    rating: $rating\n    title: $title\n  ) {\n    id\n  }\n}": types.ReviewCreateDocument,
    "fragment ReviewData on Product {\n  rating\n  reviews {\n    ...Review\n  }\n}": types.ReviewDataFragmentDoc,
    "fragment Review on Review {\n  id\n  author\n  title\n  description\n  rating\n}": types.ReviewFragmentDoc,
    "query ReviewsGetByProductId($id: ID!) {\n  product(id: $id) {\n    ...ReviewData\n  }\n}": types.ReviewsGetByProductIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate($id: ID!, $input: MutationCartFindOrCreateInput!) {\n  cartFindOrCreate(id: $id, input: $input) {\n    id\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    id\n    items {\n      quantity\n      product {\n        ...ProductDetailsWithCategories\n      }\n    }\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetBySlug($slug: String!) {\n  category(slug: $slug) {\n    name\n  }\n}"): typeof import('./graphql').CategoryGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetProducts($slug: String!) {\n  category(slug: $slug) {\n    name\n    products {\n      ...ProductsListItem\n    }\n  }\n}"): typeof import('./graphql').CategoryGetProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGet($skip: Int, $take: Int) {\n  categories(skip: $skip, take: $take) {\n    data {\n      id\n      name\n      slug\n    }\n    meta {\n      count\n      total\n    }\n  }\n}"): typeof import('./graphql').CategoriesGetDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetBySlug($slug: String!) {\n  collection(slug: $slug) {\n    name\n  }\n}"): typeof import('./graphql').CollectionGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetProducts($slug: String!) {\n  collection(slug: $slug) {\n    name\n    products {\n      ...ProductsListItem\n    }\n  }\n}"): typeof import('./graphql').CollectionGetProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionData on Collection {\n  id\n  name\n  slug\n}"): typeof import('./graphql').CollectionDataFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGet {\n  collections {\n    data {\n      ...CollectionData\n    }\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductDetails on Product {\n  id\n  name\n  description\n  price\n  images {\n    url\n  }\n}"): typeof import('./graphql').ProductDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductDetailsWithCategories on Product {\n  ...ProductDetails\n  categories {\n    name\n  }\n}"): typeof import('./graphql').ProductDetailsWithCategoriesFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductDetailsWithCategoriesGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductDetailsWithCategories\n  }\n}"): typeof import('./graphql').ProductDetailsWithCategoriesGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductDetails\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetRelated {\n  products(take: 4) {\n    data {\n      ...ProductsListItem\n    }\n  }\n}"): typeof import('./graphql').ProductGetRelatedDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGet($search: String, $take: Int, $skip: Int) {\n  products(search: $search, take: $take, skip: $skip) {\n    data {\n      ...ProductsListItem\n    }\n    meta {\n      total\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductsListItem on Product {\n  id\n  name\n  price\n  rating\n  categories {\n    name\n  }\n  images {\n    url\n  }\n}"): typeof import('./graphql').ProductsListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetMenuItems {\n  categories {\n    data {\n      name\n      slug\n    }\n  }\n}"): typeof import('./graphql').CategoriesGetMenuItemsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetMenuItems {\n  collections {\n    data {\n      name\n      slug\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetMenuItemsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewCreate($author: String!, $description: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {\n  reviewCreate(\n    author: $author\n    description: $description\n    email: $email\n    productId: $productId\n    rating: $rating\n    title: $title\n  ) {\n    id\n  }\n}"): typeof import('./graphql').ReviewCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ReviewData on Product {\n  rating\n  reviews {\n    ...Review\n  }\n}"): typeof import('./graphql').ReviewDataFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Review on Review {\n  id\n  author\n  title\n  description\n  rating\n}"): typeof import('./graphql').ReviewFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ReviewsGetByProductId($id: ID!) {\n  product(id: $id) {\n    ...ReviewData\n  }\n}"): typeof import('./graphql').ReviewsGetByProductIdDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
