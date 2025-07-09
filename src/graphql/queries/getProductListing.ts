import { gql } from '@apollo/client';

export const GET_PRODUCT_LISTING = gql`
    query {
        products {
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
