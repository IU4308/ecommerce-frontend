import { gql } from '@apollo/client';

export const GET_PRODUCT_ATTRIBUTES = gql`
    query GetProductAttributes($id: ID!) {
        productAttributes(productId: $id) {
            name
            type
            items {
                itemId
                value
                displayValue
            }
        }
    }
`;
