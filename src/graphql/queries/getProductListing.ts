import { gql } from '@apollo/client';

export const GET_PRODUCT_LISTING = gql`
    query GetProductListing($category: String!) {
        products(category: $category) {
            id
            name
            brand
            category
            price {
                amount
                currencyLabel
                currencySymbol
            }
            gallery
            inStock
        }
    }
`;
