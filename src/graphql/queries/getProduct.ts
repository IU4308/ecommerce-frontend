import { gql } from '@apollo/client';

export const GET_PRODUCT = gql`
    query GetProduct($id: ID!) {
        product(id: $id) {
            id
            name
            description
            price {
                amount
                currencySymbol
            }
            inStock
            gallery
            attributes {
                name
                type
                items {
                    itemId
                    value
                    displayValue
                }
            }
        }
    }
`;
