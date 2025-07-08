import { gql } from '@apollo/client';
import { client } from '../apollo';
import { useCartStore } from '../store/useCartStore';

export async function placeOrderAction({ request }: { request: Request }) {
    const formData = await request.formData();
    const raw = formData.get('order') as string;

    const { items } = JSON.parse(raw);

    const result = await client.mutate({
        mutation: gql`
            mutation CreateOrder($items: [OrderItemInput!]!) {
                createOrder(items: $items) {
                    id
                    createdAt
                }
            }
        `,
        variables: { items },
    });

    useCartStore.getState().clearCart();

    return result.data.createOrder;
}
