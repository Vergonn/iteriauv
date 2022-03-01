import { Spinner, CheckBox, Box, Grid, Text, DataTable } from 'grommet';
import { Currency } from 'grommet-icons';

import { useQuery, gql } from '@apollo/client';

type OrdersProps = {
    customerId: number;
}

export const Orders = ({ customerId }: OrdersProps) => {
    const { loading, error, data } = useQuery(gql`
        query Orders {
            customers(where: {id: {_eq: ${customerId}}}) {
                name
                vip
                birth_date
            }
            orders_aggregate(where: {customer_id: {_eq: ${customerId}}}) {
                aggregate {
                    sum {
                        price
                    }
                }
                nodes {
                    name
                    price
                    date
                }
            }
        }
    `);

    if (loading) return (
        <Box direction="row-responsive" gap="medium" justify="center" wrap>
            <Box pad="small" align="center">
                <Spinner /><Text>Loading...</Text>
            </Box>
        </Box>);

    if (error) return <Text>Error! {error.message}</Text>;

    return (
        <Box>
            <Box direction='row' alignSelf='center' align='center' alignContent='center' className='customer-info' margin='xsmall'>
                <Grid key='name' pad="small" border='right'>
                    <Text margin='xsmall'>{data.customers[0].name}</Text>
                </Grid>
                <Grid key='name' pad="small" border='right'>
                    <Text margin='xsmall'>{new Date(data.customers[0].birth_date).toLocaleDateString()}</Text>
                </Grid>
                <Grid key='name' pad="small" border='right'>
                    <Box direction='row-responsive' >
                        <Text margin='xsmall'>VIP</Text>
                        <CheckBox
                            checked={data.customers[0].vip}
                            disabled={true}
                        />
                    </Box>
                </Grid>
                <Grid key='name' pad="small" >
                    <Box direction='row' >
                        <Text color='green' margin={{ horizontal: 'xsmall' }}>{(data.orders_aggregate.aggregate.sum.price ? data.orders_aggregate.aggregate.sum.price : '$0')}</Text>
                        <Currency color='green' />
                    </Box>
                </Grid>
            </Box>
            <DataTable
                columns={[
                    {
                        property: 'key',
                        header: <Text>{data.orders_aggregate.nodes.length}</Text>,
                        primary: true
                    },
                    {
                        property: 'name',
                        header: <Text>Name</Text>,
                    },
                    {
                        property: 'date',
                        header: <Text>Date</Text>,
                        render: order => (
                            <Text>{
                                new Date(order.date).toLocaleDateString()
                            }</Text>
                        )
                    },
                    {
                        property: 'price',
                        header: <Text>Price</Text>,
                        render: order => (
                            <Box direction='row' >
                                <Text color='green' margin={{ horizontal: 'xsmall' }}>{order.price}</Text>
                                <Currency color='green' />
                            </Box>
                        )
                    },
                ]}
                data={data.orders_aggregate.nodes}
                fill
                pin
                sortable
            />
        </Box>
    );
}