import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  money: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Boolean"]>;
  _gt?: InputMaybe<Scalars["Boolean"]>;
  _gte?: InputMaybe<Scalars["Boolean"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["Boolean"]>;
  _lte?: InputMaybe<Scalars["Boolean"]>;
  _neq?: InputMaybe<Scalars["Boolean"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Int"]>;
  _gt?: InputMaybe<Scalars["Int"]>;
  _gte?: InputMaybe<Scalars["Int"]>;
  _in?: InputMaybe<Array<Scalars["Int"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["Int"]>;
  _lte?: InputMaybe<Scalars["Int"]>;
  _neq?: InputMaybe<Scalars["Int"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["String"]>;
  _gt?: InputMaybe<Scalars["String"]>;
  _gte?: InputMaybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]>;
  _in?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]>;
  _lt?: InputMaybe<Scalars["String"]>;
  _lte?: InputMaybe<Scalars["String"]>;
  _neq?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]>;
  _nin?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "customers" */
export type Customers = {
  __typename?: "customers";
  birth_date: Scalars["date"];
  id: Scalars["Int"];
  name: Scalars["String"];
  vip: Scalars["Boolean"];
};

/** aggregated selection of "customers" */
export type Customers_Aggregate = {
  __typename?: "customers_aggregate";
  aggregate?: Maybe<Customers_Aggregate_Fields>;
  nodes: Array<Customers>;
};

/** aggregate fields of "customers" */
export type Customers_Aggregate_Fields = {
  __typename?: "customers_aggregate_fields";
  avg?: Maybe<Customers_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Customers_Max_Fields>;
  min?: Maybe<Customers_Min_Fields>;
  stddev?: Maybe<Customers_Stddev_Fields>;
  stddev_pop?: Maybe<Customers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Customers_Stddev_Samp_Fields>;
  sum?: Maybe<Customers_Sum_Fields>;
  var_pop?: Maybe<Customers_Var_Pop_Fields>;
  var_samp?: Maybe<Customers_Var_Samp_Fields>;
  variance?: Maybe<Customers_Variance_Fields>;
};

/** aggregate fields of "customers" */
export type Customers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customers_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "customers" */
export type Customers_Aggregate_Order_By = {
  avg?: InputMaybe<Customers_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Customers_Max_Order_By>;
  min?: InputMaybe<Customers_Min_Order_By>;
  stddev?: InputMaybe<Customers_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Customers_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Customers_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Customers_Sum_Order_By>;
  var_pop?: InputMaybe<Customers_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Customers_Var_Samp_Order_By>;
  variance?: InputMaybe<Customers_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "customers" */
export type Customers_Arr_Rel_Insert_Input = {
  data: Array<Customers_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};

/** aggregate avg on columns */
export type Customers_Avg_Fields = {
  __typename?: "customers_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "customers" */
export type Customers_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "customers". All fields are combined with a logical 'AND'. */
export type Customers_Bool_Exp = {
  _and?: InputMaybe<Array<Customers_Bool_Exp>>;
  _not?: InputMaybe<Customers_Bool_Exp>;
  _or?: InputMaybe<Array<Customers_Bool_Exp>>;
  birth_date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  vip?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "customers" */
export enum Customers_Constraint {
  /** unique or primary key constraint */
  CustomersPkey = "customers_pkey",
}

/** input type for incrementing numeric columns in table "customers" */
export type Customers_Inc_Input = {
  id?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "customers" */
export type Customers_Insert_Input = {
  birth_date?: InputMaybe<Scalars["date"]>;
  id?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  vip?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate max on columns */
export type Customers_Max_Fields = {
  __typename?: "customers_max_fields";
  birth_date?: Maybe<Scalars["date"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "customers" */
export type Customers_Max_Order_By = {
  birth_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Customers_Min_Fields = {
  __typename?: "customers_min_fields";
  birth_date?: Maybe<Scalars["date"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "customers" */
export type Customers_Min_Order_By = {
  birth_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "customers" */
export type Customers_Mutation_Response = {
  __typename?: "customers_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Customers>;
};

/** on_conflict condition type for table "customers" */
export type Customers_On_Conflict = {
  constraint: Customers_Constraint;
  update_columns?: Array<Customers_Update_Column>;
  where?: InputMaybe<Customers_Bool_Exp>;
};

/** Ordering options when selecting data from "customers". */
export type Customers_Order_By = {
  birth_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  vip?: InputMaybe<Order_By>;
};

/** primary key columns input for table: customers */
export type Customers_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "customers" */
export enum Customers_Select_Column {
  /** column name */
  BirthDate = "birth_date",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Vip = "vip",
}

/** input type for updating data in table "customers" */
export type Customers_Set_Input = {
  birth_date?: InputMaybe<Scalars["date"]>;
  id?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  vip?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate stddev on columns */
export type Customers_Stddev_Fields = {
  __typename?: "customers_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "customers" */
export type Customers_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Customers_Stddev_Pop_Fields = {
  __typename?: "customers_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "customers" */
export type Customers_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Customers_Stddev_Samp_Fields = {
  __typename?: "customers_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "customers" */
export type Customers_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Customers_Sum_Fields = {
  __typename?: "customers_sum_fields";
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "customers" */
export type Customers_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "customers" */
export enum Customers_Update_Column {
  /** column name */
  BirthDate = "birth_date",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Vip = "vip",
}

/** aggregate var_pop on columns */
export type Customers_Var_Pop_Fields = {
  __typename?: "customers_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "customers" */
export type Customers_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Customers_Var_Samp_Fields = {
  __typename?: "customers_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "customers" */
export type Customers_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Customers_Variance_Fields = {
  __typename?: "customers_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "customers" */
export type Customers_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["date"]>;
  _gt?: InputMaybe<Scalars["date"]>;
  _gte?: InputMaybe<Scalars["date"]>;
  _in?: InputMaybe<Array<Scalars["date"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["date"]>;
  _lte?: InputMaybe<Scalars["date"]>;
  _neq?: InputMaybe<Scalars["date"]>;
  _nin?: InputMaybe<Array<Scalars["date"]>>;
};

/** Boolean expression to compare columns of type "money". All fields are combined with logical 'AND'. */
export type Money_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["money"]>;
  _gt?: InputMaybe<Scalars["money"]>;
  _gte?: InputMaybe<Scalars["money"]>;
  _in?: InputMaybe<Array<Scalars["money"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["money"]>;
  _lte?: InputMaybe<Scalars["money"]>;
  _neq?: InputMaybe<Scalars["money"]>;
  _nin?: InputMaybe<Array<Scalars["money"]>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "customers" */
  delete_customers?: Maybe<Customers_Mutation_Response>;
  /** delete single row from the table: "customers" */
  delete_customers_by_pk?: Maybe<Customers>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** insert data into the table: "customers" */
  insert_customers?: Maybe<Customers_Mutation_Response>;
  /** insert a single row into the table: "customers" */
  insert_customers_one?: Maybe<Customers>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** update data of the table: "customers" */
  update_customers?: Maybe<Customers_Mutation_Response>;
  /** update single row of the table: "customers" */
  update_customers_by_pk?: Maybe<Customers>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
};

/** mutation root */
export type Mutation_RootDelete_CustomersArgs = {
  where: Customers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Customers_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootInsert_CustomersArgs = {
  objects: Array<Customers_Insert_Input>;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Customers_OneArgs = {
  object: Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_CustomersArgs = {
  _inc?: InputMaybe<Customers_Inc_Input>;
  _set?: InputMaybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Customers_By_PkArgs = {
  _inc?: InputMaybe<Customers_Inc_Input>;
  _set?: InputMaybe<Customers_Set_Input>;
  pk_columns: Customers_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: "orders";
  customer_id: Scalars["Int"];
  /** An array relationship */
  customer_orders: Array<Customers>;
  /** An aggregate relationship */
  customer_orders_aggregate: Customers_Aggregate;
  date: Scalars["date"];
  id: Scalars["Int"];
  name: Scalars["String"];
  price: Scalars["money"];
};

/** columns and relationships of "orders" */
export type OrdersCustomer_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};

/** columns and relationships of "orders" */
export type OrdersCustomer_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: "orders_aggregate";
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: "orders_aggregate_fields";
  avg?: Maybe<Orders_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
  stddev?: Maybe<Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Sum_Fields>;
  var_pop?: Maybe<Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Var_Samp_Fields>;
  variance?: Maybe<Orders_Variance_Fields>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: "orders_avg_fields";
  customer_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Bool_Exp>>;
  _not?: InputMaybe<Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Bool_Exp>>;
  customer_id?: InputMaybe<Int_Comparison_Exp>;
  customer_orders?: InputMaybe<Customers_Bool_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Money_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint */
  OrdersIdKey = "orders_id_key",
  /** unique or primary key constraint */
  OrdersPkey = "orders_pkey",
}

/** input type for incrementing numeric columns in table "orders" */
export type Orders_Inc_Input = {
  customer_id?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["Int"]>;
  price?: InputMaybe<Scalars["money"]>;
};

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  customer_id?: InputMaybe<Scalars["Int"]>;
  customer_orders?: InputMaybe<Customers_Arr_Rel_Insert_Input>;
  date?: InputMaybe<Scalars["date"]>;
  id?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["money"]>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: "orders_max_fields";
  customer_id?: Maybe<Scalars["Int"]>;
  date?: Maybe<Scalars["date"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["money"]>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: "orders_min_fields";
  customer_id?: Maybe<Scalars["Int"]>;
  date?: Maybe<Scalars["date"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["money"]>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: "orders_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** on_conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  customer_orders_aggregate?: InputMaybe<Customers_Aggregate_Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  CustomerId = "customer_id",
  /** column name */
  Date = "date",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Price = "price",
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  customer_id?: InputMaybe<Scalars["Int"]>;
  date?: InputMaybe<Scalars["date"]>;
  id?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["money"]>;
};

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: "orders_stddev_fields";
  customer_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: "orders_stddev_pop_fields";
  customer_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: "orders_stddev_samp_fields";
  customer_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: "orders_sum_fields";
  customer_id?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  price?: Maybe<Scalars["money"]>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  CustomerId = "customer_id",
  /** column name */
  Date = "date",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Price = "price",
}

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: "orders_var_pop_fields";
  customer_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: "orders_var_samp_fields";
  customer_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: "orders_variance_fields";
  customer_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
};

export type Query_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};

export type Query_RootCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};

export type Query_RootCustomers_By_PkArgs = {
  id: Scalars["Int"];
};

export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

export type Query_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

export type Query_RootOrders_By_PkArgs = {
  id: Scalars["Int"];
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
};

export type Subscription_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};

export type Subscription_RootCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};

export type Subscription_RootCustomers_By_PkArgs = {
  id: Scalars["Int"];
};

export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars["Int"];
};

export type CustomersQueryVariables = Exact<{ [key: string]: never }>;

export type CustomersQuery = {
  __typename?: "query_root";
  customers: Array<{
    __typename?: "customers";
    id: number;
    name: string;
    vip: boolean;
    birth_date: any;
  }>;
};

export type CustomerOrdersFullPriceQueryVariables = Exact<{
  customerId: Scalars["Int"];
}>;

export type CustomerOrdersFullPriceQuery = {
  __typename?: "query_root";
  orders_aggregate: {
    __typename?: "orders_aggregate";
    aggregate?: {
      __typename?: "orders_aggregate_fields";
      sum?: { __typename?: "orders_sum_fields"; price?: any | null } | null;
    } | null;
  };
};

export type OrdersQueryVariables = Exact<{
  customerId: Scalars["Int"];
}>;

export type OrdersQuery = {
  __typename?: "query_root";
  customers: Array<{
    __typename?: "customers";
    name: string;
    vip: boolean;
    birth_date: any;
  }>;
  orders_aggregate: {
    __typename?: "orders_aggregate";
    aggregate?: {
      __typename?: "orders_aggregate_fields";
      sum?: { __typename?: "orders_sum_fields"; price?: any | null } | null;
    } | null;
    nodes: Array<{
      __typename?: "orders";
      name: string;
      price: any;
      date: any;
    }>;
  };
};

export const CustomersDocument = gql`
  query Customers {
    customers {
      id
      name
      vip
      birth_date
    }
  }
`;

/**
 * __useCustomersQuery__
 *
 * To run a query within a React component, call `useCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomersQuery({
 *   variables: {
 *   },
 * });
 */
export function useCustomersQuery(
  baseOptions?: Apollo.QueryHookOptions<CustomersQuery, CustomersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CustomersQuery, CustomersQueryVariables>(
    CustomersDocument,
    options
  );
}
export function useCustomersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CustomersQuery,
    CustomersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CustomersQuery, CustomersQueryVariables>(
    CustomersDocument,
    options
  );
}
export type CustomersQueryHookResult = ReturnType<typeof useCustomersQuery>;
export type CustomersLazyQueryHookResult = ReturnType<
  typeof useCustomersLazyQuery
>;
export type CustomersQueryResult = Apollo.QueryResult<
  CustomersQuery,
  CustomersQueryVariables
>;
export const CustomerOrdersFullPriceDocument = gql`
  query CustomerOrdersFullPrice($customerId: Int!) {
    orders_aggregate(where: { customer_id: { _eq: $customerId } }) {
      aggregate {
        sum {
          price
        }
      }
    }
  }
`;

/**
 * __useCustomerOrdersFullPriceQuery__
 *
 * To run a query within a React component, call `useCustomerOrdersFullPriceQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomerOrdersFullPriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomerOrdersFullPriceQuery({
 *   variables: {
 *      customerId: // value for 'customerId'
 *   },
 * });
 */
export function useCustomerOrdersFullPriceQuery(
  baseOptions: Apollo.QueryHookOptions<
    CustomerOrdersFullPriceQuery,
    CustomerOrdersFullPriceQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    CustomerOrdersFullPriceQuery,
    CustomerOrdersFullPriceQueryVariables
  >(CustomerOrdersFullPriceDocument, options);
}
export function useCustomerOrdersFullPriceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CustomerOrdersFullPriceQuery,
    CustomerOrdersFullPriceQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CustomerOrdersFullPriceQuery,
    CustomerOrdersFullPriceQueryVariables
  >(CustomerOrdersFullPriceDocument, options);
}
export type CustomerOrdersFullPriceQueryHookResult = ReturnType<
  typeof useCustomerOrdersFullPriceQuery
>;
export type CustomerOrdersFullPriceLazyQueryHookResult = ReturnType<
  typeof useCustomerOrdersFullPriceLazyQuery
>;
export type CustomerOrdersFullPriceQueryResult = Apollo.QueryResult<
  CustomerOrdersFullPriceQuery,
  CustomerOrdersFullPriceQueryVariables
>;
export const OrdersDocument = gql`
  query Orders($customerId: Int!) {
    customers(where: { id: { _eq: $customerId } }) {
      name
      vip
      birth_date
    }
    orders_aggregate(where: { customer_id: { _eq: $customerId } }) {
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
`;

/**
 * __useOrdersQuery__
 *
 * To run a query within a React component, call `useOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersQuery({
 *   variables: {
 *      customerId: // value for 'customerId'
 *   },
 * });
 */
export function useOrdersQuery(
  baseOptions: Apollo.QueryHookOptions<OrdersQuery, OrdersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<OrdersQuery, OrdersQueryVariables>(
    OrdersDocument,
    options
  );
}
export function useOrdersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<OrdersQuery, OrdersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<OrdersQuery, OrdersQueryVariables>(
    OrdersDocument,
    options
  );
}
export type OrdersQueryHookResult = ReturnType<typeof useOrdersQuery>;
export type OrdersLazyQueryHookResult = ReturnType<typeof useOrdersLazyQuery>;
export type OrdersQueryResult = Apollo.QueryResult<
  OrdersQuery,
  OrdersQueryVariables
>;
