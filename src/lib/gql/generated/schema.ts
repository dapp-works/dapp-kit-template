// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    Boolean: boolean,
    Float: number,
    Int: number,
    String: string,
    bigint: any,
    bytea: any,
    date: any,
    jsonb: any,
    numeric: any,
    smallint: any,
    timestamp: any,
    uuid: any,
}


/** columns and relationships of "banner" */
export interface banner {
    id: Scalars['Int']
    image: Scalars['String']
    link: Scalars['String']
    title: (Scalars['String'] | null)
    __typename: 'banner'
}


/** select columns of table "banner" */
export type banner_select_column = 'id' | 'image' | 'link' | 'title'


/** columns and relationships of "contracts_verified" */
export interface contracts_verified {
    address: Scalars['String']
    compiler_evm_version: Scalars['String']
    compiler_runs: Scalars['Int']
    compiler_type: Scalars['smallint']
    compiler_version: Scalars['String']
    contract_abi: Scalars['String']
    contract_bytecode: Scalars['String']
    contract_bytecode_hash: Scalars['String']
    contract_name: Scalars['String']
    contract_source: Scalars['String']
    deployed_bytecode_hash: Scalars['String']
    id: Scalars['bigint']
    license_type: Scalars['smallint']
    optimizer: Scalars['smallint']
    verified_time: Scalars['Int']
    __typename: 'contracts_verified'
}


/** aggregated selection of "contracts_verified" */
export interface contracts_verified_aggregate {
    aggregate: (contracts_verified_aggregate_fields | null)
    nodes: contracts_verified[]
    __typename: 'contracts_verified_aggregate'
}


/** aggregate fields of "contracts_verified" */
export interface contracts_verified_aggregate_fields {
    avg: (contracts_verified_avg_fields | null)
    count: Scalars['Int']
    max: (contracts_verified_max_fields | null)
    min: (contracts_verified_min_fields | null)
    stddev: (contracts_verified_stddev_fields | null)
    stddev_pop: (contracts_verified_stddev_pop_fields | null)
    stddev_samp: (contracts_verified_stddev_samp_fields | null)
    sum: (contracts_verified_sum_fields | null)
    var_pop: (contracts_verified_var_pop_fields | null)
    var_samp: (contracts_verified_var_samp_fields | null)
    variance: (contracts_verified_variance_fields | null)
    __typename: 'contracts_verified_aggregate_fields'
}


/** aggregate avg on columns */
export interface contracts_verified_avg_fields {
    compiler_runs: (Scalars['Float'] | null)
    compiler_type: (Scalars['Float'] | null)
    id: (Scalars['Float'] | null)
    license_type: (Scalars['Float'] | null)
    optimizer: (Scalars['Float'] | null)
    verified_time: (Scalars['Float'] | null)
    __typename: 'contracts_verified_avg_fields'
}


/** aggregate max on columns */
export interface contracts_verified_max_fields {
    address: (Scalars['String'] | null)
    compiler_evm_version: (Scalars['String'] | null)
    compiler_runs: (Scalars['Int'] | null)
    compiler_type: (Scalars['smallint'] | null)
    compiler_version: (Scalars['String'] | null)
    contract_abi: (Scalars['String'] | null)
    contract_bytecode: (Scalars['String'] | null)
    contract_bytecode_hash: (Scalars['String'] | null)
    contract_name: (Scalars['String'] | null)
    contract_source: (Scalars['String'] | null)
    deployed_bytecode_hash: (Scalars['String'] | null)
    id: (Scalars['bigint'] | null)
    license_type: (Scalars['smallint'] | null)
    optimizer: (Scalars['smallint'] | null)
    verified_time: (Scalars['Int'] | null)
    __typename: 'contracts_verified_max_fields'
}


/** aggregate min on columns */
export interface contracts_verified_min_fields {
    address: (Scalars['String'] | null)
    compiler_evm_version: (Scalars['String'] | null)
    compiler_runs: (Scalars['Int'] | null)
    compiler_type: (Scalars['smallint'] | null)
    compiler_version: (Scalars['String'] | null)
    contract_abi: (Scalars['String'] | null)
    contract_bytecode: (Scalars['String'] | null)
    contract_bytecode_hash: (Scalars['String'] | null)
    contract_name: (Scalars['String'] | null)
    contract_source: (Scalars['String'] | null)
    deployed_bytecode_hash: (Scalars['String'] | null)
    id: (Scalars['bigint'] | null)
    license_type: (Scalars['smallint'] | null)
    optimizer: (Scalars['smallint'] | null)
    verified_time: (Scalars['Int'] | null)
    __typename: 'contracts_verified_min_fields'
}


/** select columns of table "contracts_verified" */
export type contracts_verified_select_column = 'address' | 'compiler_evm_version' | 'compiler_runs' | 'compiler_type' | 'compiler_version' | 'contract_abi' | 'contract_bytecode' | 'contract_bytecode_hash' | 'contract_name' | 'contract_source' | 'deployed_bytecode_hash' | 'id' | 'license_type' | 'optimizer' | 'verified_time'


/** aggregate stddev on columns */
export interface contracts_verified_stddev_fields {
    compiler_runs: (Scalars['Float'] | null)
    compiler_type: (Scalars['Float'] | null)
    id: (Scalars['Float'] | null)
    license_type: (Scalars['Float'] | null)
    optimizer: (Scalars['Float'] | null)
    verified_time: (Scalars['Float'] | null)
    __typename: 'contracts_verified_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface contracts_verified_stddev_pop_fields {
    compiler_runs: (Scalars['Float'] | null)
    compiler_type: (Scalars['Float'] | null)
    id: (Scalars['Float'] | null)
    license_type: (Scalars['Float'] | null)
    optimizer: (Scalars['Float'] | null)
    verified_time: (Scalars['Float'] | null)
    __typename: 'contracts_verified_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface contracts_verified_stddev_samp_fields {
    compiler_runs: (Scalars['Float'] | null)
    compiler_type: (Scalars['Float'] | null)
    id: (Scalars['Float'] | null)
    license_type: (Scalars['Float'] | null)
    optimizer: (Scalars['Float'] | null)
    verified_time: (Scalars['Float'] | null)
    __typename: 'contracts_verified_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface contracts_verified_sum_fields {
    compiler_runs: (Scalars['Int'] | null)
    compiler_type: (Scalars['smallint'] | null)
    id: (Scalars['bigint'] | null)
    license_type: (Scalars['smallint'] | null)
    optimizer: (Scalars['smallint'] | null)
    verified_time: (Scalars['Int'] | null)
    __typename: 'contracts_verified_sum_fields'
}


/** aggregate var_pop on columns */
export interface contracts_verified_var_pop_fields {
    compiler_runs: (Scalars['Float'] | null)
    compiler_type: (Scalars['Float'] | null)
    id: (Scalars['Float'] | null)
    license_type: (Scalars['Float'] | null)
    optimizer: (Scalars['Float'] | null)
    verified_time: (Scalars['Float'] | null)
    __typename: 'contracts_verified_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface contracts_verified_var_samp_fields {
    compiler_runs: (Scalars['Float'] | null)
    compiler_type: (Scalars['Float'] | null)
    id: (Scalars['Float'] | null)
    license_type: (Scalars['Float'] | null)
    optimizer: (Scalars['Float'] | null)
    verified_time: (Scalars['Float'] | null)
    __typename: 'contracts_verified_var_samp_fields'
}


/** aggregate variance on columns */
export interface contracts_verified_variance_fields {
    compiler_runs: (Scalars['Float'] | null)
    compiler_type: (Scalars['Float'] | null)
    id: (Scalars['Float'] | null)
    license_type: (Scalars['Float'] | null)
    optimizer: (Scalars['Float'] | null)
    verified_time: (Scalars['Float'] | null)
    __typename: 'contracts_verified_variance_fields'
}


/** ordering argument of a cursor */
export type cursor_ordering = 'ASC' | 'DESC'


/** columns and relationships of "dapp" */
export interface dapp {
    category: Scalars['String']
    id: Scalars['Int']
    imageUrl: (Scalars['String'] | null)
    title: Scalars['String']
    url: (Scalars['String'] | null)
    __typename: 'dapp'
}


/** select columns of table "dapp" */
export type dapp_select_column = 'category' | 'id' | 'imageUrl' | 'title' | 'url'


/** columns and relationships of "ecosystem" */
export interface ecosystem {
    date: (Scalars['date'] | null)
    id: Scalars['uuid']
    logo: Scalars['String']
    slug: Scalars['String']
    status: Scalars['String']
    tag: Scalars['String']
    telegram: (Scalars['String'] | null)
    title: Scalars['String']
    twitter: (Scalars['String'] | null)
    website: (Scalars['String'] | null)
    __typename: 'ecosystem'
}


/** select columns of table "ecosystem" */
export type ecosystem_select_column = 'date' | 'id' | 'logo' | 'slug' | 'status' | 'tag' | 'telegram' | 'title' | 'twitter' | 'website'


/** columns and relationships of "kv" */
export interface kv {
    key: Scalars['String']
    value: Scalars['String']
    __typename: 'kv'
}


/** select columns of table "kv" */
export type kv_select_column = 'key' | 'value'


/** column ordering options */
export type order_by = 'asc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc' | 'desc_nulls_first' | 'desc_nulls_last'


/** columns and relationships of "price_history" */
export interface price_history {
    date: (Scalars['date'] | null)
    id: Scalars['Int']
    price: (Scalars['numeric'] | null)
    volume: (Scalars['numeric'] | null)
    __typename: 'price_history'
}


/** select columns of table "price_history" */
export type price_history_select_column = 'date' | 'id' | 'price' | 'volume'

export interface query_root {
    /** fetch data from the table: "banner" */
    banner: banner[]
    /** fetch data from the table: "banner" using primary key columns */
    banner_by_pk: (banner | null)
    /** fetch data from the table: "contracts_verified" */
    contracts_verified: contracts_verified[]
    /** fetch aggregated fields from the table: "contracts_verified" */
    contracts_verified_aggregate: contracts_verified_aggregate
    /** fetch data from the table: "contracts_verified" using primary key columns */
    contracts_verified_by_pk: (contracts_verified | null)
    /** fetch data from the table: "dapp" */
    dapp: dapp[]
    /** fetch data from the table: "dapp" using primary key columns */
    dapp_by_pk: (dapp | null)
    /** fetch data from the table: "ecosystem" */
    ecosystem: ecosystem[]
    /** fetch data from the table: "ecosystem" using primary key columns */
    ecosystem_by_pk: (ecosystem | null)
    /** fetch data from the table: "kv" */
    kv: kv[]
    /** fetch data from the table: "kv" using primary key columns */
    kv_by_pk: (kv | null)
    /** fetch data from the table: "price_history" */
    price_history: price_history[]
    /** fetch data from the table: "price_history" using primary key columns */
    price_history_by_pk: (price_history | null)
    /** fetch data from the table: "scription.action" */
    scription_action: scription_action[]
    /** fetch data from the table: "scription.action" using primary key columns */
    scription_action_by_pk: (scription_action | null)
    /** fetch data from the table: "scription.indexer_height" */
    scription_indexer_height: scription_indexer_height[]
    /** fetch data from the table: "scription.indexer_height" using primary key columns */
    scription_indexer_height_by_pk: (scription_indexer_height | null)
    /** fetch data from the table: "scription.xrc20" */
    scription_xrc20: scription_xrc20[]
    /** fetch data from the table: "scription.xrc20_action" */
    scription_xrc20_action: scription_xrc20_action[]
    /** fetch data from the table: "scription.xrc20_action" using primary key columns */
    scription_xrc20_action_by_pk: (scription_xrc20_action | null)
    /** fetch data from the table: "scription.xrc20" using primary key columns */
    scription_xrc20_by_pk: (scription_xrc20 | null)
    /** fetch data from the table: "scription.xrc20_transfer" */
    scription_xrc20_transfer: scription_xrc20_transfer[]
    /** fetch data from the table: "scription.xrc20_transfer" using primary key columns */
    scription_xrc20_transfer_by_pk: (scription_xrc20_transfer | null)
    /** fetch data from the table: "xrc20" */
    xrc20: xrc20[]
    __typename: 'query_root'
}


/** columns and relationships of "scription.action" */
export interface scription_action {
    action_hash: Scalars['String']
    action_type: Scalars['String']
    amount: Scalars['numeric']
    block_height: (Scalars['bigint'] | null)
    chain_id: Scalars['Int']
    contract_address: Scalars['String']
    data: (Scalars['String'] | null)
    encoding: Scalars['Int']
    execution_revert_msg: Scalars['String']
    gas_consumed: Scalars['Int']
    gas_limit: Scalars['Int']
    gas_price: Scalars['numeric']
    hash_data: (Scalars['String'][] | null)
    id: Scalars['bigint']
    nonce: Scalars['bigint']
    payload: (Scalars['bytea'] | null)
    recipient: Scalars['String']
    sender: Scalars['String']
    status: Scalars['smallint']
    timestamp: (Scalars['timestamp'] | null)
    version: Scalars['Int']
    __typename: 'scription_action'
}


/** select columns of table "scription.action" */
export type scription_action_select_column = 'action_hash' | 'action_type' | 'amount' | 'block_height' | 'chain_id' | 'contract_address' | 'data' | 'encoding' | 'execution_revert_msg' | 'gas_consumed' | 'gas_limit' | 'gas_price' | 'hash_data' | 'id' | 'nonce' | 'payload' | 'recipient' | 'sender' | 'status' | 'timestamp' | 'version'


/** columns and relationships of "scription.indexer_height" */
export interface scription_indexer_height {
    current_height: (Scalars['bigint'] | null)
    id: Scalars['Int']
    name: (Scalars['String'] | null)
    start_height: (Scalars['bigint'] | null)
    __typename: 'scription_indexer_height'
}


/** select columns of table "scription.indexer_height" */
export type scription_indexer_height_select_column = 'current_height' | 'id' | 'name' | 'start_height'


/** columns and relationships of "scription.xrc20" */
export interface scription_xrc20 {
    creator: (Scalars['String'] | null)
    dec: (Scalars['numeric'] | null)
    id: Scalars['Int']
    lim: (Scalars['numeric'] | null)
    max: (Scalars['numeric'] | null)
    tick: (Scalars['String'] | null)
    __typename: 'scription_xrc20'
}


/** columns and relationships of "scription.xrc20_action" */
export interface scription_xrc20_action {
    action_hash: (Scalars['String'] | null)
    amt: (Scalars['numeric'] | null)
    block_height: (Scalars['bigint'] | null)
    dec: (Scalars['numeric'] | null)
    hash_data: (Scalars['String'][] | null)
    id: Scalars['Int']
    lim: (Scalars['numeric'] | null)
    max: (Scalars['numeric'] | null)
    op: (Scalars['String'] | null)
    sender: (Scalars['String'] | null)
    tick: (Scalars['String'] | null)
    timestamp: (Scalars['timestamp'] | null)
    __typename: 'scription_xrc20_action'
}


/** select columns of table "scription.xrc20_action" */
export type scription_xrc20_action_select_column = 'action_hash' | 'amt' | 'block_height' | 'dec' | 'hash_data' | 'id' | 'lim' | 'max' | 'op' | 'sender' | 'tick' | 'timestamp'


/** select columns of table "scription.xrc20" */
export type scription_xrc20_select_column = 'creator' | 'dec' | 'id' | 'lim' | 'max' | 'tick'


/** columns and relationships of "scription.xrc20_transfer" */
export interface scription_xrc20_transfer {
    action_hash: (Scalars['String'] | null)
    amt: (Scalars['numeric'] | null)
    balance: (Scalars['numeric'] | null)
    id: Scalars['Int']
    recipient: (Scalars['String'] | null)
    sender: (Scalars['String'] | null)
    tick: (Scalars['String'] | null)
    __typename: 'scription_xrc20_transfer'
}


/** select columns of table "scription.xrc20_transfer" */
export type scription_xrc20_transfer_select_column = 'action_hash' | 'amt' | 'balance' | 'id' | 'recipient' | 'sender' | 'tick'

export interface subscription_root {
    /** fetch data from the table: "banner" */
    banner: banner[]
    /** fetch data from the table: "banner" using primary key columns */
    banner_by_pk: (banner | null)
    /** fetch data from the table in a streaming manner: "banner" */
    banner_stream: banner[]
    /** fetch data from the table: "contracts_verified" */
    contracts_verified: contracts_verified[]
    /** fetch aggregated fields from the table: "contracts_verified" */
    contracts_verified_aggregate: contracts_verified_aggregate
    /** fetch data from the table: "contracts_verified" using primary key columns */
    contracts_verified_by_pk: (contracts_verified | null)
    /** fetch data from the table in a streaming manner: "contracts_verified" */
    contracts_verified_stream: contracts_verified[]
    /** fetch data from the table: "dapp" */
    dapp: dapp[]
    /** fetch data from the table: "dapp" using primary key columns */
    dapp_by_pk: (dapp | null)
    /** fetch data from the table in a streaming manner: "dapp" */
    dapp_stream: dapp[]
    /** fetch data from the table: "ecosystem" */
    ecosystem: ecosystem[]
    /** fetch data from the table: "ecosystem" using primary key columns */
    ecosystem_by_pk: (ecosystem | null)
    /** fetch data from the table in a streaming manner: "ecosystem" */
    ecosystem_stream: ecosystem[]
    /** fetch data from the table: "kv" */
    kv: kv[]
    /** fetch data from the table: "kv" using primary key columns */
    kv_by_pk: (kv | null)
    /** fetch data from the table in a streaming manner: "kv" */
    kv_stream: kv[]
    /** fetch data from the table: "price_history" */
    price_history: price_history[]
    /** fetch data from the table: "price_history" using primary key columns */
    price_history_by_pk: (price_history | null)
    /** fetch data from the table in a streaming manner: "price_history" */
    price_history_stream: price_history[]
    /** fetch data from the table: "scription.action" */
    scription_action: scription_action[]
    /** fetch data from the table: "scription.action" using primary key columns */
    scription_action_by_pk: (scription_action | null)
    /** fetch data from the table in a streaming manner: "scription.action" */
    scription_action_stream: scription_action[]
    /** fetch data from the table: "scription.indexer_height" */
    scription_indexer_height: scription_indexer_height[]
    /** fetch data from the table: "scription.indexer_height" using primary key columns */
    scription_indexer_height_by_pk: (scription_indexer_height | null)
    /** fetch data from the table in a streaming manner: "scription.indexer_height" */
    scription_indexer_height_stream: scription_indexer_height[]
    /** fetch data from the table: "scription.xrc20" */
    scription_xrc20: scription_xrc20[]
    /** fetch data from the table: "scription.xrc20_action" */
    scription_xrc20_action: scription_xrc20_action[]
    /** fetch data from the table: "scription.xrc20_action" using primary key columns */
    scription_xrc20_action_by_pk: (scription_xrc20_action | null)
    /** fetch data from the table in a streaming manner: "scription.xrc20_action" */
    scription_xrc20_action_stream: scription_xrc20_action[]
    /** fetch data from the table: "scription.xrc20" using primary key columns */
    scription_xrc20_by_pk: (scription_xrc20 | null)
    /** fetch data from the table in a streaming manner: "scription.xrc20" */
    scription_xrc20_stream: scription_xrc20[]
    /** fetch data from the table: "scription.xrc20_transfer" */
    scription_xrc20_transfer: scription_xrc20_transfer[]
    /** fetch data from the table: "scription.xrc20_transfer" using primary key columns */
    scription_xrc20_transfer_by_pk: (scription_xrc20_transfer | null)
    /** fetch data from the table in a streaming manner: "scription.xrc20_transfer" */
    scription_xrc20_transfer_stream: scription_xrc20_transfer[]
    /** fetch data from the table: "xrc20" */
    xrc20: xrc20[]
    /** fetch data from the table in a streaming manner: "xrc20" */
    xrc20_stream: xrc20[]
    __typename: 'subscription_root'
}


/** columns and relationships of "xrc20" */
export interface xrc20 {
    address: (Scalars['String'] | null)
    custom_config: (Scalars['jsonb'] | null)
    daily_transfer: (Scalars['numeric'] | null)
    daily_transfer_amount: (Scalars['numeric'] | null)
    decimals: (Scalars['Int'] | null)
    description: (Scalars['String'] | null)
    holders: (Scalars['Int'] | null)
    logo: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    price_to_iotex: (Scalars['numeric'] | null)
    symbol: (Scalars['String'] | null)
    total_supply: (Scalars['numeric'] | null)
    transfer: (Scalars['numeric'] | null)
    __typename: 'xrc20'
}


/** select columns of table "xrc20" */
export type xrc20_select_column = 'address' | 'custom_config' | 'daily_transfer' | 'daily_transfer_amount' | 'decimals' | 'description' | 'holders' | 'logo' | 'name' | 'price_to_iotex' | 'symbol' | 'total_supply' | 'transfer'

export type Query = query_root
export type Subscription = subscription_root


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {_eq?: (Scalars['Int'] | null),_gt?: (Scalars['Int'] | null),_gte?: (Scalars['Int'] | null),_in?: (Scalars['Int'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Int'] | null),_lte?: (Scalars['Int'] | null),_neq?: (Scalars['Int'] | null),_nin?: (Scalars['Int'][] | null)}


/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_array_comparison_exp {
/** is the array contained in the given array value */
_contained_in?: (Scalars['String'][] | null),
/** does the array contain the given value */
_contains?: (Scalars['String'][] | null),_eq?: (Scalars['String'][] | null),_gt?: (Scalars['String'][] | null),_gte?: (Scalars['String'][] | null),_in?: (Scalars['String'][][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['String'][] | null),_lte?: (Scalars['String'][] | null),_neq?: (Scalars['String'][] | null),_nin?: (Scalars['String'][][] | null)}


/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {_eq?: (Scalars['String'] | null),_gt?: (Scalars['String'] | null),_gte?: (Scalars['String'] | null),
/** does the column match the given case-insensitive pattern */
_ilike?: (Scalars['String'] | null),_in?: (Scalars['String'][] | null),
/** does the column match the given POSIX regular expression, case insensitive */
_iregex?: (Scalars['String'] | null),_is_null?: (Scalars['Boolean'] | null),
/** does the column match the given pattern */
_like?: (Scalars['String'] | null),_lt?: (Scalars['String'] | null),_lte?: (Scalars['String'] | null),_neq?: (Scalars['String'] | null),
/** does the column NOT match the given case-insensitive pattern */
_nilike?: (Scalars['String'] | null),_nin?: (Scalars['String'][] | null),
/** does the column NOT match the given POSIX regular expression, case insensitive */
_niregex?: (Scalars['String'] | null),
/** does the column NOT match the given pattern */
_nlike?: (Scalars['String'] | null),
/** does the column NOT match the given POSIX regular expression, case sensitive */
_nregex?: (Scalars['String'] | null),
/** does the column NOT match the given SQL regular expression */
_nsimilar?: (Scalars['String'] | null),
/** does the column match the given POSIX regular expression, case sensitive */
_regex?: (Scalars['String'] | null),
/** does the column match the given SQL regular expression */
_similar?: (Scalars['String'] | null)}


/** columns and relationships of "banner" */
export interface bannerGenqlSelection{
    id?: boolean | number
    image?: boolean | number
    link?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "banner". All fields are combined with a logical 'AND'. */
export interface banner_bool_exp {_and?: (banner_bool_exp[] | null),_not?: (banner_bool_exp | null),_or?: (banner_bool_exp[] | null),id?: (Int_comparison_exp | null),image?: (String_comparison_exp | null),link?: (String_comparison_exp | null),title?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "banner". */
export interface banner_order_by {id?: (order_by | null),image?: (order_by | null),link?: (order_by | null),title?: (order_by | null)}


/** Streaming cursor of the table "banner" */
export interface banner_stream_cursor_input {
/** Stream column input with initial value */
initial_value: banner_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface banner_stream_cursor_value_input {id?: (Scalars['Int'] | null),image?: (Scalars['String'] | null),link?: (Scalars['String'] | null),title?: (Scalars['String'] | null)}


/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export interface bigint_comparison_exp {_eq?: (Scalars['bigint'] | null),_gt?: (Scalars['bigint'] | null),_gte?: (Scalars['bigint'] | null),_in?: (Scalars['bigint'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['bigint'] | null),_lte?: (Scalars['bigint'] | null),_neq?: (Scalars['bigint'] | null),_nin?: (Scalars['bigint'][] | null)}


/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export interface bytea_comparison_exp {_eq?: (Scalars['bytea'] | null),_gt?: (Scalars['bytea'] | null),_gte?: (Scalars['bytea'] | null),_in?: (Scalars['bytea'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['bytea'] | null),_lte?: (Scalars['bytea'] | null),_neq?: (Scalars['bytea'] | null),_nin?: (Scalars['bytea'][] | null)}


/** columns and relationships of "contracts_verified" */
export interface contracts_verifiedGenqlSelection{
    address?: boolean | number
    compiler_evm_version?: boolean | number
    compiler_runs?: boolean | number
    compiler_type?: boolean | number
    compiler_version?: boolean | number
    contract_abi?: boolean | number
    contract_bytecode?: boolean | number
    contract_bytecode_hash?: boolean | number
    contract_name?: boolean | number
    contract_source?: boolean | number
    deployed_bytecode_hash?: boolean | number
    id?: boolean | number
    license_type?: boolean | number
    optimizer?: boolean | number
    verified_time?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "contracts_verified" */
export interface contracts_verified_aggregateGenqlSelection{
    aggregate?: contracts_verified_aggregate_fieldsGenqlSelection
    nodes?: contracts_verifiedGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "contracts_verified" */
export interface contracts_verified_aggregate_fieldsGenqlSelection{
    avg?: contracts_verified_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (contracts_verified_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: contracts_verified_max_fieldsGenqlSelection
    min?: contracts_verified_min_fieldsGenqlSelection
    stddev?: contracts_verified_stddev_fieldsGenqlSelection
    stddev_pop?: contracts_verified_stddev_pop_fieldsGenqlSelection
    stddev_samp?: contracts_verified_stddev_samp_fieldsGenqlSelection
    sum?: contracts_verified_sum_fieldsGenqlSelection
    var_pop?: contracts_verified_var_pop_fieldsGenqlSelection
    var_samp?: contracts_verified_var_samp_fieldsGenqlSelection
    variance?: contracts_verified_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface contracts_verified_avg_fieldsGenqlSelection{
    compiler_runs?: boolean | number
    compiler_type?: boolean | number
    id?: boolean | number
    license_type?: boolean | number
    optimizer?: boolean | number
    verified_time?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "contracts_verified". All fields are combined with a logical 'AND'. */
export interface contracts_verified_bool_exp {_and?: (contracts_verified_bool_exp[] | null),_not?: (contracts_verified_bool_exp | null),_or?: (contracts_verified_bool_exp[] | null),address?: (String_comparison_exp | null),compiler_evm_version?: (String_comparison_exp | null),compiler_runs?: (Int_comparison_exp | null),compiler_type?: (smallint_comparison_exp | null),compiler_version?: (String_comparison_exp | null),contract_abi?: (String_comparison_exp | null),contract_bytecode?: (String_comparison_exp | null),contract_bytecode_hash?: (String_comparison_exp | null),contract_name?: (String_comparison_exp | null),contract_source?: (String_comparison_exp | null),deployed_bytecode_hash?: (String_comparison_exp | null),id?: (bigint_comparison_exp | null),license_type?: (smallint_comparison_exp | null),optimizer?: (smallint_comparison_exp | null),verified_time?: (Int_comparison_exp | null)}


/** aggregate max on columns */
export interface contracts_verified_max_fieldsGenqlSelection{
    address?: boolean | number
    compiler_evm_version?: boolean | number
    compiler_runs?: boolean | number
    compiler_type?: boolean | number
    compiler_version?: boolean | number
    contract_abi?: boolean | number
    contract_bytecode?: boolean | number
    contract_bytecode_hash?: boolean | number
    contract_name?: boolean | number
    contract_source?: boolean | number
    deployed_bytecode_hash?: boolean | number
    id?: boolean | number
    license_type?: boolean | number
    optimizer?: boolean | number
    verified_time?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface contracts_verified_min_fieldsGenqlSelection{
    address?: boolean | number
    compiler_evm_version?: boolean | number
    compiler_runs?: boolean | number
    compiler_type?: boolean | number
    compiler_version?: boolean | number
    contract_abi?: boolean | number
    contract_bytecode?: boolean | number
    contract_bytecode_hash?: boolean | number
    contract_name?: boolean | number
    contract_source?: boolean | number
    deployed_bytecode_hash?: boolean | number
    id?: boolean | number
    license_type?: boolean | number
    optimizer?: boolean | number
    verified_time?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Ordering options when selecting data from "contracts_verified". */
export interface contracts_verified_order_by {address?: (order_by | null),compiler_evm_version?: (order_by | null),compiler_runs?: (order_by | null),compiler_type?: (order_by | null),compiler_version?: (order_by | null),contract_abi?: (order_by | null),contract_bytecode?: (order_by | null),contract_bytecode_hash?: (order_by | null),contract_name?: (order_by | null),contract_source?: (order_by | null),deployed_bytecode_hash?: (order_by | null),id?: (order_by | null),license_type?: (order_by | null),optimizer?: (order_by | null),verified_time?: (order_by | null)}


/** aggregate stddev on columns */
export interface contracts_verified_stddev_fieldsGenqlSelection{
    compiler_runs?: boolean | number
    compiler_type?: boolean | number
    id?: boolean | number
    license_type?: boolean | number
    optimizer?: boolean | number
    verified_time?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface contracts_verified_stddev_pop_fieldsGenqlSelection{
    compiler_runs?: boolean | number
    compiler_type?: boolean | number
    id?: boolean | number
    license_type?: boolean | number
    optimizer?: boolean | number
    verified_time?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface contracts_verified_stddev_samp_fieldsGenqlSelection{
    compiler_runs?: boolean | number
    compiler_type?: boolean | number
    id?: boolean | number
    license_type?: boolean | number
    optimizer?: boolean | number
    verified_time?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "contracts_verified" */
export interface contracts_verified_stream_cursor_input {
/** Stream column input with initial value */
initial_value: contracts_verified_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface contracts_verified_stream_cursor_value_input {address?: (Scalars['String'] | null),compiler_evm_version?: (Scalars['String'] | null),compiler_runs?: (Scalars['Int'] | null),compiler_type?: (Scalars['smallint'] | null),compiler_version?: (Scalars['String'] | null),contract_abi?: (Scalars['String'] | null),contract_bytecode?: (Scalars['String'] | null),contract_bytecode_hash?: (Scalars['String'] | null),contract_name?: (Scalars['String'] | null),contract_source?: (Scalars['String'] | null),deployed_bytecode_hash?: (Scalars['String'] | null),id?: (Scalars['bigint'] | null),license_type?: (Scalars['smallint'] | null),optimizer?: (Scalars['smallint'] | null),verified_time?: (Scalars['Int'] | null)}


/** aggregate sum on columns */
export interface contracts_verified_sum_fieldsGenqlSelection{
    compiler_runs?: boolean | number
    compiler_type?: boolean | number
    id?: boolean | number
    license_type?: boolean | number
    optimizer?: boolean | number
    verified_time?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_pop on columns */
export interface contracts_verified_var_pop_fieldsGenqlSelection{
    compiler_runs?: boolean | number
    compiler_type?: boolean | number
    id?: boolean | number
    license_type?: boolean | number
    optimizer?: boolean | number
    verified_time?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface contracts_verified_var_samp_fieldsGenqlSelection{
    compiler_runs?: boolean | number
    compiler_type?: boolean | number
    id?: boolean | number
    license_type?: boolean | number
    optimizer?: boolean | number
    verified_time?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface contracts_verified_variance_fieldsGenqlSelection{
    compiler_runs?: boolean | number
    compiler_type?: boolean | number
    id?: boolean | number
    license_type?: boolean | number
    optimizer?: boolean | number
    verified_time?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "dapp" */
export interface dappGenqlSelection{
    category?: boolean | number
    id?: boolean | number
    imageUrl?: boolean | number
    title?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dapp". All fields are combined with a logical 'AND'. */
export interface dapp_bool_exp {_and?: (dapp_bool_exp[] | null),_not?: (dapp_bool_exp | null),_or?: (dapp_bool_exp[] | null),category?: (String_comparison_exp | null),id?: (Int_comparison_exp | null),imageUrl?: (String_comparison_exp | null),title?: (String_comparison_exp | null),url?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "dapp". */
export interface dapp_order_by {category?: (order_by | null),id?: (order_by | null),imageUrl?: (order_by | null),title?: (order_by | null),url?: (order_by | null)}


/** Streaming cursor of the table "dapp" */
export interface dapp_stream_cursor_input {
/** Stream column input with initial value */
initial_value: dapp_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface dapp_stream_cursor_value_input {category?: (Scalars['String'] | null),id?: (Scalars['Int'] | null),imageUrl?: (Scalars['String'] | null),title?: (Scalars['String'] | null),url?: (Scalars['String'] | null)}


/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export interface date_comparison_exp {_eq?: (Scalars['date'] | null),_gt?: (Scalars['date'] | null),_gte?: (Scalars['date'] | null),_in?: (Scalars['date'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['date'] | null),_lte?: (Scalars['date'] | null),_neq?: (Scalars['date'] | null),_nin?: (Scalars['date'][] | null)}


/** columns and relationships of "ecosystem" */
export interface ecosystemGenqlSelection{
    date?: boolean | number
    id?: boolean | number
    logo?: boolean | number
    slug?: boolean | number
    status?: boolean | number
    tag?: boolean | number
    telegram?: boolean | number
    title?: boolean | number
    twitter?: boolean | number
    website?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "ecosystem". All fields are combined with a logical 'AND'. */
export interface ecosystem_bool_exp {_and?: (ecosystem_bool_exp[] | null),_not?: (ecosystem_bool_exp | null),_or?: (ecosystem_bool_exp[] | null),date?: (date_comparison_exp | null),id?: (uuid_comparison_exp | null),logo?: (String_comparison_exp | null),slug?: (String_comparison_exp | null),status?: (String_comparison_exp | null),tag?: (String_comparison_exp | null),telegram?: (String_comparison_exp | null),title?: (String_comparison_exp | null),twitter?: (String_comparison_exp | null),website?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "ecosystem". */
export interface ecosystem_order_by {date?: (order_by | null),id?: (order_by | null),logo?: (order_by | null),slug?: (order_by | null),status?: (order_by | null),tag?: (order_by | null),telegram?: (order_by | null),title?: (order_by | null),twitter?: (order_by | null),website?: (order_by | null)}


/** Streaming cursor of the table "ecosystem" */
export interface ecosystem_stream_cursor_input {
/** Stream column input with initial value */
initial_value: ecosystem_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface ecosystem_stream_cursor_value_input {date?: (Scalars['date'] | null),id?: (Scalars['uuid'] | null),logo?: (Scalars['String'] | null),slug?: (Scalars['String'] | null),status?: (Scalars['String'] | null),tag?: (Scalars['String'] | null),telegram?: (Scalars['String'] | null),title?: (Scalars['String'] | null),twitter?: (Scalars['String'] | null),website?: (Scalars['String'] | null)}

export interface jsonb_cast_exp {String?: (String_comparison_exp | null)}


/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export interface jsonb_comparison_exp {_cast?: (jsonb_cast_exp | null),
/** is the column contained in the given json value */
_contained_in?: (Scalars['jsonb'] | null),
/** does the column contain the given json value at the top level */
_contains?: (Scalars['jsonb'] | null),_eq?: (Scalars['jsonb'] | null),_gt?: (Scalars['jsonb'] | null),_gte?: (Scalars['jsonb'] | null),
/** does the string exist as a top-level key in the column */
_has_key?: (Scalars['String'] | null),
/** do all of these strings exist as top-level keys in the column */
_has_keys_all?: (Scalars['String'][] | null),
/** do any of these strings exist as top-level keys in the column */
_has_keys_any?: (Scalars['String'][] | null),_in?: (Scalars['jsonb'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['jsonb'] | null),_lte?: (Scalars['jsonb'] | null),_neq?: (Scalars['jsonb'] | null),_nin?: (Scalars['jsonb'][] | null)}


/** columns and relationships of "kv" */
export interface kvGenqlSelection{
    key?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "kv". All fields are combined with a logical 'AND'. */
export interface kv_bool_exp {_and?: (kv_bool_exp[] | null),_not?: (kv_bool_exp | null),_or?: (kv_bool_exp[] | null),key?: (String_comparison_exp | null),value?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "kv". */
export interface kv_order_by {key?: (order_by | null),value?: (order_by | null)}


/** Streaming cursor of the table "kv" */
export interface kv_stream_cursor_input {
/** Stream column input with initial value */
initial_value: kv_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface kv_stream_cursor_value_input {key?: (Scalars['String'] | null),value?: (Scalars['String'] | null)}


/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export interface numeric_comparison_exp {_eq?: (Scalars['numeric'] | null),_gt?: (Scalars['numeric'] | null),_gte?: (Scalars['numeric'] | null),_in?: (Scalars['numeric'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['numeric'] | null),_lte?: (Scalars['numeric'] | null),_neq?: (Scalars['numeric'] | null),_nin?: (Scalars['numeric'][] | null)}


/** columns and relationships of "price_history" */
export interface price_historyGenqlSelection{
    date?: boolean | number
    id?: boolean | number
    price?: boolean | number
    volume?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "price_history". All fields are combined with a logical 'AND'. */
export interface price_history_bool_exp {_and?: (price_history_bool_exp[] | null),_not?: (price_history_bool_exp | null),_or?: (price_history_bool_exp[] | null),date?: (date_comparison_exp | null),id?: (Int_comparison_exp | null),price?: (numeric_comparison_exp | null),volume?: (numeric_comparison_exp | null)}


/** Ordering options when selecting data from "price_history". */
export interface price_history_order_by {date?: (order_by | null),id?: (order_by | null),price?: (order_by | null),volume?: (order_by | null)}


/** Streaming cursor of the table "price_history" */
export interface price_history_stream_cursor_input {
/** Stream column input with initial value */
initial_value: price_history_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface price_history_stream_cursor_value_input {date?: (Scalars['date'] | null),id?: (Scalars['Int'] | null),price?: (Scalars['numeric'] | null),volume?: (Scalars['numeric'] | null)}

export interface query_rootGenqlSelection{
    /** fetch data from the table: "banner" */
    banner?: (bannerGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (banner_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (banner_order_by[] | null), 
    /** filter the rows returned */
    where?: (banner_bool_exp | null)} })
    /** fetch data from the table: "banner" using primary key columns */
    banner_by_pk?: (bannerGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "contracts_verified" */
    contracts_verified?: (contracts_verifiedGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (contracts_verified_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (contracts_verified_order_by[] | null), 
    /** filter the rows returned */
    where?: (contracts_verified_bool_exp | null)} })
    /** fetch aggregated fields from the table: "contracts_verified" */
    contracts_verified_aggregate?: (contracts_verified_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (contracts_verified_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (contracts_verified_order_by[] | null), 
    /** filter the rows returned */
    where?: (contracts_verified_bool_exp | null)} })
    /** fetch data from the table: "contracts_verified" using primary key columns */
    contracts_verified_by_pk?: (contracts_verifiedGenqlSelection & { __args: {id: Scalars['bigint']} })
    /** fetch data from the table: "dapp" */
    dapp?: (dappGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dapp_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dapp_order_by[] | null), 
    /** filter the rows returned */
    where?: (dapp_bool_exp | null)} })
    /** fetch data from the table: "dapp" using primary key columns */
    dapp_by_pk?: (dappGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "ecosystem" */
    ecosystem?: (ecosystemGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (ecosystem_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (ecosystem_order_by[] | null), 
    /** filter the rows returned */
    where?: (ecosystem_bool_exp | null)} })
    /** fetch data from the table: "ecosystem" using primary key columns */
    ecosystem_by_pk?: (ecosystemGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "kv" */
    kv?: (kvGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (kv_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (kv_order_by[] | null), 
    /** filter the rows returned */
    where?: (kv_bool_exp | null)} })
    /** fetch data from the table: "kv" using primary key columns */
    kv_by_pk?: (kvGenqlSelection & { __args: {key: Scalars['String']} })
    /** fetch data from the table: "price_history" */
    price_history?: (price_historyGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (price_history_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (price_history_order_by[] | null), 
    /** filter the rows returned */
    where?: (price_history_bool_exp | null)} })
    /** fetch data from the table: "price_history" using primary key columns */
    price_history_by_pk?: (price_historyGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "scription.action" */
    scription_action?: (scription_actionGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (scription_action_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (scription_action_order_by[] | null), 
    /** filter the rows returned */
    where?: (scription_action_bool_exp | null)} })
    /** fetch data from the table: "scription.action" using primary key columns */
    scription_action_by_pk?: (scription_actionGenqlSelection & { __args: {id: Scalars['bigint']} })
    /** fetch data from the table: "scription.indexer_height" */
    scription_indexer_height?: (scription_indexer_heightGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (scription_indexer_height_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (scription_indexer_height_order_by[] | null), 
    /** filter the rows returned */
    where?: (scription_indexer_height_bool_exp | null)} })
    /** fetch data from the table: "scription.indexer_height" using primary key columns */
    scription_indexer_height_by_pk?: (scription_indexer_heightGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "scription.xrc20" */
    scription_xrc20?: (scription_xrc20GenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (scription_xrc20_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (scription_xrc20_order_by[] | null), 
    /** filter the rows returned */
    where?: (scription_xrc20_bool_exp | null)} })
    /** fetch data from the table: "scription.xrc20_action" */
    scription_xrc20_action?: (scription_xrc20_actionGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (scription_xrc20_action_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (scription_xrc20_action_order_by[] | null), 
    /** filter the rows returned */
    where?: (scription_xrc20_action_bool_exp | null)} })
    /** fetch data from the table: "scription.xrc20_action" using primary key columns */
    scription_xrc20_action_by_pk?: (scription_xrc20_actionGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "scription.xrc20" using primary key columns */
    scription_xrc20_by_pk?: (scription_xrc20GenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "scription.xrc20_transfer" */
    scription_xrc20_transfer?: (scription_xrc20_transferGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (scription_xrc20_transfer_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (scription_xrc20_transfer_order_by[] | null), 
    /** filter the rows returned */
    where?: (scription_xrc20_transfer_bool_exp | null)} })
    /** fetch data from the table: "scription.xrc20_transfer" using primary key columns */
    scription_xrc20_transfer_by_pk?: (scription_xrc20_transferGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "xrc20" */
    xrc20?: (xrc20GenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (xrc20_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (xrc20_order_by[] | null), 
    /** filter the rows returned */
    where?: (xrc20_bool_exp | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "scription.action" */
export interface scription_actionGenqlSelection{
    action_hash?: boolean | number
    action_type?: boolean | number
    amount?: boolean | number
    block_height?: boolean | number
    chain_id?: boolean | number
    contract_address?: boolean | number
    data?: boolean | number
    encoding?: boolean | number
    execution_revert_msg?: boolean | number
    gas_consumed?: boolean | number
    gas_limit?: boolean | number
    gas_price?: boolean | number
    hash_data?: boolean | number
    id?: boolean | number
    nonce?: boolean | number
    payload?: boolean | number
    recipient?: boolean | number
    sender?: boolean | number
    status?: boolean | number
    timestamp?: boolean | number
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "scription.action". All fields are combined with a logical 'AND'. */
export interface scription_action_bool_exp {_and?: (scription_action_bool_exp[] | null),_not?: (scription_action_bool_exp | null),_or?: (scription_action_bool_exp[] | null),action_hash?: (String_comparison_exp | null),action_type?: (String_comparison_exp | null),amount?: (numeric_comparison_exp | null),block_height?: (bigint_comparison_exp | null),chain_id?: (Int_comparison_exp | null),contract_address?: (String_comparison_exp | null),data?: (String_comparison_exp | null),encoding?: (Int_comparison_exp | null),execution_revert_msg?: (String_comparison_exp | null),gas_consumed?: (Int_comparison_exp | null),gas_limit?: (Int_comparison_exp | null),gas_price?: (numeric_comparison_exp | null),hash_data?: (String_array_comparison_exp | null),id?: (bigint_comparison_exp | null),nonce?: (bigint_comparison_exp | null),payload?: (bytea_comparison_exp | null),recipient?: (String_comparison_exp | null),sender?: (String_comparison_exp | null),status?: (smallint_comparison_exp | null),timestamp?: (timestamp_comparison_exp | null),version?: (Int_comparison_exp | null)}


/** Ordering options when selecting data from "scription.action". */
export interface scription_action_order_by {action_hash?: (order_by | null),action_type?: (order_by | null),amount?: (order_by | null),block_height?: (order_by | null),chain_id?: (order_by | null),contract_address?: (order_by | null),data?: (order_by | null),encoding?: (order_by | null),execution_revert_msg?: (order_by | null),gas_consumed?: (order_by | null),gas_limit?: (order_by | null),gas_price?: (order_by | null),hash_data?: (order_by | null),id?: (order_by | null),nonce?: (order_by | null),payload?: (order_by | null),recipient?: (order_by | null),sender?: (order_by | null),status?: (order_by | null),timestamp?: (order_by | null),version?: (order_by | null)}


/** Streaming cursor of the table "scription_action" */
export interface scription_action_stream_cursor_input {
/** Stream column input with initial value */
initial_value: scription_action_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface scription_action_stream_cursor_value_input {action_hash?: (Scalars['String'] | null),action_type?: (Scalars['String'] | null),amount?: (Scalars['numeric'] | null),block_height?: (Scalars['bigint'] | null),chain_id?: (Scalars['Int'] | null),contract_address?: (Scalars['String'] | null),data?: (Scalars['String'] | null),encoding?: (Scalars['Int'] | null),execution_revert_msg?: (Scalars['String'] | null),gas_consumed?: (Scalars['Int'] | null),gas_limit?: (Scalars['Int'] | null),gas_price?: (Scalars['numeric'] | null),hash_data?: (Scalars['String'][] | null),id?: (Scalars['bigint'] | null),nonce?: (Scalars['bigint'] | null),payload?: (Scalars['bytea'] | null),recipient?: (Scalars['String'] | null),sender?: (Scalars['String'] | null),status?: (Scalars['smallint'] | null),timestamp?: (Scalars['timestamp'] | null),version?: (Scalars['Int'] | null)}


/** columns and relationships of "scription.indexer_height" */
export interface scription_indexer_heightGenqlSelection{
    current_height?: boolean | number
    id?: boolean | number
    name?: boolean | number
    start_height?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "scription.indexer_height". All fields are combined with a logical 'AND'. */
export interface scription_indexer_height_bool_exp {_and?: (scription_indexer_height_bool_exp[] | null),_not?: (scription_indexer_height_bool_exp | null),_or?: (scription_indexer_height_bool_exp[] | null),current_height?: (bigint_comparison_exp | null),id?: (Int_comparison_exp | null),name?: (String_comparison_exp | null),start_height?: (bigint_comparison_exp | null)}


/** Ordering options when selecting data from "scription.indexer_height". */
export interface scription_indexer_height_order_by {current_height?: (order_by | null),id?: (order_by | null),name?: (order_by | null),start_height?: (order_by | null)}


/** Streaming cursor of the table "scription_indexer_height" */
export interface scription_indexer_height_stream_cursor_input {
/** Stream column input with initial value */
initial_value: scription_indexer_height_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface scription_indexer_height_stream_cursor_value_input {current_height?: (Scalars['bigint'] | null),id?: (Scalars['Int'] | null),name?: (Scalars['String'] | null),start_height?: (Scalars['bigint'] | null)}


/** columns and relationships of "scription.xrc20" */
export interface scription_xrc20GenqlSelection{
    creator?: boolean | number
    dec?: boolean | number
    id?: boolean | number
    lim?: boolean | number
    max?: boolean | number
    tick?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "scription.xrc20_action" */
export interface scription_xrc20_actionGenqlSelection{
    action_hash?: boolean | number
    amt?: boolean | number
    block_height?: boolean | number
    dec?: boolean | number
    hash_data?: boolean | number
    id?: boolean | number
    lim?: boolean | number
    max?: boolean | number
    op?: boolean | number
    sender?: boolean | number
    tick?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "scription.xrc20_action". All fields are combined with a logical 'AND'. */
export interface scription_xrc20_action_bool_exp {_and?: (scription_xrc20_action_bool_exp[] | null),_not?: (scription_xrc20_action_bool_exp | null),_or?: (scription_xrc20_action_bool_exp[] | null),action_hash?: (String_comparison_exp | null),amt?: (numeric_comparison_exp | null),block_height?: (bigint_comparison_exp | null),dec?: (numeric_comparison_exp | null),hash_data?: (String_array_comparison_exp | null),id?: (Int_comparison_exp | null),lim?: (numeric_comparison_exp | null),max?: (numeric_comparison_exp | null),op?: (String_comparison_exp | null),sender?: (String_comparison_exp | null),tick?: (String_comparison_exp | null),timestamp?: (timestamp_comparison_exp | null)}


/** Ordering options when selecting data from "scription.xrc20_action". */
export interface scription_xrc20_action_order_by {action_hash?: (order_by | null),amt?: (order_by | null),block_height?: (order_by | null),dec?: (order_by | null),hash_data?: (order_by | null),id?: (order_by | null),lim?: (order_by | null),max?: (order_by | null),op?: (order_by | null),sender?: (order_by | null),tick?: (order_by | null),timestamp?: (order_by | null)}


/** Streaming cursor of the table "scription_xrc20_action" */
export interface scription_xrc20_action_stream_cursor_input {
/** Stream column input with initial value */
initial_value: scription_xrc20_action_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface scription_xrc20_action_stream_cursor_value_input {action_hash?: (Scalars['String'] | null),amt?: (Scalars['numeric'] | null),block_height?: (Scalars['bigint'] | null),dec?: (Scalars['numeric'] | null),hash_data?: (Scalars['String'][] | null),id?: (Scalars['Int'] | null),lim?: (Scalars['numeric'] | null),max?: (Scalars['numeric'] | null),op?: (Scalars['String'] | null),sender?: (Scalars['String'] | null),tick?: (Scalars['String'] | null),timestamp?: (Scalars['timestamp'] | null)}


/** Boolean expression to filter rows from the table "scription.xrc20". All fields are combined with a logical 'AND'. */
export interface scription_xrc20_bool_exp {_and?: (scription_xrc20_bool_exp[] | null),_not?: (scription_xrc20_bool_exp | null),_or?: (scription_xrc20_bool_exp[] | null),creator?: (String_comparison_exp | null),dec?: (numeric_comparison_exp | null),id?: (Int_comparison_exp | null),lim?: (numeric_comparison_exp | null),max?: (numeric_comparison_exp | null),tick?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "scription.xrc20". */
export interface scription_xrc20_order_by {creator?: (order_by | null),dec?: (order_by | null),id?: (order_by | null),lim?: (order_by | null),max?: (order_by | null),tick?: (order_by | null)}


/** Streaming cursor of the table "scription_xrc20" */
export interface scription_xrc20_stream_cursor_input {
/** Stream column input with initial value */
initial_value: scription_xrc20_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface scription_xrc20_stream_cursor_value_input {creator?: (Scalars['String'] | null),dec?: (Scalars['numeric'] | null),id?: (Scalars['Int'] | null),lim?: (Scalars['numeric'] | null),max?: (Scalars['numeric'] | null),tick?: (Scalars['String'] | null)}


/** columns and relationships of "scription.xrc20_transfer" */
export interface scription_xrc20_transferGenqlSelection{
    action_hash?: boolean | number
    amt?: boolean | number
    balance?: boolean | number
    id?: boolean | number
    recipient?: boolean | number
    sender?: boolean | number
    tick?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "scription.xrc20_transfer". All fields are combined with a logical 'AND'. */
export interface scription_xrc20_transfer_bool_exp {_and?: (scription_xrc20_transfer_bool_exp[] | null),_not?: (scription_xrc20_transfer_bool_exp | null),_or?: (scription_xrc20_transfer_bool_exp[] | null),action_hash?: (String_comparison_exp | null),amt?: (numeric_comparison_exp | null),balance?: (numeric_comparison_exp | null),id?: (Int_comparison_exp | null),recipient?: (String_comparison_exp | null),sender?: (String_comparison_exp | null),tick?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "scription.xrc20_transfer". */
export interface scription_xrc20_transfer_order_by {action_hash?: (order_by | null),amt?: (order_by | null),balance?: (order_by | null),id?: (order_by | null),recipient?: (order_by | null),sender?: (order_by | null),tick?: (order_by | null)}


/** Streaming cursor of the table "scription_xrc20_transfer" */
export interface scription_xrc20_transfer_stream_cursor_input {
/** Stream column input with initial value */
initial_value: scription_xrc20_transfer_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface scription_xrc20_transfer_stream_cursor_value_input {action_hash?: (Scalars['String'] | null),amt?: (Scalars['numeric'] | null),balance?: (Scalars['numeric'] | null),id?: (Scalars['Int'] | null),recipient?: (Scalars['String'] | null),sender?: (Scalars['String'] | null),tick?: (Scalars['String'] | null)}


/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export interface smallint_comparison_exp {_eq?: (Scalars['smallint'] | null),_gt?: (Scalars['smallint'] | null),_gte?: (Scalars['smallint'] | null),_in?: (Scalars['smallint'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['smallint'] | null),_lte?: (Scalars['smallint'] | null),_neq?: (Scalars['smallint'] | null),_nin?: (Scalars['smallint'][] | null)}

export interface subscription_rootGenqlSelection{
    /** fetch data from the table: "banner" */
    banner?: (bannerGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (banner_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (banner_order_by[] | null), 
    /** filter the rows returned */
    where?: (banner_bool_exp | null)} })
    /** fetch data from the table: "banner" using primary key columns */
    banner_by_pk?: (bannerGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "banner" */
    banner_stream?: (bannerGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (banner_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (banner_bool_exp | null)} })
    /** fetch data from the table: "contracts_verified" */
    contracts_verified?: (contracts_verifiedGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (contracts_verified_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (contracts_verified_order_by[] | null), 
    /** filter the rows returned */
    where?: (contracts_verified_bool_exp | null)} })
    /** fetch aggregated fields from the table: "contracts_verified" */
    contracts_verified_aggregate?: (contracts_verified_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (contracts_verified_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (contracts_verified_order_by[] | null), 
    /** filter the rows returned */
    where?: (contracts_verified_bool_exp | null)} })
    /** fetch data from the table: "contracts_verified" using primary key columns */
    contracts_verified_by_pk?: (contracts_verifiedGenqlSelection & { __args: {id: Scalars['bigint']} })
    /** fetch data from the table in a streaming manner: "contracts_verified" */
    contracts_verified_stream?: (contracts_verifiedGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (contracts_verified_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (contracts_verified_bool_exp | null)} })
    /** fetch data from the table: "dapp" */
    dapp?: (dappGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dapp_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dapp_order_by[] | null), 
    /** filter the rows returned */
    where?: (dapp_bool_exp | null)} })
    /** fetch data from the table: "dapp" using primary key columns */
    dapp_by_pk?: (dappGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "dapp" */
    dapp_stream?: (dappGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (dapp_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (dapp_bool_exp | null)} })
    /** fetch data from the table: "ecosystem" */
    ecosystem?: (ecosystemGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (ecosystem_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (ecosystem_order_by[] | null), 
    /** filter the rows returned */
    where?: (ecosystem_bool_exp | null)} })
    /** fetch data from the table: "ecosystem" using primary key columns */
    ecosystem_by_pk?: (ecosystemGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "ecosystem" */
    ecosystem_stream?: (ecosystemGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (ecosystem_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (ecosystem_bool_exp | null)} })
    /** fetch data from the table: "kv" */
    kv?: (kvGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (kv_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (kv_order_by[] | null), 
    /** filter the rows returned */
    where?: (kv_bool_exp | null)} })
    /** fetch data from the table: "kv" using primary key columns */
    kv_by_pk?: (kvGenqlSelection & { __args: {key: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "kv" */
    kv_stream?: (kvGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (kv_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (kv_bool_exp | null)} })
    /** fetch data from the table: "price_history" */
    price_history?: (price_historyGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (price_history_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (price_history_order_by[] | null), 
    /** filter the rows returned */
    where?: (price_history_bool_exp | null)} })
    /** fetch data from the table: "price_history" using primary key columns */
    price_history_by_pk?: (price_historyGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "price_history" */
    price_history_stream?: (price_historyGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (price_history_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (price_history_bool_exp | null)} })
    /** fetch data from the table: "scription.action" */
    scription_action?: (scription_actionGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (scription_action_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (scription_action_order_by[] | null), 
    /** filter the rows returned */
    where?: (scription_action_bool_exp | null)} })
    /** fetch data from the table: "scription.action" using primary key columns */
    scription_action_by_pk?: (scription_actionGenqlSelection & { __args: {id: Scalars['bigint']} })
    /** fetch data from the table in a streaming manner: "scription.action" */
    scription_action_stream?: (scription_actionGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (scription_action_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (scription_action_bool_exp | null)} })
    /** fetch data from the table: "scription.indexer_height" */
    scription_indexer_height?: (scription_indexer_heightGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (scription_indexer_height_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (scription_indexer_height_order_by[] | null), 
    /** filter the rows returned */
    where?: (scription_indexer_height_bool_exp | null)} })
    /** fetch data from the table: "scription.indexer_height" using primary key columns */
    scription_indexer_height_by_pk?: (scription_indexer_heightGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "scription.indexer_height" */
    scription_indexer_height_stream?: (scription_indexer_heightGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (scription_indexer_height_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (scription_indexer_height_bool_exp | null)} })
    /** fetch data from the table: "scription.xrc20" */
    scription_xrc20?: (scription_xrc20GenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (scription_xrc20_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (scription_xrc20_order_by[] | null), 
    /** filter the rows returned */
    where?: (scription_xrc20_bool_exp | null)} })
    /** fetch data from the table: "scription.xrc20_action" */
    scription_xrc20_action?: (scription_xrc20_actionGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (scription_xrc20_action_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (scription_xrc20_action_order_by[] | null), 
    /** filter the rows returned */
    where?: (scription_xrc20_action_bool_exp | null)} })
    /** fetch data from the table: "scription.xrc20_action" using primary key columns */
    scription_xrc20_action_by_pk?: (scription_xrc20_actionGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "scription.xrc20_action" */
    scription_xrc20_action_stream?: (scription_xrc20_actionGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (scription_xrc20_action_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (scription_xrc20_action_bool_exp | null)} })
    /** fetch data from the table: "scription.xrc20" using primary key columns */
    scription_xrc20_by_pk?: (scription_xrc20GenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "scription.xrc20" */
    scription_xrc20_stream?: (scription_xrc20GenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (scription_xrc20_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (scription_xrc20_bool_exp | null)} })
    /** fetch data from the table: "scription.xrc20_transfer" */
    scription_xrc20_transfer?: (scription_xrc20_transferGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (scription_xrc20_transfer_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (scription_xrc20_transfer_order_by[] | null), 
    /** filter the rows returned */
    where?: (scription_xrc20_transfer_bool_exp | null)} })
    /** fetch data from the table: "scription.xrc20_transfer" using primary key columns */
    scription_xrc20_transfer_by_pk?: (scription_xrc20_transferGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "scription.xrc20_transfer" */
    scription_xrc20_transfer_stream?: (scription_xrc20_transferGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (scription_xrc20_transfer_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (scription_xrc20_transfer_bool_exp | null)} })
    /** fetch data from the table: "xrc20" */
    xrc20?: (xrc20GenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (xrc20_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (xrc20_order_by[] | null), 
    /** filter the rows returned */
    where?: (xrc20_bool_exp | null)} })
    /** fetch data from the table in a streaming manner: "xrc20" */
    xrc20_stream?: (xrc20GenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (xrc20_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (xrc20_bool_exp | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export interface timestamp_comparison_exp {_eq?: (Scalars['timestamp'] | null),_gt?: (Scalars['timestamp'] | null),_gte?: (Scalars['timestamp'] | null),_in?: (Scalars['timestamp'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['timestamp'] | null),_lte?: (Scalars['timestamp'] | null),_neq?: (Scalars['timestamp'] | null),_nin?: (Scalars['timestamp'][] | null)}


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface uuid_comparison_exp {_eq?: (Scalars['uuid'] | null),_gt?: (Scalars['uuid'] | null),_gte?: (Scalars['uuid'] | null),_in?: (Scalars['uuid'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['uuid'] | null),_lte?: (Scalars['uuid'] | null),_neq?: (Scalars['uuid'] | null),_nin?: (Scalars['uuid'][] | null)}


/** columns and relationships of "xrc20" */
export interface xrc20GenqlSelection{
    address?: boolean | number
    custom_config?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    daily_transfer?: boolean | number
    daily_transfer_amount?: boolean | number
    decimals?: boolean | number
    description?: boolean | number
    holders?: boolean | number
    logo?: boolean | number
    name?: boolean | number
    price_to_iotex?: boolean | number
    symbol?: boolean | number
    total_supply?: boolean | number
    transfer?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "xrc20". All fields are combined with a logical 'AND'. */
export interface xrc20_bool_exp {_and?: (xrc20_bool_exp[] | null),_not?: (xrc20_bool_exp | null),_or?: (xrc20_bool_exp[] | null),address?: (String_comparison_exp | null),custom_config?: (jsonb_comparison_exp | null),daily_transfer?: (numeric_comparison_exp | null),daily_transfer_amount?: (numeric_comparison_exp | null),decimals?: (Int_comparison_exp | null),description?: (String_comparison_exp | null),holders?: (Int_comparison_exp | null),logo?: (String_comparison_exp | null),name?: (String_comparison_exp | null),price_to_iotex?: (numeric_comparison_exp | null),symbol?: (String_comparison_exp | null),total_supply?: (numeric_comparison_exp | null),transfer?: (numeric_comparison_exp | null)}


/** Ordering options when selecting data from "xrc20". */
export interface xrc20_order_by {address?: (order_by | null),custom_config?: (order_by | null),daily_transfer?: (order_by | null),daily_transfer_amount?: (order_by | null),decimals?: (order_by | null),description?: (order_by | null),holders?: (order_by | null),logo?: (order_by | null),name?: (order_by | null),price_to_iotex?: (order_by | null),symbol?: (order_by | null),total_supply?: (order_by | null),transfer?: (order_by | null)}


/** Streaming cursor of the table "xrc20" */
export interface xrc20_stream_cursor_input {
/** Stream column input with initial value */
initial_value: xrc20_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface xrc20_stream_cursor_value_input {address?: (Scalars['String'] | null),custom_config?: (Scalars['jsonb'] | null),daily_transfer?: (Scalars['numeric'] | null),daily_transfer_amount?: (Scalars['numeric'] | null),decimals?: (Scalars['Int'] | null),description?: (Scalars['String'] | null),holders?: (Scalars['Int'] | null),logo?: (Scalars['String'] | null),name?: (Scalars['String'] | null),price_to_iotex?: (Scalars['numeric'] | null),symbol?: (Scalars['String'] | null),total_supply?: (Scalars['numeric'] | null),transfer?: (Scalars['numeric'] | null)}

export type QueryGenqlSelection = query_rootGenqlSelection
export type SubscriptionGenqlSelection = subscription_rootGenqlSelection


    const banner_possibleTypes: string[] = ['banner']
    export const isbanner = (obj?: { __typename?: any } | null): obj is banner => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isbanner"')
      return banner_possibleTypes.includes(obj.__typename)
    }
    


    const contracts_verified_possibleTypes: string[] = ['contracts_verified']
    export const iscontracts_verified = (obj?: { __typename?: any } | null): obj is contracts_verified => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscontracts_verified"')
      return contracts_verified_possibleTypes.includes(obj.__typename)
    }
    


    const contracts_verified_aggregate_possibleTypes: string[] = ['contracts_verified_aggregate']
    export const iscontracts_verified_aggregate = (obj?: { __typename?: any } | null): obj is contracts_verified_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscontracts_verified_aggregate"')
      return contracts_verified_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const contracts_verified_aggregate_fields_possibleTypes: string[] = ['contracts_verified_aggregate_fields']
    export const iscontracts_verified_aggregate_fields = (obj?: { __typename?: any } | null): obj is contracts_verified_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscontracts_verified_aggregate_fields"')
      return contracts_verified_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const contracts_verified_avg_fields_possibleTypes: string[] = ['contracts_verified_avg_fields']
    export const iscontracts_verified_avg_fields = (obj?: { __typename?: any } | null): obj is contracts_verified_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscontracts_verified_avg_fields"')
      return contracts_verified_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const contracts_verified_max_fields_possibleTypes: string[] = ['contracts_verified_max_fields']
    export const iscontracts_verified_max_fields = (obj?: { __typename?: any } | null): obj is contracts_verified_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscontracts_verified_max_fields"')
      return contracts_verified_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const contracts_verified_min_fields_possibleTypes: string[] = ['contracts_verified_min_fields']
    export const iscontracts_verified_min_fields = (obj?: { __typename?: any } | null): obj is contracts_verified_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscontracts_verified_min_fields"')
      return contracts_verified_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const contracts_verified_stddev_fields_possibleTypes: string[] = ['contracts_verified_stddev_fields']
    export const iscontracts_verified_stddev_fields = (obj?: { __typename?: any } | null): obj is contracts_verified_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscontracts_verified_stddev_fields"')
      return contracts_verified_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const contracts_verified_stddev_pop_fields_possibleTypes: string[] = ['contracts_verified_stddev_pop_fields']
    export const iscontracts_verified_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is contracts_verified_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscontracts_verified_stddev_pop_fields"')
      return contracts_verified_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const contracts_verified_stddev_samp_fields_possibleTypes: string[] = ['contracts_verified_stddev_samp_fields']
    export const iscontracts_verified_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is contracts_verified_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscontracts_verified_stddev_samp_fields"')
      return contracts_verified_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const contracts_verified_sum_fields_possibleTypes: string[] = ['contracts_verified_sum_fields']
    export const iscontracts_verified_sum_fields = (obj?: { __typename?: any } | null): obj is contracts_verified_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscontracts_verified_sum_fields"')
      return contracts_verified_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const contracts_verified_var_pop_fields_possibleTypes: string[] = ['contracts_verified_var_pop_fields']
    export const iscontracts_verified_var_pop_fields = (obj?: { __typename?: any } | null): obj is contracts_verified_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscontracts_verified_var_pop_fields"')
      return contracts_verified_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const contracts_verified_var_samp_fields_possibleTypes: string[] = ['contracts_verified_var_samp_fields']
    export const iscontracts_verified_var_samp_fields = (obj?: { __typename?: any } | null): obj is contracts_verified_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscontracts_verified_var_samp_fields"')
      return contracts_verified_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const contracts_verified_variance_fields_possibleTypes: string[] = ['contracts_verified_variance_fields']
    export const iscontracts_verified_variance_fields = (obj?: { __typename?: any } | null): obj is contracts_verified_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscontracts_verified_variance_fields"')
      return contracts_verified_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const dapp_possibleTypes: string[] = ['dapp']
    export const isdapp = (obj?: { __typename?: any } | null): obj is dapp => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdapp"')
      return dapp_possibleTypes.includes(obj.__typename)
    }
    


    const ecosystem_possibleTypes: string[] = ['ecosystem']
    export const isecosystem = (obj?: { __typename?: any } | null): obj is ecosystem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isecosystem"')
      return ecosystem_possibleTypes.includes(obj.__typename)
    }
    


    const kv_possibleTypes: string[] = ['kv']
    export const iskv = (obj?: { __typename?: any } | null): obj is kv => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iskv"')
      return kv_possibleTypes.includes(obj.__typename)
    }
    


    const price_history_possibleTypes: string[] = ['price_history']
    export const isprice_history = (obj?: { __typename?: any } | null): obj is price_history => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprice_history"')
      return price_history_possibleTypes.includes(obj.__typename)
    }
    


    const query_root_possibleTypes: string[] = ['query_root']
    export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"')
      return query_root_possibleTypes.includes(obj.__typename)
    }
    


    const scription_action_possibleTypes: string[] = ['scription_action']
    export const isscription_action = (obj?: { __typename?: any } | null): obj is scription_action => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isscription_action"')
      return scription_action_possibleTypes.includes(obj.__typename)
    }
    


    const scription_indexer_height_possibleTypes: string[] = ['scription_indexer_height']
    export const isscription_indexer_height = (obj?: { __typename?: any } | null): obj is scription_indexer_height => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isscription_indexer_height"')
      return scription_indexer_height_possibleTypes.includes(obj.__typename)
    }
    


    const scription_xrc20_possibleTypes: string[] = ['scription_xrc20']
    export const isscription_xrc20 = (obj?: { __typename?: any } | null): obj is scription_xrc20 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isscription_xrc20"')
      return scription_xrc20_possibleTypes.includes(obj.__typename)
    }
    


    const scription_xrc20_action_possibleTypes: string[] = ['scription_xrc20_action']
    export const isscription_xrc20_action = (obj?: { __typename?: any } | null): obj is scription_xrc20_action => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isscription_xrc20_action"')
      return scription_xrc20_action_possibleTypes.includes(obj.__typename)
    }
    


    const scription_xrc20_transfer_possibleTypes: string[] = ['scription_xrc20_transfer']
    export const isscription_xrc20_transfer = (obj?: { __typename?: any } | null): obj is scription_xrc20_transfer => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isscription_xrc20_transfer"')
      return scription_xrc20_transfer_possibleTypes.includes(obj.__typename)
    }
    


    const subscription_root_possibleTypes: string[] = ['subscription_root']
    export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"')
      return subscription_root_possibleTypes.includes(obj.__typename)
    }
    


    const xrc20_possibleTypes: string[] = ['xrc20']
    export const isxrc20 = (obj?: { __typename?: any } | null): obj is xrc20 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isxrc20"')
      return xrc20_possibleTypes.includes(obj.__typename)
    }
    

export const enumBannerSelectColumn = {
   id: 'id' as const,
   image: 'image' as const,
   link: 'link' as const,
   title: 'title' as const
}

export const enumContractsVerifiedSelectColumn = {
   address: 'address' as const,
   compiler_evm_version: 'compiler_evm_version' as const,
   compiler_runs: 'compiler_runs' as const,
   compiler_type: 'compiler_type' as const,
   compiler_version: 'compiler_version' as const,
   contract_abi: 'contract_abi' as const,
   contract_bytecode: 'contract_bytecode' as const,
   contract_bytecode_hash: 'contract_bytecode_hash' as const,
   contract_name: 'contract_name' as const,
   contract_source: 'contract_source' as const,
   deployed_bytecode_hash: 'deployed_bytecode_hash' as const,
   id: 'id' as const,
   license_type: 'license_type' as const,
   optimizer: 'optimizer' as const,
   verified_time: 'verified_time' as const
}

export const enumCursorOrdering = {
   ASC: 'ASC' as const,
   DESC: 'DESC' as const
}

export const enumDappSelectColumn = {
   category: 'category' as const,
   id: 'id' as const,
   imageUrl: 'imageUrl' as const,
   title: 'title' as const,
   url: 'url' as const
}

export const enumEcosystemSelectColumn = {
   date: 'date' as const,
   id: 'id' as const,
   logo: 'logo' as const,
   slug: 'slug' as const,
   status: 'status' as const,
   tag: 'tag' as const,
   telegram: 'telegram' as const,
   title: 'title' as const,
   twitter: 'twitter' as const,
   website: 'website' as const
}

export const enumKvSelectColumn = {
   key: 'key' as const,
   value: 'value' as const
}

export const enumOrderBy = {
   asc: 'asc' as const,
   asc_nulls_first: 'asc_nulls_first' as const,
   asc_nulls_last: 'asc_nulls_last' as const,
   desc: 'desc' as const,
   desc_nulls_first: 'desc_nulls_first' as const,
   desc_nulls_last: 'desc_nulls_last' as const
}

export const enumPriceHistorySelectColumn = {
   date: 'date' as const,
   id: 'id' as const,
   price: 'price' as const,
   volume: 'volume' as const
}

export const enumScriptionActionSelectColumn = {
   action_hash: 'action_hash' as const,
   action_type: 'action_type' as const,
   amount: 'amount' as const,
   block_height: 'block_height' as const,
   chain_id: 'chain_id' as const,
   contract_address: 'contract_address' as const,
   data: 'data' as const,
   encoding: 'encoding' as const,
   execution_revert_msg: 'execution_revert_msg' as const,
   gas_consumed: 'gas_consumed' as const,
   gas_limit: 'gas_limit' as const,
   gas_price: 'gas_price' as const,
   hash_data: 'hash_data' as const,
   id: 'id' as const,
   nonce: 'nonce' as const,
   payload: 'payload' as const,
   recipient: 'recipient' as const,
   sender: 'sender' as const,
   status: 'status' as const,
   timestamp: 'timestamp' as const,
   version: 'version' as const
}

export const enumScriptionIndexerHeightSelectColumn = {
   current_height: 'current_height' as const,
   id: 'id' as const,
   name: 'name' as const,
   start_height: 'start_height' as const
}

export const enumScriptionXrc20ActionSelectColumn = {
   action_hash: 'action_hash' as const,
   amt: 'amt' as const,
   block_height: 'block_height' as const,
   dec: 'dec' as const,
   hash_data: 'hash_data' as const,
   id: 'id' as const,
   lim: 'lim' as const,
   max: 'max' as const,
   op: 'op' as const,
   sender: 'sender' as const,
   tick: 'tick' as const,
   timestamp: 'timestamp' as const
}

export const enumScriptionXrc20SelectColumn = {
   creator: 'creator' as const,
   dec: 'dec' as const,
   id: 'id' as const,
   lim: 'lim' as const,
   max: 'max' as const,
   tick: 'tick' as const
}

export const enumScriptionXrc20TransferSelectColumn = {
   action_hash: 'action_hash' as const,
   amt: 'amt' as const,
   balance: 'balance' as const,
   id: 'id' as const,
   recipient: 'recipient' as const,
   sender: 'sender' as const,
   tick: 'tick' as const
}

export const enumXrc20SelectColumn = {
   address: 'address' as const,
   custom_config: 'custom_config' as const,
   daily_transfer: 'daily_transfer' as const,
   daily_transfer_amount: 'daily_transfer_amount' as const,
   decimals: 'decimals' as const,
   description: 'description' as const,
   holders: 'holders' as const,
   logo: 'logo' as const,
   name: 'name' as const,
   price_to_iotex: 'price_to_iotex' as const,
   symbol: 'symbol' as const,
   total_supply: 'total_supply' as const,
   transfer: 'transfer' as const
}
