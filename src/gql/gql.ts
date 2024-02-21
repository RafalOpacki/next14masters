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
    "fragment CategoryData on Category {\n  name\n  products {\n    ...ProductsListItem\n  }\n}": types.CategoryDataFragmentDoc,
    "query CategoryGetProducts($slug: String!) {\n  category(slug: $slug) {\n    ...CategoryData\n  }\n}": types.CategoryGetProductsDocument,
    "query CategoriesGet($skip: Int, $take: Int) {\n  categories(skip: $skip, take: $take) {\n    data {\n      id\n      name\n      slug\n    }\n    meta {\n      count\n      total\n    }\n  }\n}": types.CategoriesGetDocument,
    "query CollectionGetProducts($slug: String!) {\n  collection(slug: $slug) {\n    name\n    products {\n      ...ProductsListItem\n    }\n  }\n}": types.CollectionGetProductsDocument,
    "fragment CollectionData on Collection {\n  id\n  name\n  slug\n}": types.CollectionDataFragmentDoc,
    "query CollectionsGet {\n  collections {\n    data {\n      ...CollectionData\n    }\n    meta {\n      total\n    }\n  }\n}": types.CollectionsGetDocument,
    "fragment ProductDetails on Product {\n  id\n  name\n  description\n  price\n  images {\n    url\n  }\n}": types.ProductDetailsFragmentDoc,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductDetails\n  }\n}": types.ProductGetByIdDocument,
    "query ProductGetRelated {\n  products(take: 4) {\n    data {\n      ...ProductsListItem\n    }\n  }\n}": types.ProductGetRelatedDocument,
    "query ProductsGet($search: String, $take: Int, $skip: Int) {\n  products(search: $search, take: $take, skip: $skip) {\n    data {\n      ...ProductsListItem\n    }\n    meta {\n      total\n      count\n    }\n  }\n}": types.ProductsGetDocument,
    "fragment ProductsListItem on Product {\n  id\n  name\n  price\n  categories {\n    name\n  }\n  images {\n    url\n  }\n}": types.ProductsListItemFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CategoryData on Category {\n  name\n  products {\n    ...ProductsListItem\n  }\n}"): typeof import('./graphql').CategoryDataFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetProducts($slug: String!) {\n  category(slug: $slug) {\n    ...CategoryData\n  }\n}"): typeof import('./graphql').CategoryGetProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGet($skip: Int, $take: Int) {\n  categories(skip: $skip, take: $take) {\n    data {\n      id\n      name\n      slug\n    }\n    meta {\n      count\n      total\n    }\n  }\n}"): typeof import('./graphql').CategoriesGetDocument;
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
export function graphql(source: "fragment ProductsListItem on Product {\n  id\n  name\n  price\n  categories {\n    name\n  }\n  images {\n    url\n  }\n}"): typeof import('./graphql').ProductsListItemFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
