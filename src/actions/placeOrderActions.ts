import { client } from '../apollo';
import { useCartStore } from '../store/useCartStore';
import { CREATE_ORDER } from '../graphql/mutations/createOrder';

export async function placeOrderAction({ request }: { request: Request }) {
    const formData = await request.formData();
    const raw = formData.get('order') as string;

    const { items } = JSON.parse(raw);

    const result = await client.mutate({
        mutation: CREATE_ORDER,
        variables: { items },
    });

    useCartStore.getState().clearCart();

    console.log(result.data.createOrder);

    return result.data.createOrder;
}
