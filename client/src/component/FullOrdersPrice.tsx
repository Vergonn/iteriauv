import { Spinner, Box, Text, } from 'grommet';
import { Currency } from 'grommet-icons';

import { useQuery, gql } from '@apollo/client';

type OrdersProps = {
    customerId: number;
}

export const FullOrdersPrice = ({ customerId }: OrdersProps) => {
    const { loading, error, data } = useQuery(gql`
        query Customers {
            orders_aggregate(where: {customer_id: {_eq: ${customerId}}}) {
                aggregate {
                    sum {
                        price
                    }
                }
            }
        }
    `);

    if (loading) return (
        <Box direction="row-responsive" gap="medium" justify="center" wrap>
            <Box pad="small" align="center">
                <Spinner />
            </Box>
        </Box>);

    if (error) return <Text>Error!</Text>;

    return (
        <Box direction='row' >
            <Text color='green' margin={{ horizontal: 'xsmall' }}>{(data.orders_aggregate.aggregate.sum.price ? data.orders_aggregate.aggregate.sum.price : '$0')}</Text>
            <Currency color='green' />
        </Box>
    );
}