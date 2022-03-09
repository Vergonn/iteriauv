import React from "react";
import {
  Spinner,
  CheckBox,
  Layer,
  Box,
  Text,
  DataTable,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "grommet";
import { Orders } from "./Orders";
import { FullOrdersPrice } from "./FullOrdersPrice";

import { useCustomersQuery } from "../generated/graphql";

export const Customers = () => {
  const { loading, error, data } = useCustomersQuery();

  const [show, setShow] = React.useState(false);
  const [id, setId] = React.useState(0);

  if (loading)
    return (
      <Box direction="row-responsive" gap="medium" justify="center" wrap>
        <Box pad="small" align="center">
          <Spinner />
          <Text>Loading...</Text>
        </Box>
      </Box>
    );

  if (error) return <Text>Error! {error.message}</Text>;

  return (
    <Box>
      <DataTable
        columns={[
          {
            property: "id",
            header: <Text>ID</Text>,
            primary: true,
          },
          {
            property: "name",
            header: <Text>Name</Text>,
          },
          {
            property: "birth_date",
            header: <Text>Birth Date</Text>,
            render: (customer) => (
              <Text>{new Date(customer.birth_date).toLocaleDateString()}</Text>
            ),
          },
          {
            property: "vip",
            header: <Text>VIP</Text>,
            render: (customer) => (
              <Box pad={{ vertical: "xsmall" }}>
                <CheckBox checked={customer.vip} disabled={true} />
              </Box>
            ),
          },
          {
            property: "orders_price",
            header: <Text>Orders Price</Text>,
            render: (customer) => <FullOrdersPrice customerId={customer.id} />,
          },
        ]}
        data={data?.customers}
        fill
        onClickRow={({ datum }) => {
          setId(datum.id);
          setShow(true);
        }}
        pin
        sortable
      />
      {show && (
        <Layer
          onEsc={() => {
            setShow(false);
          }}
          onClickOutside={() => {
            setShow(false);
          }}
        >
          <Card background="light-1">
            <CardHeader className="card" pad="medium">
              Orders
            </CardHeader>
            <CardBody pad="medium">
              <Orders customerId={id} />
            </CardBody>
            <Button
              label="close"
              margin="medium"
              onClick={() => {
                setShow(false);
              }}
            />
          </Card>
        </Layer>
      )}
    </Box>
  );
};
