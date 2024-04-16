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
    json: any,
    jsonb: any,
    numeric: any,
    timestamp: any,
    timestamptz: any,
}


/** columns and relationships of "app_img_cache_update" */
export interface app_img_cache_update {
    id: Scalars['bigint']
    versionCode: Scalars['Int']
    __typename: 'app_img_cache_update'
}


/** select columns of table "app_img_cache_update" */
export type app_img_cache_update_select_column = 'id' | 'versionCode'


/** buy_iotex */
export interface buy_iotex {
    content: Scalars['String']
    content_cn: Scalars['String']
    enabled: Scalars['Boolean']
    icon: (Scalars['String'] | null)
    id: Scalars['Int']
    ios_available: Scalars['Boolean']
    link: Scalars['String']
    third_party: Scalars['Boolean']
    title: Scalars['String']
    type: Scalars['Int']
    type_icon_name: (Scalars['String'] | null)
    __typename: 'buy_iotex'
}


/** select columns of table "buy_iotex" */
export type buy_iotex_select_column = 'content' | 'content_cn' | 'enabled' | 'icon' | 'id' | 'ios_available' | 'link' | 'third_party' | 'title' | 'type' | 'type_icon_name'


/** columns and relationships of "campaign_labels" */
export interface campaign_labels {
    color: Scalars['String']
    id: Scalars['Int']
    name: Scalars['String']
    __typename: 'campaign_labels'
}


/** select columns of table "campaign_labels" */
export type campaign_labels_select_column = 'color' | 'id' | 'name'


/** columns and relationships of "campaign_list" */
export interface campaign_list {
    active: Scalars['Boolean']
    /** A computed field, executes function "campaign_labels" */
    c_labels: (campaign_labels[] | null)
    created_at: Scalars['timestamp']
    description: Scalars['String']
    end_at: (Scalars['timestamp'] | null)
    id: Scalars['Int']
    img_url: (Scalars['String'] | null)
    labels: (Scalars['String'] | null)
    link: Scalars['String']
    order_index: (Scalars['Int'] | null)
    port3: Scalars['Boolean']
    start_at: Scalars['timestamp']
    title: Scalars['String']
    updated_at: Scalars['timestamptz']
    __typename: 'campaign_list'
}


/** select columns of table "campaign_list" */
export type campaign_list_select_column = 'active' | 'created_at' | 'description' | 'end_at' | 'id' | 'img_url' | 'labels' | 'link' | 'order_index' | 'port3' | 'start_at' | 'title' | 'updated_at'


/** columns and relationships of "certified_contract" */
export interface certified_contract {
    contract: Scalars['String']
    id: Scalars['Int']
    name: Scalars['String']
    option: (Scalars['String'] | null)
    __typename: 'certified_contract'
}


/** select columns of table "certified_contract" */
export type certified_contract_select_column = 'contract' | 'id' | 'name' | 'option'


/** columns and relationships of "coingecko_coin_detail" */
export interface coingecko_coin_detail {
    data: (Scalars['jsonb'] | null)
    id: Scalars['String']
    website: (Scalars['String'] | null)
    __typename: 'coingecko_coin_detail'
}


/** select columns of table "coingecko_coin_detail" */
export type coingecko_coin_detail_select_column = 'data' | 'id' | 'website'


/** columns and relationships of "coingeko_market" */
export interface coingeko_market {
    ath: (Scalars['numeric'] | null)
    ath_change_percentage: (Scalars['numeric'] | null)
    ath_date: (Scalars['String'] | null)
    atl: (Scalars['numeric'] | null)
    atl_change_percentage: (Scalars['numeric'] | null)
    atl_date: (Scalars['String'] | null)
    circulating_supply: (Scalars['numeric'] | null)
    current_price: (Scalars['numeric'] | null)
    fully_diluted_valuation: (Scalars['String'] | null)
    high_24h: (Scalars['numeric'] | null)
    id: Scalars['String']
    image: (Scalars['String'] | null)
    last_updated: (Scalars['String'] | null)
    low_24h: (Scalars['numeric'] | null)
    market_cap: (Scalars['numeric'] | null)
    market_cap_change_24h: (Scalars['numeric'] | null)
    market_cap_change_percentage_24h: (Scalars['numeric'] | null)
    market_cap_rank: (Scalars['String'] | null)
    max_supply: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    price_change_24h: (Scalars['numeric'] | null)
    price_change_percentage_24h: (Scalars['numeric'] | null)
    roi: (Scalars['String'] | null)
    sparkline_in_7d: (Scalars['jsonb'] | null)
    symbol: (Scalars['String'] | null)
    /** An object relationship */
    token: (token_list_v2 | null)
    total_supply: (Scalars['numeric'] | null)
    total_volume: (Scalars['numeric'] | null)
    __typename: 'coingeko_market'
}


/** select columns of table "coingeko_market" */
export type coingeko_market_select_column = 'ath' | 'ath_change_percentage' | 'ath_date' | 'atl' | 'atl_change_percentage' | 'atl_date' | 'circulating_supply' | 'current_price' | 'fully_diluted_valuation' | 'high_24h' | 'id' | 'image' | 'last_updated' | 'low_24h' | 'market_cap' | 'market_cap_change_24h' | 'market_cap_change_percentage_24h' | 'market_cap_rank' | 'max_supply' | 'name' | 'price_change_24h' | 'price_change_percentage_24h' | 'roi' | 'sparkline_in_7d' | 'symbol' | 'total_supply' | 'total_volume'


/** columns and relationships of "contract_error_msg" */
export interface contract_error_msg {
    discription: (Scalars['String'] | null)
    error: Scalars['String']
    id: Scalars['Int']
    msg: (Scalars['String'] | null)
    msg_cn: (Scalars['String'] | null)
    __typename: 'contract_error_msg'
}


/** select columns of table "contract_error_msg" */
export type contract_error_msg_select_column = 'discription' | 'error' | 'id' | 'msg' | 'msg_cn'


/** ordering argument of a cursor */
export type cursor_ordering = 'ASC' | 'DESC'


/** columns and relationships of "dapp_category" */
export interface dapp_category {
    /** An object relationship */
    category_banner: (dapp_category_banner | null)
    hot: (Scalars['Boolean'] | null)
    id: Scalars['bigint']
    name: Scalars['String']
    order: Scalars['Int']
    __typename: 'dapp_category'
}


/** columns and relationships of "dapp_category_banner" */
export interface dapp_category_banner {
    image: (Scalars['String'] | null)
    link: Scalars['String']
    name: (Scalars['String'] | null)
    __typename: 'dapp_category_banner'
}


/** select columns of table "dapp_category_banner" */
export type dapp_category_banner_select_column = 'image' | 'link' | 'name'


/** select columns of table "dapp_category" */
export type dapp_category_select_column = 'hot' | 'id' | 'name' | 'order'


/** columns and relationships of "dapp_list" */
export interface dapp_list {
    category: (Scalars['String'] | null)
    chains: (Scalars['String'] | null)
    content: (Scalars['String'] | null)
    contentCN: (Scalars['String'] | null)
    id: Scalars['String']
    imgUrl: (Scalars['String'] | null)
    named: (Scalars['Boolean'] | null)
    title: (Scalars['String'] | null)
    url: (Scalars['String'] | null)
    weight: (Scalars['numeric'] | null)
    __typename: 'dapp_list'
}


/** columns and relationships of "dapp_list_latest" */
export interface dapp_list_latest {
    chains: (Scalars['String'] | null)
    content: (Scalars['String'] | null)
    content_cn: (Scalars['String'] | null)
    id: Scalars['Int']
    img_url: (Scalars['String'] | null)
    popularity: (Scalars['String'] | null)
    source_priority: Scalars['Int']
    tags: (Scalars['String'] | null)
    title: (Scalars['String'] | null)
    url: (Scalars['String'] | null)
    weight: (Scalars['Int'] | null)
    __typename: 'dapp_list_latest'
}


/** select columns of table "dapp_list_latest" */
export type dapp_list_latest_select_column = 'chains' | 'content' | 'content_cn' | 'id' | 'img_url' | 'popularity' | 'source_priority' | 'tags' | 'title' | 'url' | 'weight'


/** columns and relationships of "dapp_list_latest_v2" */
export interface dapp_list_latest_v2 {
    chains: (Scalars['String'] | null)
    content: (Scalars['String'] | null)
    content_cn: (Scalars['String'] | null)
    id: Scalars['Int']
    img_url: (Scalars['String'] | null)
    is_updated: (Scalars['Boolean'] | null)
    popularity: (Scalars['String'] | null)
    source_priority: (Scalars['Int'] | null)
    tags: (Scalars['String'] | null)
    title: (Scalars['String'] | null)
    url: (Scalars['String'] | null)
    weight: (Scalars['Int'] | null)
    __typename: 'dapp_list_latest_v2'
}


/** aggregated selection of "dapp_list_latest_v2" */
export interface dapp_list_latest_v2_aggregate {
    aggregate: (dapp_list_latest_v2_aggregate_fields | null)
    nodes: dapp_list_latest_v2[]
    __typename: 'dapp_list_latest_v2_aggregate'
}


/** aggregate fields of "dapp_list_latest_v2" */
export interface dapp_list_latest_v2_aggregate_fields {
    avg: (dapp_list_latest_v2_avg_fields | null)
    count: Scalars['Int']
    max: (dapp_list_latest_v2_max_fields | null)
    min: (dapp_list_latest_v2_min_fields | null)
    stddev: (dapp_list_latest_v2_stddev_fields | null)
    stddev_pop: (dapp_list_latest_v2_stddev_pop_fields | null)
    stddev_samp: (dapp_list_latest_v2_stddev_samp_fields | null)
    sum: (dapp_list_latest_v2_sum_fields | null)
    var_pop: (dapp_list_latest_v2_var_pop_fields | null)
    var_samp: (dapp_list_latest_v2_var_samp_fields | null)
    variance: (dapp_list_latest_v2_variance_fields | null)
    __typename: 'dapp_list_latest_v2_aggregate_fields'
}


/** aggregate avg on columns */
export interface dapp_list_latest_v2_avg_fields {
    id: (Scalars['Float'] | null)
    source_priority: (Scalars['Float'] | null)
    weight: (Scalars['Float'] | null)
    __typename: 'dapp_list_latest_v2_avg_fields'
}


/** aggregate max on columns */
export interface dapp_list_latest_v2_max_fields {
    chains: (Scalars['String'] | null)
    content: (Scalars['String'] | null)
    content_cn: (Scalars['String'] | null)
    id: (Scalars['Int'] | null)
    img_url: (Scalars['String'] | null)
    popularity: (Scalars['String'] | null)
    source_priority: (Scalars['Int'] | null)
    tags: (Scalars['String'] | null)
    title: (Scalars['String'] | null)
    url: (Scalars['String'] | null)
    weight: (Scalars['Int'] | null)
    __typename: 'dapp_list_latest_v2_max_fields'
}


/** aggregate min on columns */
export interface dapp_list_latest_v2_min_fields {
    chains: (Scalars['String'] | null)
    content: (Scalars['String'] | null)
    content_cn: (Scalars['String'] | null)
    id: (Scalars['Int'] | null)
    img_url: (Scalars['String'] | null)
    popularity: (Scalars['String'] | null)
    source_priority: (Scalars['Int'] | null)
    tags: (Scalars['String'] | null)
    title: (Scalars['String'] | null)
    url: (Scalars['String'] | null)
    weight: (Scalars['Int'] | null)
    __typename: 'dapp_list_latest_v2_min_fields'
}


/** select columns of table "dapp_list_latest_v2" */
export type dapp_list_latest_v2_select_column = 'chains' | 'content' | 'content_cn' | 'id' | 'img_url' | 'is_updated' | 'popularity' | 'source_priority' | 'tags' | 'title' | 'url' | 'weight'


/** aggregate stddev on columns */
export interface dapp_list_latest_v2_stddev_fields {
    id: (Scalars['Float'] | null)
    source_priority: (Scalars['Float'] | null)
    weight: (Scalars['Float'] | null)
    __typename: 'dapp_list_latest_v2_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface dapp_list_latest_v2_stddev_pop_fields {
    id: (Scalars['Float'] | null)
    source_priority: (Scalars['Float'] | null)
    weight: (Scalars['Float'] | null)
    __typename: 'dapp_list_latest_v2_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface dapp_list_latest_v2_stddev_samp_fields {
    id: (Scalars['Float'] | null)
    source_priority: (Scalars['Float'] | null)
    weight: (Scalars['Float'] | null)
    __typename: 'dapp_list_latest_v2_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface dapp_list_latest_v2_sum_fields {
    id: (Scalars['Int'] | null)
    source_priority: (Scalars['Int'] | null)
    weight: (Scalars['Int'] | null)
    __typename: 'dapp_list_latest_v2_sum_fields'
}


/** aggregate var_pop on columns */
export interface dapp_list_latest_v2_var_pop_fields {
    id: (Scalars['Float'] | null)
    source_priority: (Scalars['Float'] | null)
    weight: (Scalars['Float'] | null)
    __typename: 'dapp_list_latest_v2_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface dapp_list_latest_v2_var_samp_fields {
    id: (Scalars['Float'] | null)
    source_priority: (Scalars['Float'] | null)
    weight: (Scalars['Float'] | null)
    __typename: 'dapp_list_latest_v2_var_samp_fields'
}


/** aggregate variance on columns */
export interface dapp_list_latest_v2_variance_fields {
    id: (Scalars['Float'] | null)
    source_priority: (Scalars['Float'] | null)
    weight: (Scalars['Float'] | null)
    __typename: 'dapp_list_latest_v2_variance_fields'
}


/** select columns of table "dapp_list" */
export type dapp_list_select_column = 'category' | 'chains' | 'content' | 'contentCN' | 'id' | 'imgUrl' | 'named' | 'title' | 'url' | 'weight'


/** columns and relationships of "dapp_list_v3" */
export interface dapp_list_v3 {
    chains: (Scalars['String'] | null)
    content: (Scalars['String'] | null)
    content_cn: (Scalars['String'] | null)
    id: Scalars['String']
    img_url: (Scalars['String'] | null)
    tags: (Scalars['String'] | null)
    title: (Scalars['String'] | null)
    url: (Scalars['String'] | null)
    weight: (Scalars['Int'] | null)
    __typename: 'dapp_list_v3'
}


/** select columns of table "dapp_list_v3" */
export type dapp_list_v3_select_column = 'chains' | 'content' | 'content_cn' | 'id' | 'img_url' | 'tags' | 'title' | 'url' | 'weight'


/** columns and relationships of "dapp_list_v4" */
export interface dapp_list_v4 {
    chains: (Scalars['String'] | null)
    content: (Scalars['String'] | null)
    content_cn: (Scalars['String'] | null)
    id: Scalars['String']
    img_url: (Scalars['String'] | null)
    tags: (Scalars['String'] | null)
    title: (Scalars['String'] | null)
    tvl: (Scalars['numeric'] | null)
    url: (Scalars['String'] | null)
    weight: (Scalars['Int'] | null)
    __typename: 'dapp_list_v4'
}


/** select columns of table "dapp_list_v4" */
export type dapp_list_v4_select_column = 'chains' | 'content' | 'content_cn' | 'id' | 'img_url' | 'tags' | 'title' | 'tvl' | 'url' | 'weight'


/** columns and relationships of "dapp_list_v5" */
export interface dapp_list_v5 {
    chains: (Scalars['String'] | null)
    content: (Scalars['String'] | null)
    content_cn: (Scalars['String'] | null)
    id: Scalars['String']
    img_url: (Scalars['String'] | null)
    tags: (Scalars['String'] | null)
    title: (Scalars['String'] | null)
    tvl: (Scalars['numeric'] | null)
    update_time: (Scalars['timestamptz'] | null)
    url: (Scalars['String'] | null)
    weight: (Scalars['Int'] | null)
    __typename: 'dapp_list_v5'
}


/** select columns of table "dapp_list_v5" */
export type dapp_list_v5_select_column = 'chains' | 'content' | 'content_cn' | 'id' | 'img_url' | 'tags' | 'title' | 'tvl' | 'update_time' | 'url' | 'weight'


/** columns and relationships of "dapp_promote" */
export interface dapp_promote {
    chain: Scalars['String']
    id: Scalars['String']
    img_url: Scalars['String']
    promote: Scalars['Int']
    promote_content: Scalars['String']
    promote_content_cn: Scalars['String']
    title: Scalars['String']
    token: (Scalars['jsonb'] | null)
    url: Scalars['String']
    __typename: 'dapp_promote'
}


/** select columns of table "dapp_promote" */
export type dapp_promote_select_column = 'chain' | 'id' | 'img_url' | 'promote' | 'promote_content' | 'promote_content_cn' | 'title' | 'token' | 'url'


/** columns and relationships of "discovery_banner" */
export interface discovery_banner {
    area: (Scalars['String'] | null)
    created_at: Scalars['timestamptz']
    expiration_at: (Scalars['timestamptz'] | null)
    id: Scalars['Int']
    imgUrl: Scalars['String']
    order: Scalars['Int']
    type: (Scalars['String'] | null)
    url: Scalars['String']
    __typename: 'discovery_banner'
}


/** select columns of table "discovery_banner" */
export type discovery_banner_select_column = 'area' | 'created_at' | 'expiration_at' | 'id' | 'imgUrl' | 'order' | 'type' | 'url'


/** advertisingList in home page */
export interface home_news_banners {
    content: Scalars['String']
    created_at: Scalars['timestamp']
    expire_at: (Scalars['timestamp'] | null)
    id: Scalars['Int']
    scroll: Scalars['Boolean']
    updated_at: Scalars['timestamp']
    url: Scalars['String']
    version: Scalars['Int']
    __typename: 'home_news_banners'
}


/** select columns of table "home_news_banners" */
export type home_news_banners_select_column = 'content' | 'created_at' | 'expire_at' | 'id' | 'scroll' | 'updated_at' | 'url' | 'version'


/** test table */
export interface home_news_banners_test {
    content: Scalars['String']
    created_at: Scalars['timestamp']
    expire_at: (Scalars['timestamp'] | null)
    id: Scalars['Int']
    scroll: Scalars['Boolean']
    updated_at: Scalars['timestamp']
    url: Scalars['String']
    version: Scalars['Int']
    __typename: 'home_news_banners_test'
}


/** select columns of table "home_news_banners_test" */
export type home_news_banners_test_select_column = 'content' | 'created_at' | 'expire_at' | 'id' | 'scroll' | 'updated_at' | 'url' | 'version'


/** columns and relationships of "home_post_event" */
export interface home_post_event {
    end_at: (Scalars['timestamptz'] | null)
    id: Scalars['Int']
    post_img: Scalars['String']
    post_title: Scalars['String']
    start_at: Scalars['timestamptz']
    __typename: 'home_post_event'
}


/** select columns of table "home_post_event" */
export type home_post_event_select_column = 'end_at' | 'id' | 'post_img' | 'post_title' | 'start_at'


/** columns and relationships of "iip13_bucket_type_ignore" */
export interface iip13_bucket_type_ignore {
    amount: Scalars['String']
    created_at: Scalars['timestamptz']
    duration: Scalars['numeric']
    id: Scalars['Int']
    updated_at: Scalars['timestamptz']
    __typename: 'iip13_bucket_type_ignore'
}


/** select columns of table "iip13_bucket_type_ignore" */
export type iip13_bucket_type_ignore_select_column = 'amount' | 'created_at' | 'duration' | 'id' | 'updated_at'


/** columns and relationships of "iopay_device_config" */
export interface iopay_device_config {
    created_at: (Scalars['timestamptz'] | null)
    deviceToken: Scalars['String']
    news_push: Scalars['Boolean']
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'iopay_device_config'
}


/** unique or primary key constraints on table "iopay_device_config" */
export type iopay_device_config_constraint = 'iopay_device_config_deviceToken_key' | 'iopay_device_config_pkey'


/** response of any mutation on the table "iopay_device_config" */
export interface iopay_device_config_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: iopay_device_config[]
    __typename: 'iopay_device_config_mutation_response'
}


/** select columns of table "iopay_device_config" */
export type iopay_device_config_select_column = 'created_at' | 'deviceToken' | 'news_push' | 'updated_at'


/** update columns of table "iopay_device_config" */
export type iopay_device_config_update_column = 'created_at' | 'deviceToken' | 'news_push' | 'updated_at'


/** iopay_earning_banner */
export interface iopay_earning_banner {
    id: Scalars['Int']
    image_url: (Scalars['String'] | null)
    link_url: (Scalars['String'] | null)
    order: Scalars['Int']
    __typename: 'iopay_earning_banner'
}


/** select columns of table "iopay_earning_banner" */
export type iopay_earning_banner_select_column = 'id' | 'image_url' | 'link_url' | 'order'


/** iopay_earning_list */
export interface iopay_earning_list {
    apy_end: Scalars['Int']
    apy_start: Scalars['Int']
    id: Scalars['Int']
    main_token: (Scalars['String'] | null)
    native_link: (Scalars['String'] | null)
    project_icon: Scalars['String']
    project_link: (Scalars['String'] | null)
    project_name: Scalars['String']
    term_end: (Scalars['Int'] | null)
    term_start: (Scalars['Int'] | null)
    type: Scalars['Int']
    __typename: 'iopay_earning_list'
}


/** select columns of table "iopay_earning_list" */
export type iopay_earning_list_select_column = 'apy_end' | 'apy_start' | 'id' | 'main_token' | 'native_link' | 'project_icon' | 'project_link' | 'project_name' | 'term_end' | 'term_start' | 'type'


/** columns and relationships of "iopay_wallet_models" */
export interface iopay_wallet_models {
    __v: (Scalars['String'] | null)
    address: (Scalars['String'] | null)
    createAt: (Scalars['timestamptz'] | null)
    deviceToken: (Scalars['String'] | null)
    id: Scalars['String']
    name: (Scalars['String'] | null)
    platform: (Scalars['String'] | null)
    registerPushNotification: (Scalars['String'] | null)
    updateAt: (Scalars['timestamptz'] | null)
    __typename: 'iopay_wallet_models'
}


/** unique or primary key constraints on table "iopay_wallet_models" */
export type iopay_wallet_models_constraint = 'iopay_wallet_models_pkey'


/** response of any mutation on the table "iopay_wallet_models" */
export interface iopay_wallet_models_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: iopay_wallet_models[]
    __typename: 'iopay_wallet_models_mutation_response'
}


/** select columns of table "iopay_wallet_models" */
export type iopay_wallet_models_select_column = '__v' | 'address' | 'createAt' | 'deviceToken' | 'id' | 'name' | 'platform' | 'registerPushNotification' | 'updateAt'


/** columns and relationships of "iopay_wallet_models_test2" */
export interface iopay_wallet_models_test2 {
    address: (Scalars['String'] | null)
    createAt: (Scalars['timestamptz'] | null)
    deviceToken: (Scalars['String'] | null)
    id: Scalars['String']
    name: (Scalars['String'] | null)
    platform: (Scalars['String'] | null)
    registerPushNotification: (Scalars['String'] | null)
    updateAt: (Scalars['timestamptz'] | null)
    __typename: 'iopay_wallet_models_test2'
}


/** unique or primary key constraints on table "iopay_wallet_models_test2" */
export type iopay_wallet_models_test2_constraint = 'iopay_wallet_models_test2_pkey'


/** response of any mutation on the table "iopay_wallet_models_test2" */
export interface iopay_wallet_models_test2_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: iopay_wallet_models_test2[]
    __typename: 'iopay_wallet_models_test2_mutation_response'
}


/** select columns of table "iopay_wallet_models_test2" */
export type iopay_wallet_models_test2_select_column = 'address' | 'createAt' | 'deviceToken' | 'id' | 'name' | 'platform' | 'registerPushNotification' | 'updateAt'


/** placeholder for update columns of table "iopay_wallet_models_test2" (current role has no relevant permissions) */
export type iopay_wallet_models_test2_update_column = '_PLACEHOLDER'


/** placeholder for update columns of table "iopay_wallet_models" (current role has no relevant permissions) */
export type iopay_wallet_models_update_column = '_PLACEHOLDER'


/** columns and relationships of "media" */
export interface media {
    author: (Scalars['String'] | null)
    categories: (Scalars['String'][] | null)
    date: Scalars['timestamp']
    description: Scalars['String']
    id: Scalars['String']
    img_url: (Scalars['String'] | null)
    link: Scalars['String']
    source: (Scalars['String'] | null)
    title: Scalars['String']
    __typename: 'media'
}


/** select columns of table "media" */
export type media_select_column = 'author' | 'categories' | 'date' | 'description' | 'id' | 'img_url' | 'link' | 'source' | 'title'


/** columns and relationships of "metaPebble.pebble_contract" */
export interface metaPebble_pebble_contract {
    abi: Scalars['String']
    address: Scalars['String']
    name: Scalars['String']
    __typename: 'metaPebble_pebble_contract'
}


/** columns and relationships of "metaPebble.pebble_contract_mainnet" */
export interface metaPebble_pebble_contract_mainnet {
    abi: Scalars['String']
    address: Scalars['String']
    name: Scalars['String']
    __typename: 'metaPebble_pebble_contract_mainnet'
}


/** select columns of table "metaPebble.pebble_contract_mainnet" */
export type metaPebble_pebble_contract_mainnet_select_column = 'abi' | 'address' | 'name'


/** select columns of table "metaPebble.pebble_contract" */
export type metaPebble_pebble_contract_select_column = 'abi' | 'address' | 'name'


/** columns and relationships of "metaPebble.version_android" */
export interface metaPebble_version_android {
    code: Scalars['Int']
    content: (Scalars['String'] | null)
    forced_code: (Scalars['Int'] | null)
    id: Scalars['Int']
    url: Scalars['String']
    version: Scalars['String']
    __typename: 'metaPebble_version_android'
}


/** select columns of table "metaPebble.version_android" */
export type metaPebble_version_android_select_column = 'code' | 'content' | 'forced_code' | 'id' | 'url' | 'version'


/** columns and relationships of "metaPebble.version_ios" */
export interface metaPebble_version_ios {
    content: Scalars['String']
    forced_version: Scalars['String']
    url: Scalars['String']
    version: Scalars['String']
    __typename: 'metaPebble_version_ios'
}


/** select columns of table "metaPebble.version_ios" */
export type metaPebble_version_ios_select_column = 'content' | 'forced_version' | 'url' | 'version'


/** mutation root */
export interface mutation_root {
    /** insert data into the table: "iopay_device_config" */
    insert_iopay_device_config: (iopay_device_config_mutation_response | null)
    /** insert a single row into the table: "iopay_device_config" */
    insert_iopay_device_config_one: (iopay_device_config | null)
    /** insert data into the table: "iopay_wallet_models" */
    insert_iopay_wallet_models: (iopay_wallet_models_mutation_response | null)
    /** insert a single row into the table: "iopay_wallet_models" */
    insert_iopay_wallet_models_one: (iopay_wallet_models | null)
    /** insert data into the table: "iopay_wallet_models_test2" */
    insert_iopay_wallet_models_test2: (iopay_wallet_models_test2_mutation_response | null)
    /** insert a single row into the table: "iopay_wallet_models_test2" */
    insert_iopay_wallet_models_test2_one: (iopay_wallet_models_test2 | null)
    /** insert data into the table: "wallet_info" */
    insert_wallet_info: (wallet_info_mutation_response | null)
    /** insert a single row into the table: "wallet_info" */
    insert_wallet_info_one: (wallet_info | null)
    /** update data of the table: "iopay_device_config" */
    update_iopay_device_config: (iopay_device_config_mutation_response | null)
    /** update single row of the table: "iopay_device_config" */
    update_iopay_device_config_by_pk: (iopay_device_config | null)
    /** update multiples rows of table: "iopay_device_config" */
    update_iopay_device_config_many: ((iopay_device_config_mutation_response | null)[] | null)
    /** update data of the table: "iopay_wallet_models" */
    update_iopay_wallet_models: (iopay_wallet_models_mutation_response | null)
    /** update single row of the table: "iopay_wallet_models" */
    update_iopay_wallet_models_by_pk: (iopay_wallet_models | null)
    /** update multiples rows of table: "iopay_wallet_models" */
    update_iopay_wallet_models_many: ((iopay_wallet_models_mutation_response | null)[] | null)
    /** update data of the table: "wallet_info" */
    update_wallet_info: (wallet_info_mutation_response | null)
    /** update single row of the table: "wallet_info" */
    update_wallet_info_by_pk: (wallet_info | null)
    /** update multiples rows of table: "wallet_info" */
    update_wallet_info_many: ((wallet_info_mutation_response | null)[] | null)
    __typename: 'mutation_root'
}


/** aa wallet network config */
export interface network_aa_config {
    bound_email: (Scalars['String'] | null)
    bundler_service: (Scalars['String'] | null)
    chain_id: Scalars['Int']
    email_service: (Scalars['String'] | null)
    entry_point: (Scalars['String'] | null)
    factory: (Scalars['String'] | null)
    forceUsePaymaster: (Scalars['Boolean'] | null)
    paymaster_service: (Scalars['String'] | null)
    subgraph: (Scalars['String'] | null)
    __typename: 'network_aa_config'
}


/** select columns of table "network_aa_config" */
export type network_aa_config_select_column = 'bound_email' | 'bundler_service' | 'chain_id' | 'email_service' | 'entry_point' | 'factory' | 'forceUsePaymaster' | 'paymaster_service' | 'subgraph'


/** columns and relationships of "network_chain_theme" */
export interface network_chain_theme {
    back_image: (Scalars['String'] | null)
    chain_id: Scalars['Int']
    logo_image: (Scalars['String'] | null)
    theme_color: (Scalars['String'] | null)
    __typename: 'network_chain_theme'
}


/** select columns of table "network_chain_theme" */
export type network_chain_theme_select_column = 'back_image' | 'chain_id' | 'logo_image' | 'theme_color'


/** columns and relationships of "network_config" */
export interface network_config {
    account_factory: (Scalars['String'] | null)
    back_image: (Scalars['String'] | null)
    chain_icon: (Scalars['String'] | null)
    chain_icon_selected: (Scalars['String'] | null)
    chain_id: Scalars['Int']
    contract_email: (Scalars['String'] | null)
    entry_point: (Scalars['String'] | null)
    gas_limit: (Scalars['bigint'] | null)
    gas_price: (Scalars['bigint'] | null)
    gas_station: (Scalars['String'] | null)
    logo_image: (Scalars['String'] | null)
    theme_color: (Scalars['String'] | null)
    token_approval_checker: Scalars['String']
    __typename: 'network_config'
}


/** select columns of table "network_config" */
export type network_config_select_column = 'account_factory' | 'back_image' | 'chain_icon' | 'chain_icon_selected' | 'chain_id' | 'contract_email' | 'entry_point' | 'gas_limit' | 'gas_price' | 'gas_station' | 'logo_image' | 'theme_color' | 'token_approval_checker'


/** columns and relationships of "network_list" */
export interface network_list {
    bg_color_end: (Scalars['String'] | null)
    bg_color_start: (Scalars['String'] | null)
    bg_image: (Scalars['String'] | null)
    chainId: Scalars['Int']
    config: Scalars['json']
    devMode: (Scalars['Boolean'] | null)
    explorer: (Scalars['String'] | null)
    icon: (Scalars['String'] | null)
    id: Scalars['Int']
    logoUrl: (Scalars['String'] | null)
    more_config: (Scalars['Int'] | null)
    multicallAddr: Scalars['String']
    name: (Scalars['String'] | null)
    nativeCurrencyId: (Scalars['String'] | null)
    /** An object relationship */
    nativeCurrencyMarket: (coingeko_market | null)
    networkName: Scalars['String']
    /** An object relationship */
    network_chain_theme: (network_chain_theme | null)
    /** An object relationship */
    network_config: (network_config | null)
    order: (Scalars['Int'] | null)
    platform: Scalars['String']
    rpc: (Scalars['jsonb'] | null)
    shortName: (Scalars['String'] | null)
    swapUrl: (Scalars['String'] | null)
    theme_bg: (Scalars['String'] | null)
    theme_bg2: (Scalars['String'] | null)
    tokensAlias: (Scalars['String'] | null)
    __typename: 'network_list'
}


/** aggregated selection of "network_list" */
export interface network_list_aggregate {
    aggregate: (network_list_aggregate_fields | null)
    nodes: network_list[]
    __typename: 'network_list_aggregate'
}


/** aggregate fields of "network_list" */
export interface network_list_aggregate_fields {
    avg: (network_list_avg_fields | null)
    count: Scalars['Int']
    max: (network_list_max_fields | null)
    min: (network_list_min_fields | null)
    stddev: (network_list_stddev_fields | null)
    stddev_pop: (network_list_stddev_pop_fields | null)
    stddev_samp: (network_list_stddev_samp_fields | null)
    sum: (network_list_sum_fields | null)
    var_pop: (network_list_var_pop_fields | null)
    var_samp: (network_list_var_samp_fields | null)
    variance: (network_list_variance_fields | null)
    __typename: 'network_list_aggregate_fields'
}


/** aggregate avg on columns */
export interface network_list_avg_fields {
    chainId: (Scalars['Float'] | null)
    id: (Scalars['Float'] | null)
    more_config: (Scalars['Float'] | null)
    order: (Scalars['Float'] | null)
    __typename: 'network_list_avg_fields'
}


/** aggregate max on columns */
export interface network_list_max_fields {
    bg_color_end: (Scalars['String'] | null)
    bg_color_start: (Scalars['String'] | null)
    bg_image: (Scalars['String'] | null)
    chainId: (Scalars['Int'] | null)
    explorer: (Scalars['String'] | null)
    icon: (Scalars['String'] | null)
    id: (Scalars['Int'] | null)
    logoUrl: (Scalars['String'] | null)
    more_config: (Scalars['Int'] | null)
    multicallAddr: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    nativeCurrencyId: (Scalars['String'] | null)
    networkName: (Scalars['String'] | null)
    order: (Scalars['Int'] | null)
    platform: (Scalars['String'] | null)
    shortName: (Scalars['String'] | null)
    swapUrl: (Scalars['String'] | null)
    theme_bg: (Scalars['String'] | null)
    theme_bg2: (Scalars['String'] | null)
    tokensAlias: (Scalars['String'] | null)
    __typename: 'network_list_max_fields'
}


/** aggregate min on columns */
export interface network_list_min_fields {
    bg_color_end: (Scalars['String'] | null)
    bg_color_start: (Scalars['String'] | null)
    bg_image: (Scalars['String'] | null)
    chainId: (Scalars['Int'] | null)
    explorer: (Scalars['String'] | null)
    icon: (Scalars['String'] | null)
    id: (Scalars['Int'] | null)
    logoUrl: (Scalars['String'] | null)
    more_config: (Scalars['Int'] | null)
    multicallAddr: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    nativeCurrencyId: (Scalars['String'] | null)
    networkName: (Scalars['String'] | null)
    order: (Scalars['Int'] | null)
    platform: (Scalars['String'] | null)
    shortName: (Scalars['String'] | null)
    swapUrl: (Scalars['String'] | null)
    theme_bg: (Scalars['String'] | null)
    theme_bg2: (Scalars['String'] | null)
    tokensAlias: (Scalars['String'] | null)
    __typename: 'network_list_min_fields'
}


/** select columns of table "network_list" */
export type network_list_select_column = 'bg_color_end' | 'bg_color_start' | 'bg_image' | 'chainId' | 'config' | 'devMode' | 'explorer' | 'icon' | 'id' | 'logoUrl' | 'more_config' | 'multicallAddr' | 'name' | 'nativeCurrencyId' | 'networkName' | 'order' | 'platform' | 'rpc' | 'shortName' | 'swapUrl' | 'theme_bg' | 'theme_bg2' | 'tokensAlias'


/** aggregate stddev on columns */
export interface network_list_stddev_fields {
    chainId: (Scalars['Float'] | null)
    id: (Scalars['Float'] | null)
    more_config: (Scalars['Float'] | null)
    order: (Scalars['Float'] | null)
    __typename: 'network_list_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface network_list_stddev_pop_fields {
    chainId: (Scalars['Float'] | null)
    id: (Scalars['Float'] | null)
    more_config: (Scalars['Float'] | null)
    order: (Scalars['Float'] | null)
    __typename: 'network_list_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface network_list_stddev_samp_fields {
    chainId: (Scalars['Float'] | null)
    id: (Scalars['Float'] | null)
    more_config: (Scalars['Float'] | null)
    order: (Scalars['Float'] | null)
    __typename: 'network_list_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface network_list_sum_fields {
    chainId: (Scalars['Int'] | null)
    id: (Scalars['Int'] | null)
    more_config: (Scalars['Int'] | null)
    order: (Scalars['Int'] | null)
    __typename: 'network_list_sum_fields'
}


/** aggregate var_pop on columns */
export interface network_list_var_pop_fields {
    chainId: (Scalars['Float'] | null)
    id: (Scalars['Float'] | null)
    more_config: (Scalars['Float'] | null)
    order: (Scalars['Float'] | null)
    __typename: 'network_list_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface network_list_var_samp_fields {
    chainId: (Scalars['Float'] | null)
    id: (Scalars['Float'] | null)
    more_config: (Scalars['Float'] | null)
    order: (Scalars['Float'] | null)
    __typename: 'network_list_var_samp_fields'
}


/** aggregate variance on columns */
export interface network_list_variance_fields {
    chainId: (Scalars['Float'] | null)
    id: (Scalars['Float'] | null)
    more_config: (Scalars['Float'] | null)
    order: (Scalars['Float'] | null)
    __typename: 'network_list_variance_fields'
}


/** columns and relationships of "new_wallet_claims" */
export interface new_wallet_claims {
    __v: (Scalars['String'] | null)
    address: (Scalars['String'] | null)
    claimStatus: (Scalars['String'] | null)
    createAt: (Scalars['timestamptz'] | null)
    deviceId: (Scalars['String'] | null)
    id: Scalars['String']
    iotxTransferActionHash: (Scalars['String'] | null)
    requestIp: (Scalars['String'] | null)
    updateAt: (Scalars['timestamptz'] | null)
    __typename: 'new_wallet_claims'
}


/** select columns of table "new_wallet_claims" */
export type new_wallet_claims_select_column = '__v' | 'address' | 'claimStatus' | 'createAt' | 'deviceId' | 'id' | 'iotxTransferActionHash' | 'requestIp' | 'updateAt'


/** columns and relationships of "nft_token_list" */
export interface nft_token_list {
    address: (Scalars['String'] | null)
    chainId: (Scalars['Int'] | null)
    decimals: (Scalars['Int'] | null)
    id: Scalars['String']
    logo: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    source: (Scalars['String'] | null)
    symbol: (Scalars['String'] | null)
    __typename: 'nft_token_list'
}


/** select columns of table "nft_token_list" */
export type nft_token_list_select_column = 'address' | 'chainId' | 'decimals' | 'id' | 'logo' | 'name' | 'source' | 'symbol'


/** column ordering options */
export type order_by = 'asc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc' | 'desc_nulls_first' | 'desc_nulls_last'

export interface query_root {
    /** fetch data from the table: "app_img_cache_update" */
    app_img_cache_update: app_img_cache_update[]
    /** fetch data from the table: "app_img_cache_update" using primary key columns */
    app_img_cache_update_by_pk: (app_img_cache_update | null)
    /** fetch data from the table: "buy_iotex" */
    buy_iotex: buy_iotex[]
    /** fetch data from the table: "buy_iotex" using primary key columns */
    buy_iotex_by_pk: (buy_iotex | null)
    /** fetch data from the table: "campaign_labels" */
    campaign_labels: campaign_labels[]
    /** fetch data from the table: "campaign_labels" using primary key columns */
    campaign_labels_by_pk: (campaign_labels | null)
    /** fetch data from the table: "campaign_list" */
    campaign_list: campaign_list[]
    /** fetch data from the table: "campaign_list" using primary key columns */
    campaign_list_by_pk: (campaign_list | null)
    /** fetch data from the table: "certified_contract" */
    certified_contract: certified_contract[]
    /** fetch data from the table: "certified_contract" using primary key columns */
    certified_contract_by_pk: (certified_contract | null)
    /** fetch data from the table: "coingecko_coin_detail" */
    coingecko_coin_detail: coingecko_coin_detail[]
    /** fetch data from the table: "coingecko_coin_detail" using primary key columns */
    coingecko_coin_detail_by_pk: (coingecko_coin_detail | null)
    /** fetch data from the table: "coingeko_market" */
    coingeko_market: coingeko_market[]
    /** fetch data from the table: "coingeko_market" using primary key columns */
    coingeko_market_by_pk: (coingeko_market | null)
    /** fetch data from the table: "contract_error_msg" */
    contract_error_msg: contract_error_msg[]
    /** fetch data from the table: "contract_error_msg" using primary key columns */
    contract_error_msg_by_pk: (contract_error_msg | null)
    /** fetch data from the table: "dapp_category" */
    dapp_category: dapp_category[]
    /** fetch data from the table: "dapp_category_banner" */
    dapp_category_banner: dapp_category_banner[]
    /** fetch data from the table: "dapp_category_banner" using primary key columns */
    dapp_category_banner_by_pk: (dapp_category_banner | null)
    /** fetch data from the table: "dapp_category" using primary key columns */
    dapp_category_by_pk: (dapp_category | null)
    /** fetch data from the table: "dapp_list" */
    dapp_list: dapp_list[]
    /** fetch data from the table: "dapp_list" using primary key columns */
    dapp_list_by_pk: (dapp_list | null)
    /** fetch data from the table: "dapp_list_latest" */
    dapp_list_latest: dapp_list_latest[]
    /** fetch data from the table: "dapp_list_latest" using primary key columns */
    dapp_list_latest_by_pk: (dapp_list_latest | null)
    /** fetch data from the table: "dapp_list_latest_v2" */
    dapp_list_latest_v2: dapp_list_latest_v2[]
    /** fetch aggregated fields from the table: "dapp_list_latest_v2" */
    dapp_list_latest_v2_aggregate: dapp_list_latest_v2_aggregate
    /** fetch data from the table: "dapp_list_latest_v2" using primary key columns */
    dapp_list_latest_v2_by_pk: (dapp_list_latest_v2 | null)
    /** fetch data from the table: "dapp_list_v3" */
    dapp_list_v3: dapp_list_v3[]
    /** fetch data from the table: "dapp_list_v3" using primary key columns */
    dapp_list_v3_by_pk: (dapp_list_v3 | null)
    /** fetch data from the table: "dapp_list_v4" */
    dapp_list_v4: dapp_list_v4[]
    /** fetch data from the table: "dapp_list_v4" using primary key columns */
    dapp_list_v4_by_pk: (dapp_list_v4 | null)
    /** fetch data from the table: "dapp_list_v5" */
    dapp_list_v5: dapp_list_v5[]
    /** fetch data from the table: "dapp_list_v5" using primary key columns */
    dapp_list_v5_by_pk: (dapp_list_v5 | null)
    /** fetch data from the table: "dapp_promote" */
    dapp_promote: dapp_promote[]
    /** fetch data from the table: "dapp_promote" using primary key columns */
    dapp_promote_by_pk: (dapp_promote | null)
    /** fetch data from the table: "discovery_banner" */
    discovery_banner: discovery_banner[]
    /** fetch data from the table: "discovery_banner" using primary key columns */
    discovery_banner_by_pk: (discovery_banner | null)
    /** fetch data from the table: "home_news_banners" */
    home_news_banners: home_news_banners[]
    /** fetch data from the table: "home_news_banners" using primary key columns */
    home_news_banners_by_pk: (home_news_banners | null)
    /** fetch data from the table: "home_news_banners_test" */
    home_news_banners_test: home_news_banners_test[]
    /** fetch data from the table: "home_news_banners_test" using primary key columns */
    home_news_banners_test_by_pk: (home_news_banners_test | null)
    /** fetch data from the table: "home_post_event" */
    home_post_event: home_post_event[]
    /** fetch data from the table: "home_post_event" using primary key columns */
    home_post_event_by_pk: (home_post_event | null)
    /** fetch data from the table: "iip13_bucket_type_ignore" */
    iip13_bucket_type_ignore: iip13_bucket_type_ignore[]
    /** fetch data from the table: "iip13_bucket_type_ignore" using primary key columns */
    iip13_bucket_type_ignore_by_pk: (iip13_bucket_type_ignore | null)
    /** fetch data from the table: "iopay_device_config" */
    iopay_device_config: iopay_device_config[]
    /** fetch data from the table: "iopay_device_config" using primary key columns */
    iopay_device_config_by_pk: (iopay_device_config | null)
    /** fetch data from the table: "iopay_earning_banner" */
    iopay_earning_banner: iopay_earning_banner[]
    /** fetch data from the table: "iopay_earning_banner" using primary key columns */
    iopay_earning_banner_by_pk: (iopay_earning_banner | null)
    /** fetch data from the table: "iopay_earning_list" */
    iopay_earning_list: iopay_earning_list[]
    /** fetch data from the table: "iopay_earning_list" using primary key columns */
    iopay_earning_list_by_pk: (iopay_earning_list | null)
    /** fetch data from the table: "iopay_wallet_models" */
    iopay_wallet_models: iopay_wallet_models[]
    /** fetch data from the table: "iopay_wallet_models" using primary key columns */
    iopay_wallet_models_by_pk: (iopay_wallet_models | null)
    /** fetch data from the table: "iopay_wallet_models_test2" */
    iopay_wallet_models_test2: iopay_wallet_models_test2[]
    /** fetch data from the table: "iopay_wallet_models_test2" using primary key columns */
    iopay_wallet_models_test2_by_pk: (iopay_wallet_models_test2 | null)
    /** fetch data from the table: "media" */
    media: media[]
    /** fetch data from the table: "media" using primary key columns */
    media_by_pk: (media | null)
    /** fetch data from the table: "metaPebble.pebble_contract" */
    metaPebble_pebble_contract: metaPebble_pebble_contract[]
    /** fetch data from the table: "metaPebble.pebble_contract" using primary key columns */
    metaPebble_pebble_contract_by_pk: (metaPebble_pebble_contract | null)
    /** fetch data from the table: "metaPebble.pebble_contract_mainnet" */
    metaPebble_pebble_contract_mainnet: metaPebble_pebble_contract_mainnet[]
    /** fetch data from the table: "metaPebble.pebble_contract_mainnet" using primary key columns */
    metaPebble_pebble_contract_mainnet_by_pk: (metaPebble_pebble_contract_mainnet | null)
    /** fetch data from the table: "metaPebble.version_android" */
    metaPebble_version_android: metaPebble_version_android[]
    /** fetch data from the table: "metaPebble.version_android" using primary key columns */
    metaPebble_version_android_by_pk: (metaPebble_version_android | null)
    /** fetch data from the table: "metaPebble.version_ios" */
    metaPebble_version_ios: metaPebble_version_ios[]
    /** fetch data from the table: "metaPebble.version_ios" using primary key columns */
    metaPebble_version_ios_by_pk: (metaPebble_version_ios | null)
    /** fetch data from the table: "network_aa_config" */
    network_aa_config: network_aa_config[]
    /** fetch data from the table: "network_aa_config" using primary key columns */
    network_aa_config_by_pk: (network_aa_config | null)
    /** fetch data from the table: "network_chain_theme" */
    network_chain_theme: network_chain_theme[]
    /** fetch data from the table: "network_chain_theme" using primary key columns */
    network_chain_theme_by_pk: (network_chain_theme | null)
    /** fetch data from the table: "network_config" */
    network_config: network_config[]
    /** fetch data from the table: "network_config" using primary key columns */
    network_config_by_pk: (network_config | null)
    /** fetch data from the table: "network_list" */
    network_list: network_list[]
    /** fetch aggregated fields from the table: "network_list" */
    network_list_aggregate: network_list_aggregate
    /** fetch data from the table: "network_list" using primary key columns */
    network_list_by_pk: (network_list | null)
    /** fetch data from the table: "new_wallet_claims" */
    new_wallet_claims: new_wallet_claims[]
    /** fetch data from the table: "new_wallet_claims" using primary key columns */
    new_wallet_claims_by_pk: (new_wallet_claims | null)
    /** fetch data from the table: "nft_token_list" */
    nft_token_list: nft_token_list[]
    /** fetch data from the table: "nft_token_list" using primary key columns */
    nft_token_list_by_pk: (nft_token_list | null)
    /** fetch data from the table: "risk_dapps" */
    risk_dapps: risk_dapps[]
    /** fetch data from the table: "risk_dapps" using primary key columns */
    risk_dapps_by_pk: (risk_dapps | null)
    /** fetch data from the table: "setting_pebble_menu" */
    setting_pebble_menu: setting_pebble_menu[]
    /** fetch aggregated fields from the table: "setting_pebble_menu" */
    setting_pebble_menu_aggregate: setting_pebble_menu_aggregate
    /** fetch data from the table: "setting_pebble_menu" using primary key columns */
    setting_pebble_menu_by_pk: (setting_pebble_menu | null)
    /** fetch data from the table: "share_link_admin" */
    share_link_admin: share_link_admin[]
    /** fetch data from the table: "share_link_admin" using primary key columns */
    share_link_admin_by_pk: (share_link_admin | null)
    /** fetch data from the table: "signature" */
    signature: signature[]
    /** fetch data from the table: "signature" using primary key columns */
    signature_by_pk: (signature | null)
    /** fetch data from the table: "smart_stake" */
    smart_stake: smart_stake[]
    /** fetch data from the table: "smart_stake" using primary key columns */
    smart_stake_by_pk: (smart_stake | null)
    /** fetch data from the table: "system_msg" */
    system_msg: system_msg[]
    /** fetch data from the table: "system_msg" using primary key columns */
    system_msg_by_pk: (system_msg | null)
    /** fetch data from the table: "system_msg_test" */
    system_msg_test: system_msg_test[]
    /** fetch data from the table: "system_msg_test" using primary key columns */
    system_msg_test_by_pk: (system_msg_test | null)
    /** fetch data from the table: "token_in_dapps" */
    token_in_dapps: token_in_dapps[]
    /** fetch data from the table: "token_in_dapps" using primary key columns */
    token_in_dapps_by_pk: (token_in_dapps | null)
    /** fetch data from the table: "token_list" */
    token_list: token_list[]
    /** fetch data from the table: "token_list" using primary key columns */
    token_list_by_pk: (token_list | null)
    /** fetch data from the table: "token_list_v2" */
    token_list_v2: token_list_v2[]
    /** fetch data from the table: "token_list_v3" */
    token_list_v3: token_list_v3[]
    /** fetch aggregated fields from the table: "token_list_v3" */
    token_list_v3_aggregate: token_list_v3_aggregate
    /** fetch data from the table: "token_list_v4" */
    token_list_v4: token_list_v4[]
    /** fetch data from the table: "token_risk" */
    token_risk: token_risk[]
    /** fetch data from the table: "token_risk" using primary key columns */
    token_risk_by_pk: (token_risk | null)
    /** fetch data from the table: "version_control_android_2" */
    version_control_android_2: version_control_android_2[]
    /** fetch data from the table: "version_control_android_2" using primary key columns */
    version_control_android_2_by_pk: (version_control_android_2 | null)
    /** fetch data from the table: "version_control_ios" */
    version_control_ios: version_control_ios[]
    /** fetch data from the table: "version_control_ios" using primary key columns */
    version_control_ios_by_pk: (version_control_ios | null)
    /** fetch data from the table: "wallet_info" */
    wallet_info: wallet_info[]
    /** fetch data from the table: "wallet_info" using primary key columns */
    wallet_info_by_pk: (wallet_info | null)
    __typename: 'query_root'
}


/** columns and relationships of "risk_dapps" */
export interface risk_dapps {
    category: Scalars['String']
    chains: Scalars['String'][]
    id: Scalars['Int']
    name: Scalars['String']
    __typename: 'risk_dapps'
}


/** select columns of table "risk_dapps" */
export type risk_dapps_select_column = 'category' | 'chains' | 'id' | 'name'


/** display : total server open/close    menu_display: menu display/hidden */
export interface setting_pebble_menu {
    created_at: Scalars['timestamptz']
    display: Scalars['Boolean']
    id: Scalars['Int']
    menu_display: Scalars['Boolean']
    platform: Scalars['String']
    updated_at: Scalars['timestamptz']
    __typename: 'setting_pebble_menu'
}


/** aggregated selection of "setting_pebble_menu" */
export interface setting_pebble_menu_aggregate {
    aggregate: (setting_pebble_menu_aggregate_fields | null)
    nodes: setting_pebble_menu[]
    __typename: 'setting_pebble_menu_aggregate'
}


/** aggregate fields of "setting_pebble_menu" */
export interface setting_pebble_menu_aggregate_fields {
    avg: (setting_pebble_menu_avg_fields | null)
    count: Scalars['Int']
    max: (setting_pebble_menu_max_fields | null)
    min: (setting_pebble_menu_min_fields | null)
    stddev: (setting_pebble_menu_stddev_fields | null)
    stddev_pop: (setting_pebble_menu_stddev_pop_fields | null)
    stddev_samp: (setting_pebble_menu_stddev_samp_fields | null)
    sum: (setting_pebble_menu_sum_fields | null)
    var_pop: (setting_pebble_menu_var_pop_fields | null)
    var_samp: (setting_pebble_menu_var_samp_fields | null)
    variance: (setting_pebble_menu_variance_fields | null)
    __typename: 'setting_pebble_menu_aggregate_fields'
}


/** aggregate avg on columns */
export interface setting_pebble_menu_avg_fields {
    id: (Scalars['Float'] | null)
    __typename: 'setting_pebble_menu_avg_fields'
}


/** aggregate max on columns */
export interface setting_pebble_menu_max_fields {
    created_at: (Scalars['timestamptz'] | null)
    id: (Scalars['Int'] | null)
    platform: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'setting_pebble_menu_max_fields'
}


/** aggregate min on columns */
export interface setting_pebble_menu_min_fields {
    created_at: (Scalars['timestamptz'] | null)
    id: (Scalars['Int'] | null)
    platform: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'setting_pebble_menu_min_fields'
}


/** select columns of table "setting_pebble_menu" */
export type setting_pebble_menu_select_column = 'created_at' | 'display' | 'id' | 'menu_display' | 'platform' | 'updated_at'


/** aggregate stddev on columns */
export interface setting_pebble_menu_stddev_fields {
    id: (Scalars['Float'] | null)
    __typename: 'setting_pebble_menu_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface setting_pebble_menu_stddev_pop_fields {
    id: (Scalars['Float'] | null)
    __typename: 'setting_pebble_menu_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface setting_pebble_menu_stddev_samp_fields {
    id: (Scalars['Float'] | null)
    __typename: 'setting_pebble_menu_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface setting_pebble_menu_sum_fields {
    id: (Scalars['Int'] | null)
    __typename: 'setting_pebble_menu_sum_fields'
}


/** aggregate var_pop on columns */
export interface setting_pebble_menu_var_pop_fields {
    id: (Scalars['Float'] | null)
    __typename: 'setting_pebble_menu_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface setting_pebble_menu_var_samp_fields {
    id: (Scalars['Float'] | null)
    __typename: 'setting_pebble_menu_var_samp_fields'
}


/** aggregate variance on columns */
export interface setting_pebble_menu_variance_fields {
    id: (Scalars['Float'] | null)
    __typename: 'setting_pebble_menu_variance_fields'
}


/** columns and relationships of "share_link_admin" */
export interface share_link_admin {
    created_at: (Scalars['timestamptz'] | null)
    display: Scalars['Boolean']
    id: Scalars['Int']
    updated_at: (Scalars['timestamptz'] | null)
    url: Scalars['String']
    __typename: 'share_link_admin'
}


/** select columns of table "share_link_admin" */
export type share_link_admin_select_column = 'created_at' | 'display' | 'id' | 'updated_at' | 'url'


/** columns and relationships of "signature" */
export interface signature {
    en: (Scalars['String'] | null)
    id: Scalars['String']
    zh: (Scalars['String'] | null)
    __typename: 'signature'
}


/** select columns of table "signature" */
export type signature_select_column = 'en' | 'id' | 'zh'


/** columns and relationships of "smart_stake" */
export interface smart_stake {
    address: (Scalars['String'] | null)
    apr: (Scalars['numeric'] | null)
    blendedShare: (Scalars['numeric'] | null)
    blockRewardPortion: (Scalars['numeric'] | null)
    dailyElectionRate: (Scalars['numeric'] | null)
    dailyProdIndex: (Scalars['numeric'] | null)
    dailyProdRate: (Scalars['numeric'] | null)
    epochRewardPortion: (Scalars['numeric'] | null)
    ethAddress: (Scalars['String'] | null)
    foundationRewardPortion: (Scalars['numeric'] | null)
    id: Scalars['String']
    lastUpdated: (Scalars['numeric'] | null)
    liveVotes: (Scalars['numeric'] | null)
    longElectionRate: (Scalars['numeric'] | null)
    longProdIndex: (Scalars['numeric'] | null)
    longProdRate: (Scalars['numeric'] | null)
    midElectionRate: (Scalars['numeric'] | null)
    midProdIndex: (Scalars['numeric'] | null)
    midProdRate: (Scalars['numeric'] | null)
    name: (Scalars['String'] | null)
    netApr: (Scalars['numeric'] | null)
    operatorAddress: (Scalars['String'] | null)
    overallStatus: (Scalars['String'] | null)
    probation: (Scalars['String'] | null)
    productivity: (Scalars['numeric'] | null)
    ranking: (Scalars['numeric'] | null)
    registeredName: (Scalars['String'] | null)
    rewardAddress: (Scalars['String'] | null)
    rewardPercentPerDay: (Scalars['numeric'] | null)
    rewardPlanChanged: (Scalars['String'] | null)
    risky: (Scalars['String'] | null)
    serverStatus: (Scalars['String'] | null)
    shortElectionRate: (Scalars['numeric'] | null)
    shortProdIndex: (Scalars['numeric'] | null)
    shortProdRate: (Scalars['numeric'] | null)
    status: (Scalars['String'] | null)
    totalWeightedVotes: (Scalars['numeric'] | null)
    votesPercent: (Scalars['numeric'] | null)
    __typename: 'smart_stake'
}


/** select columns of table "smart_stake" */
export type smart_stake_select_column = 'address' | 'apr' | 'blendedShare' | 'blockRewardPortion' | 'dailyElectionRate' | 'dailyProdIndex' | 'dailyProdRate' | 'epochRewardPortion' | 'ethAddress' | 'foundationRewardPortion' | 'id' | 'lastUpdated' | 'liveVotes' | 'longElectionRate' | 'longProdIndex' | 'longProdRate' | 'midElectionRate' | 'midProdIndex' | 'midProdRate' | 'name' | 'netApr' | 'operatorAddress' | 'overallStatus' | 'probation' | 'productivity' | 'ranking' | 'registeredName' | 'rewardAddress' | 'rewardPercentPerDay' | 'rewardPlanChanged' | 'risky' | 'serverStatus' | 'shortElectionRate' | 'shortProdIndex' | 'shortProdRate' | 'status' | 'totalWeightedVotes' | 'votesPercent'

export interface subscription_root {
    /** fetch data from the table: "app_img_cache_update" */
    app_img_cache_update: app_img_cache_update[]
    /** fetch data from the table: "app_img_cache_update" using primary key columns */
    app_img_cache_update_by_pk: (app_img_cache_update | null)
    /** fetch data from the table in a streaming manner: "app_img_cache_update" */
    app_img_cache_update_stream: app_img_cache_update[]
    /** fetch data from the table: "buy_iotex" */
    buy_iotex: buy_iotex[]
    /** fetch data from the table: "buy_iotex" using primary key columns */
    buy_iotex_by_pk: (buy_iotex | null)
    /** fetch data from the table in a streaming manner: "buy_iotex" */
    buy_iotex_stream: buy_iotex[]
    /** fetch data from the table: "campaign_labels" */
    campaign_labels: campaign_labels[]
    /** fetch data from the table: "campaign_labels" using primary key columns */
    campaign_labels_by_pk: (campaign_labels | null)
    /** fetch data from the table in a streaming manner: "campaign_labels" */
    campaign_labels_stream: campaign_labels[]
    /** fetch data from the table: "campaign_list" */
    campaign_list: campaign_list[]
    /** fetch data from the table: "campaign_list" using primary key columns */
    campaign_list_by_pk: (campaign_list | null)
    /** fetch data from the table in a streaming manner: "campaign_list" */
    campaign_list_stream: campaign_list[]
    /** fetch data from the table: "certified_contract" */
    certified_contract: certified_contract[]
    /** fetch data from the table: "certified_contract" using primary key columns */
    certified_contract_by_pk: (certified_contract | null)
    /** fetch data from the table in a streaming manner: "certified_contract" */
    certified_contract_stream: certified_contract[]
    /** fetch data from the table: "coingecko_coin_detail" */
    coingecko_coin_detail: coingecko_coin_detail[]
    /** fetch data from the table: "coingecko_coin_detail" using primary key columns */
    coingecko_coin_detail_by_pk: (coingecko_coin_detail | null)
    /** fetch data from the table in a streaming manner: "coingecko_coin_detail" */
    coingecko_coin_detail_stream: coingecko_coin_detail[]
    /** fetch data from the table: "coingeko_market" */
    coingeko_market: coingeko_market[]
    /** fetch data from the table: "coingeko_market" using primary key columns */
    coingeko_market_by_pk: (coingeko_market | null)
    /** fetch data from the table in a streaming manner: "coingeko_market" */
    coingeko_market_stream: coingeko_market[]
    /** fetch data from the table: "contract_error_msg" */
    contract_error_msg: contract_error_msg[]
    /** fetch data from the table: "contract_error_msg" using primary key columns */
    contract_error_msg_by_pk: (contract_error_msg | null)
    /** fetch data from the table in a streaming manner: "contract_error_msg" */
    contract_error_msg_stream: contract_error_msg[]
    /** fetch data from the table: "dapp_category" */
    dapp_category: dapp_category[]
    /** fetch data from the table: "dapp_category_banner" */
    dapp_category_banner: dapp_category_banner[]
    /** fetch data from the table: "dapp_category_banner" using primary key columns */
    dapp_category_banner_by_pk: (dapp_category_banner | null)
    /** fetch data from the table in a streaming manner: "dapp_category_banner" */
    dapp_category_banner_stream: dapp_category_banner[]
    /** fetch data from the table: "dapp_category" using primary key columns */
    dapp_category_by_pk: (dapp_category | null)
    /** fetch data from the table in a streaming manner: "dapp_category" */
    dapp_category_stream: dapp_category[]
    /** fetch data from the table: "dapp_list" */
    dapp_list: dapp_list[]
    /** fetch data from the table: "dapp_list" using primary key columns */
    dapp_list_by_pk: (dapp_list | null)
    /** fetch data from the table: "dapp_list_latest" */
    dapp_list_latest: dapp_list_latest[]
    /** fetch data from the table: "dapp_list_latest" using primary key columns */
    dapp_list_latest_by_pk: (dapp_list_latest | null)
    /** fetch data from the table in a streaming manner: "dapp_list_latest" */
    dapp_list_latest_stream: dapp_list_latest[]
    /** fetch data from the table: "dapp_list_latest_v2" */
    dapp_list_latest_v2: dapp_list_latest_v2[]
    /** fetch aggregated fields from the table: "dapp_list_latest_v2" */
    dapp_list_latest_v2_aggregate: dapp_list_latest_v2_aggregate
    /** fetch data from the table: "dapp_list_latest_v2" using primary key columns */
    dapp_list_latest_v2_by_pk: (dapp_list_latest_v2 | null)
    /** fetch data from the table in a streaming manner: "dapp_list_latest_v2" */
    dapp_list_latest_v2_stream: dapp_list_latest_v2[]
    /** fetch data from the table in a streaming manner: "dapp_list" */
    dapp_list_stream: dapp_list[]
    /** fetch data from the table: "dapp_list_v3" */
    dapp_list_v3: dapp_list_v3[]
    /** fetch data from the table: "dapp_list_v3" using primary key columns */
    dapp_list_v3_by_pk: (dapp_list_v3 | null)
    /** fetch data from the table in a streaming manner: "dapp_list_v3" */
    dapp_list_v3_stream: dapp_list_v3[]
    /** fetch data from the table: "dapp_list_v4" */
    dapp_list_v4: dapp_list_v4[]
    /** fetch data from the table: "dapp_list_v4" using primary key columns */
    dapp_list_v4_by_pk: (dapp_list_v4 | null)
    /** fetch data from the table in a streaming manner: "dapp_list_v4" */
    dapp_list_v4_stream: dapp_list_v4[]
    /** fetch data from the table: "dapp_list_v5" */
    dapp_list_v5: dapp_list_v5[]
    /** fetch data from the table: "dapp_list_v5" using primary key columns */
    dapp_list_v5_by_pk: (dapp_list_v5 | null)
    /** fetch data from the table in a streaming manner: "dapp_list_v5" */
    dapp_list_v5_stream: dapp_list_v5[]
    /** fetch data from the table: "dapp_promote" */
    dapp_promote: dapp_promote[]
    /** fetch data from the table: "dapp_promote" using primary key columns */
    dapp_promote_by_pk: (dapp_promote | null)
    /** fetch data from the table in a streaming manner: "dapp_promote" */
    dapp_promote_stream: dapp_promote[]
    /** fetch data from the table: "discovery_banner" */
    discovery_banner: discovery_banner[]
    /** fetch data from the table: "discovery_banner" using primary key columns */
    discovery_banner_by_pk: (discovery_banner | null)
    /** fetch data from the table in a streaming manner: "discovery_banner" */
    discovery_banner_stream: discovery_banner[]
    /** fetch data from the table: "home_news_banners" */
    home_news_banners: home_news_banners[]
    /** fetch data from the table: "home_news_banners" using primary key columns */
    home_news_banners_by_pk: (home_news_banners | null)
    /** fetch data from the table in a streaming manner: "home_news_banners" */
    home_news_banners_stream: home_news_banners[]
    /** fetch data from the table: "home_news_banners_test" */
    home_news_banners_test: home_news_banners_test[]
    /** fetch data from the table: "home_news_banners_test" using primary key columns */
    home_news_banners_test_by_pk: (home_news_banners_test | null)
    /** fetch data from the table in a streaming manner: "home_news_banners_test" */
    home_news_banners_test_stream: home_news_banners_test[]
    /** fetch data from the table: "home_post_event" */
    home_post_event: home_post_event[]
    /** fetch data from the table: "home_post_event" using primary key columns */
    home_post_event_by_pk: (home_post_event | null)
    /** fetch data from the table in a streaming manner: "home_post_event" */
    home_post_event_stream: home_post_event[]
    /** fetch data from the table: "iip13_bucket_type_ignore" */
    iip13_bucket_type_ignore: iip13_bucket_type_ignore[]
    /** fetch data from the table: "iip13_bucket_type_ignore" using primary key columns */
    iip13_bucket_type_ignore_by_pk: (iip13_bucket_type_ignore | null)
    /** fetch data from the table in a streaming manner: "iip13_bucket_type_ignore" */
    iip13_bucket_type_ignore_stream: iip13_bucket_type_ignore[]
    /** fetch data from the table: "iopay_device_config" */
    iopay_device_config: iopay_device_config[]
    /** fetch data from the table: "iopay_device_config" using primary key columns */
    iopay_device_config_by_pk: (iopay_device_config | null)
    /** fetch data from the table in a streaming manner: "iopay_device_config" */
    iopay_device_config_stream: iopay_device_config[]
    /** fetch data from the table: "iopay_earning_banner" */
    iopay_earning_banner: iopay_earning_banner[]
    /** fetch data from the table: "iopay_earning_banner" using primary key columns */
    iopay_earning_banner_by_pk: (iopay_earning_banner | null)
    /** fetch data from the table in a streaming manner: "iopay_earning_banner" */
    iopay_earning_banner_stream: iopay_earning_banner[]
    /** fetch data from the table: "iopay_earning_list" */
    iopay_earning_list: iopay_earning_list[]
    /** fetch data from the table: "iopay_earning_list" using primary key columns */
    iopay_earning_list_by_pk: (iopay_earning_list | null)
    /** fetch data from the table in a streaming manner: "iopay_earning_list" */
    iopay_earning_list_stream: iopay_earning_list[]
    /** fetch data from the table: "iopay_wallet_models" */
    iopay_wallet_models: iopay_wallet_models[]
    /** fetch data from the table: "iopay_wallet_models" using primary key columns */
    iopay_wallet_models_by_pk: (iopay_wallet_models | null)
    /** fetch data from the table in a streaming manner: "iopay_wallet_models" */
    iopay_wallet_models_stream: iopay_wallet_models[]
    /** fetch data from the table: "iopay_wallet_models_test2" */
    iopay_wallet_models_test2: iopay_wallet_models_test2[]
    /** fetch data from the table: "iopay_wallet_models_test2" using primary key columns */
    iopay_wallet_models_test2_by_pk: (iopay_wallet_models_test2 | null)
    /** fetch data from the table in a streaming manner: "iopay_wallet_models_test2" */
    iopay_wallet_models_test2_stream: iopay_wallet_models_test2[]
    /** fetch data from the table: "media" */
    media: media[]
    /** fetch data from the table: "media" using primary key columns */
    media_by_pk: (media | null)
    /** fetch data from the table in a streaming manner: "media" */
    media_stream: media[]
    /** fetch data from the table: "metaPebble.pebble_contract" */
    metaPebble_pebble_contract: metaPebble_pebble_contract[]
    /** fetch data from the table: "metaPebble.pebble_contract" using primary key columns */
    metaPebble_pebble_contract_by_pk: (metaPebble_pebble_contract | null)
    /** fetch data from the table: "metaPebble.pebble_contract_mainnet" */
    metaPebble_pebble_contract_mainnet: metaPebble_pebble_contract_mainnet[]
    /** fetch data from the table: "metaPebble.pebble_contract_mainnet" using primary key columns */
    metaPebble_pebble_contract_mainnet_by_pk: (metaPebble_pebble_contract_mainnet | null)
    /** fetch data from the table in a streaming manner: "metaPebble.pebble_contract_mainnet" */
    metaPebble_pebble_contract_mainnet_stream: metaPebble_pebble_contract_mainnet[]
    /** fetch data from the table in a streaming manner: "metaPebble.pebble_contract" */
    metaPebble_pebble_contract_stream: metaPebble_pebble_contract[]
    /** fetch data from the table: "metaPebble.version_android" */
    metaPebble_version_android: metaPebble_version_android[]
    /** fetch data from the table: "metaPebble.version_android" using primary key columns */
    metaPebble_version_android_by_pk: (metaPebble_version_android | null)
    /** fetch data from the table in a streaming manner: "metaPebble.version_android" */
    metaPebble_version_android_stream: metaPebble_version_android[]
    /** fetch data from the table: "metaPebble.version_ios" */
    metaPebble_version_ios: metaPebble_version_ios[]
    /** fetch data from the table: "metaPebble.version_ios" using primary key columns */
    metaPebble_version_ios_by_pk: (metaPebble_version_ios | null)
    /** fetch data from the table in a streaming manner: "metaPebble.version_ios" */
    metaPebble_version_ios_stream: metaPebble_version_ios[]
    /** fetch data from the table: "network_aa_config" */
    network_aa_config: network_aa_config[]
    /** fetch data from the table: "network_aa_config" using primary key columns */
    network_aa_config_by_pk: (network_aa_config | null)
    /** fetch data from the table in a streaming manner: "network_aa_config" */
    network_aa_config_stream: network_aa_config[]
    /** fetch data from the table: "network_chain_theme" */
    network_chain_theme: network_chain_theme[]
    /** fetch data from the table: "network_chain_theme" using primary key columns */
    network_chain_theme_by_pk: (network_chain_theme | null)
    /** fetch data from the table in a streaming manner: "network_chain_theme" */
    network_chain_theme_stream: network_chain_theme[]
    /** fetch data from the table: "network_config" */
    network_config: network_config[]
    /** fetch data from the table: "network_config" using primary key columns */
    network_config_by_pk: (network_config | null)
    /** fetch data from the table in a streaming manner: "network_config" */
    network_config_stream: network_config[]
    /** fetch data from the table: "network_list" */
    network_list: network_list[]
    /** fetch aggregated fields from the table: "network_list" */
    network_list_aggregate: network_list_aggregate
    /** fetch data from the table: "network_list" using primary key columns */
    network_list_by_pk: (network_list | null)
    /** fetch data from the table in a streaming manner: "network_list" */
    network_list_stream: network_list[]
    /** fetch data from the table: "new_wallet_claims" */
    new_wallet_claims: new_wallet_claims[]
    /** fetch data from the table: "new_wallet_claims" using primary key columns */
    new_wallet_claims_by_pk: (new_wallet_claims | null)
    /** fetch data from the table in a streaming manner: "new_wallet_claims" */
    new_wallet_claims_stream: new_wallet_claims[]
    /** fetch data from the table: "nft_token_list" */
    nft_token_list: nft_token_list[]
    /** fetch data from the table: "nft_token_list" using primary key columns */
    nft_token_list_by_pk: (nft_token_list | null)
    /** fetch data from the table in a streaming manner: "nft_token_list" */
    nft_token_list_stream: nft_token_list[]
    /** fetch data from the table: "risk_dapps" */
    risk_dapps: risk_dapps[]
    /** fetch data from the table: "risk_dapps" using primary key columns */
    risk_dapps_by_pk: (risk_dapps | null)
    /** fetch data from the table in a streaming manner: "risk_dapps" */
    risk_dapps_stream: risk_dapps[]
    /** fetch data from the table: "setting_pebble_menu" */
    setting_pebble_menu: setting_pebble_menu[]
    /** fetch aggregated fields from the table: "setting_pebble_menu" */
    setting_pebble_menu_aggregate: setting_pebble_menu_aggregate
    /** fetch data from the table: "setting_pebble_menu" using primary key columns */
    setting_pebble_menu_by_pk: (setting_pebble_menu | null)
    /** fetch data from the table in a streaming manner: "setting_pebble_menu" */
    setting_pebble_menu_stream: setting_pebble_menu[]
    /** fetch data from the table: "share_link_admin" */
    share_link_admin: share_link_admin[]
    /** fetch data from the table: "share_link_admin" using primary key columns */
    share_link_admin_by_pk: (share_link_admin | null)
    /** fetch data from the table in a streaming manner: "share_link_admin" */
    share_link_admin_stream: share_link_admin[]
    /** fetch data from the table: "signature" */
    signature: signature[]
    /** fetch data from the table: "signature" using primary key columns */
    signature_by_pk: (signature | null)
    /** fetch data from the table in a streaming manner: "signature" */
    signature_stream: signature[]
    /** fetch data from the table: "smart_stake" */
    smart_stake: smart_stake[]
    /** fetch data from the table: "smart_stake" using primary key columns */
    smart_stake_by_pk: (smart_stake | null)
    /** fetch data from the table in a streaming manner: "smart_stake" */
    smart_stake_stream: smart_stake[]
    /** fetch data from the table: "system_msg" */
    system_msg: system_msg[]
    /** fetch data from the table: "system_msg" using primary key columns */
    system_msg_by_pk: (system_msg | null)
    /** fetch data from the table in a streaming manner: "system_msg" */
    system_msg_stream: system_msg[]
    /** fetch data from the table: "system_msg_test" */
    system_msg_test: system_msg_test[]
    /** fetch data from the table: "system_msg_test" using primary key columns */
    system_msg_test_by_pk: (system_msg_test | null)
    /** fetch data from the table in a streaming manner: "system_msg_test" */
    system_msg_test_stream: system_msg_test[]
    /** fetch data from the table: "token_in_dapps" */
    token_in_dapps: token_in_dapps[]
    /** fetch data from the table: "token_in_dapps" using primary key columns */
    token_in_dapps_by_pk: (token_in_dapps | null)
    /** fetch data from the table in a streaming manner: "token_in_dapps" */
    token_in_dapps_stream: token_in_dapps[]
    /** fetch data from the table: "token_list" */
    token_list: token_list[]
    /** fetch data from the table: "token_list" using primary key columns */
    token_list_by_pk: (token_list | null)
    /** fetch data from the table in a streaming manner: "token_list" */
    token_list_stream: token_list[]
    /** fetch data from the table: "token_list_v2" */
    token_list_v2: token_list_v2[]
    /** fetch data from the table in a streaming manner: "token_list_v2" */
    token_list_v2_stream: token_list_v2[]
    /** fetch data from the table: "token_list_v3" */
    token_list_v3: token_list_v3[]
    /** fetch aggregated fields from the table: "token_list_v3" */
    token_list_v3_aggregate: token_list_v3_aggregate
    /** fetch data from the table in a streaming manner: "token_list_v3" */
    token_list_v3_stream: token_list_v3[]
    /** fetch data from the table: "token_list_v4" */
    token_list_v4: token_list_v4[]
    /** fetch data from the table in a streaming manner: "token_list_v4" */
    token_list_v4_stream: token_list_v4[]
    /** fetch data from the table: "token_risk" */
    token_risk: token_risk[]
    /** fetch data from the table: "token_risk" using primary key columns */
    token_risk_by_pk: (token_risk | null)
    /** fetch data from the table in a streaming manner: "token_risk" */
    token_risk_stream: token_risk[]
    /** fetch data from the table: "version_control_android_2" */
    version_control_android_2: version_control_android_2[]
    /** fetch data from the table: "version_control_android_2" using primary key columns */
    version_control_android_2_by_pk: (version_control_android_2 | null)
    /** fetch data from the table in a streaming manner: "version_control_android_2" */
    version_control_android_2_stream: version_control_android_2[]
    /** fetch data from the table: "version_control_ios" */
    version_control_ios: version_control_ios[]
    /** fetch data from the table: "version_control_ios" using primary key columns */
    version_control_ios_by_pk: (version_control_ios | null)
    /** fetch data from the table in a streaming manner: "version_control_ios" */
    version_control_ios_stream: version_control_ios[]
    /** fetch data from the table: "wallet_info" */
    wallet_info: wallet_info[]
    /** fetch data from the table: "wallet_info" using primary key columns */
    wallet_info_by_pk: (wallet_info | null)
    /** fetch data from the table in a streaming manner: "wallet_info" */
    wallet_info_stream: wallet_info[]
    __typename: 'subscription_root'
}


/** columns and relationships of "system_msg" */
export interface system_msg {
    author: Scalars['String']
    content: Scalars['String']
    created_at: (Scalars['timestamp'] | null)
    deleted: Scalars['Boolean']
    id: Scalars['Int']
    share_content: (Scalars['String'] | null)
    title: Scalars['String']
    updated_at: (Scalars['timestamp'] | null)
    __typename: 'system_msg'
}


/** select columns of table "system_msg" */
export type system_msg_select_column = 'author' | 'content' | 'created_at' | 'deleted' | 'id' | 'share_content' | 'title' | 'updated_at'


/** columns and relationships of "system_msg_test" */
export interface system_msg_test {
    author: Scalars['String']
    content: Scalars['String']
    created_at: (Scalars['timestamp'] | null)
    deleted: Scalars['Boolean']
    id: Scalars['Int']
    share_content: (Scalars['String'] | null)
    title: Scalars['String']
    updated_at: (Scalars['timestamp'] | null)
    __typename: 'system_msg_test'
}


/** select columns of table "system_msg_test" */
export type system_msg_test_select_column = 'author' | 'content' | 'created_at' | 'deleted' | 'id' | 'share_content' | 'title' | 'updated_at'


/** columns and relationships of "token_in_dapps" */
export interface token_in_dapps {
    chainId: Scalars['Int']
    created_at: Scalars['timestamptz']
    dapp: (Scalars['Int'] | null)
    /** An array relationship */
    dapps: dapp_list_latest[]
    id: Scalars['Int']
    token: Scalars['String']
    updated_at: Scalars['timestamptz']
    __typename: 'token_in_dapps'
}


/** select columns of table "token_in_dapps" */
export type token_in_dapps_select_column = 'chainId' | 'created_at' | 'dapp' | 'id' | 'token' | 'updated_at'


/** columns and relationships of "token_list" */
export interface token_list {
    decimal: (Scalars['jsonb'] | null)
    decimals: (Scalars['numeric'] | null)
    id: Scalars['String']
    is_depin_token: (Scalars['Boolean'] | null)
    is_official: (Scalars['Boolean'] | null)
    logo: (Scalars['String'] | null)
    metas: (Scalars['jsonb'] | null)
    name: Scalars['String']
    platforms: (Scalars['jsonb'] | null)
    symbol: Scalars['String']
    tags: (Scalars['String'][] | null)
    weight: (Scalars['Int'] | null)
    __typename: 'token_list'
}


/** select columns of table "token_list" */
export type token_list_select_column = 'decimal' | 'decimals' | 'id' | 'is_depin_token' | 'is_official' | 'logo' | 'metas' | 'name' | 'platforms' | 'symbol' | 'tags' | 'weight'


/** columns and relationships of "token_list_v2" */
export interface token_list_v2 {
    current_price: (Scalars['numeric'] | null)
    decimals: (Scalars['numeric'] | null)
    id: (Scalars['String'] | null)
    logo: (Scalars['String'] | null)
    market_cap: (Scalars['numeric'] | null)
    name: (Scalars['String'] | null)
    platforms: (Scalars['jsonb'] | null)
    symbol: (Scalars['String'] | null)
    __typename: 'token_list_v2'
}


/** select columns of table "token_list_v2" */
export type token_list_v2_select_column = 'current_price' | 'decimals' | 'id' | 'logo' | 'market_cap' | 'name' | 'platforms' | 'symbol'


/** columns and relationships of "token_list_v3" */
export interface token_list_v3 {
    current_price: (Scalars['numeric'] | null)
    decimals: (Scalars['jsonb'] | null)
    id: (Scalars['String'] | null)
    is_depin_token: (Scalars['Boolean'] | null)
    is_official: (Scalars['Boolean'] | null)
    logo: (Scalars['String'] | null)
    market_cap: (Scalars['numeric'] | null)
    name: (Scalars['String'] | null)
    platforms: (Scalars['jsonb'] | null)
    symbol: (Scalars['String'] | null)
    tags: (Scalars['String'][] | null)
    website: (Scalars['String'] | null)
    weight: (Scalars['Int'] | null)
    __typename: 'token_list_v3'
}


/** aggregated selection of "token_list_v3" */
export interface token_list_v3_aggregate {
    aggregate: (token_list_v3_aggregate_fields | null)
    nodes: token_list_v3[]
    __typename: 'token_list_v3_aggregate'
}


/** aggregate fields of "token_list_v3" */
export interface token_list_v3_aggregate_fields {
    avg: (token_list_v3_avg_fields | null)
    count: Scalars['Int']
    max: (token_list_v3_max_fields | null)
    min: (token_list_v3_min_fields | null)
    stddev: (token_list_v3_stddev_fields | null)
    stddev_pop: (token_list_v3_stddev_pop_fields | null)
    stddev_samp: (token_list_v3_stddev_samp_fields | null)
    sum: (token_list_v3_sum_fields | null)
    var_pop: (token_list_v3_var_pop_fields | null)
    var_samp: (token_list_v3_var_samp_fields | null)
    variance: (token_list_v3_variance_fields | null)
    __typename: 'token_list_v3_aggregate_fields'
}


/** aggregate avg on columns */
export interface token_list_v3_avg_fields {
    current_price: (Scalars['Float'] | null)
    market_cap: (Scalars['Float'] | null)
    weight: (Scalars['Float'] | null)
    __typename: 'token_list_v3_avg_fields'
}


/** aggregate max on columns */
export interface token_list_v3_max_fields {
    current_price: (Scalars['numeric'] | null)
    id: (Scalars['String'] | null)
    logo: (Scalars['String'] | null)
    market_cap: (Scalars['numeric'] | null)
    name: (Scalars['String'] | null)
    symbol: (Scalars['String'] | null)
    tags: (Scalars['String'][] | null)
    website: (Scalars['String'] | null)
    weight: (Scalars['Int'] | null)
    __typename: 'token_list_v3_max_fields'
}


/** aggregate min on columns */
export interface token_list_v3_min_fields {
    current_price: (Scalars['numeric'] | null)
    id: (Scalars['String'] | null)
    logo: (Scalars['String'] | null)
    market_cap: (Scalars['numeric'] | null)
    name: (Scalars['String'] | null)
    symbol: (Scalars['String'] | null)
    tags: (Scalars['String'][] | null)
    website: (Scalars['String'] | null)
    weight: (Scalars['Int'] | null)
    __typename: 'token_list_v3_min_fields'
}


/** select columns of table "token_list_v3" */
export type token_list_v3_select_column = 'current_price' | 'decimals' | 'id' | 'is_depin_token' | 'is_official' | 'logo' | 'market_cap' | 'name' | 'platforms' | 'symbol' | 'tags' | 'website' | 'weight'


/** aggregate stddev on columns */
export interface token_list_v3_stddev_fields {
    current_price: (Scalars['Float'] | null)
    market_cap: (Scalars['Float'] | null)
    weight: (Scalars['Float'] | null)
    __typename: 'token_list_v3_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface token_list_v3_stddev_pop_fields {
    current_price: (Scalars['Float'] | null)
    market_cap: (Scalars['Float'] | null)
    weight: (Scalars['Float'] | null)
    __typename: 'token_list_v3_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface token_list_v3_stddev_samp_fields {
    current_price: (Scalars['Float'] | null)
    market_cap: (Scalars['Float'] | null)
    weight: (Scalars['Float'] | null)
    __typename: 'token_list_v3_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface token_list_v3_sum_fields {
    current_price: (Scalars['numeric'] | null)
    market_cap: (Scalars['numeric'] | null)
    weight: (Scalars['Int'] | null)
    __typename: 'token_list_v3_sum_fields'
}


/** aggregate var_pop on columns */
export interface token_list_v3_var_pop_fields {
    current_price: (Scalars['Float'] | null)
    market_cap: (Scalars['Float'] | null)
    weight: (Scalars['Float'] | null)
    __typename: 'token_list_v3_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface token_list_v3_var_samp_fields {
    current_price: (Scalars['Float'] | null)
    market_cap: (Scalars['Float'] | null)
    weight: (Scalars['Float'] | null)
    __typename: 'token_list_v3_var_samp_fields'
}


/** aggregate variance on columns */
export interface token_list_v3_variance_fields {
    current_price: (Scalars['Float'] | null)
    market_cap: (Scalars['Float'] | null)
    weight: (Scalars['Float'] | null)
    __typename: 'token_list_v3_variance_fields'
}


/** columns and relationships of "token_list_v4" */
export interface token_list_v4 {
    current_price: (Scalars['numeric'] | null)
    daily_volume_usd: (Scalars['numeric'] | null)
    decimals: (Scalars['jsonb'] | null)
    id: (Scalars['String'] | null)
    is_depin_token: (Scalars['Boolean'] | null)
    is_official: (Scalars['Boolean'] | null)
    logo: (Scalars['String'] | null)
    market_cap: (Scalars['numeric'] | null)
    name: (Scalars['String'] | null)
    platforms: (Scalars['jsonb'] | null)
    price_change_24h: (Scalars['numeric'] | null)
    rank_point: (Scalars['numeric'] | null)
    sparkline_in_7d: (Scalars['jsonb'] | null)
    symbol: (Scalars['String'] | null)
    tags: (Scalars['String'][] | null)
    total_liquidity_usd: (Scalars['numeric'] | null)
    website: (Scalars['String'] | null)
    weight: (Scalars['Int'] | null)
    __typename: 'token_list_v4'
}


/** select columns of table "token_list_v4" */
export type token_list_v4_select_column = 'current_price' | 'daily_volume_usd' | 'decimals' | 'id' | 'is_depin_token' | 'is_official' | 'logo' | 'market_cap' | 'name' | 'platforms' | 'price_change_24h' | 'rank_point' | 'sparkline_in_7d' | 'symbol' | 'tags' | 'total_liquidity_usd' | 'website' | 'weight'


/** columns and relationships of "token_risk" */
export interface token_risk {
    address: Scalars['String']
    chainShortName: Scalars['String']
    created_at: (Scalars['timestamptz'] | null)
    riskLevel: Scalars['Int']
    riskStatus: Scalars['String']
    source: Scalars['String']
    tokenFullName: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'token_risk'
}


/** select columns of table "token_risk" */
export type token_risk_select_column = 'address' | 'chainShortName' | 'created_at' | 'riskLevel' | 'riskStatus' | 'source' | 'tokenFullName' | 'updated_at'


/** columns and relationships of "version_control_android_2" */
export interface version_control_android_2 {
    forced_code: Scalars['Int']
    id: Scalars['bigint']
    log: Scalars['String']
    log_cn: Scalars['String']
    target_version_code: Scalars['Int']
    upgrade_content_cn: (Scalars['String'] | null)
    upgrade_content_en: (Scalars['String'] | null)
    url: Scalars['String']
    version_code: Scalars['Int']
    version_name: Scalars['String']
    __typename: 'version_control_android_2'
}


/** select columns of table "version_control_android_2" */
export type version_control_android_2_select_column = 'forced_code' | 'id' | 'log' | 'log_cn' | 'target_version_code' | 'upgrade_content_cn' | 'upgrade_content_en' | 'url' | 'version_code' | 'version_name'


/** columns and relationships of "version_control_ios" */
export interface version_control_ios {
    content: Scalars['String']
    forced_version: Scalars['String']
    hide_buy_version: Scalars['String']
    id: Scalars['Int']
    url: Scalars['String']
    version: Scalars['String']
    __typename: 'version_control_ios'
}


/** select columns of table "version_control_ios" */
export type version_control_ios_select_column = 'content' | 'forced_version' | 'hide_buy_version' | 'id' | 'url' | 'version'


/** columns and relationships of "wallet_info" */
export interface wallet_info {
    address: Scalars['String']
    ads: (Scalars['String'] | null)
    balance: Scalars['String']
    chainId: Scalars['Int']
    created_at: Scalars['timestamptz']
    id: Scalars['Int']
    platform: (Scalars['String'] | null)
    updated_at: Scalars['timestamptz']
    __typename: 'wallet_info'
}


/** unique or primary key constraints on table "wallet_info" */
export type wallet_info_constraint = 'wallet_info_pkey'


/** response of any mutation on the table "wallet_info" */
export interface wallet_info_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: wallet_info[]
    __typename: 'wallet_info_mutation_response'
}


/** select columns of table "wallet_info" */
export type wallet_info_select_column = 'address' | 'ads' | 'balance' | 'chainId' | 'created_at' | 'id' | 'platform' | 'updated_at'


/** update columns of table "wallet_info" */
export type wallet_info_update_column = 'balance' | 'updated_at'

export type Query = query_root
export type Mutation = mutation_root
export type Subscription = subscription_root


/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface Boolean_comparison_exp {_eq?: (Scalars['Boolean'] | null),_gt?: (Scalars['Boolean'] | null),_gte?: (Scalars['Boolean'] | null),_in?: (Scalars['Boolean'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Boolean'] | null),_lte?: (Scalars['Boolean'] | null),_neq?: (Scalars['Boolean'] | null),_nin?: (Scalars['Boolean'][] | null)}


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


/** columns and relationships of "app_img_cache_update" */
export interface app_img_cache_updateGenqlSelection{
    id?: boolean | number
    versionCode?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "app_img_cache_update". All fields are combined with a logical 'AND'. */
export interface app_img_cache_update_bool_exp {_and?: (app_img_cache_update_bool_exp[] | null),_not?: (app_img_cache_update_bool_exp | null),_or?: (app_img_cache_update_bool_exp[] | null),id?: (bigint_comparison_exp | null),versionCode?: (Int_comparison_exp | null)}


/** Ordering options when selecting data from "app_img_cache_update". */
export interface app_img_cache_update_order_by {id?: (order_by | null),versionCode?: (order_by | null)}


/** Streaming cursor of the table "app_img_cache_update" */
export interface app_img_cache_update_stream_cursor_input {
/** Stream column input with initial value */
initial_value: app_img_cache_update_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface app_img_cache_update_stream_cursor_value_input {id?: (Scalars['bigint'] | null),versionCode?: (Scalars['Int'] | null)}


/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export interface bigint_comparison_exp {_eq?: (Scalars['bigint'] | null),_gt?: (Scalars['bigint'] | null),_gte?: (Scalars['bigint'] | null),_in?: (Scalars['bigint'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['bigint'] | null),_lte?: (Scalars['bigint'] | null),_neq?: (Scalars['bigint'] | null),_nin?: (Scalars['bigint'][] | null)}


/** buy_iotex */
export interface buy_iotexGenqlSelection{
    content?: boolean | number
    content_cn?: boolean | number
    enabled?: boolean | number
    icon?: boolean | number
    id?: boolean | number
    ios_available?: boolean | number
    link?: boolean | number
    third_party?: boolean | number
    title?: boolean | number
    type?: boolean | number
    type_icon_name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "buy_iotex". All fields are combined with a logical 'AND'. */
export interface buy_iotex_bool_exp {_and?: (buy_iotex_bool_exp[] | null),_not?: (buy_iotex_bool_exp | null),_or?: (buy_iotex_bool_exp[] | null),content?: (String_comparison_exp | null),content_cn?: (String_comparison_exp | null),enabled?: (Boolean_comparison_exp | null),icon?: (String_comparison_exp | null),id?: (Int_comparison_exp | null),ios_available?: (Boolean_comparison_exp | null),link?: (String_comparison_exp | null),third_party?: (Boolean_comparison_exp | null),title?: (String_comparison_exp | null),type?: (Int_comparison_exp | null),type_icon_name?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "buy_iotex". */
export interface buy_iotex_order_by {content?: (order_by | null),content_cn?: (order_by | null),enabled?: (order_by | null),icon?: (order_by | null),id?: (order_by | null),ios_available?: (order_by | null),link?: (order_by | null),third_party?: (order_by | null),title?: (order_by | null),type?: (order_by | null),type_icon_name?: (order_by | null)}


/** Streaming cursor of the table "buy_iotex" */
export interface buy_iotex_stream_cursor_input {
/** Stream column input with initial value */
initial_value: buy_iotex_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface buy_iotex_stream_cursor_value_input {content?: (Scalars['String'] | null),content_cn?: (Scalars['String'] | null),enabled?: (Scalars['Boolean'] | null),icon?: (Scalars['String'] | null),id?: (Scalars['Int'] | null),ios_available?: (Scalars['Boolean'] | null),link?: (Scalars['String'] | null),third_party?: (Scalars['Boolean'] | null),title?: (Scalars['String'] | null),type?: (Scalars['Int'] | null),type_icon_name?: (Scalars['String'] | null)}


/** columns and relationships of "campaign_labels" */
export interface campaign_labelsGenqlSelection{
    color?: boolean | number
    id?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "campaign_labels" */
export interface campaign_labels_aggregate_order_by {avg?: (campaign_labels_avg_order_by | null),count?: (order_by | null),max?: (campaign_labels_max_order_by | null),min?: (campaign_labels_min_order_by | null),stddev?: (campaign_labels_stddev_order_by | null),stddev_pop?: (campaign_labels_stddev_pop_order_by | null),stddev_samp?: (campaign_labels_stddev_samp_order_by | null),sum?: (campaign_labels_sum_order_by | null),var_pop?: (campaign_labels_var_pop_order_by | null),var_samp?: (campaign_labels_var_samp_order_by | null),variance?: (campaign_labels_variance_order_by | null)}


/** order by avg() on columns of table "campaign_labels" */
export interface campaign_labels_avg_order_by {id?: (order_by | null)}


/** Boolean expression to filter rows from the table "campaign_labels". All fields are combined with a logical 'AND'. */
export interface campaign_labels_bool_exp {_and?: (campaign_labels_bool_exp[] | null),_not?: (campaign_labels_bool_exp | null),_or?: (campaign_labels_bool_exp[] | null),color?: (String_comparison_exp | null),id?: (Int_comparison_exp | null),name?: (String_comparison_exp | null)}


/** order by max() on columns of table "campaign_labels" */
export interface campaign_labels_max_order_by {color?: (order_by | null),id?: (order_by | null),name?: (order_by | null)}


/** order by min() on columns of table "campaign_labels" */
export interface campaign_labels_min_order_by {color?: (order_by | null),id?: (order_by | null),name?: (order_by | null)}


/** Ordering options when selecting data from "campaign_labels". */
export interface campaign_labels_order_by {color?: (order_by | null),id?: (order_by | null),name?: (order_by | null)}


/** order by stddev() on columns of table "campaign_labels" */
export interface campaign_labels_stddev_order_by {id?: (order_by | null)}


/** order by stddev_pop() on columns of table "campaign_labels" */
export interface campaign_labels_stddev_pop_order_by {id?: (order_by | null)}


/** order by stddev_samp() on columns of table "campaign_labels" */
export interface campaign_labels_stddev_samp_order_by {id?: (order_by | null)}


/** Streaming cursor of the table "campaign_labels" */
export interface campaign_labels_stream_cursor_input {
/** Stream column input with initial value */
initial_value: campaign_labels_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface campaign_labels_stream_cursor_value_input {color?: (Scalars['String'] | null),id?: (Scalars['Int'] | null),name?: (Scalars['String'] | null)}


/** order by sum() on columns of table "campaign_labels" */
export interface campaign_labels_sum_order_by {id?: (order_by | null)}


/** order by var_pop() on columns of table "campaign_labels" */
export interface campaign_labels_var_pop_order_by {id?: (order_by | null)}


/** order by var_samp() on columns of table "campaign_labels" */
export interface campaign_labels_var_samp_order_by {id?: (order_by | null)}


/** order by variance() on columns of table "campaign_labels" */
export interface campaign_labels_variance_order_by {id?: (order_by | null)}


/** columns and relationships of "campaign_list" */
export interface campaign_listGenqlSelection{
    active?: boolean | number
    /** A computed field, executes function "campaign_labels" */
    c_labels?: (campaign_labelsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (campaign_labels_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (campaign_labels_order_by[] | null), 
    /** filter the rows returned */
    where?: (campaign_labels_bool_exp | null)} })
    created_at?: boolean | number
    description?: boolean | number
    end_at?: boolean | number
    id?: boolean | number
    img_url?: boolean | number
    labels?: boolean | number
    link?: boolean | number
    order_index?: boolean | number
    port3?: boolean | number
    start_at?: boolean | number
    title?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "campaign_list". All fields are combined with a logical 'AND'. */
export interface campaign_list_bool_exp {_and?: (campaign_list_bool_exp[] | null),_not?: (campaign_list_bool_exp | null),_or?: (campaign_list_bool_exp[] | null),active?: (Boolean_comparison_exp | null),c_labels?: (campaign_labels_bool_exp | null),created_at?: (timestamp_comparison_exp | null),description?: (String_comparison_exp | null),end_at?: (timestamp_comparison_exp | null),id?: (Int_comparison_exp | null),img_url?: (String_comparison_exp | null),labels?: (String_comparison_exp | null),link?: (String_comparison_exp | null),order_index?: (Int_comparison_exp | null),port3?: (Boolean_comparison_exp | null),start_at?: (timestamp_comparison_exp | null),title?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** Ordering options when selecting data from "campaign_list". */
export interface campaign_list_order_by {active?: (order_by | null),c_labels_aggregate?: (campaign_labels_aggregate_order_by | null),created_at?: (order_by | null),description?: (order_by | null),end_at?: (order_by | null),id?: (order_by | null),img_url?: (order_by | null),labels?: (order_by | null),link?: (order_by | null),order_index?: (order_by | null),port3?: (order_by | null),start_at?: (order_by | null),title?: (order_by | null),updated_at?: (order_by | null)}


/** Streaming cursor of the table "campaign_list" */
export interface campaign_list_stream_cursor_input {
/** Stream column input with initial value */
initial_value: campaign_list_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface campaign_list_stream_cursor_value_input {active?: (Scalars['Boolean'] | null),created_at?: (Scalars['timestamp'] | null),description?: (Scalars['String'] | null),end_at?: (Scalars['timestamp'] | null),id?: (Scalars['Int'] | null),img_url?: (Scalars['String'] | null),labels?: (Scalars['String'] | null),link?: (Scalars['String'] | null),order_index?: (Scalars['Int'] | null),port3?: (Scalars['Boolean'] | null),start_at?: (Scalars['timestamp'] | null),title?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** columns and relationships of "certified_contract" */
export interface certified_contractGenqlSelection{
    contract?: boolean | number
    id?: boolean | number
    name?: boolean | number
    option?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "certified_contract". All fields are combined with a logical 'AND'. */
export interface certified_contract_bool_exp {_and?: (certified_contract_bool_exp[] | null),_not?: (certified_contract_bool_exp | null),_or?: (certified_contract_bool_exp[] | null),contract?: (String_comparison_exp | null),id?: (Int_comparison_exp | null),name?: (String_comparison_exp | null),option?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "certified_contract". */
export interface certified_contract_order_by {contract?: (order_by | null),id?: (order_by | null),name?: (order_by | null),option?: (order_by | null)}


/** Streaming cursor of the table "certified_contract" */
export interface certified_contract_stream_cursor_input {
/** Stream column input with initial value */
initial_value: certified_contract_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface certified_contract_stream_cursor_value_input {contract?: (Scalars['String'] | null),id?: (Scalars['Int'] | null),name?: (Scalars['String'] | null),option?: (Scalars['String'] | null)}


/** columns and relationships of "coingecko_coin_detail" */
export interface coingecko_coin_detailGenqlSelection{
    data?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    id?: boolean | number
    website?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "coingecko_coin_detail". All fields are combined with a logical 'AND'. */
export interface coingecko_coin_detail_bool_exp {_and?: (coingecko_coin_detail_bool_exp[] | null),_not?: (coingecko_coin_detail_bool_exp | null),_or?: (coingecko_coin_detail_bool_exp[] | null),data?: (jsonb_comparison_exp | null),id?: (String_comparison_exp | null),website?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "coingecko_coin_detail". */
export interface coingecko_coin_detail_order_by {data?: (order_by | null),id?: (order_by | null),website?: (order_by | null)}


/** Streaming cursor of the table "coingecko_coin_detail" */
export interface coingecko_coin_detail_stream_cursor_input {
/** Stream column input with initial value */
initial_value: coingecko_coin_detail_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface coingecko_coin_detail_stream_cursor_value_input {data?: (Scalars['jsonb'] | null),id?: (Scalars['String'] | null),website?: (Scalars['String'] | null)}


/** columns and relationships of "coingeko_market" */
export interface coingeko_marketGenqlSelection{
    ath?: boolean | number
    ath_change_percentage?: boolean | number
    ath_date?: boolean | number
    atl?: boolean | number
    atl_change_percentage?: boolean | number
    atl_date?: boolean | number
    circulating_supply?: boolean | number
    current_price?: boolean | number
    fully_diluted_valuation?: boolean | number
    high_24h?: boolean | number
    id?: boolean | number
    image?: boolean | number
    last_updated?: boolean | number
    low_24h?: boolean | number
    market_cap?: boolean | number
    market_cap_change_24h?: boolean | number
    market_cap_change_percentage_24h?: boolean | number
    market_cap_rank?: boolean | number
    max_supply?: boolean | number
    name?: boolean | number
    price_change_24h?: boolean | number
    price_change_percentage_24h?: boolean | number
    roi?: boolean | number
    sparkline_in_7d?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    symbol?: boolean | number
    /** An object relationship */
    token?: token_list_v2GenqlSelection
    total_supply?: boolean | number
    total_volume?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "coingeko_market". All fields are combined with a logical 'AND'. */
export interface coingeko_market_bool_exp {_and?: (coingeko_market_bool_exp[] | null),_not?: (coingeko_market_bool_exp | null),_or?: (coingeko_market_bool_exp[] | null),ath?: (numeric_comparison_exp | null),ath_change_percentage?: (numeric_comparison_exp | null),ath_date?: (String_comparison_exp | null),atl?: (numeric_comparison_exp | null),atl_change_percentage?: (numeric_comparison_exp | null),atl_date?: (String_comparison_exp | null),circulating_supply?: (numeric_comparison_exp | null),current_price?: (numeric_comparison_exp | null),fully_diluted_valuation?: (String_comparison_exp | null),high_24h?: (numeric_comparison_exp | null),id?: (String_comparison_exp | null),image?: (String_comparison_exp | null),last_updated?: (String_comparison_exp | null),low_24h?: (numeric_comparison_exp | null),market_cap?: (numeric_comparison_exp | null),market_cap_change_24h?: (numeric_comparison_exp | null),market_cap_change_percentage_24h?: (numeric_comparison_exp | null),market_cap_rank?: (String_comparison_exp | null),max_supply?: (String_comparison_exp | null),name?: (String_comparison_exp | null),price_change_24h?: (numeric_comparison_exp | null),price_change_percentage_24h?: (numeric_comparison_exp | null),roi?: (String_comparison_exp | null),sparkline_in_7d?: (jsonb_comparison_exp | null),symbol?: (String_comparison_exp | null),token?: (token_list_v2_bool_exp | null),total_supply?: (numeric_comparison_exp | null),total_volume?: (numeric_comparison_exp | null)}


/** Ordering options when selecting data from "coingeko_market". */
export interface coingeko_market_order_by {ath?: (order_by | null),ath_change_percentage?: (order_by | null),ath_date?: (order_by | null),atl?: (order_by | null),atl_change_percentage?: (order_by | null),atl_date?: (order_by | null),circulating_supply?: (order_by | null),current_price?: (order_by | null),fully_diluted_valuation?: (order_by | null),high_24h?: (order_by | null),id?: (order_by | null),image?: (order_by | null),last_updated?: (order_by | null),low_24h?: (order_by | null),market_cap?: (order_by | null),market_cap_change_24h?: (order_by | null),market_cap_change_percentage_24h?: (order_by | null),market_cap_rank?: (order_by | null),max_supply?: (order_by | null),name?: (order_by | null),price_change_24h?: (order_by | null),price_change_percentage_24h?: (order_by | null),roi?: (order_by | null),sparkline_in_7d?: (order_by | null),symbol?: (order_by | null),token?: (token_list_v2_order_by | null),total_supply?: (order_by | null),total_volume?: (order_by | null)}


/** Streaming cursor of the table "coingeko_market" */
export interface coingeko_market_stream_cursor_input {
/** Stream column input with initial value */
initial_value: coingeko_market_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface coingeko_market_stream_cursor_value_input {ath?: (Scalars['numeric'] | null),ath_change_percentage?: (Scalars['numeric'] | null),ath_date?: (Scalars['String'] | null),atl?: (Scalars['numeric'] | null),atl_change_percentage?: (Scalars['numeric'] | null),atl_date?: (Scalars['String'] | null),circulating_supply?: (Scalars['numeric'] | null),current_price?: (Scalars['numeric'] | null),fully_diluted_valuation?: (Scalars['String'] | null),high_24h?: (Scalars['numeric'] | null),id?: (Scalars['String'] | null),image?: (Scalars['String'] | null),last_updated?: (Scalars['String'] | null),low_24h?: (Scalars['numeric'] | null),market_cap?: (Scalars['numeric'] | null),market_cap_change_24h?: (Scalars['numeric'] | null),market_cap_change_percentage_24h?: (Scalars['numeric'] | null),market_cap_rank?: (Scalars['String'] | null),max_supply?: (Scalars['String'] | null),name?: (Scalars['String'] | null),price_change_24h?: (Scalars['numeric'] | null),price_change_percentage_24h?: (Scalars['numeric'] | null),roi?: (Scalars['String'] | null),sparkline_in_7d?: (Scalars['jsonb'] | null),symbol?: (Scalars['String'] | null),total_supply?: (Scalars['numeric'] | null),total_volume?: (Scalars['numeric'] | null)}


/** columns and relationships of "contract_error_msg" */
export interface contract_error_msgGenqlSelection{
    discription?: boolean | number
    error?: boolean | number
    id?: boolean | number
    msg?: boolean | number
    msg_cn?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "contract_error_msg". All fields are combined with a logical 'AND'. */
export interface contract_error_msg_bool_exp {_and?: (contract_error_msg_bool_exp[] | null),_not?: (contract_error_msg_bool_exp | null),_or?: (contract_error_msg_bool_exp[] | null),discription?: (String_comparison_exp | null),error?: (String_comparison_exp | null),id?: (Int_comparison_exp | null),msg?: (String_comparison_exp | null),msg_cn?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "contract_error_msg". */
export interface contract_error_msg_order_by {discription?: (order_by | null),error?: (order_by | null),id?: (order_by | null),msg?: (order_by | null),msg_cn?: (order_by | null)}


/** Streaming cursor of the table "contract_error_msg" */
export interface contract_error_msg_stream_cursor_input {
/** Stream column input with initial value */
initial_value: contract_error_msg_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface contract_error_msg_stream_cursor_value_input {discription?: (Scalars['String'] | null),error?: (Scalars['String'] | null),id?: (Scalars['Int'] | null),msg?: (Scalars['String'] | null),msg_cn?: (Scalars['String'] | null)}


/** columns and relationships of "dapp_category" */
export interface dapp_categoryGenqlSelection{
    /** An object relationship */
    category_banner?: dapp_category_bannerGenqlSelection
    hot?: boolean | number
    id?: boolean | number
    name?: boolean | number
    order?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "dapp_category_banner" */
export interface dapp_category_bannerGenqlSelection{
    image?: boolean | number
    link?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dapp_category_banner". All fields are combined with a logical 'AND'. */
export interface dapp_category_banner_bool_exp {_and?: (dapp_category_banner_bool_exp[] | null),_not?: (dapp_category_banner_bool_exp | null),_or?: (dapp_category_banner_bool_exp[] | null),image?: (String_comparison_exp | null),link?: (String_comparison_exp | null),name?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "dapp_category_banner". */
export interface dapp_category_banner_order_by {image?: (order_by | null),link?: (order_by | null),name?: (order_by | null)}


/** Streaming cursor of the table "dapp_category_banner" */
export interface dapp_category_banner_stream_cursor_input {
/** Stream column input with initial value */
initial_value: dapp_category_banner_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface dapp_category_banner_stream_cursor_value_input {image?: (Scalars['String'] | null),link?: (Scalars['String'] | null),name?: (Scalars['String'] | null)}


/** Boolean expression to filter rows from the table "dapp_category". All fields are combined with a logical 'AND'. */
export interface dapp_category_bool_exp {_and?: (dapp_category_bool_exp[] | null),_not?: (dapp_category_bool_exp | null),_or?: (dapp_category_bool_exp[] | null),category_banner?: (dapp_category_banner_bool_exp | null),hot?: (Boolean_comparison_exp | null),id?: (bigint_comparison_exp | null),name?: (String_comparison_exp | null),order?: (Int_comparison_exp | null)}


/** Ordering options when selecting data from "dapp_category". */
export interface dapp_category_order_by {category_banner?: (dapp_category_banner_order_by | null),hot?: (order_by | null),id?: (order_by | null),name?: (order_by | null),order?: (order_by | null)}


/** Streaming cursor of the table "dapp_category" */
export interface dapp_category_stream_cursor_input {
/** Stream column input with initial value */
initial_value: dapp_category_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface dapp_category_stream_cursor_value_input {hot?: (Scalars['Boolean'] | null),id?: (Scalars['bigint'] | null),name?: (Scalars['String'] | null),order?: (Scalars['Int'] | null)}


/** columns and relationships of "dapp_list" */
export interface dapp_listGenqlSelection{
    category?: boolean | number
    chains?: boolean | number
    content?: boolean | number
    contentCN?: boolean | number
    id?: boolean | number
    imgUrl?: boolean | number
    named?: boolean | number
    title?: boolean | number
    url?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dapp_list". All fields are combined with a logical 'AND'. */
export interface dapp_list_bool_exp {_and?: (dapp_list_bool_exp[] | null),_not?: (dapp_list_bool_exp | null),_or?: (dapp_list_bool_exp[] | null),category?: (String_comparison_exp | null),chains?: (String_comparison_exp | null),content?: (String_comparison_exp | null),contentCN?: (String_comparison_exp | null),id?: (String_comparison_exp | null),imgUrl?: (String_comparison_exp | null),named?: (Boolean_comparison_exp | null),title?: (String_comparison_exp | null),url?: (String_comparison_exp | null),weight?: (numeric_comparison_exp | null)}


/** columns and relationships of "dapp_list_latest" */
export interface dapp_list_latestGenqlSelection{
    chains?: boolean | number
    content?: boolean | number
    content_cn?: boolean | number
    id?: boolean | number
    img_url?: boolean | number
    popularity?: boolean | number
    source_priority?: boolean | number
    tags?: boolean | number
    title?: boolean | number
    url?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "dapp_list_latest" */
export interface dapp_list_latest_aggregate_order_by {avg?: (dapp_list_latest_avg_order_by | null),count?: (order_by | null),max?: (dapp_list_latest_max_order_by | null),min?: (dapp_list_latest_min_order_by | null),stddev?: (dapp_list_latest_stddev_order_by | null),stddev_pop?: (dapp_list_latest_stddev_pop_order_by | null),stddev_samp?: (dapp_list_latest_stddev_samp_order_by | null),sum?: (dapp_list_latest_sum_order_by | null),var_pop?: (dapp_list_latest_var_pop_order_by | null),var_samp?: (dapp_list_latest_var_samp_order_by | null),variance?: (dapp_list_latest_variance_order_by | null)}


/** order by avg() on columns of table "dapp_list_latest" */
export interface dapp_list_latest_avg_order_by {id?: (order_by | null),source_priority?: (order_by | null),weight?: (order_by | null)}


/** Boolean expression to filter rows from the table "dapp_list_latest". All fields are combined with a logical 'AND'. */
export interface dapp_list_latest_bool_exp {_and?: (dapp_list_latest_bool_exp[] | null),_not?: (dapp_list_latest_bool_exp | null),_or?: (dapp_list_latest_bool_exp[] | null),chains?: (String_comparison_exp | null),content?: (String_comparison_exp | null),content_cn?: (String_comparison_exp | null),id?: (Int_comparison_exp | null),img_url?: (String_comparison_exp | null),popularity?: (String_comparison_exp | null),source_priority?: (Int_comparison_exp | null),tags?: (String_comparison_exp | null),title?: (String_comparison_exp | null),url?: (String_comparison_exp | null),weight?: (Int_comparison_exp | null)}


/** order by max() on columns of table "dapp_list_latest" */
export interface dapp_list_latest_max_order_by {chains?: (order_by | null),content?: (order_by | null),content_cn?: (order_by | null),id?: (order_by | null),img_url?: (order_by | null),popularity?: (order_by | null),source_priority?: (order_by | null),tags?: (order_by | null),title?: (order_by | null),url?: (order_by | null),weight?: (order_by | null)}


/** order by min() on columns of table "dapp_list_latest" */
export interface dapp_list_latest_min_order_by {chains?: (order_by | null),content?: (order_by | null),content_cn?: (order_by | null),id?: (order_by | null),img_url?: (order_by | null),popularity?: (order_by | null),source_priority?: (order_by | null),tags?: (order_by | null),title?: (order_by | null),url?: (order_by | null),weight?: (order_by | null)}


/** Ordering options when selecting data from "dapp_list_latest". */
export interface dapp_list_latest_order_by {chains?: (order_by | null),content?: (order_by | null),content_cn?: (order_by | null),id?: (order_by | null),img_url?: (order_by | null),popularity?: (order_by | null),source_priority?: (order_by | null),tags?: (order_by | null),title?: (order_by | null),url?: (order_by | null),weight?: (order_by | null)}


/** order by stddev() on columns of table "dapp_list_latest" */
export interface dapp_list_latest_stddev_order_by {id?: (order_by | null),source_priority?: (order_by | null),weight?: (order_by | null)}


/** order by stddev_pop() on columns of table "dapp_list_latest" */
export interface dapp_list_latest_stddev_pop_order_by {id?: (order_by | null),source_priority?: (order_by | null),weight?: (order_by | null)}


/** order by stddev_samp() on columns of table "dapp_list_latest" */
export interface dapp_list_latest_stddev_samp_order_by {id?: (order_by | null),source_priority?: (order_by | null),weight?: (order_by | null)}


/** Streaming cursor of the table "dapp_list_latest" */
export interface dapp_list_latest_stream_cursor_input {
/** Stream column input with initial value */
initial_value: dapp_list_latest_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface dapp_list_latest_stream_cursor_value_input {chains?: (Scalars['String'] | null),content?: (Scalars['String'] | null),content_cn?: (Scalars['String'] | null),id?: (Scalars['Int'] | null),img_url?: (Scalars['String'] | null),popularity?: (Scalars['String'] | null),source_priority?: (Scalars['Int'] | null),tags?: (Scalars['String'] | null),title?: (Scalars['String'] | null),url?: (Scalars['String'] | null),weight?: (Scalars['Int'] | null)}


/** order by sum() on columns of table "dapp_list_latest" */
export interface dapp_list_latest_sum_order_by {id?: (order_by | null),source_priority?: (order_by | null),weight?: (order_by | null)}


/** columns and relationships of "dapp_list_latest_v2" */
export interface dapp_list_latest_v2GenqlSelection{
    chains?: boolean | number
    content?: boolean | number
    content_cn?: boolean | number
    id?: boolean | number
    img_url?: boolean | number
    is_updated?: boolean | number
    popularity?: boolean | number
    source_priority?: boolean | number
    tags?: boolean | number
    title?: boolean | number
    url?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "dapp_list_latest_v2" */
export interface dapp_list_latest_v2_aggregateGenqlSelection{
    aggregate?: dapp_list_latest_v2_aggregate_fieldsGenqlSelection
    nodes?: dapp_list_latest_v2GenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "dapp_list_latest_v2" */
export interface dapp_list_latest_v2_aggregate_fieldsGenqlSelection{
    avg?: dapp_list_latest_v2_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (dapp_list_latest_v2_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: dapp_list_latest_v2_max_fieldsGenqlSelection
    min?: dapp_list_latest_v2_min_fieldsGenqlSelection
    stddev?: dapp_list_latest_v2_stddev_fieldsGenqlSelection
    stddev_pop?: dapp_list_latest_v2_stddev_pop_fieldsGenqlSelection
    stddev_samp?: dapp_list_latest_v2_stddev_samp_fieldsGenqlSelection
    sum?: dapp_list_latest_v2_sum_fieldsGenqlSelection
    var_pop?: dapp_list_latest_v2_var_pop_fieldsGenqlSelection
    var_samp?: dapp_list_latest_v2_var_samp_fieldsGenqlSelection
    variance?: dapp_list_latest_v2_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface dapp_list_latest_v2_avg_fieldsGenqlSelection{
    id?: boolean | number
    source_priority?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dapp_list_latest_v2". All fields are combined with a logical 'AND'. */
export interface dapp_list_latest_v2_bool_exp {_and?: (dapp_list_latest_v2_bool_exp[] | null),_not?: (dapp_list_latest_v2_bool_exp | null),_or?: (dapp_list_latest_v2_bool_exp[] | null),chains?: (String_comparison_exp | null),content?: (String_comparison_exp | null),content_cn?: (String_comparison_exp | null),id?: (Int_comparison_exp | null),img_url?: (String_comparison_exp | null),is_updated?: (Boolean_comparison_exp | null),popularity?: (String_comparison_exp | null),source_priority?: (Int_comparison_exp | null),tags?: (String_comparison_exp | null),title?: (String_comparison_exp | null),url?: (String_comparison_exp | null),weight?: (Int_comparison_exp | null)}


/** aggregate max on columns */
export interface dapp_list_latest_v2_max_fieldsGenqlSelection{
    chains?: boolean | number
    content?: boolean | number
    content_cn?: boolean | number
    id?: boolean | number
    img_url?: boolean | number
    popularity?: boolean | number
    source_priority?: boolean | number
    tags?: boolean | number
    title?: boolean | number
    url?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface dapp_list_latest_v2_min_fieldsGenqlSelection{
    chains?: boolean | number
    content?: boolean | number
    content_cn?: boolean | number
    id?: boolean | number
    img_url?: boolean | number
    popularity?: boolean | number
    source_priority?: boolean | number
    tags?: boolean | number
    title?: boolean | number
    url?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Ordering options when selecting data from "dapp_list_latest_v2". */
export interface dapp_list_latest_v2_order_by {chains?: (order_by | null),content?: (order_by | null),content_cn?: (order_by | null),id?: (order_by | null),img_url?: (order_by | null),is_updated?: (order_by | null),popularity?: (order_by | null),source_priority?: (order_by | null),tags?: (order_by | null),title?: (order_by | null),url?: (order_by | null),weight?: (order_by | null)}


/** aggregate stddev on columns */
export interface dapp_list_latest_v2_stddev_fieldsGenqlSelection{
    id?: boolean | number
    source_priority?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface dapp_list_latest_v2_stddev_pop_fieldsGenqlSelection{
    id?: boolean | number
    source_priority?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface dapp_list_latest_v2_stddev_samp_fieldsGenqlSelection{
    id?: boolean | number
    source_priority?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "dapp_list_latest_v2" */
export interface dapp_list_latest_v2_stream_cursor_input {
/** Stream column input with initial value */
initial_value: dapp_list_latest_v2_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface dapp_list_latest_v2_stream_cursor_value_input {chains?: (Scalars['String'] | null),content?: (Scalars['String'] | null),content_cn?: (Scalars['String'] | null),id?: (Scalars['Int'] | null),img_url?: (Scalars['String'] | null),is_updated?: (Scalars['Boolean'] | null),popularity?: (Scalars['String'] | null),source_priority?: (Scalars['Int'] | null),tags?: (Scalars['String'] | null),title?: (Scalars['String'] | null),url?: (Scalars['String'] | null),weight?: (Scalars['Int'] | null)}


/** aggregate sum on columns */
export interface dapp_list_latest_v2_sum_fieldsGenqlSelection{
    id?: boolean | number
    source_priority?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_pop on columns */
export interface dapp_list_latest_v2_var_pop_fieldsGenqlSelection{
    id?: boolean | number
    source_priority?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface dapp_list_latest_v2_var_samp_fieldsGenqlSelection{
    id?: boolean | number
    source_priority?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface dapp_list_latest_v2_variance_fieldsGenqlSelection{
    id?: boolean | number
    source_priority?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "dapp_list_latest" */
export interface dapp_list_latest_var_pop_order_by {id?: (order_by | null),source_priority?: (order_by | null),weight?: (order_by | null)}


/** order by var_samp() on columns of table "dapp_list_latest" */
export interface dapp_list_latest_var_samp_order_by {id?: (order_by | null),source_priority?: (order_by | null),weight?: (order_by | null)}


/** order by variance() on columns of table "dapp_list_latest" */
export interface dapp_list_latest_variance_order_by {id?: (order_by | null),source_priority?: (order_by | null),weight?: (order_by | null)}


/** Ordering options when selecting data from "dapp_list". */
export interface dapp_list_order_by {category?: (order_by | null),chains?: (order_by | null),content?: (order_by | null),contentCN?: (order_by | null),id?: (order_by | null),imgUrl?: (order_by | null),named?: (order_by | null),title?: (order_by | null),url?: (order_by | null),weight?: (order_by | null)}


/** Streaming cursor of the table "dapp_list" */
export interface dapp_list_stream_cursor_input {
/** Stream column input with initial value */
initial_value: dapp_list_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface dapp_list_stream_cursor_value_input {category?: (Scalars['String'] | null),chains?: (Scalars['String'] | null),content?: (Scalars['String'] | null),contentCN?: (Scalars['String'] | null),id?: (Scalars['String'] | null),imgUrl?: (Scalars['String'] | null),named?: (Scalars['Boolean'] | null),title?: (Scalars['String'] | null),url?: (Scalars['String'] | null),weight?: (Scalars['numeric'] | null)}


/** columns and relationships of "dapp_list_v3" */
export interface dapp_list_v3GenqlSelection{
    chains?: boolean | number
    content?: boolean | number
    content_cn?: boolean | number
    id?: boolean | number
    img_url?: boolean | number
    tags?: boolean | number
    title?: boolean | number
    url?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dapp_list_v3". All fields are combined with a logical 'AND'. */
export interface dapp_list_v3_bool_exp {_and?: (dapp_list_v3_bool_exp[] | null),_not?: (dapp_list_v3_bool_exp | null),_or?: (dapp_list_v3_bool_exp[] | null),chains?: (String_comparison_exp | null),content?: (String_comparison_exp | null),content_cn?: (String_comparison_exp | null),id?: (String_comparison_exp | null),img_url?: (String_comparison_exp | null),tags?: (String_comparison_exp | null),title?: (String_comparison_exp | null),url?: (String_comparison_exp | null),weight?: (Int_comparison_exp | null)}


/** Ordering options when selecting data from "dapp_list_v3". */
export interface dapp_list_v3_order_by {chains?: (order_by | null),content?: (order_by | null),content_cn?: (order_by | null),id?: (order_by | null),img_url?: (order_by | null),tags?: (order_by | null),title?: (order_by | null),url?: (order_by | null),weight?: (order_by | null)}


/** Streaming cursor of the table "dapp_list_v3" */
export interface dapp_list_v3_stream_cursor_input {
/** Stream column input with initial value */
initial_value: dapp_list_v3_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface dapp_list_v3_stream_cursor_value_input {chains?: (Scalars['String'] | null),content?: (Scalars['String'] | null),content_cn?: (Scalars['String'] | null),id?: (Scalars['String'] | null),img_url?: (Scalars['String'] | null),tags?: (Scalars['String'] | null),title?: (Scalars['String'] | null),url?: (Scalars['String'] | null),weight?: (Scalars['Int'] | null)}


/** columns and relationships of "dapp_list_v4" */
export interface dapp_list_v4GenqlSelection{
    chains?: boolean | number
    content?: boolean | number
    content_cn?: boolean | number
    id?: boolean | number
    img_url?: boolean | number
    tags?: boolean | number
    title?: boolean | number
    tvl?: boolean | number
    url?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dapp_list_v4". All fields are combined with a logical 'AND'. */
export interface dapp_list_v4_bool_exp {_and?: (dapp_list_v4_bool_exp[] | null),_not?: (dapp_list_v4_bool_exp | null),_or?: (dapp_list_v4_bool_exp[] | null),chains?: (String_comparison_exp | null),content?: (String_comparison_exp | null),content_cn?: (String_comparison_exp | null),id?: (String_comparison_exp | null),img_url?: (String_comparison_exp | null),tags?: (String_comparison_exp | null),title?: (String_comparison_exp | null),tvl?: (numeric_comparison_exp | null),url?: (String_comparison_exp | null),weight?: (Int_comparison_exp | null)}


/** Ordering options when selecting data from "dapp_list_v4". */
export interface dapp_list_v4_order_by {chains?: (order_by | null),content?: (order_by | null),content_cn?: (order_by | null),id?: (order_by | null),img_url?: (order_by | null),tags?: (order_by | null),title?: (order_by | null),tvl?: (order_by | null),url?: (order_by | null),weight?: (order_by | null)}


/** Streaming cursor of the table "dapp_list_v4" */
export interface dapp_list_v4_stream_cursor_input {
/** Stream column input with initial value */
initial_value: dapp_list_v4_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface dapp_list_v4_stream_cursor_value_input {chains?: (Scalars['String'] | null),content?: (Scalars['String'] | null),content_cn?: (Scalars['String'] | null),id?: (Scalars['String'] | null),img_url?: (Scalars['String'] | null),tags?: (Scalars['String'] | null),title?: (Scalars['String'] | null),tvl?: (Scalars['numeric'] | null),url?: (Scalars['String'] | null),weight?: (Scalars['Int'] | null)}


/** columns and relationships of "dapp_list_v5" */
export interface dapp_list_v5GenqlSelection{
    chains?: boolean | number
    content?: boolean | number
    content_cn?: boolean | number
    id?: boolean | number
    img_url?: boolean | number
    tags?: boolean | number
    title?: boolean | number
    tvl?: boolean | number
    update_time?: boolean | number
    url?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dapp_list_v5". All fields are combined with a logical 'AND'. */
export interface dapp_list_v5_bool_exp {_and?: (dapp_list_v5_bool_exp[] | null),_not?: (dapp_list_v5_bool_exp | null),_or?: (dapp_list_v5_bool_exp[] | null),chains?: (String_comparison_exp | null),content?: (String_comparison_exp | null),content_cn?: (String_comparison_exp | null),id?: (String_comparison_exp | null),img_url?: (String_comparison_exp | null),tags?: (String_comparison_exp | null),title?: (String_comparison_exp | null),tvl?: (numeric_comparison_exp | null),update_time?: (timestamptz_comparison_exp | null),url?: (String_comparison_exp | null),weight?: (Int_comparison_exp | null)}


/** Ordering options when selecting data from "dapp_list_v5". */
export interface dapp_list_v5_order_by {chains?: (order_by | null),content?: (order_by | null),content_cn?: (order_by | null),id?: (order_by | null),img_url?: (order_by | null),tags?: (order_by | null),title?: (order_by | null),tvl?: (order_by | null),update_time?: (order_by | null),url?: (order_by | null),weight?: (order_by | null)}


/** Streaming cursor of the table "dapp_list_v5" */
export interface dapp_list_v5_stream_cursor_input {
/** Stream column input with initial value */
initial_value: dapp_list_v5_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface dapp_list_v5_stream_cursor_value_input {chains?: (Scalars['String'] | null),content?: (Scalars['String'] | null),content_cn?: (Scalars['String'] | null),id?: (Scalars['String'] | null),img_url?: (Scalars['String'] | null),tags?: (Scalars['String'] | null),title?: (Scalars['String'] | null),tvl?: (Scalars['numeric'] | null),update_time?: (Scalars['timestamptz'] | null),url?: (Scalars['String'] | null),weight?: (Scalars['Int'] | null)}


/** columns and relationships of "dapp_promote" */
export interface dapp_promoteGenqlSelection{
    chain?: boolean | number
    id?: boolean | number
    img_url?: boolean | number
    promote?: boolean | number
    promote_content?: boolean | number
    promote_content_cn?: boolean | number
    title?: boolean | number
    token?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dapp_promote". All fields are combined with a logical 'AND'. */
export interface dapp_promote_bool_exp {_and?: (dapp_promote_bool_exp[] | null),_not?: (dapp_promote_bool_exp | null),_or?: (dapp_promote_bool_exp[] | null),chain?: (String_comparison_exp | null),id?: (String_comparison_exp | null),img_url?: (String_comparison_exp | null),promote?: (Int_comparison_exp | null),promote_content?: (String_comparison_exp | null),promote_content_cn?: (String_comparison_exp | null),title?: (String_comparison_exp | null),token?: (jsonb_comparison_exp | null),url?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "dapp_promote". */
export interface dapp_promote_order_by {chain?: (order_by | null),id?: (order_by | null),img_url?: (order_by | null),promote?: (order_by | null),promote_content?: (order_by | null),promote_content_cn?: (order_by | null),title?: (order_by | null),token?: (order_by | null),url?: (order_by | null)}


/** Streaming cursor of the table "dapp_promote" */
export interface dapp_promote_stream_cursor_input {
/** Stream column input with initial value */
initial_value: dapp_promote_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface dapp_promote_stream_cursor_value_input {chain?: (Scalars['String'] | null),id?: (Scalars['String'] | null),img_url?: (Scalars['String'] | null),promote?: (Scalars['Int'] | null),promote_content?: (Scalars['String'] | null),promote_content_cn?: (Scalars['String'] | null),title?: (Scalars['String'] | null),token?: (Scalars['jsonb'] | null),url?: (Scalars['String'] | null)}


/** columns and relationships of "discovery_banner" */
export interface discovery_bannerGenqlSelection{
    area?: boolean | number
    created_at?: boolean | number
    expiration_at?: boolean | number
    id?: boolean | number
    imgUrl?: boolean | number
    order?: boolean | number
    type?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "discovery_banner". All fields are combined with a logical 'AND'. */
export interface discovery_banner_bool_exp {_and?: (discovery_banner_bool_exp[] | null),_not?: (discovery_banner_bool_exp | null),_or?: (discovery_banner_bool_exp[] | null),area?: (String_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),expiration_at?: (timestamptz_comparison_exp | null),id?: (Int_comparison_exp | null),imgUrl?: (String_comparison_exp | null),order?: (Int_comparison_exp | null),type?: (String_comparison_exp | null),url?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "discovery_banner". */
export interface discovery_banner_order_by {area?: (order_by | null),created_at?: (order_by | null),expiration_at?: (order_by | null),id?: (order_by | null),imgUrl?: (order_by | null),order?: (order_by | null),type?: (order_by | null),url?: (order_by | null)}


/** Streaming cursor of the table "discovery_banner" */
export interface discovery_banner_stream_cursor_input {
/** Stream column input with initial value */
initial_value: discovery_banner_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface discovery_banner_stream_cursor_value_input {area?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),expiration_at?: (Scalars['timestamptz'] | null),id?: (Scalars['Int'] | null),imgUrl?: (Scalars['String'] | null),order?: (Scalars['Int'] | null),type?: (Scalars['String'] | null),url?: (Scalars['String'] | null)}


/** advertisingList in home page */
export interface home_news_bannersGenqlSelection{
    content?: boolean | number
    created_at?: boolean | number
    expire_at?: boolean | number
    id?: boolean | number
    scroll?: boolean | number
    updated_at?: boolean | number
    url?: boolean | number
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "home_news_banners". All fields are combined with a logical 'AND'. */
export interface home_news_banners_bool_exp {_and?: (home_news_banners_bool_exp[] | null),_not?: (home_news_banners_bool_exp | null),_or?: (home_news_banners_bool_exp[] | null),content?: (String_comparison_exp | null),created_at?: (timestamp_comparison_exp | null),expire_at?: (timestamp_comparison_exp | null),id?: (Int_comparison_exp | null),scroll?: (Boolean_comparison_exp | null),updated_at?: (timestamp_comparison_exp | null),url?: (String_comparison_exp | null),version?: (Int_comparison_exp | null)}


/** Ordering options when selecting data from "home_news_banners". */
export interface home_news_banners_order_by {content?: (order_by | null),created_at?: (order_by | null),expire_at?: (order_by | null),id?: (order_by | null),scroll?: (order_by | null),updated_at?: (order_by | null),url?: (order_by | null),version?: (order_by | null)}


/** Streaming cursor of the table "home_news_banners" */
export interface home_news_banners_stream_cursor_input {
/** Stream column input with initial value */
initial_value: home_news_banners_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface home_news_banners_stream_cursor_value_input {content?: (Scalars['String'] | null),created_at?: (Scalars['timestamp'] | null),expire_at?: (Scalars['timestamp'] | null),id?: (Scalars['Int'] | null),scroll?: (Scalars['Boolean'] | null),updated_at?: (Scalars['timestamp'] | null),url?: (Scalars['String'] | null),version?: (Scalars['Int'] | null)}


/** test table */
export interface home_news_banners_testGenqlSelection{
    content?: boolean | number
    created_at?: boolean | number
    expire_at?: boolean | number
    id?: boolean | number
    scroll?: boolean | number
    updated_at?: boolean | number
    url?: boolean | number
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "home_news_banners_test". All fields are combined with a logical 'AND'. */
export interface home_news_banners_test_bool_exp {_and?: (home_news_banners_test_bool_exp[] | null),_not?: (home_news_banners_test_bool_exp | null),_or?: (home_news_banners_test_bool_exp[] | null),content?: (String_comparison_exp | null),created_at?: (timestamp_comparison_exp | null),expire_at?: (timestamp_comparison_exp | null),id?: (Int_comparison_exp | null),scroll?: (Boolean_comparison_exp | null),updated_at?: (timestamp_comparison_exp | null),url?: (String_comparison_exp | null),version?: (Int_comparison_exp | null)}


/** Ordering options when selecting data from "home_news_banners_test". */
export interface home_news_banners_test_order_by {content?: (order_by | null),created_at?: (order_by | null),expire_at?: (order_by | null),id?: (order_by | null),scroll?: (order_by | null),updated_at?: (order_by | null),url?: (order_by | null),version?: (order_by | null)}


/** Streaming cursor of the table "home_news_banners_test" */
export interface home_news_banners_test_stream_cursor_input {
/** Stream column input with initial value */
initial_value: home_news_banners_test_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface home_news_banners_test_stream_cursor_value_input {content?: (Scalars['String'] | null),created_at?: (Scalars['timestamp'] | null),expire_at?: (Scalars['timestamp'] | null),id?: (Scalars['Int'] | null),scroll?: (Scalars['Boolean'] | null),updated_at?: (Scalars['timestamp'] | null),url?: (Scalars['String'] | null),version?: (Scalars['Int'] | null)}


/** columns and relationships of "home_post_event" */
export interface home_post_eventGenqlSelection{
    end_at?: boolean | number
    id?: boolean | number
    post_img?: boolean | number
    post_title?: boolean | number
    start_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "home_post_event". All fields are combined with a logical 'AND'. */
export interface home_post_event_bool_exp {_and?: (home_post_event_bool_exp[] | null),_not?: (home_post_event_bool_exp | null),_or?: (home_post_event_bool_exp[] | null),end_at?: (timestamptz_comparison_exp | null),id?: (Int_comparison_exp | null),post_img?: (String_comparison_exp | null),post_title?: (String_comparison_exp | null),start_at?: (timestamptz_comparison_exp | null)}


/** Ordering options when selecting data from "home_post_event". */
export interface home_post_event_order_by {end_at?: (order_by | null),id?: (order_by | null),post_img?: (order_by | null),post_title?: (order_by | null),start_at?: (order_by | null)}


/** Streaming cursor of the table "home_post_event" */
export interface home_post_event_stream_cursor_input {
/** Stream column input with initial value */
initial_value: home_post_event_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface home_post_event_stream_cursor_value_input {end_at?: (Scalars['timestamptz'] | null),id?: (Scalars['Int'] | null),post_img?: (Scalars['String'] | null),post_title?: (Scalars['String'] | null),start_at?: (Scalars['timestamptz'] | null)}


/** columns and relationships of "iip13_bucket_type_ignore" */
export interface iip13_bucket_type_ignoreGenqlSelection{
    amount?: boolean | number
    created_at?: boolean | number
    duration?: boolean | number
    id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "iip13_bucket_type_ignore". All fields are combined with a logical 'AND'. */
export interface iip13_bucket_type_ignore_bool_exp {_and?: (iip13_bucket_type_ignore_bool_exp[] | null),_not?: (iip13_bucket_type_ignore_bool_exp | null),_or?: (iip13_bucket_type_ignore_bool_exp[] | null),amount?: (String_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),duration?: (numeric_comparison_exp | null),id?: (Int_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** Ordering options when selecting data from "iip13_bucket_type_ignore". */
export interface iip13_bucket_type_ignore_order_by {amount?: (order_by | null),created_at?: (order_by | null),duration?: (order_by | null),id?: (order_by | null),updated_at?: (order_by | null)}


/** Streaming cursor of the table "iip13_bucket_type_ignore" */
export interface iip13_bucket_type_ignore_stream_cursor_input {
/** Stream column input with initial value */
initial_value: iip13_bucket_type_ignore_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface iip13_bucket_type_ignore_stream_cursor_value_input {amount?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),duration?: (Scalars['numeric'] | null),id?: (Scalars['Int'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** columns and relationships of "iopay_device_config" */
export interface iopay_device_configGenqlSelection{
    created_at?: boolean | number
    deviceToken?: boolean | number
    news_push?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "iopay_device_config". All fields are combined with a logical 'AND'. */
export interface iopay_device_config_bool_exp {_and?: (iopay_device_config_bool_exp[] | null),_not?: (iopay_device_config_bool_exp | null),_or?: (iopay_device_config_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),deviceToken?: (String_comparison_exp | null),news_push?: (Boolean_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for inserting data into table "iopay_device_config" */
export interface iopay_device_config_insert_input {created_at?: (Scalars['timestamptz'] | null),deviceToken?: (Scalars['String'] | null),news_push?: (Scalars['Boolean'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** response of any mutation on the table "iopay_device_config" */
export interface iopay_device_config_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: iopay_device_configGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "iopay_device_config" */
export interface iopay_device_config_on_conflict {constraint: iopay_device_config_constraint,update_columns?: iopay_device_config_update_column[],where?: (iopay_device_config_bool_exp | null)}


/** Ordering options when selecting data from "iopay_device_config". */
export interface iopay_device_config_order_by {created_at?: (order_by | null),deviceToken?: (order_by | null),news_push?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: iopay_device_config */
export interface iopay_device_config_pk_columns_input {deviceToken: Scalars['String']}


/** input type for updating data in table "iopay_device_config" */
export interface iopay_device_config_set_input {created_at?: (Scalars['timestamptz'] | null),deviceToken?: (Scalars['String'] | null),news_push?: (Scalars['Boolean'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** Streaming cursor of the table "iopay_device_config" */
export interface iopay_device_config_stream_cursor_input {
/** Stream column input with initial value */
initial_value: iopay_device_config_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface iopay_device_config_stream_cursor_value_input {created_at?: (Scalars['timestamptz'] | null),deviceToken?: (Scalars['String'] | null),news_push?: (Scalars['Boolean'] | null),updated_at?: (Scalars['timestamptz'] | null)}

export interface iopay_device_config_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (iopay_device_config_set_input | null),
/** filter the rows which have to be updated */
where: iopay_device_config_bool_exp}


/** iopay_earning_banner */
export interface iopay_earning_bannerGenqlSelection{
    id?: boolean | number
    image_url?: boolean | number
    link_url?: boolean | number
    order?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "iopay_earning_banner". All fields are combined with a logical 'AND'. */
export interface iopay_earning_banner_bool_exp {_and?: (iopay_earning_banner_bool_exp[] | null),_not?: (iopay_earning_banner_bool_exp | null),_or?: (iopay_earning_banner_bool_exp[] | null),id?: (Int_comparison_exp | null),image_url?: (String_comparison_exp | null),link_url?: (String_comparison_exp | null),order?: (Int_comparison_exp | null)}


/** Ordering options when selecting data from "iopay_earning_banner". */
export interface iopay_earning_banner_order_by {id?: (order_by | null),image_url?: (order_by | null),link_url?: (order_by | null),order?: (order_by | null)}


/** Streaming cursor of the table "iopay_earning_banner" */
export interface iopay_earning_banner_stream_cursor_input {
/** Stream column input with initial value */
initial_value: iopay_earning_banner_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface iopay_earning_banner_stream_cursor_value_input {id?: (Scalars['Int'] | null),image_url?: (Scalars['String'] | null),link_url?: (Scalars['String'] | null),order?: (Scalars['Int'] | null)}


/** iopay_earning_list */
export interface iopay_earning_listGenqlSelection{
    apy_end?: boolean | number
    apy_start?: boolean | number
    id?: boolean | number
    main_token?: boolean | number
    native_link?: boolean | number
    project_icon?: boolean | number
    project_link?: boolean | number
    project_name?: boolean | number
    term_end?: boolean | number
    term_start?: boolean | number
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "iopay_earning_list". All fields are combined with a logical 'AND'. */
export interface iopay_earning_list_bool_exp {_and?: (iopay_earning_list_bool_exp[] | null),_not?: (iopay_earning_list_bool_exp | null),_or?: (iopay_earning_list_bool_exp[] | null),apy_end?: (Int_comparison_exp | null),apy_start?: (Int_comparison_exp | null),id?: (Int_comparison_exp | null),main_token?: (String_comparison_exp | null),native_link?: (String_comparison_exp | null),project_icon?: (String_comparison_exp | null),project_link?: (String_comparison_exp | null),project_name?: (String_comparison_exp | null),term_end?: (Int_comparison_exp | null),term_start?: (Int_comparison_exp | null),type?: (Int_comparison_exp | null)}


/** Ordering options when selecting data from "iopay_earning_list". */
export interface iopay_earning_list_order_by {apy_end?: (order_by | null),apy_start?: (order_by | null),id?: (order_by | null),main_token?: (order_by | null),native_link?: (order_by | null),project_icon?: (order_by | null),project_link?: (order_by | null),project_name?: (order_by | null),term_end?: (order_by | null),term_start?: (order_by | null),type?: (order_by | null)}


/** Streaming cursor of the table "iopay_earning_list" */
export interface iopay_earning_list_stream_cursor_input {
/** Stream column input with initial value */
initial_value: iopay_earning_list_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface iopay_earning_list_stream_cursor_value_input {apy_end?: (Scalars['Int'] | null),apy_start?: (Scalars['Int'] | null),id?: (Scalars['Int'] | null),main_token?: (Scalars['String'] | null),native_link?: (Scalars['String'] | null),project_icon?: (Scalars['String'] | null),project_link?: (Scalars['String'] | null),project_name?: (Scalars['String'] | null),term_end?: (Scalars['Int'] | null),term_start?: (Scalars['Int'] | null),type?: (Scalars['Int'] | null)}


/** columns and relationships of "iopay_wallet_models" */
export interface iopay_wallet_modelsGenqlSelection{
    __v?: boolean | number
    address?: boolean | number
    createAt?: boolean | number
    deviceToken?: boolean | number
    id?: boolean | number
    name?: boolean | number
    platform?: boolean | number
    registerPushNotification?: boolean | number
    updateAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "iopay_wallet_models". All fields are combined with a logical 'AND'. */
export interface iopay_wallet_models_bool_exp {__v?: (String_comparison_exp | null),_and?: (iopay_wallet_models_bool_exp[] | null),_not?: (iopay_wallet_models_bool_exp | null),_or?: (iopay_wallet_models_bool_exp[] | null),address?: (String_comparison_exp | null),createAt?: (timestamptz_comparison_exp | null),deviceToken?: (String_comparison_exp | null),id?: (String_comparison_exp | null),name?: (String_comparison_exp | null),platform?: (String_comparison_exp | null),registerPushNotification?: (String_comparison_exp | null),updateAt?: (timestamptz_comparison_exp | null)}


/** input type for inserting data into table "iopay_wallet_models" */
export interface iopay_wallet_models_insert_input {__v?: (Scalars['String'] | null),address?: (Scalars['String'] | null),createAt?: (Scalars['timestamptz'] | null),deviceToken?: (Scalars['String'] | null),id?: (Scalars['String'] | null),name?: (Scalars['String'] | null),platform?: (Scalars['String'] | null),registerPushNotification?: (Scalars['String'] | null),updateAt?: (Scalars['timestamptz'] | null)}


/** response of any mutation on the table "iopay_wallet_models" */
export interface iopay_wallet_models_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: iopay_wallet_modelsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "iopay_wallet_models" */
export interface iopay_wallet_models_on_conflict {constraint: iopay_wallet_models_constraint,update_columns?: iopay_wallet_models_update_column[],where?: (iopay_wallet_models_bool_exp | null)}


/** Ordering options when selecting data from "iopay_wallet_models". */
export interface iopay_wallet_models_order_by {__v?: (order_by | null),address?: (order_by | null),createAt?: (order_by | null),deviceToken?: (order_by | null),id?: (order_by | null),name?: (order_by | null),platform?: (order_by | null),registerPushNotification?: (order_by | null),updateAt?: (order_by | null)}


/** primary key columns input for table: iopay_wallet_models */
export interface iopay_wallet_models_pk_columns_input {id: Scalars['String']}


/** Streaming cursor of the table "iopay_wallet_models" */
export interface iopay_wallet_models_stream_cursor_input {
/** Stream column input with initial value */
initial_value: iopay_wallet_models_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface iopay_wallet_models_stream_cursor_value_input {__v?: (Scalars['String'] | null),address?: (Scalars['String'] | null),createAt?: (Scalars['timestamptz'] | null),deviceToken?: (Scalars['String'] | null),id?: (Scalars['String'] | null),name?: (Scalars['String'] | null),platform?: (Scalars['String'] | null),registerPushNotification?: (Scalars['String'] | null),updateAt?: (Scalars['timestamptz'] | null)}


/** columns and relationships of "iopay_wallet_models_test2" */
export interface iopay_wallet_models_test2GenqlSelection{
    address?: boolean | number
    createAt?: boolean | number
    deviceToken?: boolean | number
    id?: boolean | number
    name?: boolean | number
    platform?: boolean | number
    registerPushNotification?: boolean | number
    updateAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "iopay_wallet_models_test2". All fields are combined with a logical 'AND'. */
export interface iopay_wallet_models_test2_bool_exp {_and?: (iopay_wallet_models_test2_bool_exp[] | null),_not?: (iopay_wallet_models_test2_bool_exp | null),_or?: (iopay_wallet_models_test2_bool_exp[] | null),address?: (String_comparison_exp | null),createAt?: (timestamptz_comparison_exp | null),deviceToken?: (String_comparison_exp | null),id?: (String_comparison_exp | null),name?: (String_comparison_exp | null),platform?: (String_comparison_exp | null),registerPushNotification?: (String_comparison_exp | null),updateAt?: (timestamptz_comparison_exp | null)}


/** input type for inserting data into table "iopay_wallet_models_test2" */
export interface iopay_wallet_models_test2_insert_input {address?: (Scalars['String'] | null),createAt?: (Scalars['timestamptz'] | null),deviceToken?: (Scalars['String'] | null),id?: (Scalars['String'] | null),name?: (Scalars['String'] | null),platform?: (Scalars['String'] | null),registerPushNotification?: (Scalars['String'] | null),updateAt?: (Scalars['timestamptz'] | null)}


/** response of any mutation on the table "iopay_wallet_models_test2" */
export interface iopay_wallet_models_test2_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: iopay_wallet_models_test2GenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "iopay_wallet_models_test2" */
export interface iopay_wallet_models_test2_on_conflict {constraint: iopay_wallet_models_test2_constraint,update_columns?: iopay_wallet_models_test2_update_column[],where?: (iopay_wallet_models_test2_bool_exp | null)}


/** Ordering options when selecting data from "iopay_wallet_models_test2". */
export interface iopay_wallet_models_test2_order_by {address?: (order_by | null),createAt?: (order_by | null),deviceToken?: (order_by | null),id?: (order_by | null),name?: (order_by | null),platform?: (order_by | null),registerPushNotification?: (order_by | null),updateAt?: (order_by | null)}


/** Streaming cursor of the table "iopay_wallet_models_test2" */
export interface iopay_wallet_models_test2_stream_cursor_input {
/** Stream column input with initial value */
initial_value: iopay_wallet_models_test2_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface iopay_wallet_models_test2_stream_cursor_value_input {address?: (Scalars['String'] | null),createAt?: (Scalars['timestamptz'] | null),deviceToken?: (Scalars['String'] | null),id?: (Scalars['String'] | null),name?: (Scalars['String'] | null),platform?: (Scalars['String'] | null),registerPushNotification?: (Scalars['String'] | null),updateAt?: (Scalars['timestamptz'] | null)}

export interface iopay_wallet_models_updates {
/** filter the rows which have to be updated */
where: iopay_wallet_models_bool_exp}


/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export interface json_comparison_exp {_eq?: (Scalars['json'] | null),_gt?: (Scalars['json'] | null),_gte?: (Scalars['json'] | null),_in?: (Scalars['json'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['json'] | null),_lte?: (Scalars['json'] | null),_neq?: (Scalars['json'] | null),_nin?: (Scalars['json'][] | null)}

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


/** columns and relationships of "media" */
export interface mediaGenqlSelection{
    author?: boolean | number
    categories?: boolean | number
    date?: boolean | number
    description?: boolean | number
    id?: boolean | number
    img_url?: boolean | number
    link?: boolean | number
    source?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "media". All fields are combined with a logical 'AND'. */
export interface media_bool_exp {_and?: (media_bool_exp[] | null),_not?: (media_bool_exp | null),_or?: (media_bool_exp[] | null),author?: (String_comparison_exp | null),categories?: (String_array_comparison_exp | null),date?: (timestamp_comparison_exp | null),description?: (String_comparison_exp | null),id?: (String_comparison_exp | null),img_url?: (String_comparison_exp | null),link?: (String_comparison_exp | null),source?: (String_comparison_exp | null),title?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "media". */
export interface media_order_by {author?: (order_by | null),categories?: (order_by | null),date?: (order_by | null),description?: (order_by | null),id?: (order_by | null),img_url?: (order_by | null),link?: (order_by | null),source?: (order_by | null),title?: (order_by | null)}


/** Streaming cursor of the table "media" */
export interface media_stream_cursor_input {
/** Stream column input with initial value */
initial_value: media_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface media_stream_cursor_value_input {author?: (Scalars['String'] | null),categories?: (Scalars['String'][] | null),date?: (Scalars['timestamp'] | null),description?: (Scalars['String'] | null),id?: (Scalars['String'] | null),img_url?: (Scalars['String'] | null),link?: (Scalars['String'] | null),source?: (Scalars['String'] | null),title?: (Scalars['String'] | null)}


/** columns and relationships of "metaPebble.pebble_contract" */
export interface metaPebble_pebble_contractGenqlSelection{
    abi?: boolean | number
    address?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "metaPebble.pebble_contract". All fields are combined with a logical 'AND'. */
export interface metaPebble_pebble_contract_bool_exp {_and?: (metaPebble_pebble_contract_bool_exp[] | null),_not?: (metaPebble_pebble_contract_bool_exp | null),_or?: (metaPebble_pebble_contract_bool_exp[] | null),abi?: (String_comparison_exp | null),address?: (String_comparison_exp | null),name?: (String_comparison_exp | null)}


/** columns and relationships of "metaPebble.pebble_contract_mainnet" */
export interface metaPebble_pebble_contract_mainnetGenqlSelection{
    abi?: boolean | number
    address?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "metaPebble.pebble_contract_mainnet". All fields are combined with a logical 'AND'. */
export interface metaPebble_pebble_contract_mainnet_bool_exp {_and?: (metaPebble_pebble_contract_mainnet_bool_exp[] | null),_not?: (metaPebble_pebble_contract_mainnet_bool_exp | null),_or?: (metaPebble_pebble_contract_mainnet_bool_exp[] | null),abi?: (String_comparison_exp | null),address?: (String_comparison_exp | null),name?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "metaPebble.pebble_contract_mainnet". */
export interface metaPebble_pebble_contract_mainnet_order_by {abi?: (order_by | null),address?: (order_by | null),name?: (order_by | null)}


/** Streaming cursor of the table "metaPebble_pebble_contract_mainnet" */
export interface metaPebble_pebble_contract_mainnet_stream_cursor_input {
/** Stream column input with initial value */
initial_value: metaPebble_pebble_contract_mainnet_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface metaPebble_pebble_contract_mainnet_stream_cursor_value_input {abi?: (Scalars['String'] | null),address?: (Scalars['String'] | null),name?: (Scalars['String'] | null)}


/** Ordering options when selecting data from "metaPebble.pebble_contract". */
export interface metaPebble_pebble_contract_order_by {abi?: (order_by | null),address?: (order_by | null),name?: (order_by | null)}


/** Streaming cursor of the table "metaPebble_pebble_contract" */
export interface metaPebble_pebble_contract_stream_cursor_input {
/** Stream column input with initial value */
initial_value: metaPebble_pebble_contract_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface metaPebble_pebble_contract_stream_cursor_value_input {abi?: (Scalars['String'] | null),address?: (Scalars['String'] | null),name?: (Scalars['String'] | null)}


/** columns and relationships of "metaPebble.version_android" */
export interface metaPebble_version_androidGenqlSelection{
    code?: boolean | number
    content?: boolean | number
    forced_code?: boolean | number
    id?: boolean | number
    url?: boolean | number
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "metaPebble.version_android". All fields are combined with a logical 'AND'. */
export interface metaPebble_version_android_bool_exp {_and?: (metaPebble_version_android_bool_exp[] | null),_not?: (metaPebble_version_android_bool_exp | null),_or?: (metaPebble_version_android_bool_exp[] | null),code?: (Int_comparison_exp | null),content?: (String_comparison_exp | null),forced_code?: (Int_comparison_exp | null),id?: (Int_comparison_exp | null),url?: (String_comparison_exp | null),version?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "metaPebble.version_android". */
export interface metaPebble_version_android_order_by {code?: (order_by | null),content?: (order_by | null),forced_code?: (order_by | null),id?: (order_by | null),url?: (order_by | null),version?: (order_by | null)}


/** Streaming cursor of the table "metaPebble_version_android" */
export interface metaPebble_version_android_stream_cursor_input {
/** Stream column input with initial value */
initial_value: metaPebble_version_android_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface metaPebble_version_android_stream_cursor_value_input {code?: (Scalars['Int'] | null),content?: (Scalars['String'] | null),forced_code?: (Scalars['Int'] | null),id?: (Scalars['Int'] | null),url?: (Scalars['String'] | null),version?: (Scalars['String'] | null)}


/** columns and relationships of "metaPebble.version_ios" */
export interface metaPebble_version_iosGenqlSelection{
    content?: boolean | number
    forced_version?: boolean | number
    url?: boolean | number
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "metaPebble.version_ios". All fields are combined with a logical 'AND'. */
export interface metaPebble_version_ios_bool_exp {_and?: (metaPebble_version_ios_bool_exp[] | null),_not?: (metaPebble_version_ios_bool_exp | null),_or?: (metaPebble_version_ios_bool_exp[] | null),content?: (String_comparison_exp | null),forced_version?: (String_comparison_exp | null),url?: (String_comparison_exp | null),version?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "metaPebble.version_ios". */
export interface metaPebble_version_ios_order_by {content?: (order_by | null),forced_version?: (order_by | null),url?: (order_by | null),version?: (order_by | null)}


/** Streaming cursor of the table "metaPebble_version_ios" */
export interface metaPebble_version_ios_stream_cursor_input {
/** Stream column input with initial value */
initial_value: metaPebble_version_ios_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface metaPebble_version_ios_stream_cursor_value_input {content?: (Scalars['String'] | null),forced_version?: (Scalars['String'] | null),url?: (Scalars['String'] | null),version?: (Scalars['String'] | null)}


/** mutation root */
export interface mutation_rootGenqlSelection{
    /** insert data into the table: "iopay_device_config" */
    insert_iopay_device_config?: (iopay_device_config_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: iopay_device_config_insert_input[], 
    /** upsert condition */
    on_conflict?: (iopay_device_config_on_conflict | null)} })
    /** insert a single row into the table: "iopay_device_config" */
    insert_iopay_device_config_one?: (iopay_device_configGenqlSelection & { __args: {
    /** the row to be inserted */
    object: iopay_device_config_insert_input, 
    /** upsert condition */
    on_conflict?: (iopay_device_config_on_conflict | null)} })
    /** insert data into the table: "iopay_wallet_models" */
    insert_iopay_wallet_models?: (iopay_wallet_models_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: iopay_wallet_models_insert_input[], 
    /** upsert condition */
    on_conflict?: (iopay_wallet_models_on_conflict | null)} })
    /** insert a single row into the table: "iopay_wallet_models" */
    insert_iopay_wallet_models_one?: (iopay_wallet_modelsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: iopay_wallet_models_insert_input, 
    /** upsert condition */
    on_conflict?: (iopay_wallet_models_on_conflict | null)} })
    /** insert data into the table: "iopay_wallet_models_test2" */
    insert_iopay_wallet_models_test2?: (iopay_wallet_models_test2_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: iopay_wallet_models_test2_insert_input[], 
    /** upsert condition */
    on_conflict?: (iopay_wallet_models_test2_on_conflict | null)} })
    /** insert a single row into the table: "iopay_wallet_models_test2" */
    insert_iopay_wallet_models_test2_one?: (iopay_wallet_models_test2GenqlSelection & { __args: {
    /** the row to be inserted */
    object: iopay_wallet_models_test2_insert_input, 
    /** upsert condition */
    on_conflict?: (iopay_wallet_models_test2_on_conflict | null)} })
    /** insert data into the table: "wallet_info" */
    insert_wallet_info?: (wallet_info_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: wallet_info_insert_input[], 
    /** upsert condition */
    on_conflict?: (wallet_info_on_conflict | null)} })
    /** insert a single row into the table: "wallet_info" */
    insert_wallet_info_one?: (wallet_infoGenqlSelection & { __args: {
    /** the row to be inserted */
    object: wallet_info_insert_input, 
    /** upsert condition */
    on_conflict?: (wallet_info_on_conflict | null)} })
    /** update data of the table: "iopay_device_config" */
    update_iopay_device_config?: (iopay_device_config_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (iopay_device_config_set_input | null), 
    /** filter the rows which have to be updated */
    where: iopay_device_config_bool_exp} })
    /** update single row of the table: "iopay_device_config" */
    update_iopay_device_config_by_pk?: (iopay_device_configGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (iopay_device_config_set_input | null), pk_columns: iopay_device_config_pk_columns_input} })
    /** update multiples rows of table: "iopay_device_config" */
    update_iopay_device_config_many?: (iopay_device_config_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: iopay_device_config_updates[]} })
    /** update data of the table: "iopay_wallet_models" */
    update_iopay_wallet_models?: (iopay_wallet_models_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be updated */
    where: iopay_wallet_models_bool_exp} })
    /** update single row of the table: "iopay_wallet_models" */
    update_iopay_wallet_models_by_pk?: (iopay_wallet_modelsGenqlSelection & { __args: {pk_columns: iopay_wallet_models_pk_columns_input} })
    /** update multiples rows of table: "iopay_wallet_models" */
    update_iopay_wallet_models_many?: (iopay_wallet_models_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: iopay_wallet_models_updates[]} })
    /** update data of the table: "wallet_info" */
    update_wallet_info?: (wallet_info_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (wallet_info_set_input | null), 
    /** filter the rows which have to be updated */
    where: wallet_info_bool_exp} })
    /** update single row of the table: "wallet_info" */
    update_wallet_info_by_pk?: (wallet_infoGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (wallet_info_set_input | null), pk_columns: wallet_info_pk_columns_input} })
    /** update multiples rows of table: "wallet_info" */
    update_wallet_info_many?: (wallet_info_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: wallet_info_updates[]} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aa wallet network config */
export interface network_aa_configGenqlSelection{
    bound_email?: boolean | number
    bundler_service?: boolean | number
    chain_id?: boolean | number
    email_service?: boolean | number
    entry_point?: boolean | number
    factory?: boolean | number
    forceUsePaymaster?: boolean | number
    paymaster_service?: boolean | number
    subgraph?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "network_aa_config". All fields are combined with a logical 'AND'. */
export interface network_aa_config_bool_exp {_and?: (network_aa_config_bool_exp[] | null),_not?: (network_aa_config_bool_exp | null),_or?: (network_aa_config_bool_exp[] | null),bound_email?: (String_comparison_exp | null),bundler_service?: (String_comparison_exp | null),chain_id?: (Int_comparison_exp | null),email_service?: (String_comparison_exp | null),entry_point?: (String_comparison_exp | null),factory?: (String_comparison_exp | null),forceUsePaymaster?: (Boolean_comparison_exp | null),paymaster_service?: (String_comparison_exp | null),subgraph?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "network_aa_config". */
export interface network_aa_config_order_by {bound_email?: (order_by | null),bundler_service?: (order_by | null),chain_id?: (order_by | null),email_service?: (order_by | null),entry_point?: (order_by | null),factory?: (order_by | null),forceUsePaymaster?: (order_by | null),paymaster_service?: (order_by | null),subgraph?: (order_by | null)}


/** Streaming cursor of the table "network_aa_config" */
export interface network_aa_config_stream_cursor_input {
/** Stream column input with initial value */
initial_value: network_aa_config_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface network_aa_config_stream_cursor_value_input {bound_email?: (Scalars['String'] | null),bundler_service?: (Scalars['String'] | null),chain_id?: (Scalars['Int'] | null),email_service?: (Scalars['String'] | null),entry_point?: (Scalars['String'] | null),factory?: (Scalars['String'] | null),forceUsePaymaster?: (Scalars['Boolean'] | null),paymaster_service?: (Scalars['String'] | null),subgraph?: (Scalars['String'] | null)}


/** columns and relationships of "network_chain_theme" */
export interface network_chain_themeGenqlSelection{
    back_image?: boolean | number
    chain_id?: boolean | number
    logo_image?: boolean | number
    theme_color?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "network_chain_theme". All fields are combined with a logical 'AND'. */
export interface network_chain_theme_bool_exp {_and?: (network_chain_theme_bool_exp[] | null),_not?: (network_chain_theme_bool_exp | null),_or?: (network_chain_theme_bool_exp[] | null),back_image?: (String_comparison_exp | null),chain_id?: (Int_comparison_exp | null),logo_image?: (String_comparison_exp | null),theme_color?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "network_chain_theme". */
export interface network_chain_theme_order_by {back_image?: (order_by | null),chain_id?: (order_by | null),logo_image?: (order_by | null),theme_color?: (order_by | null)}


/** Streaming cursor of the table "network_chain_theme" */
export interface network_chain_theme_stream_cursor_input {
/** Stream column input with initial value */
initial_value: network_chain_theme_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface network_chain_theme_stream_cursor_value_input {back_image?: (Scalars['String'] | null),chain_id?: (Scalars['Int'] | null),logo_image?: (Scalars['String'] | null),theme_color?: (Scalars['String'] | null)}


/** columns and relationships of "network_config" */
export interface network_configGenqlSelection{
    account_factory?: boolean | number
    back_image?: boolean | number
    chain_icon?: boolean | number
    chain_icon_selected?: boolean | number
    chain_id?: boolean | number
    contract_email?: boolean | number
    entry_point?: boolean | number
    gas_limit?: boolean | number
    gas_price?: boolean | number
    gas_station?: boolean | number
    logo_image?: boolean | number
    theme_color?: boolean | number
    token_approval_checker?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "network_config". All fields are combined with a logical 'AND'. */
export interface network_config_bool_exp {_and?: (network_config_bool_exp[] | null),_not?: (network_config_bool_exp | null),_or?: (network_config_bool_exp[] | null),account_factory?: (String_comparison_exp | null),back_image?: (String_comparison_exp | null),chain_icon?: (String_comparison_exp | null),chain_icon_selected?: (String_comparison_exp | null),chain_id?: (Int_comparison_exp | null),contract_email?: (String_comparison_exp | null),entry_point?: (String_comparison_exp | null),gas_limit?: (bigint_comparison_exp | null),gas_price?: (bigint_comparison_exp | null),gas_station?: (String_comparison_exp | null),logo_image?: (String_comparison_exp | null),theme_color?: (String_comparison_exp | null),token_approval_checker?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "network_config". */
export interface network_config_order_by {account_factory?: (order_by | null),back_image?: (order_by | null),chain_icon?: (order_by | null),chain_icon_selected?: (order_by | null),chain_id?: (order_by | null),contract_email?: (order_by | null),entry_point?: (order_by | null),gas_limit?: (order_by | null),gas_price?: (order_by | null),gas_station?: (order_by | null),logo_image?: (order_by | null),theme_color?: (order_by | null),token_approval_checker?: (order_by | null)}


/** Streaming cursor of the table "network_config" */
export interface network_config_stream_cursor_input {
/** Stream column input with initial value */
initial_value: network_config_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface network_config_stream_cursor_value_input {account_factory?: (Scalars['String'] | null),back_image?: (Scalars['String'] | null),chain_icon?: (Scalars['String'] | null),chain_icon_selected?: (Scalars['String'] | null),chain_id?: (Scalars['Int'] | null),contract_email?: (Scalars['String'] | null),entry_point?: (Scalars['String'] | null),gas_limit?: (Scalars['bigint'] | null),gas_price?: (Scalars['bigint'] | null),gas_station?: (Scalars['String'] | null),logo_image?: (Scalars['String'] | null),theme_color?: (Scalars['String'] | null),token_approval_checker?: (Scalars['String'] | null)}


/** columns and relationships of "network_list" */
export interface network_listGenqlSelection{
    bg_color_end?: boolean | number
    bg_color_start?: boolean | number
    bg_image?: boolean | number
    chainId?: boolean | number
    config?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    devMode?: boolean | number
    explorer?: boolean | number
    icon?: boolean | number
    id?: boolean | number
    logoUrl?: boolean | number
    more_config?: boolean | number
    multicallAddr?: boolean | number
    name?: boolean | number
    nativeCurrencyId?: boolean | number
    /** An object relationship */
    nativeCurrencyMarket?: coingeko_marketGenqlSelection
    networkName?: boolean | number
    /** An object relationship */
    network_chain_theme?: network_chain_themeGenqlSelection
    /** An object relationship */
    network_config?: network_configGenqlSelection
    order?: boolean | number
    platform?: boolean | number
    rpc?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    shortName?: boolean | number
    swapUrl?: boolean | number
    theme_bg?: boolean | number
    theme_bg2?: boolean | number
    tokensAlias?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "network_list" */
export interface network_list_aggregateGenqlSelection{
    aggregate?: network_list_aggregate_fieldsGenqlSelection
    nodes?: network_listGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "network_list" */
export interface network_list_aggregate_fieldsGenqlSelection{
    avg?: network_list_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (network_list_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: network_list_max_fieldsGenqlSelection
    min?: network_list_min_fieldsGenqlSelection
    stddev?: network_list_stddev_fieldsGenqlSelection
    stddev_pop?: network_list_stddev_pop_fieldsGenqlSelection
    stddev_samp?: network_list_stddev_samp_fieldsGenqlSelection
    sum?: network_list_sum_fieldsGenqlSelection
    var_pop?: network_list_var_pop_fieldsGenqlSelection
    var_samp?: network_list_var_samp_fieldsGenqlSelection
    variance?: network_list_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface network_list_avg_fieldsGenqlSelection{
    chainId?: boolean | number
    id?: boolean | number
    more_config?: boolean | number
    order?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "network_list". All fields are combined with a logical 'AND'. */
export interface network_list_bool_exp {_and?: (network_list_bool_exp[] | null),_not?: (network_list_bool_exp | null),_or?: (network_list_bool_exp[] | null),bg_color_end?: (String_comparison_exp | null),bg_color_start?: (String_comparison_exp | null),bg_image?: (String_comparison_exp | null),chainId?: (Int_comparison_exp | null),config?: (json_comparison_exp | null),devMode?: (Boolean_comparison_exp | null),explorer?: (String_comparison_exp | null),icon?: (String_comparison_exp | null),id?: (Int_comparison_exp | null),logoUrl?: (String_comparison_exp | null),more_config?: (Int_comparison_exp | null),multicallAddr?: (String_comparison_exp | null),name?: (String_comparison_exp | null),nativeCurrencyId?: (String_comparison_exp | null),nativeCurrencyMarket?: (coingeko_market_bool_exp | null),networkName?: (String_comparison_exp | null),network_chain_theme?: (network_chain_theme_bool_exp | null),network_config?: (network_config_bool_exp | null),order?: (Int_comparison_exp | null),platform?: (String_comparison_exp | null),rpc?: (jsonb_comparison_exp | null),shortName?: (String_comparison_exp | null),swapUrl?: (String_comparison_exp | null),theme_bg?: (String_comparison_exp | null),theme_bg2?: (String_comparison_exp | null),tokensAlias?: (String_comparison_exp | null)}


/** aggregate max on columns */
export interface network_list_max_fieldsGenqlSelection{
    bg_color_end?: boolean | number
    bg_color_start?: boolean | number
    bg_image?: boolean | number
    chainId?: boolean | number
    explorer?: boolean | number
    icon?: boolean | number
    id?: boolean | number
    logoUrl?: boolean | number
    more_config?: boolean | number
    multicallAddr?: boolean | number
    name?: boolean | number
    nativeCurrencyId?: boolean | number
    networkName?: boolean | number
    order?: boolean | number
    platform?: boolean | number
    shortName?: boolean | number
    swapUrl?: boolean | number
    theme_bg?: boolean | number
    theme_bg2?: boolean | number
    tokensAlias?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface network_list_min_fieldsGenqlSelection{
    bg_color_end?: boolean | number
    bg_color_start?: boolean | number
    bg_image?: boolean | number
    chainId?: boolean | number
    explorer?: boolean | number
    icon?: boolean | number
    id?: boolean | number
    logoUrl?: boolean | number
    more_config?: boolean | number
    multicallAddr?: boolean | number
    name?: boolean | number
    nativeCurrencyId?: boolean | number
    networkName?: boolean | number
    order?: boolean | number
    platform?: boolean | number
    shortName?: boolean | number
    swapUrl?: boolean | number
    theme_bg?: boolean | number
    theme_bg2?: boolean | number
    tokensAlias?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Ordering options when selecting data from "network_list". */
export interface network_list_order_by {bg_color_end?: (order_by | null),bg_color_start?: (order_by | null),bg_image?: (order_by | null),chainId?: (order_by | null),config?: (order_by | null),devMode?: (order_by | null),explorer?: (order_by | null),icon?: (order_by | null),id?: (order_by | null),logoUrl?: (order_by | null),more_config?: (order_by | null),multicallAddr?: (order_by | null),name?: (order_by | null),nativeCurrencyId?: (order_by | null),nativeCurrencyMarket?: (coingeko_market_order_by | null),networkName?: (order_by | null),network_chain_theme?: (network_chain_theme_order_by | null),network_config?: (network_config_order_by | null),order?: (order_by | null),platform?: (order_by | null),rpc?: (order_by | null),shortName?: (order_by | null),swapUrl?: (order_by | null),theme_bg?: (order_by | null),theme_bg2?: (order_by | null),tokensAlias?: (order_by | null)}


/** aggregate stddev on columns */
export interface network_list_stddev_fieldsGenqlSelection{
    chainId?: boolean | number
    id?: boolean | number
    more_config?: boolean | number
    order?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface network_list_stddev_pop_fieldsGenqlSelection{
    chainId?: boolean | number
    id?: boolean | number
    more_config?: boolean | number
    order?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface network_list_stddev_samp_fieldsGenqlSelection{
    chainId?: boolean | number
    id?: boolean | number
    more_config?: boolean | number
    order?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "network_list" */
export interface network_list_stream_cursor_input {
/** Stream column input with initial value */
initial_value: network_list_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface network_list_stream_cursor_value_input {bg_color_end?: (Scalars['String'] | null),bg_color_start?: (Scalars['String'] | null),bg_image?: (Scalars['String'] | null),chainId?: (Scalars['Int'] | null),config?: (Scalars['json'] | null),devMode?: (Scalars['Boolean'] | null),explorer?: (Scalars['String'] | null),icon?: (Scalars['String'] | null),id?: (Scalars['Int'] | null),logoUrl?: (Scalars['String'] | null),more_config?: (Scalars['Int'] | null),multicallAddr?: (Scalars['String'] | null),name?: (Scalars['String'] | null),nativeCurrencyId?: (Scalars['String'] | null),networkName?: (Scalars['String'] | null),order?: (Scalars['Int'] | null),platform?: (Scalars['String'] | null),rpc?: (Scalars['jsonb'] | null),shortName?: (Scalars['String'] | null),swapUrl?: (Scalars['String'] | null),theme_bg?: (Scalars['String'] | null),theme_bg2?: (Scalars['String'] | null),tokensAlias?: (Scalars['String'] | null)}


/** aggregate sum on columns */
export interface network_list_sum_fieldsGenqlSelection{
    chainId?: boolean | number
    id?: boolean | number
    more_config?: boolean | number
    order?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_pop on columns */
export interface network_list_var_pop_fieldsGenqlSelection{
    chainId?: boolean | number
    id?: boolean | number
    more_config?: boolean | number
    order?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface network_list_var_samp_fieldsGenqlSelection{
    chainId?: boolean | number
    id?: boolean | number
    more_config?: boolean | number
    order?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface network_list_variance_fieldsGenqlSelection{
    chainId?: boolean | number
    id?: boolean | number
    more_config?: boolean | number
    order?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "new_wallet_claims" */
export interface new_wallet_claimsGenqlSelection{
    __v?: boolean | number
    address?: boolean | number
    claimStatus?: boolean | number
    createAt?: boolean | number
    deviceId?: boolean | number
    id?: boolean | number
    iotxTransferActionHash?: boolean | number
    requestIp?: boolean | number
    updateAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "new_wallet_claims". All fields are combined with a logical 'AND'. */
export interface new_wallet_claims_bool_exp {__v?: (String_comparison_exp | null),_and?: (new_wallet_claims_bool_exp[] | null),_not?: (new_wallet_claims_bool_exp | null),_or?: (new_wallet_claims_bool_exp[] | null),address?: (String_comparison_exp | null),claimStatus?: (String_comparison_exp | null),createAt?: (timestamptz_comparison_exp | null),deviceId?: (String_comparison_exp | null),id?: (String_comparison_exp | null),iotxTransferActionHash?: (String_comparison_exp | null),requestIp?: (String_comparison_exp | null),updateAt?: (timestamptz_comparison_exp | null)}


/** Ordering options when selecting data from "new_wallet_claims". */
export interface new_wallet_claims_order_by {__v?: (order_by | null),address?: (order_by | null),claimStatus?: (order_by | null),createAt?: (order_by | null),deviceId?: (order_by | null),id?: (order_by | null),iotxTransferActionHash?: (order_by | null),requestIp?: (order_by | null),updateAt?: (order_by | null)}


/** Streaming cursor of the table "new_wallet_claims" */
export interface new_wallet_claims_stream_cursor_input {
/** Stream column input with initial value */
initial_value: new_wallet_claims_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface new_wallet_claims_stream_cursor_value_input {__v?: (Scalars['String'] | null),address?: (Scalars['String'] | null),claimStatus?: (Scalars['String'] | null),createAt?: (Scalars['timestamptz'] | null),deviceId?: (Scalars['String'] | null),id?: (Scalars['String'] | null),iotxTransferActionHash?: (Scalars['String'] | null),requestIp?: (Scalars['String'] | null),updateAt?: (Scalars['timestamptz'] | null)}


/** columns and relationships of "nft_token_list" */
export interface nft_token_listGenqlSelection{
    address?: boolean | number
    chainId?: boolean | number
    decimals?: boolean | number
    id?: boolean | number
    logo?: boolean | number
    name?: boolean | number
    source?: boolean | number
    symbol?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "nft_token_list". All fields are combined with a logical 'AND'. */
export interface nft_token_list_bool_exp {_and?: (nft_token_list_bool_exp[] | null),_not?: (nft_token_list_bool_exp | null),_or?: (nft_token_list_bool_exp[] | null),address?: (String_comparison_exp | null),chainId?: (Int_comparison_exp | null),decimals?: (Int_comparison_exp | null),id?: (String_comparison_exp | null),logo?: (String_comparison_exp | null),name?: (String_comparison_exp | null),source?: (String_comparison_exp | null),symbol?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "nft_token_list". */
export interface nft_token_list_order_by {address?: (order_by | null),chainId?: (order_by | null),decimals?: (order_by | null),id?: (order_by | null),logo?: (order_by | null),name?: (order_by | null),source?: (order_by | null),symbol?: (order_by | null)}


/** Streaming cursor of the table "nft_token_list" */
export interface nft_token_list_stream_cursor_input {
/** Stream column input with initial value */
initial_value: nft_token_list_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface nft_token_list_stream_cursor_value_input {address?: (Scalars['String'] | null),chainId?: (Scalars['Int'] | null),decimals?: (Scalars['Int'] | null),id?: (Scalars['String'] | null),logo?: (Scalars['String'] | null),name?: (Scalars['String'] | null),source?: (Scalars['String'] | null),symbol?: (Scalars['String'] | null)}


/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export interface numeric_comparison_exp {_eq?: (Scalars['numeric'] | null),_gt?: (Scalars['numeric'] | null),_gte?: (Scalars['numeric'] | null),_in?: (Scalars['numeric'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['numeric'] | null),_lte?: (Scalars['numeric'] | null),_neq?: (Scalars['numeric'] | null),_nin?: (Scalars['numeric'][] | null)}

export interface query_rootGenqlSelection{
    /** fetch data from the table: "app_img_cache_update" */
    app_img_cache_update?: (app_img_cache_updateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (app_img_cache_update_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (app_img_cache_update_order_by[] | null), 
    /** filter the rows returned */
    where?: (app_img_cache_update_bool_exp | null)} })
    /** fetch data from the table: "app_img_cache_update" using primary key columns */
    app_img_cache_update_by_pk?: (app_img_cache_updateGenqlSelection & { __args: {id: Scalars['bigint']} })
    /** fetch data from the table: "buy_iotex" */
    buy_iotex?: (buy_iotexGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (buy_iotex_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (buy_iotex_order_by[] | null), 
    /** filter the rows returned */
    where?: (buy_iotex_bool_exp | null)} })
    /** fetch data from the table: "buy_iotex" using primary key columns */
    buy_iotex_by_pk?: (buy_iotexGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "campaign_labels" */
    campaign_labels?: (campaign_labelsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (campaign_labels_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (campaign_labels_order_by[] | null), 
    /** filter the rows returned */
    where?: (campaign_labels_bool_exp | null)} })
    /** fetch data from the table: "campaign_labels" using primary key columns */
    campaign_labels_by_pk?: (campaign_labelsGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "campaign_list" */
    campaign_list?: (campaign_listGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (campaign_list_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (campaign_list_order_by[] | null), 
    /** filter the rows returned */
    where?: (campaign_list_bool_exp | null)} })
    /** fetch data from the table: "campaign_list" using primary key columns */
    campaign_list_by_pk?: (campaign_listGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "certified_contract" */
    certified_contract?: (certified_contractGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (certified_contract_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (certified_contract_order_by[] | null), 
    /** filter the rows returned */
    where?: (certified_contract_bool_exp | null)} })
    /** fetch data from the table: "certified_contract" using primary key columns */
    certified_contract_by_pk?: (certified_contractGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "coingecko_coin_detail" */
    coingecko_coin_detail?: (coingecko_coin_detailGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (coingecko_coin_detail_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (coingecko_coin_detail_order_by[] | null), 
    /** filter the rows returned */
    where?: (coingecko_coin_detail_bool_exp | null)} })
    /** fetch data from the table: "coingecko_coin_detail" using primary key columns */
    coingecko_coin_detail_by_pk?: (coingecko_coin_detailGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "coingeko_market" */
    coingeko_market?: (coingeko_marketGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (coingeko_market_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (coingeko_market_order_by[] | null), 
    /** filter the rows returned */
    where?: (coingeko_market_bool_exp | null)} })
    /** fetch data from the table: "coingeko_market" using primary key columns */
    coingeko_market_by_pk?: (coingeko_marketGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "contract_error_msg" */
    contract_error_msg?: (contract_error_msgGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (contract_error_msg_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (contract_error_msg_order_by[] | null), 
    /** filter the rows returned */
    where?: (contract_error_msg_bool_exp | null)} })
    /** fetch data from the table: "contract_error_msg" using primary key columns */
    contract_error_msg_by_pk?: (contract_error_msgGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "dapp_category" */
    dapp_category?: (dapp_categoryGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dapp_category_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dapp_category_order_by[] | null), 
    /** filter the rows returned */
    where?: (dapp_category_bool_exp | null)} })
    /** fetch data from the table: "dapp_category_banner" */
    dapp_category_banner?: (dapp_category_bannerGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dapp_category_banner_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dapp_category_banner_order_by[] | null), 
    /** filter the rows returned */
    where?: (dapp_category_banner_bool_exp | null)} })
    /** fetch data from the table: "dapp_category_banner" using primary key columns */
    dapp_category_banner_by_pk?: (dapp_category_bannerGenqlSelection & { __args: {link: Scalars['String']} })
    /** fetch data from the table: "dapp_category" using primary key columns */
    dapp_category_by_pk?: (dapp_categoryGenqlSelection & { __args: {id: Scalars['bigint']} })
    /** fetch data from the table: "dapp_list" */
    dapp_list?: (dapp_listGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dapp_list_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dapp_list_order_by[] | null), 
    /** filter the rows returned */
    where?: (dapp_list_bool_exp | null)} })
    /** fetch data from the table: "dapp_list" using primary key columns */
    dapp_list_by_pk?: (dapp_listGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "dapp_list_latest" */
    dapp_list_latest?: (dapp_list_latestGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dapp_list_latest_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dapp_list_latest_order_by[] | null), 
    /** filter the rows returned */
    where?: (dapp_list_latest_bool_exp | null)} })
    /** fetch data from the table: "dapp_list_latest" using primary key columns */
    dapp_list_latest_by_pk?: (dapp_list_latestGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "dapp_list_latest_v2" */
    dapp_list_latest_v2?: (dapp_list_latest_v2GenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dapp_list_latest_v2_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dapp_list_latest_v2_order_by[] | null), 
    /** filter the rows returned */
    where?: (dapp_list_latest_v2_bool_exp | null)} })
    /** fetch aggregated fields from the table: "dapp_list_latest_v2" */
    dapp_list_latest_v2_aggregate?: (dapp_list_latest_v2_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dapp_list_latest_v2_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dapp_list_latest_v2_order_by[] | null), 
    /** filter the rows returned */
    where?: (dapp_list_latest_v2_bool_exp | null)} })
    /** fetch data from the table: "dapp_list_latest_v2" using primary key columns */
    dapp_list_latest_v2_by_pk?: (dapp_list_latest_v2GenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "dapp_list_v3" */
    dapp_list_v3?: (dapp_list_v3GenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dapp_list_v3_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dapp_list_v3_order_by[] | null), 
    /** filter the rows returned */
    where?: (dapp_list_v3_bool_exp | null)} })
    /** fetch data from the table: "dapp_list_v3" using primary key columns */
    dapp_list_v3_by_pk?: (dapp_list_v3GenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "dapp_list_v4" */
    dapp_list_v4?: (dapp_list_v4GenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dapp_list_v4_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dapp_list_v4_order_by[] | null), 
    /** filter the rows returned */
    where?: (dapp_list_v4_bool_exp | null)} })
    /** fetch data from the table: "dapp_list_v4" using primary key columns */
    dapp_list_v4_by_pk?: (dapp_list_v4GenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "dapp_list_v5" */
    dapp_list_v5?: (dapp_list_v5GenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dapp_list_v5_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dapp_list_v5_order_by[] | null), 
    /** filter the rows returned */
    where?: (dapp_list_v5_bool_exp | null)} })
    /** fetch data from the table: "dapp_list_v5" using primary key columns */
    dapp_list_v5_by_pk?: (dapp_list_v5GenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "dapp_promote" */
    dapp_promote?: (dapp_promoteGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dapp_promote_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dapp_promote_order_by[] | null), 
    /** filter the rows returned */
    where?: (dapp_promote_bool_exp | null)} })
    /** fetch data from the table: "dapp_promote" using primary key columns */
    dapp_promote_by_pk?: (dapp_promoteGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "discovery_banner" */
    discovery_banner?: (discovery_bannerGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (discovery_banner_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (discovery_banner_order_by[] | null), 
    /** filter the rows returned */
    where?: (discovery_banner_bool_exp | null)} })
    /** fetch data from the table: "discovery_banner" using primary key columns */
    discovery_banner_by_pk?: (discovery_bannerGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "home_news_banners" */
    home_news_banners?: (home_news_bannersGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (home_news_banners_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (home_news_banners_order_by[] | null), 
    /** filter the rows returned */
    where?: (home_news_banners_bool_exp | null)} })
    /** fetch data from the table: "home_news_banners" using primary key columns */
    home_news_banners_by_pk?: (home_news_bannersGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "home_news_banners_test" */
    home_news_banners_test?: (home_news_banners_testGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (home_news_banners_test_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (home_news_banners_test_order_by[] | null), 
    /** filter the rows returned */
    where?: (home_news_banners_test_bool_exp | null)} })
    /** fetch data from the table: "home_news_banners_test" using primary key columns */
    home_news_banners_test_by_pk?: (home_news_banners_testGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "home_post_event" */
    home_post_event?: (home_post_eventGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (home_post_event_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (home_post_event_order_by[] | null), 
    /** filter the rows returned */
    where?: (home_post_event_bool_exp | null)} })
    /** fetch data from the table: "home_post_event" using primary key columns */
    home_post_event_by_pk?: (home_post_eventGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "iip13_bucket_type_ignore" */
    iip13_bucket_type_ignore?: (iip13_bucket_type_ignoreGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (iip13_bucket_type_ignore_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (iip13_bucket_type_ignore_order_by[] | null), 
    /** filter the rows returned */
    where?: (iip13_bucket_type_ignore_bool_exp | null)} })
    /** fetch data from the table: "iip13_bucket_type_ignore" using primary key columns */
    iip13_bucket_type_ignore_by_pk?: (iip13_bucket_type_ignoreGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "iopay_device_config" */
    iopay_device_config?: (iopay_device_configGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (iopay_device_config_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (iopay_device_config_order_by[] | null), 
    /** filter the rows returned */
    where?: (iopay_device_config_bool_exp | null)} })
    /** fetch data from the table: "iopay_device_config" using primary key columns */
    iopay_device_config_by_pk?: (iopay_device_configGenqlSelection & { __args: {deviceToken: Scalars['String']} })
    /** fetch data from the table: "iopay_earning_banner" */
    iopay_earning_banner?: (iopay_earning_bannerGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (iopay_earning_banner_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (iopay_earning_banner_order_by[] | null), 
    /** filter the rows returned */
    where?: (iopay_earning_banner_bool_exp | null)} })
    /** fetch data from the table: "iopay_earning_banner" using primary key columns */
    iopay_earning_banner_by_pk?: (iopay_earning_bannerGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "iopay_earning_list" */
    iopay_earning_list?: (iopay_earning_listGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (iopay_earning_list_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (iopay_earning_list_order_by[] | null), 
    /** filter the rows returned */
    where?: (iopay_earning_list_bool_exp | null)} })
    /** fetch data from the table: "iopay_earning_list" using primary key columns */
    iopay_earning_list_by_pk?: (iopay_earning_listGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "iopay_wallet_models" */
    iopay_wallet_models?: (iopay_wallet_modelsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (iopay_wallet_models_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (iopay_wallet_models_order_by[] | null), 
    /** filter the rows returned */
    where?: (iopay_wallet_models_bool_exp | null)} })
    /** fetch data from the table: "iopay_wallet_models" using primary key columns */
    iopay_wallet_models_by_pk?: (iopay_wallet_modelsGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "iopay_wallet_models_test2" */
    iopay_wallet_models_test2?: (iopay_wallet_models_test2GenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (iopay_wallet_models_test2_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (iopay_wallet_models_test2_order_by[] | null), 
    /** filter the rows returned */
    where?: (iopay_wallet_models_test2_bool_exp | null)} })
    /** fetch data from the table: "iopay_wallet_models_test2" using primary key columns */
    iopay_wallet_models_test2_by_pk?: (iopay_wallet_models_test2GenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "media" */
    media?: (mediaGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (media_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (media_order_by[] | null), 
    /** filter the rows returned */
    where?: (media_bool_exp | null)} })
    /** fetch data from the table: "media" using primary key columns */
    media_by_pk?: (mediaGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "metaPebble.pebble_contract" */
    metaPebble_pebble_contract?: (metaPebble_pebble_contractGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (metaPebble_pebble_contract_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (metaPebble_pebble_contract_order_by[] | null), 
    /** filter the rows returned */
    where?: (metaPebble_pebble_contract_bool_exp | null)} })
    /** fetch data from the table: "metaPebble.pebble_contract" using primary key columns */
    metaPebble_pebble_contract_by_pk?: (metaPebble_pebble_contractGenqlSelection & { __args: {address: Scalars['String']} })
    /** fetch data from the table: "metaPebble.pebble_contract_mainnet" */
    metaPebble_pebble_contract_mainnet?: (metaPebble_pebble_contract_mainnetGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (metaPebble_pebble_contract_mainnet_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (metaPebble_pebble_contract_mainnet_order_by[] | null), 
    /** filter the rows returned */
    where?: (metaPebble_pebble_contract_mainnet_bool_exp | null)} })
    /** fetch data from the table: "metaPebble.pebble_contract_mainnet" using primary key columns */
    metaPebble_pebble_contract_mainnet_by_pk?: (metaPebble_pebble_contract_mainnetGenqlSelection & { __args: {name: Scalars['String']} })
    /** fetch data from the table: "metaPebble.version_android" */
    metaPebble_version_android?: (metaPebble_version_androidGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (metaPebble_version_android_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (metaPebble_version_android_order_by[] | null), 
    /** filter the rows returned */
    where?: (metaPebble_version_android_bool_exp | null)} })
    /** fetch data from the table: "metaPebble.version_android" using primary key columns */
    metaPebble_version_android_by_pk?: (metaPebble_version_androidGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "metaPebble.version_ios" */
    metaPebble_version_ios?: (metaPebble_version_iosGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (metaPebble_version_ios_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (metaPebble_version_ios_order_by[] | null), 
    /** filter the rows returned */
    where?: (metaPebble_version_ios_bool_exp | null)} })
    /** fetch data from the table: "metaPebble.version_ios" using primary key columns */
    metaPebble_version_ios_by_pk?: (metaPebble_version_iosGenqlSelection & { __args: {url: Scalars['String']} })
    /** fetch data from the table: "network_aa_config" */
    network_aa_config?: (network_aa_configGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (network_aa_config_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (network_aa_config_order_by[] | null), 
    /** filter the rows returned */
    where?: (network_aa_config_bool_exp | null)} })
    /** fetch data from the table: "network_aa_config" using primary key columns */
    network_aa_config_by_pk?: (network_aa_configGenqlSelection & { __args: {chain_id: Scalars['Int']} })
    /** fetch data from the table: "network_chain_theme" */
    network_chain_theme?: (network_chain_themeGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (network_chain_theme_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (network_chain_theme_order_by[] | null), 
    /** filter the rows returned */
    where?: (network_chain_theme_bool_exp | null)} })
    /** fetch data from the table: "network_chain_theme" using primary key columns */
    network_chain_theme_by_pk?: (network_chain_themeGenqlSelection & { __args: {chain_id: Scalars['Int']} })
    /** fetch data from the table: "network_config" */
    network_config?: (network_configGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (network_config_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (network_config_order_by[] | null), 
    /** filter the rows returned */
    where?: (network_config_bool_exp | null)} })
    /** fetch data from the table: "network_config" using primary key columns */
    network_config_by_pk?: (network_configGenqlSelection & { __args: {chain_id: Scalars['Int']} })
    /** fetch data from the table: "network_list" */
    network_list?: (network_listGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (network_list_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (network_list_order_by[] | null), 
    /** filter the rows returned */
    where?: (network_list_bool_exp | null)} })
    /** fetch aggregated fields from the table: "network_list" */
    network_list_aggregate?: (network_list_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (network_list_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (network_list_order_by[] | null), 
    /** filter the rows returned */
    where?: (network_list_bool_exp | null)} })
    /** fetch data from the table: "network_list" using primary key columns */
    network_list_by_pk?: (network_listGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "new_wallet_claims" */
    new_wallet_claims?: (new_wallet_claimsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (new_wallet_claims_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (new_wallet_claims_order_by[] | null), 
    /** filter the rows returned */
    where?: (new_wallet_claims_bool_exp | null)} })
    /** fetch data from the table: "new_wallet_claims" using primary key columns */
    new_wallet_claims_by_pk?: (new_wallet_claimsGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "nft_token_list" */
    nft_token_list?: (nft_token_listGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (nft_token_list_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (nft_token_list_order_by[] | null), 
    /** filter the rows returned */
    where?: (nft_token_list_bool_exp | null)} })
    /** fetch data from the table: "nft_token_list" using primary key columns */
    nft_token_list_by_pk?: (nft_token_listGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "risk_dapps" */
    risk_dapps?: (risk_dappsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (risk_dapps_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (risk_dapps_order_by[] | null), 
    /** filter the rows returned */
    where?: (risk_dapps_bool_exp | null)} })
    /** fetch data from the table: "risk_dapps" using primary key columns */
    risk_dapps_by_pk?: (risk_dappsGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "setting_pebble_menu" */
    setting_pebble_menu?: (setting_pebble_menuGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (setting_pebble_menu_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (setting_pebble_menu_order_by[] | null), 
    /** filter the rows returned */
    where?: (setting_pebble_menu_bool_exp | null)} })
    /** fetch aggregated fields from the table: "setting_pebble_menu" */
    setting_pebble_menu_aggregate?: (setting_pebble_menu_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (setting_pebble_menu_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (setting_pebble_menu_order_by[] | null), 
    /** filter the rows returned */
    where?: (setting_pebble_menu_bool_exp | null)} })
    /** fetch data from the table: "setting_pebble_menu" using primary key columns */
    setting_pebble_menu_by_pk?: (setting_pebble_menuGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "share_link_admin" */
    share_link_admin?: (share_link_adminGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (share_link_admin_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (share_link_admin_order_by[] | null), 
    /** filter the rows returned */
    where?: (share_link_admin_bool_exp | null)} })
    /** fetch data from the table: "share_link_admin" using primary key columns */
    share_link_admin_by_pk?: (share_link_adminGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "signature" */
    signature?: (signatureGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (signature_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (signature_order_by[] | null), 
    /** filter the rows returned */
    where?: (signature_bool_exp | null)} })
    /** fetch data from the table: "signature" using primary key columns */
    signature_by_pk?: (signatureGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "smart_stake" */
    smart_stake?: (smart_stakeGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (smart_stake_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (smart_stake_order_by[] | null), 
    /** filter the rows returned */
    where?: (smart_stake_bool_exp | null)} })
    /** fetch data from the table: "smart_stake" using primary key columns */
    smart_stake_by_pk?: (smart_stakeGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "system_msg" */
    system_msg?: (system_msgGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (system_msg_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (system_msg_order_by[] | null), 
    /** filter the rows returned */
    where?: (system_msg_bool_exp | null)} })
    /** fetch data from the table: "system_msg" using primary key columns */
    system_msg_by_pk?: (system_msgGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "system_msg_test" */
    system_msg_test?: (system_msg_testGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (system_msg_test_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (system_msg_test_order_by[] | null), 
    /** filter the rows returned */
    where?: (system_msg_test_bool_exp | null)} })
    /** fetch data from the table: "system_msg_test" using primary key columns */
    system_msg_test_by_pk?: (system_msg_testGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "token_in_dapps" */
    token_in_dapps?: (token_in_dappsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (token_in_dapps_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (token_in_dapps_order_by[] | null), 
    /** filter the rows returned */
    where?: (token_in_dapps_bool_exp | null)} })
    /** fetch data from the table: "token_in_dapps" using primary key columns */
    token_in_dapps_by_pk?: (token_in_dappsGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "token_list" */
    token_list?: (token_listGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (token_list_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (token_list_order_by[] | null), 
    /** filter the rows returned */
    where?: (token_list_bool_exp | null)} })
    /** fetch data from the table: "token_list" using primary key columns */
    token_list_by_pk?: (token_listGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "token_list_v2" */
    token_list_v2?: (token_list_v2GenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (token_list_v2_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (token_list_v2_order_by[] | null), 
    /** filter the rows returned */
    where?: (token_list_v2_bool_exp | null)} })
    /** fetch data from the table: "token_list_v3" */
    token_list_v3?: (token_list_v3GenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (token_list_v3_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (token_list_v3_order_by[] | null), 
    /** filter the rows returned */
    where?: (token_list_v3_bool_exp | null)} })
    /** fetch aggregated fields from the table: "token_list_v3" */
    token_list_v3_aggregate?: (token_list_v3_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (token_list_v3_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (token_list_v3_order_by[] | null), 
    /** filter the rows returned */
    where?: (token_list_v3_bool_exp | null)} })
    /** fetch data from the table: "token_list_v4" */
    token_list_v4?: (token_list_v4GenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (token_list_v4_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (token_list_v4_order_by[] | null), 
    /** filter the rows returned */
    where?: (token_list_v4_bool_exp | null)} })
    /** fetch data from the table: "token_risk" */
    token_risk?: (token_riskGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (token_risk_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (token_risk_order_by[] | null), 
    /** filter the rows returned */
    where?: (token_risk_bool_exp | null)} })
    /** fetch data from the table: "token_risk" using primary key columns */
    token_risk_by_pk?: (token_riskGenqlSelection & { __args: {address: Scalars['String']} })
    /** fetch data from the table: "version_control_android_2" */
    version_control_android_2?: (version_control_android_2GenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (version_control_android_2_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (version_control_android_2_order_by[] | null), 
    /** filter the rows returned */
    where?: (version_control_android_2_bool_exp | null)} })
    /** fetch data from the table: "version_control_android_2" using primary key columns */
    version_control_android_2_by_pk?: (version_control_android_2GenqlSelection & { __args: {id: Scalars['bigint']} })
    /** fetch data from the table: "version_control_ios" */
    version_control_ios?: (version_control_iosGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (version_control_ios_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (version_control_ios_order_by[] | null), 
    /** filter the rows returned */
    where?: (version_control_ios_bool_exp | null)} })
    /** fetch data from the table: "version_control_ios" using primary key columns */
    version_control_ios_by_pk?: (version_control_iosGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "wallet_info" */
    wallet_info?: (wallet_infoGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (wallet_info_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (wallet_info_order_by[] | null), 
    /** filter the rows returned */
    where?: (wallet_info_bool_exp | null)} })
    /** fetch data from the table: "wallet_info" using primary key columns */
    wallet_info_by_pk?: (wallet_infoGenqlSelection & { __args: {id: Scalars['Int']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "risk_dapps" */
export interface risk_dappsGenqlSelection{
    category?: boolean | number
    chains?: boolean | number
    id?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "risk_dapps". All fields are combined with a logical 'AND'. */
export interface risk_dapps_bool_exp {_and?: (risk_dapps_bool_exp[] | null),_not?: (risk_dapps_bool_exp | null),_or?: (risk_dapps_bool_exp[] | null),category?: (String_comparison_exp | null),chains?: (String_array_comparison_exp | null),id?: (Int_comparison_exp | null),name?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "risk_dapps". */
export interface risk_dapps_order_by {category?: (order_by | null),chains?: (order_by | null),id?: (order_by | null),name?: (order_by | null)}


/** Streaming cursor of the table "risk_dapps" */
export interface risk_dapps_stream_cursor_input {
/** Stream column input with initial value */
initial_value: risk_dapps_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface risk_dapps_stream_cursor_value_input {category?: (Scalars['String'] | null),chains?: (Scalars['String'][] | null),id?: (Scalars['Int'] | null),name?: (Scalars['String'] | null)}


/** display : total server open/close    menu_display: menu display/hidden */
export interface setting_pebble_menuGenqlSelection{
    created_at?: boolean | number
    display?: boolean | number
    id?: boolean | number
    menu_display?: boolean | number
    platform?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "setting_pebble_menu" */
export interface setting_pebble_menu_aggregateGenqlSelection{
    aggregate?: setting_pebble_menu_aggregate_fieldsGenqlSelection
    nodes?: setting_pebble_menuGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "setting_pebble_menu" */
export interface setting_pebble_menu_aggregate_fieldsGenqlSelection{
    avg?: setting_pebble_menu_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (setting_pebble_menu_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: setting_pebble_menu_max_fieldsGenqlSelection
    min?: setting_pebble_menu_min_fieldsGenqlSelection
    stddev?: setting_pebble_menu_stddev_fieldsGenqlSelection
    stddev_pop?: setting_pebble_menu_stddev_pop_fieldsGenqlSelection
    stddev_samp?: setting_pebble_menu_stddev_samp_fieldsGenqlSelection
    sum?: setting_pebble_menu_sum_fieldsGenqlSelection
    var_pop?: setting_pebble_menu_var_pop_fieldsGenqlSelection
    var_samp?: setting_pebble_menu_var_samp_fieldsGenqlSelection
    variance?: setting_pebble_menu_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface setting_pebble_menu_avg_fieldsGenqlSelection{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "setting_pebble_menu". All fields are combined with a logical 'AND'. */
export interface setting_pebble_menu_bool_exp {_and?: (setting_pebble_menu_bool_exp[] | null),_not?: (setting_pebble_menu_bool_exp | null),_or?: (setting_pebble_menu_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),display?: (Boolean_comparison_exp | null),id?: (Int_comparison_exp | null),menu_display?: (Boolean_comparison_exp | null),platform?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** aggregate max on columns */
export interface setting_pebble_menu_max_fieldsGenqlSelection{
    created_at?: boolean | number
    id?: boolean | number
    platform?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface setting_pebble_menu_min_fieldsGenqlSelection{
    created_at?: boolean | number
    id?: boolean | number
    platform?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Ordering options when selecting data from "setting_pebble_menu". */
export interface setting_pebble_menu_order_by {created_at?: (order_by | null),display?: (order_by | null),id?: (order_by | null),menu_display?: (order_by | null),platform?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate stddev on columns */
export interface setting_pebble_menu_stddev_fieldsGenqlSelection{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface setting_pebble_menu_stddev_pop_fieldsGenqlSelection{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface setting_pebble_menu_stddev_samp_fieldsGenqlSelection{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "setting_pebble_menu" */
export interface setting_pebble_menu_stream_cursor_input {
/** Stream column input with initial value */
initial_value: setting_pebble_menu_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface setting_pebble_menu_stream_cursor_value_input {created_at?: (Scalars['timestamptz'] | null),display?: (Scalars['Boolean'] | null),id?: (Scalars['Int'] | null),menu_display?: (Scalars['Boolean'] | null),platform?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate sum on columns */
export interface setting_pebble_menu_sum_fieldsGenqlSelection{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_pop on columns */
export interface setting_pebble_menu_var_pop_fieldsGenqlSelection{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface setting_pebble_menu_var_samp_fieldsGenqlSelection{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface setting_pebble_menu_variance_fieldsGenqlSelection{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "share_link_admin" */
export interface share_link_adminGenqlSelection{
    created_at?: boolean | number
    display?: boolean | number
    id?: boolean | number
    updated_at?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "share_link_admin". All fields are combined with a logical 'AND'. */
export interface share_link_admin_bool_exp {_and?: (share_link_admin_bool_exp[] | null),_not?: (share_link_admin_bool_exp | null),_or?: (share_link_admin_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),display?: (Boolean_comparison_exp | null),id?: (Int_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null),url?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "share_link_admin". */
export interface share_link_admin_order_by {created_at?: (order_by | null),display?: (order_by | null),id?: (order_by | null),updated_at?: (order_by | null),url?: (order_by | null)}


/** Streaming cursor of the table "share_link_admin" */
export interface share_link_admin_stream_cursor_input {
/** Stream column input with initial value */
initial_value: share_link_admin_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface share_link_admin_stream_cursor_value_input {created_at?: (Scalars['timestamptz'] | null),display?: (Scalars['Boolean'] | null),id?: (Scalars['Int'] | null),updated_at?: (Scalars['timestamptz'] | null),url?: (Scalars['String'] | null)}


/** columns and relationships of "signature" */
export interface signatureGenqlSelection{
    en?: boolean | number
    id?: boolean | number
    zh?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "signature". All fields are combined with a logical 'AND'. */
export interface signature_bool_exp {_and?: (signature_bool_exp[] | null),_not?: (signature_bool_exp | null),_or?: (signature_bool_exp[] | null),en?: (String_comparison_exp | null),id?: (String_comparison_exp | null),zh?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "signature". */
export interface signature_order_by {en?: (order_by | null),id?: (order_by | null),zh?: (order_by | null)}


/** Streaming cursor of the table "signature" */
export interface signature_stream_cursor_input {
/** Stream column input with initial value */
initial_value: signature_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface signature_stream_cursor_value_input {en?: (Scalars['String'] | null),id?: (Scalars['String'] | null),zh?: (Scalars['String'] | null)}


/** columns and relationships of "smart_stake" */
export interface smart_stakeGenqlSelection{
    address?: boolean | number
    apr?: boolean | number
    blendedShare?: boolean | number
    blockRewardPortion?: boolean | number
    dailyElectionRate?: boolean | number
    dailyProdIndex?: boolean | number
    dailyProdRate?: boolean | number
    epochRewardPortion?: boolean | number
    ethAddress?: boolean | number
    foundationRewardPortion?: boolean | number
    id?: boolean | number
    lastUpdated?: boolean | number
    liveVotes?: boolean | number
    longElectionRate?: boolean | number
    longProdIndex?: boolean | number
    longProdRate?: boolean | number
    midElectionRate?: boolean | number
    midProdIndex?: boolean | number
    midProdRate?: boolean | number
    name?: boolean | number
    netApr?: boolean | number
    operatorAddress?: boolean | number
    overallStatus?: boolean | number
    probation?: boolean | number
    productivity?: boolean | number
    ranking?: boolean | number
    registeredName?: boolean | number
    rewardAddress?: boolean | number
    rewardPercentPerDay?: boolean | number
    rewardPlanChanged?: boolean | number
    risky?: boolean | number
    serverStatus?: boolean | number
    shortElectionRate?: boolean | number
    shortProdIndex?: boolean | number
    shortProdRate?: boolean | number
    status?: boolean | number
    totalWeightedVotes?: boolean | number
    votesPercent?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "smart_stake". All fields are combined with a logical 'AND'. */
export interface smart_stake_bool_exp {_and?: (smart_stake_bool_exp[] | null),_not?: (smart_stake_bool_exp | null),_or?: (smart_stake_bool_exp[] | null),address?: (String_comparison_exp | null),apr?: (numeric_comparison_exp | null),blendedShare?: (numeric_comparison_exp | null),blockRewardPortion?: (numeric_comparison_exp | null),dailyElectionRate?: (numeric_comparison_exp | null),dailyProdIndex?: (numeric_comparison_exp | null),dailyProdRate?: (numeric_comparison_exp | null),epochRewardPortion?: (numeric_comparison_exp | null),ethAddress?: (String_comparison_exp | null),foundationRewardPortion?: (numeric_comparison_exp | null),id?: (String_comparison_exp | null),lastUpdated?: (numeric_comparison_exp | null),liveVotes?: (numeric_comparison_exp | null),longElectionRate?: (numeric_comparison_exp | null),longProdIndex?: (numeric_comparison_exp | null),longProdRate?: (numeric_comparison_exp | null),midElectionRate?: (numeric_comparison_exp | null),midProdIndex?: (numeric_comparison_exp | null),midProdRate?: (numeric_comparison_exp | null),name?: (String_comparison_exp | null),netApr?: (numeric_comparison_exp | null),operatorAddress?: (String_comparison_exp | null),overallStatus?: (String_comparison_exp | null),probation?: (String_comparison_exp | null),productivity?: (numeric_comparison_exp | null),ranking?: (numeric_comparison_exp | null),registeredName?: (String_comparison_exp | null),rewardAddress?: (String_comparison_exp | null),rewardPercentPerDay?: (numeric_comparison_exp | null),rewardPlanChanged?: (String_comparison_exp | null),risky?: (String_comparison_exp | null),serverStatus?: (String_comparison_exp | null),shortElectionRate?: (numeric_comparison_exp | null),shortProdIndex?: (numeric_comparison_exp | null),shortProdRate?: (numeric_comparison_exp | null),status?: (String_comparison_exp | null),totalWeightedVotes?: (numeric_comparison_exp | null),votesPercent?: (numeric_comparison_exp | null)}


/** Ordering options when selecting data from "smart_stake". */
export interface smart_stake_order_by {address?: (order_by | null),apr?: (order_by | null),blendedShare?: (order_by | null),blockRewardPortion?: (order_by | null),dailyElectionRate?: (order_by | null),dailyProdIndex?: (order_by | null),dailyProdRate?: (order_by | null),epochRewardPortion?: (order_by | null),ethAddress?: (order_by | null),foundationRewardPortion?: (order_by | null),id?: (order_by | null),lastUpdated?: (order_by | null),liveVotes?: (order_by | null),longElectionRate?: (order_by | null),longProdIndex?: (order_by | null),longProdRate?: (order_by | null),midElectionRate?: (order_by | null),midProdIndex?: (order_by | null),midProdRate?: (order_by | null),name?: (order_by | null),netApr?: (order_by | null),operatorAddress?: (order_by | null),overallStatus?: (order_by | null),probation?: (order_by | null),productivity?: (order_by | null),ranking?: (order_by | null),registeredName?: (order_by | null),rewardAddress?: (order_by | null),rewardPercentPerDay?: (order_by | null),rewardPlanChanged?: (order_by | null),risky?: (order_by | null),serverStatus?: (order_by | null),shortElectionRate?: (order_by | null),shortProdIndex?: (order_by | null),shortProdRate?: (order_by | null),status?: (order_by | null),totalWeightedVotes?: (order_by | null),votesPercent?: (order_by | null)}


/** Streaming cursor of the table "smart_stake" */
export interface smart_stake_stream_cursor_input {
/** Stream column input with initial value */
initial_value: smart_stake_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface smart_stake_stream_cursor_value_input {address?: (Scalars['String'] | null),apr?: (Scalars['numeric'] | null),blendedShare?: (Scalars['numeric'] | null),blockRewardPortion?: (Scalars['numeric'] | null),dailyElectionRate?: (Scalars['numeric'] | null),dailyProdIndex?: (Scalars['numeric'] | null),dailyProdRate?: (Scalars['numeric'] | null),epochRewardPortion?: (Scalars['numeric'] | null),ethAddress?: (Scalars['String'] | null),foundationRewardPortion?: (Scalars['numeric'] | null),id?: (Scalars['String'] | null),lastUpdated?: (Scalars['numeric'] | null),liveVotes?: (Scalars['numeric'] | null),longElectionRate?: (Scalars['numeric'] | null),longProdIndex?: (Scalars['numeric'] | null),longProdRate?: (Scalars['numeric'] | null),midElectionRate?: (Scalars['numeric'] | null),midProdIndex?: (Scalars['numeric'] | null),midProdRate?: (Scalars['numeric'] | null),name?: (Scalars['String'] | null),netApr?: (Scalars['numeric'] | null),operatorAddress?: (Scalars['String'] | null),overallStatus?: (Scalars['String'] | null),probation?: (Scalars['String'] | null),productivity?: (Scalars['numeric'] | null),ranking?: (Scalars['numeric'] | null),registeredName?: (Scalars['String'] | null),rewardAddress?: (Scalars['String'] | null),rewardPercentPerDay?: (Scalars['numeric'] | null),rewardPlanChanged?: (Scalars['String'] | null),risky?: (Scalars['String'] | null),serverStatus?: (Scalars['String'] | null),shortElectionRate?: (Scalars['numeric'] | null),shortProdIndex?: (Scalars['numeric'] | null),shortProdRate?: (Scalars['numeric'] | null),status?: (Scalars['String'] | null),totalWeightedVotes?: (Scalars['numeric'] | null),votesPercent?: (Scalars['numeric'] | null)}

export interface subscription_rootGenqlSelection{
    /** fetch data from the table: "app_img_cache_update" */
    app_img_cache_update?: (app_img_cache_updateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (app_img_cache_update_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (app_img_cache_update_order_by[] | null), 
    /** filter the rows returned */
    where?: (app_img_cache_update_bool_exp | null)} })
    /** fetch data from the table: "app_img_cache_update" using primary key columns */
    app_img_cache_update_by_pk?: (app_img_cache_updateGenqlSelection & { __args: {id: Scalars['bigint']} })
    /** fetch data from the table in a streaming manner: "app_img_cache_update" */
    app_img_cache_update_stream?: (app_img_cache_updateGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (app_img_cache_update_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (app_img_cache_update_bool_exp | null)} })
    /** fetch data from the table: "buy_iotex" */
    buy_iotex?: (buy_iotexGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (buy_iotex_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (buy_iotex_order_by[] | null), 
    /** filter the rows returned */
    where?: (buy_iotex_bool_exp | null)} })
    /** fetch data from the table: "buy_iotex" using primary key columns */
    buy_iotex_by_pk?: (buy_iotexGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "buy_iotex" */
    buy_iotex_stream?: (buy_iotexGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (buy_iotex_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (buy_iotex_bool_exp | null)} })
    /** fetch data from the table: "campaign_labels" */
    campaign_labels?: (campaign_labelsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (campaign_labels_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (campaign_labels_order_by[] | null), 
    /** filter the rows returned */
    where?: (campaign_labels_bool_exp | null)} })
    /** fetch data from the table: "campaign_labels" using primary key columns */
    campaign_labels_by_pk?: (campaign_labelsGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "campaign_labels" */
    campaign_labels_stream?: (campaign_labelsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (campaign_labels_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (campaign_labels_bool_exp | null)} })
    /** fetch data from the table: "campaign_list" */
    campaign_list?: (campaign_listGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (campaign_list_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (campaign_list_order_by[] | null), 
    /** filter the rows returned */
    where?: (campaign_list_bool_exp | null)} })
    /** fetch data from the table: "campaign_list" using primary key columns */
    campaign_list_by_pk?: (campaign_listGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "campaign_list" */
    campaign_list_stream?: (campaign_listGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (campaign_list_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (campaign_list_bool_exp | null)} })
    /** fetch data from the table: "certified_contract" */
    certified_contract?: (certified_contractGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (certified_contract_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (certified_contract_order_by[] | null), 
    /** filter the rows returned */
    where?: (certified_contract_bool_exp | null)} })
    /** fetch data from the table: "certified_contract" using primary key columns */
    certified_contract_by_pk?: (certified_contractGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "certified_contract" */
    certified_contract_stream?: (certified_contractGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (certified_contract_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (certified_contract_bool_exp | null)} })
    /** fetch data from the table: "coingecko_coin_detail" */
    coingecko_coin_detail?: (coingecko_coin_detailGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (coingecko_coin_detail_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (coingecko_coin_detail_order_by[] | null), 
    /** filter the rows returned */
    where?: (coingecko_coin_detail_bool_exp | null)} })
    /** fetch data from the table: "coingecko_coin_detail" using primary key columns */
    coingecko_coin_detail_by_pk?: (coingecko_coin_detailGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "coingecko_coin_detail" */
    coingecko_coin_detail_stream?: (coingecko_coin_detailGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (coingecko_coin_detail_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (coingecko_coin_detail_bool_exp | null)} })
    /** fetch data from the table: "coingeko_market" */
    coingeko_market?: (coingeko_marketGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (coingeko_market_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (coingeko_market_order_by[] | null), 
    /** filter the rows returned */
    where?: (coingeko_market_bool_exp | null)} })
    /** fetch data from the table: "coingeko_market" using primary key columns */
    coingeko_market_by_pk?: (coingeko_marketGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "coingeko_market" */
    coingeko_market_stream?: (coingeko_marketGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (coingeko_market_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (coingeko_market_bool_exp | null)} })
    /** fetch data from the table: "contract_error_msg" */
    contract_error_msg?: (contract_error_msgGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (contract_error_msg_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (contract_error_msg_order_by[] | null), 
    /** filter the rows returned */
    where?: (contract_error_msg_bool_exp | null)} })
    /** fetch data from the table: "contract_error_msg" using primary key columns */
    contract_error_msg_by_pk?: (contract_error_msgGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "contract_error_msg" */
    contract_error_msg_stream?: (contract_error_msgGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (contract_error_msg_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (contract_error_msg_bool_exp | null)} })
    /** fetch data from the table: "dapp_category" */
    dapp_category?: (dapp_categoryGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dapp_category_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dapp_category_order_by[] | null), 
    /** filter the rows returned */
    where?: (dapp_category_bool_exp | null)} })
    /** fetch data from the table: "dapp_category_banner" */
    dapp_category_banner?: (dapp_category_bannerGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dapp_category_banner_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dapp_category_banner_order_by[] | null), 
    /** filter the rows returned */
    where?: (dapp_category_banner_bool_exp | null)} })
    /** fetch data from the table: "dapp_category_banner" using primary key columns */
    dapp_category_banner_by_pk?: (dapp_category_bannerGenqlSelection & { __args: {link: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "dapp_category_banner" */
    dapp_category_banner_stream?: (dapp_category_bannerGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (dapp_category_banner_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (dapp_category_banner_bool_exp | null)} })
    /** fetch data from the table: "dapp_category" using primary key columns */
    dapp_category_by_pk?: (dapp_categoryGenqlSelection & { __args: {id: Scalars['bigint']} })
    /** fetch data from the table in a streaming manner: "dapp_category" */
    dapp_category_stream?: (dapp_categoryGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (dapp_category_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (dapp_category_bool_exp | null)} })
    /** fetch data from the table: "dapp_list" */
    dapp_list?: (dapp_listGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dapp_list_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dapp_list_order_by[] | null), 
    /** filter the rows returned */
    where?: (dapp_list_bool_exp | null)} })
    /** fetch data from the table: "dapp_list" using primary key columns */
    dapp_list_by_pk?: (dapp_listGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "dapp_list_latest" */
    dapp_list_latest?: (dapp_list_latestGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dapp_list_latest_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dapp_list_latest_order_by[] | null), 
    /** filter the rows returned */
    where?: (dapp_list_latest_bool_exp | null)} })
    /** fetch data from the table: "dapp_list_latest" using primary key columns */
    dapp_list_latest_by_pk?: (dapp_list_latestGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "dapp_list_latest" */
    dapp_list_latest_stream?: (dapp_list_latestGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (dapp_list_latest_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (dapp_list_latest_bool_exp | null)} })
    /** fetch data from the table: "dapp_list_latest_v2" */
    dapp_list_latest_v2?: (dapp_list_latest_v2GenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dapp_list_latest_v2_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dapp_list_latest_v2_order_by[] | null), 
    /** filter the rows returned */
    where?: (dapp_list_latest_v2_bool_exp | null)} })
    /** fetch aggregated fields from the table: "dapp_list_latest_v2" */
    dapp_list_latest_v2_aggregate?: (dapp_list_latest_v2_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dapp_list_latest_v2_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dapp_list_latest_v2_order_by[] | null), 
    /** filter the rows returned */
    where?: (dapp_list_latest_v2_bool_exp | null)} })
    /** fetch data from the table: "dapp_list_latest_v2" using primary key columns */
    dapp_list_latest_v2_by_pk?: (dapp_list_latest_v2GenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "dapp_list_latest_v2" */
    dapp_list_latest_v2_stream?: (dapp_list_latest_v2GenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (dapp_list_latest_v2_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (dapp_list_latest_v2_bool_exp | null)} })
    /** fetch data from the table in a streaming manner: "dapp_list" */
    dapp_list_stream?: (dapp_listGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (dapp_list_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (dapp_list_bool_exp | null)} })
    /** fetch data from the table: "dapp_list_v3" */
    dapp_list_v3?: (dapp_list_v3GenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dapp_list_v3_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dapp_list_v3_order_by[] | null), 
    /** filter the rows returned */
    where?: (dapp_list_v3_bool_exp | null)} })
    /** fetch data from the table: "dapp_list_v3" using primary key columns */
    dapp_list_v3_by_pk?: (dapp_list_v3GenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "dapp_list_v3" */
    dapp_list_v3_stream?: (dapp_list_v3GenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (dapp_list_v3_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (dapp_list_v3_bool_exp | null)} })
    /** fetch data from the table: "dapp_list_v4" */
    dapp_list_v4?: (dapp_list_v4GenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dapp_list_v4_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dapp_list_v4_order_by[] | null), 
    /** filter the rows returned */
    where?: (dapp_list_v4_bool_exp | null)} })
    /** fetch data from the table: "dapp_list_v4" using primary key columns */
    dapp_list_v4_by_pk?: (dapp_list_v4GenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "dapp_list_v4" */
    dapp_list_v4_stream?: (dapp_list_v4GenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (dapp_list_v4_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (dapp_list_v4_bool_exp | null)} })
    /** fetch data from the table: "dapp_list_v5" */
    dapp_list_v5?: (dapp_list_v5GenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dapp_list_v5_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dapp_list_v5_order_by[] | null), 
    /** filter the rows returned */
    where?: (dapp_list_v5_bool_exp | null)} })
    /** fetch data from the table: "dapp_list_v5" using primary key columns */
    dapp_list_v5_by_pk?: (dapp_list_v5GenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "dapp_list_v5" */
    dapp_list_v5_stream?: (dapp_list_v5GenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (dapp_list_v5_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (dapp_list_v5_bool_exp | null)} })
    /** fetch data from the table: "dapp_promote" */
    dapp_promote?: (dapp_promoteGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dapp_promote_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dapp_promote_order_by[] | null), 
    /** filter the rows returned */
    where?: (dapp_promote_bool_exp | null)} })
    /** fetch data from the table: "dapp_promote" using primary key columns */
    dapp_promote_by_pk?: (dapp_promoteGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "dapp_promote" */
    dapp_promote_stream?: (dapp_promoteGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (dapp_promote_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (dapp_promote_bool_exp | null)} })
    /** fetch data from the table: "discovery_banner" */
    discovery_banner?: (discovery_bannerGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (discovery_banner_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (discovery_banner_order_by[] | null), 
    /** filter the rows returned */
    where?: (discovery_banner_bool_exp | null)} })
    /** fetch data from the table: "discovery_banner" using primary key columns */
    discovery_banner_by_pk?: (discovery_bannerGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "discovery_banner" */
    discovery_banner_stream?: (discovery_bannerGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (discovery_banner_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (discovery_banner_bool_exp | null)} })
    /** fetch data from the table: "home_news_banners" */
    home_news_banners?: (home_news_bannersGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (home_news_banners_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (home_news_banners_order_by[] | null), 
    /** filter the rows returned */
    where?: (home_news_banners_bool_exp | null)} })
    /** fetch data from the table: "home_news_banners" using primary key columns */
    home_news_banners_by_pk?: (home_news_bannersGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "home_news_banners" */
    home_news_banners_stream?: (home_news_bannersGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (home_news_banners_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (home_news_banners_bool_exp | null)} })
    /** fetch data from the table: "home_news_banners_test" */
    home_news_banners_test?: (home_news_banners_testGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (home_news_banners_test_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (home_news_banners_test_order_by[] | null), 
    /** filter the rows returned */
    where?: (home_news_banners_test_bool_exp | null)} })
    /** fetch data from the table: "home_news_banners_test" using primary key columns */
    home_news_banners_test_by_pk?: (home_news_banners_testGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "home_news_banners_test" */
    home_news_banners_test_stream?: (home_news_banners_testGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (home_news_banners_test_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (home_news_banners_test_bool_exp | null)} })
    /** fetch data from the table: "home_post_event" */
    home_post_event?: (home_post_eventGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (home_post_event_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (home_post_event_order_by[] | null), 
    /** filter the rows returned */
    where?: (home_post_event_bool_exp | null)} })
    /** fetch data from the table: "home_post_event" using primary key columns */
    home_post_event_by_pk?: (home_post_eventGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "home_post_event" */
    home_post_event_stream?: (home_post_eventGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (home_post_event_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (home_post_event_bool_exp | null)} })
    /** fetch data from the table: "iip13_bucket_type_ignore" */
    iip13_bucket_type_ignore?: (iip13_bucket_type_ignoreGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (iip13_bucket_type_ignore_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (iip13_bucket_type_ignore_order_by[] | null), 
    /** filter the rows returned */
    where?: (iip13_bucket_type_ignore_bool_exp | null)} })
    /** fetch data from the table: "iip13_bucket_type_ignore" using primary key columns */
    iip13_bucket_type_ignore_by_pk?: (iip13_bucket_type_ignoreGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "iip13_bucket_type_ignore" */
    iip13_bucket_type_ignore_stream?: (iip13_bucket_type_ignoreGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (iip13_bucket_type_ignore_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (iip13_bucket_type_ignore_bool_exp | null)} })
    /** fetch data from the table: "iopay_device_config" */
    iopay_device_config?: (iopay_device_configGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (iopay_device_config_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (iopay_device_config_order_by[] | null), 
    /** filter the rows returned */
    where?: (iopay_device_config_bool_exp | null)} })
    /** fetch data from the table: "iopay_device_config" using primary key columns */
    iopay_device_config_by_pk?: (iopay_device_configGenqlSelection & { __args: {deviceToken: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "iopay_device_config" */
    iopay_device_config_stream?: (iopay_device_configGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (iopay_device_config_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (iopay_device_config_bool_exp | null)} })
    /** fetch data from the table: "iopay_earning_banner" */
    iopay_earning_banner?: (iopay_earning_bannerGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (iopay_earning_banner_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (iopay_earning_banner_order_by[] | null), 
    /** filter the rows returned */
    where?: (iopay_earning_banner_bool_exp | null)} })
    /** fetch data from the table: "iopay_earning_banner" using primary key columns */
    iopay_earning_banner_by_pk?: (iopay_earning_bannerGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "iopay_earning_banner" */
    iopay_earning_banner_stream?: (iopay_earning_bannerGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (iopay_earning_banner_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (iopay_earning_banner_bool_exp | null)} })
    /** fetch data from the table: "iopay_earning_list" */
    iopay_earning_list?: (iopay_earning_listGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (iopay_earning_list_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (iopay_earning_list_order_by[] | null), 
    /** filter the rows returned */
    where?: (iopay_earning_list_bool_exp | null)} })
    /** fetch data from the table: "iopay_earning_list" using primary key columns */
    iopay_earning_list_by_pk?: (iopay_earning_listGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "iopay_earning_list" */
    iopay_earning_list_stream?: (iopay_earning_listGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (iopay_earning_list_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (iopay_earning_list_bool_exp | null)} })
    /** fetch data from the table: "iopay_wallet_models" */
    iopay_wallet_models?: (iopay_wallet_modelsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (iopay_wallet_models_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (iopay_wallet_models_order_by[] | null), 
    /** filter the rows returned */
    where?: (iopay_wallet_models_bool_exp | null)} })
    /** fetch data from the table: "iopay_wallet_models" using primary key columns */
    iopay_wallet_models_by_pk?: (iopay_wallet_modelsGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "iopay_wallet_models" */
    iopay_wallet_models_stream?: (iopay_wallet_modelsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (iopay_wallet_models_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (iopay_wallet_models_bool_exp | null)} })
    /** fetch data from the table: "iopay_wallet_models_test2" */
    iopay_wallet_models_test2?: (iopay_wallet_models_test2GenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (iopay_wallet_models_test2_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (iopay_wallet_models_test2_order_by[] | null), 
    /** filter the rows returned */
    where?: (iopay_wallet_models_test2_bool_exp | null)} })
    /** fetch data from the table: "iopay_wallet_models_test2" using primary key columns */
    iopay_wallet_models_test2_by_pk?: (iopay_wallet_models_test2GenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "iopay_wallet_models_test2" */
    iopay_wallet_models_test2_stream?: (iopay_wallet_models_test2GenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (iopay_wallet_models_test2_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (iopay_wallet_models_test2_bool_exp | null)} })
    /** fetch data from the table: "media" */
    media?: (mediaGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (media_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (media_order_by[] | null), 
    /** filter the rows returned */
    where?: (media_bool_exp | null)} })
    /** fetch data from the table: "media" using primary key columns */
    media_by_pk?: (mediaGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "media" */
    media_stream?: (mediaGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (media_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (media_bool_exp | null)} })
    /** fetch data from the table: "metaPebble.pebble_contract" */
    metaPebble_pebble_contract?: (metaPebble_pebble_contractGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (metaPebble_pebble_contract_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (metaPebble_pebble_contract_order_by[] | null), 
    /** filter the rows returned */
    where?: (metaPebble_pebble_contract_bool_exp | null)} })
    /** fetch data from the table: "metaPebble.pebble_contract" using primary key columns */
    metaPebble_pebble_contract_by_pk?: (metaPebble_pebble_contractGenqlSelection & { __args: {address: Scalars['String']} })
    /** fetch data from the table: "metaPebble.pebble_contract_mainnet" */
    metaPebble_pebble_contract_mainnet?: (metaPebble_pebble_contract_mainnetGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (metaPebble_pebble_contract_mainnet_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (metaPebble_pebble_contract_mainnet_order_by[] | null), 
    /** filter the rows returned */
    where?: (metaPebble_pebble_contract_mainnet_bool_exp | null)} })
    /** fetch data from the table: "metaPebble.pebble_contract_mainnet" using primary key columns */
    metaPebble_pebble_contract_mainnet_by_pk?: (metaPebble_pebble_contract_mainnetGenqlSelection & { __args: {name: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "metaPebble.pebble_contract_mainnet" */
    metaPebble_pebble_contract_mainnet_stream?: (metaPebble_pebble_contract_mainnetGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (metaPebble_pebble_contract_mainnet_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (metaPebble_pebble_contract_mainnet_bool_exp | null)} })
    /** fetch data from the table in a streaming manner: "metaPebble.pebble_contract" */
    metaPebble_pebble_contract_stream?: (metaPebble_pebble_contractGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (metaPebble_pebble_contract_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (metaPebble_pebble_contract_bool_exp | null)} })
    /** fetch data from the table: "metaPebble.version_android" */
    metaPebble_version_android?: (metaPebble_version_androidGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (metaPebble_version_android_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (metaPebble_version_android_order_by[] | null), 
    /** filter the rows returned */
    where?: (metaPebble_version_android_bool_exp | null)} })
    /** fetch data from the table: "metaPebble.version_android" using primary key columns */
    metaPebble_version_android_by_pk?: (metaPebble_version_androidGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "metaPebble.version_android" */
    metaPebble_version_android_stream?: (metaPebble_version_androidGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (metaPebble_version_android_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (metaPebble_version_android_bool_exp | null)} })
    /** fetch data from the table: "metaPebble.version_ios" */
    metaPebble_version_ios?: (metaPebble_version_iosGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (metaPebble_version_ios_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (metaPebble_version_ios_order_by[] | null), 
    /** filter the rows returned */
    where?: (metaPebble_version_ios_bool_exp | null)} })
    /** fetch data from the table: "metaPebble.version_ios" using primary key columns */
    metaPebble_version_ios_by_pk?: (metaPebble_version_iosGenqlSelection & { __args: {url: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "metaPebble.version_ios" */
    metaPebble_version_ios_stream?: (metaPebble_version_iosGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (metaPebble_version_ios_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (metaPebble_version_ios_bool_exp | null)} })
    /** fetch data from the table: "network_aa_config" */
    network_aa_config?: (network_aa_configGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (network_aa_config_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (network_aa_config_order_by[] | null), 
    /** filter the rows returned */
    where?: (network_aa_config_bool_exp | null)} })
    /** fetch data from the table: "network_aa_config" using primary key columns */
    network_aa_config_by_pk?: (network_aa_configGenqlSelection & { __args: {chain_id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "network_aa_config" */
    network_aa_config_stream?: (network_aa_configGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (network_aa_config_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (network_aa_config_bool_exp | null)} })
    /** fetch data from the table: "network_chain_theme" */
    network_chain_theme?: (network_chain_themeGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (network_chain_theme_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (network_chain_theme_order_by[] | null), 
    /** filter the rows returned */
    where?: (network_chain_theme_bool_exp | null)} })
    /** fetch data from the table: "network_chain_theme" using primary key columns */
    network_chain_theme_by_pk?: (network_chain_themeGenqlSelection & { __args: {chain_id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "network_chain_theme" */
    network_chain_theme_stream?: (network_chain_themeGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (network_chain_theme_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (network_chain_theme_bool_exp | null)} })
    /** fetch data from the table: "network_config" */
    network_config?: (network_configGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (network_config_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (network_config_order_by[] | null), 
    /** filter the rows returned */
    where?: (network_config_bool_exp | null)} })
    /** fetch data from the table: "network_config" using primary key columns */
    network_config_by_pk?: (network_configGenqlSelection & { __args: {chain_id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "network_config" */
    network_config_stream?: (network_configGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (network_config_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (network_config_bool_exp | null)} })
    /** fetch data from the table: "network_list" */
    network_list?: (network_listGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (network_list_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (network_list_order_by[] | null), 
    /** filter the rows returned */
    where?: (network_list_bool_exp | null)} })
    /** fetch aggregated fields from the table: "network_list" */
    network_list_aggregate?: (network_list_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (network_list_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (network_list_order_by[] | null), 
    /** filter the rows returned */
    where?: (network_list_bool_exp | null)} })
    /** fetch data from the table: "network_list" using primary key columns */
    network_list_by_pk?: (network_listGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "network_list" */
    network_list_stream?: (network_listGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (network_list_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (network_list_bool_exp | null)} })
    /** fetch data from the table: "new_wallet_claims" */
    new_wallet_claims?: (new_wallet_claimsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (new_wallet_claims_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (new_wallet_claims_order_by[] | null), 
    /** filter the rows returned */
    where?: (new_wallet_claims_bool_exp | null)} })
    /** fetch data from the table: "new_wallet_claims" using primary key columns */
    new_wallet_claims_by_pk?: (new_wallet_claimsGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "new_wallet_claims" */
    new_wallet_claims_stream?: (new_wallet_claimsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (new_wallet_claims_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (new_wallet_claims_bool_exp | null)} })
    /** fetch data from the table: "nft_token_list" */
    nft_token_list?: (nft_token_listGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (nft_token_list_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (nft_token_list_order_by[] | null), 
    /** filter the rows returned */
    where?: (nft_token_list_bool_exp | null)} })
    /** fetch data from the table: "nft_token_list" using primary key columns */
    nft_token_list_by_pk?: (nft_token_listGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "nft_token_list" */
    nft_token_list_stream?: (nft_token_listGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (nft_token_list_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (nft_token_list_bool_exp | null)} })
    /** fetch data from the table: "risk_dapps" */
    risk_dapps?: (risk_dappsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (risk_dapps_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (risk_dapps_order_by[] | null), 
    /** filter the rows returned */
    where?: (risk_dapps_bool_exp | null)} })
    /** fetch data from the table: "risk_dapps" using primary key columns */
    risk_dapps_by_pk?: (risk_dappsGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "risk_dapps" */
    risk_dapps_stream?: (risk_dappsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (risk_dapps_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (risk_dapps_bool_exp | null)} })
    /** fetch data from the table: "setting_pebble_menu" */
    setting_pebble_menu?: (setting_pebble_menuGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (setting_pebble_menu_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (setting_pebble_menu_order_by[] | null), 
    /** filter the rows returned */
    where?: (setting_pebble_menu_bool_exp | null)} })
    /** fetch aggregated fields from the table: "setting_pebble_menu" */
    setting_pebble_menu_aggregate?: (setting_pebble_menu_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (setting_pebble_menu_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (setting_pebble_menu_order_by[] | null), 
    /** filter the rows returned */
    where?: (setting_pebble_menu_bool_exp | null)} })
    /** fetch data from the table: "setting_pebble_menu" using primary key columns */
    setting_pebble_menu_by_pk?: (setting_pebble_menuGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "setting_pebble_menu" */
    setting_pebble_menu_stream?: (setting_pebble_menuGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (setting_pebble_menu_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (setting_pebble_menu_bool_exp | null)} })
    /** fetch data from the table: "share_link_admin" */
    share_link_admin?: (share_link_adminGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (share_link_admin_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (share_link_admin_order_by[] | null), 
    /** filter the rows returned */
    where?: (share_link_admin_bool_exp | null)} })
    /** fetch data from the table: "share_link_admin" using primary key columns */
    share_link_admin_by_pk?: (share_link_adminGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "share_link_admin" */
    share_link_admin_stream?: (share_link_adminGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (share_link_admin_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (share_link_admin_bool_exp | null)} })
    /** fetch data from the table: "signature" */
    signature?: (signatureGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (signature_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (signature_order_by[] | null), 
    /** filter the rows returned */
    where?: (signature_bool_exp | null)} })
    /** fetch data from the table: "signature" using primary key columns */
    signature_by_pk?: (signatureGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "signature" */
    signature_stream?: (signatureGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (signature_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (signature_bool_exp | null)} })
    /** fetch data from the table: "smart_stake" */
    smart_stake?: (smart_stakeGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (smart_stake_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (smart_stake_order_by[] | null), 
    /** filter the rows returned */
    where?: (smart_stake_bool_exp | null)} })
    /** fetch data from the table: "smart_stake" using primary key columns */
    smart_stake_by_pk?: (smart_stakeGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "smart_stake" */
    smart_stake_stream?: (smart_stakeGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (smart_stake_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (smart_stake_bool_exp | null)} })
    /** fetch data from the table: "system_msg" */
    system_msg?: (system_msgGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (system_msg_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (system_msg_order_by[] | null), 
    /** filter the rows returned */
    where?: (system_msg_bool_exp | null)} })
    /** fetch data from the table: "system_msg" using primary key columns */
    system_msg_by_pk?: (system_msgGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "system_msg" */
    system_msg_stream?: (system_msgGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (system_msg_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (system_msg_bool_exp | null)} })
    /** fetch data from the table: "system_msg_test" */
    system_msg_test?: (system_msg_testGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (system_msg_test_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (system_msg_test_order_by[] | null), 
    /** filter the rows returned */
    where?: (system_msg_test_bool_exp | null)} })
    /** fetch data from the table: "system_msg_test" using primary key columns */
    system_msg_test_by_pk?: (system_msg_testGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "system_msg_test" */
    system_msg_test_stream?: (system_msg_testGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (system_msg_test_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (system_msg_test_bool_exp | null)} })
    /** fetch data from the table: "token_in_dapps" */
    token_in_dapps?: (token_in_dappsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (token_in_dapps_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (token_in_dapps_order_by[] | null), 
    /** filter the rows returned */
    where?: (token_in_dapps_bool_exp | null)} })
    /** fetch data from the table: "token_in_dapps" using primary key columns */
    token_in_dapps_by_pk?: (token_in_dappsGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "token_in_dapps" */
    token_in_dapps_stream?: (token_in_dappsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (token_in_dapps_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (token_in_dapps_bool_exp | null)} })
    /** fetch data from the table: "token_list" */
    token_list?: (token_listGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (token_list_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (token_list_order_by[] | null), 
    /** filter the rows returned */
    where?: (token_list_bool_exp | null)} })
    /** fetch data from the table: "token_list" using primary key columns */
    token_list_by_pk?: (token_listGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "token_list" */
    token_list_stream?: (token_listGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (token_list_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (token_list_bool_exp | null)} })
    /** fetch data from the table: "token_list_v2" */
    token_list_v2?: (token_list_v2GenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (token_list_v2_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (token_list_v2_order_by[] | null), 
    /** filter the rows returned */
    where?: (token_list_v2_bool_exp | null)} })
    /** fetch data from the table in a streaming manner: "token_list_v2" */
    token_list_v2_stream?: (token_list_v2GenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (token_list_v2_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (token_list_v2_bool_exp | null)} })
    /** fetch data from the table: "token_list_v3" */
    token_list_v3?: (token_list_v3GenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (token_list_v3_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (token_list_v3_order_by[] | null), 
    /** filter the rows returned */
    where?: (token_list_v3_bool_exp | null)} })
    /** fetch aggregated fields from the table: "token_list_v3" */
    token_list_v3_aggregate?: (token_list_v3_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (token_list_v3_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (token_list_v3_order_by[] | null), 
    /** filter the rows returned */
    where?: (token_list_v3_bool_exp | null)} })
    /** fetch data from the table in a streaming manner: "token_list_v3" */
    token_list_v3_stream?: (token_list_v3GenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (token_list_v3_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (token_list_v3_bool_exp | null)} })
    /** fetch data from the table: "token_list_v4" */
    token_list_v4?: (token_list_v4GenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (token_list_v4_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (token_list_v4_order_by[] | null), 
    /** filter the rows returned */
    where?: (token_list_v4_bool_exp | null)} })
    /** fetch data from the table in a streaming manner: "token_list_v4" */
    token_list_v4_stream?: (token_list_v4GenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (token_list_v4_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (token_list_v4_bool_exp | null)} })
    /** fetch data from the table: "token_risk" */
    token_risk?: (token_riskGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (token_risk_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (token_risk_order_by[] | null), 
    /** filter the rows returned */
    where?: (token_risk_bool_exp | null)} })
    /** fetch data from the table: "token_risk" using primary key columns */
    token_risk_by_pk?: (token_riskGenqlSelection & { __args: {address: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "token_risk" */
    token_risk_stream?: (token_riskGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (token_risk_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (token_risk_bool_exp | null)} })
    /** fetch data from the table: "version_control_android_2" */
    version_control_android_2?: (version_control_android_2GenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (version_control_android_2_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (version_control_android_2_order_by[] | null), 
    /** filter the rows returned */
    where?: (version_control_android_2_bool_exp | null)} })
    /** fetch data from the table: "version_control_android_2" using primary key columns */
    version_control_android_2_by_pk?: (version_control_android_2GenqlSelection & { __args: {id: Scalars['bigint']} })
    /** fetch data from the table in a streaming manner: "version_control_android_2" */
    version_control_android_2_stream?: (version_control_android_2GenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (version_control_android_2_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (version_control_android_2_bool_exp | null)} })
    /** fetch data from the table: "version_control_ios" */
    version_control_ios?: (version_control_iosGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (version_control_ios_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (version_control_ios_order_by[] | null), 
    /** filter the rows returned */
    where?: (version_control_ios_bool_exp | null)} })
    /** fetch data from the table: "version_control_ios" using primary key columns */
    version_control_ios_by_pk?: (version_control_iosGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "version_control_ios" */
    version_control_ios_stream?: (version_control_iosGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (version_control_ios_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (version_control_ios_bool_exp | null)} })
    /** fetch data from the table: "wallet_info" */
    wallet_info?: (wallet_infoGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (wallet_info_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (wallet_info_order_by[] | null), 
    /** filter the rows returned */
    where?: (wallet_info_bool_exp | null)} })
    /** fetch data from the table: "wallet_info" using primary key columns */
    wallet_info_by_pk?: (wallet_infoGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "wallet_info" */
    wallet_info_stream?: (wallet_infoGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (wallet_info_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (wallet_info_bool_exp | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "system_msg" */
export interface system_msgGenqlSelection{
    author?: boolean | number
    content?: boolean | number
    created_at?: boolean | number
    deleted?: boolean | number
    id?: boolean | number
    share_content?: boolean | number
    title?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "system_msg". All fields are combined with a logical 'AND'. */
export interface system_msg_bool_exp {_and?: (system_msg_bool_exp[] | null),_not?: (system_msg_bool_exp | null),_or?: (system_msg_bool_exp[] | null),author?: (String_comparison_exp | null),content?: (String_comparison_exp | null),created_at?: (timestamp_comparison_exp | null),deleted?: (Boolean_comparison_exp | null),id?: (Int_comparison_exp | null),share_content?: (String_comparison_exp | null),title?: (String_comparison_exp | null),updated_at?: (timestamp_comparison_exp | null)}


/** Ordering options when selecting data from "system_msg". */
export interface system_msg_order_by {author?: (order_by | null),content?: (order_by | null),created_at?: (order_by | null),deleted?: (order_by | null),id?: (order_by | null),share_content?: (order_by | null),title?: (order_by | null),updated_at?: (order_by | null)}


/** Streaming cursor of the table "system_msg" */
export interface system_msg_stream_cursor_input {
/** Stream column input with initial value */
initial_value: system_msg_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface system_msg_stream_cursor_value_input {author?: (Scalars['String'] | null),content?: (Scalars['String'] | null),created_at?: (Scalars['timestamp'] | null),deleted?: (Scalars['Boolean'] | null),id?: (Scalars['Int'] | null),share_content?: (Scalars['String'] | null),title?: (Scalars['String'] | null),updated_at?: (Scalars['timestamp'] | null)}


/** columns and relationships of "system_msg_test" */
export interface system_msg_testGenqlSelection{
    author?: boolean | number
    content?: boolean | number
    created_at?: boolean | number
    deleted?: boolean | number
    id?: boolean | number
    share_content?: boolean | number
    title?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "system_msg_test". All fields are combined with a logical 'AND'. */
export interface system_msg_test_bool_exp {_and?: (system_msg_test_bool_exp[] | null),_not?: (system_msg_test_bool_exp | null),_or?: (system_msg_test_bool_exp[] | null),author?: (String_comparison_exp | null),content?: (String_comparison_exp | null),created_at?: (timestamp_comparison_exp | null),deleted?: (Boolean_comparison_exp | null),id?: (Int_comparison_exp | null),share_content?: (String_comparison_exp | null),title?: (String_comparison_exp | null),updated_at?: (timestamp_comparison_exp | null)}


/** Ordering options when selecting data from "system_msg_test". */
export interface system_msg_test_order_by {author?: (order_by | null),content?: (order_by | null),created_at?: (order_by | null),deleted?: (order_by | null),id?: (order_by | null),share_content?: (order_by | null),title?: (order_by | null),updated_at?: (order_by | null)}


/** Streaming cursor of the table "system_msg_test" */
export interface system_msg_test_stream_cursor_input {
/** Stream column input with initial value */
initial_value: system_msg_test_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface system_msg_test_stream_cursor_value_input {author?: (Scalars['String'] | null),content?: (Scalars['String'] | null),created_at?: (Scalars['timestamp'] | null),deleted?: (Scalars['Boolean'] | null),id?: (Scalars['Int'] | null),share_content?: (Scalars['String'] | null),title?: (Scalars['String'] | null),updated_at?: (Scalars['timestamp'] | null)}


/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export interface timestamp_comparison_exp {_eq?: (Scalars['timestamp'] | null),_gt?: (Scalars['timestamp'] | null),_gte?: (Scalars['timestamp'] | null),_in?: (Scalars['timestamp'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['timestamp'] | null),_lte?: (Scalars['timestamp'] | null),_neq?: (Scalars['timestamp'] | null),_nin?: (Scalars['timestamp'][] | null)}


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {_eq?: (Scalars['timestamptz'] | null),_gt?: (Scalars['timestamptz'] | null),_gte?: (Scalars['timestamptz'] | null),_in?: (Scalars['timestamptz'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['timestamptz'] | null),_lte?: (Scalars['timestamptz'] | null),_neq?: (Scalars['timestamptz'] | null),_nin?: (Scalars['timestamptz'][] | null)}


/** columns and relationships of "token_in_dapps" */
export interface token_in_dappsGenqlSelection{
    chainId?: boolean | number
    created_at?: boolean | number
    dapp?: boolean | number
    /** An array relationship */
    dapps?: (dapp_list_latestGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dapp_list_latest_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dapp_list_latest_order_by[] | null), 
    /** filter the rows returned */
    where?: (dapp_list_latest_bool_exp | null)} })
    id?: boolean | number
    token?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "token_in_dapps". All fields are combined with a logical 'AND'. */
export interface token_in_dapps_bool_exp {_and?: (token_in_dapps_bool_exp[] | null),_not?: (token_in_dapps_bool_exp | null),_or?: (token_in_dapps_bool_exp[] | null),chainId?: (Int_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),dapp?: (Int_comparison_exp | null),dapps?: (dapp_list_latest_bool_exp | null),id?: (Int_comparison_exp | null),token?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** Ordering options when selecting data from "token_in_dapps". */
export interface token_in_dapps_order_by {chainId?: (order_by | null),created_at?: (order_by | null),dapp?: (order_by | null),dapps_aggregate?: (dapp_list_latest_aggregate_order_by | null),id?: (order_by | null),token?: (order_by | null),updated_at?: (order_by | null)}


/** Streaming cursor of the table "token_in_dapps" */
export interface token_in_dapps_stream_cursor_input {
/** Stream column input with initial value */
initial_value: token_in_dapps_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface token_in_dapps_stream_cursor_value_input {chainId?: (Scalars['Int'] | null),created_at?: (Scalars['timestamptz'] | null),dapp?: (Scalars['Int'] | null),id?: (Scalars['Int'] | null),token?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** columns and relationships of "token_list" */
export interface token_listGenqlSelection{
    decimal?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    decimals?: boolean | number
    id?: boolean | number
    is_depin_token?: boolean | number
    is_official?: boolean | number
    logo?: boolean | number
    metas?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    name?: boolean | number
    platforms?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    symbol?: boolean | number
    tags?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "token_list". All fields are combined with a logical 'AND'. */
export interface token_list_bool_exp {_and?: (token_list_bool_exp[] | null),_not?: (token_list_bool_exp | null),_or?: (token_list_bool_exp[] | null),decimal?: (jsonb_comparison_exp | null),decimals?: (numeric_comparison_exp | null),id?: (String_comparison_exp | null),is_depin_token?: (Boolean_comparison_exp | null),is_official?: (Boolean_comparison_exp | null),logo?: (String_comparison_exp | null),metas?: (jsonb_comparison_exp | null),name?: (String_comparison_exp | null),platforms?: (jsonb_comparison_exp | null),symbol?: (String_comparison_exp | null),tags?: (String_array_comparison_exp | null),weight?: (Int_comparison_exp | null)}


/** Ordering options when selecting data from "token_list". */
export interface token_list_order_by {decimal?: (order_by | null),decimals?: (order_by | null),id?: (order_by | null),is_depin_token?: (order_by | null),is_official?: (order_by | null),logo?: (order_by | null),metas?: (order_by | null),name?: (order_by | null),platforms?: (order_by | null),symbol?: (order_by | null),tags?: (order_by | null),weight?: (order_by | null)}


/** Streaming cursor of the table "token_list" */
export interface token_list_stream_cursor_input {
/** Stream column input with initial value */
initial_value: token_list_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface token_list_stream_cursor_value_input {decimal?: (Scalars['jsonb'] | null),decimals?: (Scalars['numeric'] | null),id?: (Scalars['String'] | null),is_depin_token?: (Scalars['Boolean'] | null),is_official?: (Scalars['Boolean'] | null),logo?: (Scalars['String'] | null),metas?: (Scalars['jsonb'] | null),name?: (Scalars['String'] | null),platforms?: (Scalars['jsonb'] | null),symbol?: (Scalars['String'] | null),tags?: (Scalars['String'][] | null),weight?: (Scalars['Int'] | null)}


/** columns and relationships of "token_list_v2" */
export interface token_list_v2GenqlSelection{
    current_price?: boolean | number
    decimals?: boolean | number
    id?: boolean | number
    logo?: boolean | number
    market_cap?: boolean | number
    name?: boolean | number
    platforms?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    symbol?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "token_list_v2". All fields are combined with a logical 'AND'. */
export interface token_list_v2_bool_exp {_and?: (token_list_v2_bool_exp[] | null),_not?: (token_list_v2_bool_exp | null),_or?: (token_list_v2_bool_exp[] | null),current_price?: (numeric_comparison_exp | null),decimals?: (numeric_comparison_exp | null),id?: (String_comparison_exp | null),logo?: (String_comparison_exp | null),market_cap?: (numeric_comparison_exp | null),name?: (String_comparison_exp | null),platforms?: (jsonb_comparison_exp | null),symbol?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "token_list_v2". */
export interface token_list_v2_order_by {current_price?: (order_by | null),decimals?: (order_by | null),id?: (order_by | null),logo?: (order_by | null),market_cap?: (order_by | null),name?: (order_by | null),platforms?: (order_by | null),symbol?: (order_by | null)}


/** Streaming cursor of the table "token_list_v2" */
export interface token_list_v2_stream_cursor_input {
/** Stream column input with initial value */
initial_value: token_list_v2_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface token_list_v2_stream_cursor_value_input {current_price?: (Scalars['numeric'] | null),decimals?: (Scalars['numeric'] | null),id?: (Scalars['String'] | null),logo?: (Scalars['String'] | null),market_cap?: (Scalars['numeric'] | null),name?: (Scalars['String'] | null),platforms?: (Scalars['jsonb'] | null),symbol?: (Scalars['String'] | null)}


/** columns and relationships of "token_list_v3" */
export interface token_list_v3GenqlSelection{
    current_price?: boolean | number
    decimals?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    id?: boolean | number
    is_depin_token?: boolean | number
    is_official?: boolean | number
    logo?: boolean | number
    market_cap?: boolean | number
    name?: boolean | number
    platforms?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    symbol?: boolean | number
    tags?: boolean | number
    website?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "token_list_v3" */
export interface token_list_v3_aggregateGenqlSelection{
    aggregate?: token_list_v3_aggregate_fieldsGenqlSelection
    nodes?: token_list_v3GenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "token_list_v3" */
export interface token_list_v3_aggregate_fieldsGenqlSelection{
    avg?: token_list_v3_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (token_list_v3_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: token_list_v3_max_fieldsGenqlSelection
    min?: token_list_v3_min_fieldsGenqlSelection
    stddev?: token_list_v3_stddev_fieldsGenqlSelection
    stddev_pop?: token_list_v3_stddev_pop_fieldsGenqlSelection
    stddev_samp?: token_list_v3_stddev_samp_fieldsGenqlSelection
    sum?: token_list_v3_sum_fieldsGenqlSelection
    var_pop?: token_list_v3_var_pop_fieldsGenqlSelection
    var_samp?: token_list_v3_var_samp_fieldsGenqlSelection
    variance?: token_list_v3_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface token_list_v3_avg_fieldsGenqlSelection{
    current_price?: boolean | number
    market_cap?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "token_list_v3". All fields are combined with a logical 'AND'. */
export interface token_list_v3_bool_exp {_and?: (token_list_v3_bool_exp[] | null),_not?: (token_list_v3_bool_exp | null),_or?: (token_list_v3_bool_exp[] | null),current_price?: (numeric_comparison_exp | null),decimals?: (jsonb_comparison_exp | null),id?: (String_comparison_exp | null),is_depin_token?: (Boolean_comparison_exp | null),is_official?: (Boolean_comparison_exp | null),logo?: (String_comparison_exp | null),market_cap?: (numeric_comparison_exp | null),name?: (String_comparison_exp | null),platforms?: (jsonb_comparison_exp | null),symbol?: (String_comparison_exp | null),tags?: (String_array_comparison_exp | null),website?: (String_comparison_exp | null),weight?: (Int_comparison_exp | null)}


/** aggregate max on columns */
export interface token_list_v3_max_fieldsGenqlSelection{
    current_price?: boolean | number
    id?: boolean | number
    logo?: boolean | number
    market_cap?: boolean | number
    name?: boolean | number
    symbol?: boolean | number
    tags?: boolean | number
    website?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface token_list_v3_min_fieldsGenqlSelection{
    current_price?: boolean | number
    id?: boolean | number
    logo?: boolean | number
    market_cap?: boolean | number
    name?: boolean | number
    symbol?: boolean | number
    tags?: boolean | number
    website?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Ordering options when selecting data from "token_list_v3". */
export interface token_list_v3_order_by {current_price?: (order_by | null),decimals?: (order_by | null),id?: (order_by | null),is_depin_token?: (order_by | null),is_official?: (order_by | null),logo?: (order_by | null),market_cap?: (order_by | null),name?: (order_by | null),platforms?: (order_by | null),symbol?: (order_by | null),tags?: (order_by | null),website?: (order_by | null),weight?: (order_by | null)}


/** aggregate stddev on columns */
export interface token_list_v3_stddev_fieldsGenqlSelection{
    current_price?: boolean | number
    market_cap?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface token_list_v3_stddev_pop_fieldsGenqlSelection{
    current_price?: boolean | number
    market_cap?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface token_list_v3_stddev_samp_fieldsGenqlSelection{
    current_price?: boolean | number
    market_cap?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "token_list_v3" */
export interface token_list_v3_stream_cursor_input {
/** Stream column input with initial value */
initial_value: token_list_v3_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface token_list_v3_stream_cursor_value_input {current_price?: (Scalars['numeric'] | null),decimals?: (Scalars['jsonb'] | null),id?: (Scalars['String'] | null),is_depin_token?: (Scalars['Boolean'] | null),is_official?: (Scalars['Boolean'] | null),logo?: (Scalars['String'] | null),market_cap?: (Scalars['numeric'] | null),name?: (Scalars['String'] | null),platforms?: (Scalars['jsonb'] | null),symbol?: (Scalars['String'] | null),tags?: (Scalars['String'][] | null),website?: (Scalars['String'] | null),weight?: (Scalars['Int'] | null)}


/** aggregate sum on columns */
export interface token_list_v3_sum_fieldsGenqlSelection{
    current_price?: boolean | number
    market_cap?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_pop on columns */
export interface token_list_v3_var_pop_fieldsGenqlSelection{
    current_price?: boolean | number
    market_cap?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface token_list_v3_var_samp_fieldsGenqlSelection{
    current_price?: boolean | number
    market_cap?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface token_list_v3_variance_fieldsGenqlSelection{
    current_price?: boolean | number
    market_cap?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "token_list_v4" */
export interface token_list_v4GenqlSelection{
    current_price?: boolean | number
    daily_volume_usd?: boolean | number
    decimals?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    id?: boolean | number
    is_depin_token?: boolean | number
    is_official?: boolean | number
    logo?: boolean | number
    market_cap?: boolean | number
    name?: boolean | number
    platforms?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    price_change_24h?: boolean | number
    rank_point?: boolean | number
    sparkline_in_7d?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    symbol?: boolean | number
    tags?: boolean | number
    total_liquidity_usd?: boolean | number
    website?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "token_list_v4". All fields are combined with a logical 'AND'. */
export interface token_list_v4_bool_exp {_and?: (token_list_v4_bool_exp[] | null),_not?: (token_list_v4_bool_exp | null),_or?: (token_list_v4_bool_exp[] | null),current_price?: (numeric_comparison_exp | null),daily_volume_usd?: (numeric_comparison_exp | null),decimals?: (jsonb_comparison_exp | null),id?: (String_comparison_exp | null),is_depin_token?: (Boolean_comparison_exp | null),is_official?: (Boolean_comparison_exp | null),logo?: (String_comparison_exp | null),market_cap?: (numeric_comparison_exp | null),name?: (String_comparison_exp | null),platforms?: (jsonb_comparison_exp | null),price_change_24h?: (numeric_comparison_exp | null),rank_point?: (numeric_comparison_exp | null),sparkline_in_7d?: (jsonb_comparison_exp | null),symbol?: (String_comparison_exp | null),tags?: (String_array_comparison_exp | null),total_liquidity_usd?: (numeric_comparison_exp | null),website?: (String_comparison_exp | null),weight?: (Int_comparison_exp | null)}


/** Ordering options when selecting data from "token_list_v4". */
export interface token_list_v4_order_by {current_price?: (order_by | null),daily_volume_usd?: (order_by | null),decimals?: (order_by | null),id?: (order_by | null),is_depin_token?: (order_by | null),is_official?: (order_by | null),logo?: (order_by | null),market_cap?: (order_by | null),name?: (order_by | null),platforms?: (order_by | null),price_change_24h?: (order_by | null),rank_point?: (order_by | null),sparkline_in_7d?: (order_by | null),symbol?: (order_by | null),tags?: (order_by | null),total_liquidity_usd?: (order_by | null),website?: (order_by | null),weight?: (order_by | null)}


/** Streaming cursor of the table "token_list_v4" */
export interface token_list_v4_stream_cursor_input {
/** Stream column input with initial value */
initial_value: token_list_v4_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface token_list_v4_stream_cursor_value_input {current_price?: (Scalars['numeric'] | null),daily_volume_usd?: (Scalars['numeric'] | null),decimals?: (Scalars['jsonb'] | null),id?: (Scalars['String'] | null),is_depin_token?: (Scalars['Boolean'] | null),is_official?: (Scalars['Boolean'] | null),logo?: (Scalars['String'] | null),market_cap?: (Scalars['numeric'] | null),name?: (Scalars['String'] | null),platforms?: (Scalars['jsonb'] | null),price_change_24h?: (Scalars['numeric'] | null),rank_point?: (Scalars['numeric'] | null),sparkline_in_7d?: (Scalars['jsonb'] | null),symbol?: (Scalars['String'] | null),tags?: (Scalars['String'][] | null),total_liquidity_usd?: (Scalars['numeric'] | null),website?: (Scalars['String'] | null),weight?: (Scalars['Int'] | null)}


/** columns and relationships of "token_risk" */
export interface token_riskGenqlSelection{
    address?: boolean | number
    chainShortName?: boolean | number
    created_at?: boolean | number
    riskLevel?: boolean | number
    riskStatus?: boolean | number
    source?: boolean | number
    tokenFullName?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "token_risk". All fields are combined with a logical 'AND'. */
export interface token_risk_bool_exp {_and?: (token_risk_bool_exp[] | null),_not?: (token_risk_bool_exp | null),_or?: (token_risk_bool_exp[] | null),address?: (String_comparison_exp | null),chainShortName?: (String_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),riskLevel?: (Int_comparison_exp | null),riskStatus?: (String_comparison_exp | null),source?: (String_comparison_exp | null),tokenFullName?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** Ordering options when selecting data from "token_risk". */
export interface token_risk_order_by {address?: (order_by | null),chainShortName?: (order_by | null),created_at?: (order_by | null),riskLevel?: (order_by | null),riskStatus?: (order_by | null),source?: (order_by | null),tokenFullName?: (order_by | null),updated_at?: (order_by | null)}


/** Streaming cursor of the table "token_risk" */
export interface token_risk_stream_cursor_input {
/** Stream column input with initial value */
initial_value: token_risk_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface token_risk_stream_cursor_value_input {address?: (Scalars['String'] | null),chainShortName?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),riskLevel?: (Scalars['Int'] | null),riskStatus?: (Scalars['String'] | null),source?: (Scalars['String'] | null),tokenFullName?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** columns and relationships of "version_control_android_2" */
export interface version_control_android_2GenqlSelection{
    forced_code?: boolean | number
    id?: boolean | number
    log?: boolean | number
    log_cn?: boolean | number
    target_version_code?: boolean | number
    upgrade_content_cn?: boolean | number
    upgrade_content_en?: boolean | number
    url?: boolean | number
    version_code?: boolean | number
    version_name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "version_control_android_2". All fields are combined with a logical 'AND'. */
export interface version_control_android_2_bool_exp {_and?: (version_control_android_2_bool_exp[] | null),_not?: (version_control_android_2_bool_exp | null),_or?: (version_control_android_2_bool_exp[] | null),forced_code?: (Int_comparison_exp | null),id?: (bigint_comparison_exp | null),log?: (String_comparison_exp | null),log_cn?: (String_comparison_exp | null),target_version_code?: (Int_comparison_exp | null),upgrade_content_cn?: (String_comparison_exp | null),upgrade_content_en?: (String_comparison_exp | null),url?: (String_comparison_exp | null),version_code?: (Int_comparison_exp | null),version_name?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "version_control_android_2". */
export interface version_control_android_2_order_by {forced_code?: (order_by | null),id?: (order_by | null),log?: (order_by | null),log_cn?: (order_by | null),target_version_code?: (order_by | null),upgrade_content_cn?: (order_by | null),upgrade_content_en?: (order_by | null),url?: (order_by | null),version_code?: (order_by | null),version_name?: (order_by | null)}


/** Streaming cursor of the table "version_control_android_2" */
export interface version_control_android_2_stream_cursor_input {
/** Stream column input with initial value */
initial_value: version_control_android_2_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface version_control_android_2_stream_cursor_value_input {forced_code?: (Scalars['Int'] | null),id?: (Scalars['bigint'] | null),log?: (Scalars['String'] | null),log_cn?: (Scalars['String'] | null),target_version_code?: (Scalars['Int'] | null),upgrade_content_cn?: (Scalars['String'] | null),upgrade_content_en?: (Scalars['String'] | null),url?: (Scalars['String'] | null),version_code?: (Scalars['Int'] | null),version_name?: (Scalars['String'] | null)}


/** columns and relationships of "version_control_ios" */
export interface version_control_iosGenqlSelection{
    content?: boolean | number
    forced_version?: boolean | number
    hide_buy_version?: boolean | number
    id?: boolean | number
    url?: boolean | number
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "version_control_ios". All fields are combined with a logical 'AND'. */
export interface version_control_ios_bool_exp {_and?: (version_control_ios_bool_exp[] | null),_not?: (version_control_ios_bool_exp | null),_or?: (version_control_ios_bool_exp[] | null),content?: (String_comparison_exp | null),forced_version?: (String_comparison_exp | null),hide_buy_version?: (String_comparison_exp | null),id?: (Int_comparison_exp | null),url?: (String_comparison_exp | null),version?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "version_control_ios". */
export interface version_control_ios_order_by {content?: (order_by | null),forced_version?: (order_by | null),hide_buy_version?: (order_by | null),id?: (order_by | null),url?: (order_by | null),version?: (order_by | null)}


/** Streaming cursor of the table "version_control_ios" */
export interface version_control_ios_stream_cursor_input {
/** Stream column input with initial value */
initial_value: version_control_ios_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface version_control_ios_stream_cursor_value_input {content?: (Scalars['String'] | null),forced_version?: (Scalars['String'] | null),hide_buy_version?: (Scalars['String'] | null),id?: (Scalars['Int'] | null),url?: (Scalars['String'] | null),version?: (Scalars['String'] | null)}


/** columns and relationships of "wallet_info" */
export interface wallet_infoGenqlSelection{
    address?: boolean | number
    ads?: boolean | number
    balance?: boolean | number
    chainId?: boolean | number
    created_at?: boolean | number
    id?: boolean | number
    platform?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "wallet_info". All fields are combined with a logical 'AND'. */
export interface wallet_info_bool_exp {_and?: (wallet_info_bool_exp[] | null),_not?: (wallet_info_bool_exp | null),_or?: (wallet_info_bool_exp[] | null),address?: (String_comparison_exp | null),ads?: (String_comparison_exp | null),balance?: (String_comparison_exp | null),chainId?: (Int_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),id?: (Int_comparison_exp | null),platform?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for inserting data into table "wallet_info" */
export interface wallet_info_insert_input {address?: (Scalars['String'] | null),ads?: (Scalars['String'] | null),balance?: (Scalars['String'] | null),chainId?: (Scalars['Int'] | null),created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['Int'] | null),platform?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** response of any mutation on the table "wallet_info" */
export interface wallet_info_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: wallet_infoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "wallet_info" */
export interface wallet_info_on_conflict {constraint: wallet_info_constraint,update_columns?: wallet_info_update_column[],where?: (wallet_info_bool_exp | null)}


/** Ordering options when selecting data from "wallet_info". */
export interface wallet_info_order_by {address?: (order_by | null),ads?: (order_by | null),balance?: (order_by | null),chainId?: (order_by | null),created_at?: (order_by | null),id?: (order_by | null),platform?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: wallet_info */
export interface wallet_info_pk_columns_input {id: Scalars['Int']}


/** input type for updating data in table "wallet_info" */
export interface wallet_info_set_input {balance?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** Streaming cursor of the table "wallet_info" */
export interface wallet_info_stream_cursor_input {
/** Stream column input with initial value */
initial_value: wallet_info_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface wallet_info_stream_cursor_value_input {address?: (Scalars['String'] | null),ads?: (Scalars['String'] | null),balance?: (Scalars['String'] | null),chainId?: (Scalars['Int'] | null),created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['Int'] | null),platform?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}

export interface wallet_info_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (wallet_info_set_input | null),
/** filter the rows which have to be updated */
where: wallet_info_bool_exp}

export type QueryGenqlSelection = query_rootGenqlSelection
export type MutationGenqlSelection = mutation_rootGenqlSelection
export type SubscriptionGenqlSelection = subscription_rootGenqlSelection


    const app_img_cache_update_possibleTypes: string[] = ['app_img_cache_update']
    export const isapp_img_cache_update = (obj?: { __typename?: any } | null): obj is app_img_cache_update => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isapp_img_cache_update"')
      return app_img_cache_update_possibleTypes.includes(obj.__typename)
    }
    


    const buy_iotex_possibleTypes: string[] = ['buy_iotex']
    export const isbuy_iotex = (obj?: { __typename?: any } | null): obj is buy_iotex => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isbuy_iotex"')
      return buy_iotex_possibleTypes.includes(obj.__typename)
    }
    


    const campaign_labels_possibleTypes: string[] = ['campaign_labels']
    export const iscampaign_labels = (obj?: { __typename?: any } | null): obj is campaign_labels => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscampaign_labels"')
      return campaign_labels_possibleTypes.includes(obj.__typename)
    }
    


    const campaign_list_possibleTypes: string[] = ['campaign_list']
    export const iscampaign_list = (obj?: { __typename?: any } | null): obj is campaign_list => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscampaign_list"')
      return campaign_list_possibleTypes.includes(obj.__typename)
    }
    


    const certified_contract_possibleTypes: string[] = ['certified_contract']
    export const iscertified_contract = (obj?: { __typename?: any } | null): obj is certified_contract => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscertified_contract"')
      return certified_contract_possibleTypes.includes(obj.__typename)
    }
    


    const coingecko_coin_detail_possibleTypes: string[] = ['coingecko_coin_detail']
    export const iscoingecko_coin_detail = (obj?: { __typename?: any } | null): obj is coingecko_coin_detail => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscoingecko_coin_detail"')
      return coingecko_coin_detail_possibleTypes.includes(obj.__typename)
    }
    


    const coingeko_market_possibleTypes: string[] = ['coingeko_market']
    export const iscoingeko_market = (obj?: { __typename?: any } | null): obj is coingeko_market => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscoingeko_market"')
      return coingeko_market_possibleTypes.includes(obj.__typename)
    }
    


    const contract_error_msg_possibleTypes: string[] = ['contract_error_msg']
    export const iscontract_error_msg = (obj?: { __typename?: any } | null): obj is contract_error_msg => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscontract_error_msg"')
      return contract_error_msg_possibleTypes.includes(obj.__typename)
    }
    


    const dapp_category_possibleTypes: string[] = ['dapp_category']
    export const isdapp_category = (obj?: { __typename?: any } | null): obj is dapp_category => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdapp_category"')
      return dapp_category_possibleTypes.includes(obj.__typename)
    }
    


    const dapp_category_banner_possibleTypes: string[] = ['dapp_category_banner']
    export const isdapp_category_banner = (obj?: { __typename?: any } | null): obj is dapp_category_banner => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdapp_category_banner"')
      return dapp_category_banner_possibleTypes.includes(obj.__typename)
    }
    


    const dapp_list_possibleTypes: string[] = ['dapp_list']
    export const isdapp_list = (obj?: { __typename?: any } | null): obj is dapp_list => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdapp_list"')
      return dapp_list_possibleTypes.includes(obj.__typename)
    }
    


    const dapp_list_latest_possibleTypes: string[] = ['dapp_list_latest']
    export const isdapp_list_latest = (obj?: { __typename?: any } | null): obj is dapp_list_latest => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdapp_list_latest"')
      return dapp_list_latest_possibleTypes.includes(obj.__typename)
    }
    


    const dapp_list_latest_v2_possibleTypes: string[] = ['dapp_list_latest_v2']
    export const isdapp_list_latest_v2 = (obj?: { __typename?: any } | null): obj is dapp_list_latest_v2 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdapp_list_latest_v2"')
      return dapp_list_latest_v2_possibleTypes.includes(obj.__typename)
    }
    


    const dapp_list_latest_v2_aggregate_possibleTypes: string[] = ['dapp_list_latest_v2_aggregate']
    export const isdapp_list_latest_v2_aggregate = (obj?: { __typename?: any } | null): obj is dapp_list_latest_v2_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdapp_list_latest_v2_aggregate"')
      return dapp_list_latest_v2_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const dapp_list_latest_v2_aggregate_fields_possibleTypes: string[] = ['dapp_list_latest_v2_aggregate_fields']
    export const isdapp_list_latest_v2_aggregate_fields = (obj?: { __typename?: any } | null): obj is dapp_list_latest_v2_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdapp_list_latest_v2_aggregate_fields"')
      return dapp_list_latest_v2_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const dapp_list_latest_v2_avg_fields_possibleTypes: string[] = ['dapp_list_latest_v2_avg_fields']
    export const isdapp_list_latest_v2_avg_fields = (obj?: { __typename?: any } | null): obj is dapp_list_latest_v2_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdapp_list_latest_v2_avg_fields"')
      return dapp_list_latest_v2_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const dapp_list_latest_v2_max_fields_possibleTypes: string[] = ['dapp_list_latest_v2_max_fields']
    export const isdapp_list_latest_v2_max_fields = (obj?: { __typename?: any } | null): obj is dapp_list_latest_v2_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdapp_list_latest_v2_max_fields"')
      return dapp_list_latest_v2_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const dapp_list_latest_v2_min_fields_possibleTypes: string[] = ['dapp_list_latest_v2_min_fields']
    export const isdapp_list_latest_v2_min_fields = (obj?: { __typename?: any } | null): obj is dapp_list_latest_v2_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdapp_list_latest_v2_min_fields"')
      return dapp_list_latest_v2_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const dapp_list_latest_v2_stddev_fields_possibleTypes: string[] = ['dapp_list_latest_v2_stddev_fields']
    export const isdapp_list_latest_v2_stddev_fields = (obj?: { __typename?: any } | null): obj is dapp_list_latest_v2_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdapp_list_latest_v2_stddev_fields"')
      return dapp_list_latest_v2_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const dapp_list_latest_v2_stddev_pop_fields_possibleTypes: string[] = ['dapp_list_latest_v2_stddev_pop_fields']
    export const isdapp_list_latest_v2_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is dapp_list_latest_v2_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdapp_list_latest_v2_stddev_pop_fields"')
      return dapp_list_latest_v2_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const dapp_list_latest_v2_stddev_samp_fields_possibleTypes: string[] = ['dapp_list_latest_v2_stddev_samp_fields']
    export const isdapp_list_latest_v2_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is dapp_list_latest_v2_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdapp_list_latest_v2_stddev_samp_fields"')
      return dapp_list_latest_v2_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const dapp_list_latest_v2_sum_fields_possibleTypes: string[] = ['dapp_list_latest_v2_sum_fields']
    export const isdapp_list_latest_v2_sum_fields = (obj?: { __typename?: any } | null): obj is dapp_list_latest_v2_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdapp_list_latest_v2_sum_fields"')
      return dapp_list_latest_v2_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const dapp_list_latest_v2_var_pop_fields_possibleTypes: string[] = ['dapp_list_latest_v2_var_pop_fields']
    export const isdapp_list_latest_v2_var_pop_fields = (obj?: { __typename?: any } | null): obj is dapp_list_latest_v2_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdapp_list_latest_v2_var_pop_fields"')
      return dapp_list_latest_v2_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const dapp_list_latest_v2_var_samp_fields_possibleTypes: string[] = ['dapp_list_latest_v2_var_samp_fields']
    export const isdapp_list_latest_v2_var_samp_fields = (obj?: { __typename?: any } | null): obj is dapp_list_latest_v2_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdapp_list_latest_v2_var_samp_fields"')
      return dapp_list_latest_v2_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const dapp_list_latest_v2_variance_fields_possibleTypes: string[] = ['dapp_list_latest_v2_variance_fields']
    export const isdapp_list_latest_v2_variance_fields = (obj?: { __typename?: any } | null): obj is dapp_list_latest_v2_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdapp_list_latest_v2_variance_fields"')
      return dapp_list_latest_v2_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const dapp_list_v3_possibleTypes: string[] = ['dapp_list_v3']
    export const isdapp_list_v3 = (obj?: { __typename?: any } | null): obj is dapp_list_v3 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdapp_list_v3"')
      return dapp_list_v3_possibleTypes.includes(obj.__typename)
    }
    


    const dapp_list_v4_possibleTypes: string[] = ['dapp_list_v4']
    export const isdapp_list_v4 = (obj?: { __typename?: any } | null): obj is dapp_list_v4 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdapp_list_v4"')
      return dapp_list_v4_possibleTypes.includes(obj.__typename)
    }
    


    const dapp_list_v5_possibleTypes: string[] = ['dapp_list_v5']
    export const isdapp_list_v5 = (obj?: { __typename?: any } | null): obj is dapp_list_v5 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdapp_list_v5"')
      return dapp_list_v5_possibleTypes.includes(obj.__typename)
    }
    


    const dapp_promote_possibleTypes: string[] = ['dapp_promote']
    export const isdapp_promote = (obj?: { __typename?: any } | null): obj is dapp_promote => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdapp_promote"')
      return dapp_promote_possibleTypes.includes(obj.__typename)
    }
    


    const discovery_banner_possibleTypes: string[] = ['discovery_banner']
    export const isdiscovery_banner = (obj?: { __typename?: any } | null): obj is discovery_banner => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdiscovery_banner"')
      return discovery_banner_possibleTypes.includes(obj.__typename)
    }
    


    const home_news_banners_possibleTypes: string[] = ['home_news_banners']
    export const ishome_news_banners = (obj?: { __typename?: any } | null): obj is home_news_banners => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ishome_news_banners"')
      return home_news_banners_possibleTypes.includes(obj.__typename)
    }
    


    const home_news_banners_test_possibleTypes: string[] = ['home_news_banners_test']
    export const ishome_news_banners_test = (obj?: { __typename?: any } | null): obj is home_news_banners_test => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ishome_news_banners_test"')
      return home_news_banners_test_possibleTypes.includes(obj.__typename)
    }
    


    const home_post_event_possibleTypes: string[] = ['home_post_event']
    export const ishome_post_event = (obj?: { __typename?: any } | null): obj is home_post_event => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ishome_post_event"')
      return home_post_event_possibleTypes.includes(obj.__typename)
    }
    


    const iip13_bucket_type_ignore_possibleTypes: string[] = ['iip13_bucket_type_ignore']
    export const isiip13_bucket_type_ignore = (obj?: { __typename?: any } | null): obj is iip13_bucket_type_ignore => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isiip13_bucket_type_ignore"')
      return iip13_bucket_type_ignore_possibleTypes.includes(obj.__typename)
    }
    


    const iopay_device_config_possibleTypes: string[] = ['iopay_device_config']
    export const isiopay_device_config = (obj?: { __typename?: any } | null): obj is iopay_device_config => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isiopay_device_config"')
      return iopay_device_config_possibleTypes.includes(obj.__typename)
    }
    


    const iopay_device_config_mutation_response_possibleTypes: string[] = ['iopay_device_config_mutation_response']
    export const isiopay_device_config_mutation_response = (obj?: { __typename?: any } | null): obj is iopay_device_config_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isiopay_device_config_mutation_response"')
      return iopay_device_config_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const iopay_earning_banner_possibleTypes: string[] = ['iopay_earning_banner']
    export const isiopay_earning_banner = (obj?: { __typename?: any } | null): obj is iopay_earning_banner => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isiopay_earning_banner"')
      return iopay_earning_banner_possibleTypes.includes(obj.__typename)
    }
    


    const iopay_earning_list_possibleTypes: string[] = ['iopay_earning_list']
    export const isiopay_earning_list = (obj?: { __typename?: any } | null): obj is iopay_earning_list => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isiopay_earning_list"')
      return iopay_earning_list_possibleTypes.includes(obj.__typename)
    }
    


    const iopay_wallet_models_possibleTypes: string[] = ['iopay_wallet_models']
    export const isiopay_wallet_models = (obj?: { __typename?: any } | null): obj is iopay_wallet_models => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isiopay_wallet_models"')
      return iopay_wallet_models_possibleTypes.includes(obj.__typename)
    }
    


    const iopay_wallet_models_mutation_response_possibleTypes: string[] = ['iopay_wallet_models_mutation_response']
    export const isiopay_wallet_models_mutation_response = (obj?: { __typename?: any } | null): obj is iopay_wallet_models_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isiopay_wallet_models_mutation_response"')
      return iopay_wallet_models_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const iopay_wallet_models_test2_possibleTypes: string[] = ['iopay_wallet_models_test2']
    export const isiopay_wallet_models_test2 = (obj?: { __typename?: any } | null): obj is iopay_wallet_models_test2 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isiopay_wallet_models_test2"')
      return iopay_wallet_models_test2_possibleTypes.includes(obj.__typename)
    }
    


    const iopay_wallet_models_test2_mutation_response_possibleTypes: string[] = ['iopay_wallet_models_test2_mutation_response']
    export const isiopay_wallet_models_test2_mutation_response = (obj?: { __typename?: any } | null): obj is iopay_wallet_models_test2_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isiopay_wallet_models_test2_mutation_response"')
      return iopay_wallet_models_test2_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const media_possibleTypes: string[] = ['media']
    export const ismedia = (obj?: { __typename?: any } | null): obj is media => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismedia"')
      return media_possibleTypes.includes(obj.__typename)
    }
    


    const metaPebble_pebble_contract_possibleTypes: string[] = ['metaPebble_pebble_contract']
    export const ismetaPebble_pebble_contract = (obj?: { __typename?: any } | null): obj is metaPebble_pebble_contract => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismetaPebble_pebble_contract"')
      return metaPebble_pebble_contract_possibleTypes.includes(obj.__typename)
    }
    


    const metaPebble_pebble_contract_mainnet_possibleTypes: string[] = ['metaPebble_pebble_contract_mainnet']
    export const ismetaPebble_pebble_contract_mainnet = (obj?: { __typename?: any } | null): obj is metaPebble_pebble_contract_mainnet => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismetaPebble_pebble_contract_mainnet"')
      return metaPebble_pebble_contract_mainnet_possibleTypes.includes(obj.__typename)
    }
    


    const metaPebble_version_android_possibleTypes: string[] = ['metaPebble_version_android']
    export const ismetaPebble_version_android = (obj?: { __typename?: any } | null): obj is metaPebble_version_android => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismetaPebble_version_android"')
      return metaPebble_version_android_possibleTypes.includes(obj.__typename)
    }
    


    const metaPebble_version_ios_possibleTypes: string[] = ['metaPebble_version_ios']
    export const ismetaPebble_version_ios = (obj?: { __typename?: any } | null): obj is metaPebble_version_ios => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismetaPebble_version_ios"')
      return metaPebble_version_ios_possibleTypes.includes(obj.__typename)
    }
    


    const mutation_root_possibleTypes: string[] = ['mutation_root']
    export const ismutation_root = (obj?: { __typename?: any } | null): obj is mutation_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismutation_root"')
      return mutation_root_possibleTypes.includes(obj.__typename)
    }
    


    const network_aa_config_possibleTypes: string[] = ['network_aa_config']
    export const isnetwork_aa_config = (obj?: { __typename?: any } | null): obj is network_aa_config => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnetwork_aa_config"')
      return network_aa_config_possibleTypes.includes(obj.__typename)
    }
    


    const network_chain_theme_possibleTypes: string[] = ['network_chain_theme']
    export const isnetwork_chain_theme = (obj?: { __typename?: any } | null): obj is network_chain_theme => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnetwork_chain_theme"')
      return network_chain_theme_possibleTypes.includes(obj.__typename)
    }
    


    const network_config_possibleTypes: string[] = ['network_config']
    export const isnetwork_config = (obj?: { __typename?: any } | null): obj is network_config => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnetwork_config"')
      return network_config_possibleTypes.includes(obj.__typename)
    }
    


    const network_list_possibleTypes: string[] = ['network_list']
    export const isnetwork_list = (obj?: { __typename?: any } | null): obj is network_list => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnetwork_list"')
      return network_list_possibleTypes.includes(obj.__typename)
    }
    


    const network_list_aggregate_possibleTypes: string[] = ['network_list_aggregate']
    export const isnetwork_list_aggregate = (obj?: { __typename?: any } | null): obj is network_list_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnetwork_list_aggregate"')
      return network_list_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const network_list_aggregate_fields_possibleTypes: string[] = ['network_list_aggregate_fields']
    export const isnetwork_list_aggregate_fields = (obj?: { __typename?: any } | null): obj is network_list_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnetwork_list_aggregate_fields"')
      return network_list_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const network_list_avg_fields_possibleTypes: string[] = ['network_list_avg_fields']
    export const isnetwork_list_avg_fields = (obj?: { __typename?: any } | null): obj is network_list_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnetwork_list_avg_fields"')
      return network_list_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const network_list_max_fields_possibleTypes: string[] = ['network_list_max_fields']
    export const isnetwork_list_max_fields = (obj?: { __typename?: any } | null): obj is network_list_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnetwork_list_max_fields"')
      return network_list_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const network_list_min_fields_possibleTypes: string[] = ['network_list_min_fields']
    export const isnetwork_list_min_fields = (obj?: { __typename?: any } | null): obj is network_list_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnetwork_list_min_fields"')
      return network_list_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const network_list_stddev_fields_possibleTypes: string[] = ['network_list_stddev_fields']
    export const isnetwork_list_stddev_fields = (obj?: { __typename?: any } | null): obj is network_list_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnetwork_list_stddev_fields"')
      return network_list_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const network_list_stddev_pop_fields_possibleTypes: string[] = ['network_list_stddev_pop_fields']
    export const isnetwork_list_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is network_list_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnetwork_list_stddev_pop_fields"')
      return network_list_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const network_list_stddev_samp_fields_possibleTypes: string[] = ['network_list_stddev_samp_fields']
    export const isnetwork_list_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is network_list_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnetwork_list_stddev_samp_fields"')
      return network_list_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const network_list_sum_fields_possibleTypes: string[] = ['network_list_sum_fields']
    export const isnetwork_list_sum_fields = (obj?: { __typename?: any } | null): obj is network_list_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnetwork_list_sum_fields"')
      return network_list_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const network_list_var_pop_fields_possibleTypes: string[] = ['network_list_var_pop_fields']
    export const isnetwork_list_var_pop_fields = (obj?: { __typename?: any } | null): obj is network_list_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnetwork_list_var_pop_fields"')
      return network_list_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const network_list_var_samp_fields_possibleTypes: string[] = ['network_list_var_samp_fields']
    export const isnetwork_list_var_samp_fields = (obj?: { __typename?: any } | null): obj is network_list_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnetwork_list_var_samp_fields"')
      return network_list_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const network_list_variance_fields_possibleTypes: string[] = ['network_list_variance_fields']
    export const isnetwork_list_variance_fields = (obj?: { __typename?: any } | null): obj is network_list_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnetwork_list_variance_fields"')
      return network_list_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const new_wallet_claims_possibleTypes: string[] = ['new_wallet_claims']
    export const isnew_wallet_claims = (obj?: { __typename?: any } | null): obj is new_wallet_claims => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnew_wallet_claims"')
      return new_wallet_claims_possibleTypes.includes(obj.__typename)
    }
    


    const nft_token_list_possibleTypes: string[] = ['nft_token_list']
    export const isnft_token_list = (obj?: { __typename?: any } | null): obj is nft_token_list => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isnft_token_list"')
      return nft_token_list_possibleTypes.includes(obj.__typename)
    }
    


    const query_root_possibleTypes: string[] = ['query_root']
    export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"')
      return query_root_possibleTypes.includes(obj.__typename)
    }
    


    const risk_dapps_possibleTypes: string[] = ['risk_dapps']
    export const isrisk_dapps = (obj?: { __typename?: any } | null): obj is risk_dapps => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isrisk_dapps"')
      return risk_dapps_possibleTypes.includes(obj.__typename)
    }
    


    const setting_pebble_menu_possibleTypes: string[] = ['setting_pebble_menu']
    export const issetting_pebble_menu = (obj?: { __typename?: any } | null): obj is setting_pebble_menu => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issetting_pebble_menu"')
      return setting_pebble_menu_possibleTypes.includes(obj.__typename)
    }
    


    const setting_pebble_menu_aggregate_possibleTypes: string[] = ['setting_pebble_menu_aggregate']
    export const issetting_pebble_menu_aggregate = (obj?: { __typename?: any } | null): obj is setting_pebble_menu_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issetting_pebble_menu_aggregate"')
      return setting_pebble_menu_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const setting_pebble_menu_aggregate_fields_possibleTypes: string[] = ['setting_pebble_menu_aggregate_fields']
    export const issetting_pebble_menu_aggregate_fields = (obj?: { __typename?: any } | null): obj is setting_pebble_menu_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issetting_pebble_menu_aggregate_fields"')
      return setting_pebble_menu_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const setting_pebble_menu_avg_fields_possibleTypes: string[] = ['setting_pebble_menu_avg_fields']
    export const issetting_pebble_menu_avg_fields = (obj?: { __typename?: any } | null): obj is setting_pebble_menu_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issetting_pebble_menu_avg_fields"')
      return setting_pebble_menu_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const setting_pebble_menu_max_fields_possibleTypes: string[] = ['setting_pebble_menu_max_fields']
    export const issetting_pebble_menu_max_fields = (obj?: { __typename?: any } | null): obj is setting_pebble_menu_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issetting_pebble_menu_max_fields"')
      return setting_pebble_menu_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const setting_pebble_menu_min_fields_possibleTypes: string[] = ['setting_pebble_menu_min_fields']
    export const issetting_pebble_menu_min_fields = (obj?: { __typename?: any } | null): obj is setting_pebble_menu_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issetting_pebble_menu_min_fields"')
      return setting_pebble_menu_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const setting_pebble_menu_stddev_fields_possibleTypes: string[] = ['setting_pebble_menu_stddev_fields']
    export const issetting_pebble_menu_stddev_fields = (obj?: { __typename?: any } | null): obj is setting_pebble_menu_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issetting_pebble_menu_stddev_fields"')
      return setting_pebble_menu_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const setting_pebble_menu_stddev_pop_fields_possibleTypes: string[] = ['setting_pebble_menu_stddev_pop_fields']
    export const issetting_pebble_menu_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is setting_pebble_menu_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issetting_pebble_menu_stddev_pop_fields"')
      return setting_pebble_menu_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const setting_pebble_menu_stddev_samp_fields_possibleTypes: string[] = ['setting_pebble_menu_stddev_samp_fields']
    export const issetting_pebble_menu_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is setting_pebble_menu_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issetting_pebble_menu_stddev_samp_fields"')
      return setting_pebble_menu_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const setting_pebble_menu_sum_fields_possibleTypes: string[] = ['setting_pebble_menu_sum_fields']
    export const issetting_pebble_menu_sum_fields = (obj?: { __typename?: any } | null): obj is setting_pebble_menu_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issetting_pebble_menu_sum_fields"')
      return setting_pebble_menu_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const setting_pebble_menu_var_pop_fields_possibleTypes: string[] = ['setting_pebble_menu_var_pop_fields']
    export const issetting_pebble_menu_var_pop_fields = (obj?: { __typename?: any } | null): obj is setting_pebble_menu_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issetting_pebble_menu_var_pop_fields"')
      return setting_pebble_menu_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const setting_pebble_menu_var_samp_fields_possibleTypes: string[] = ['setting_pebble_menu_var_samp_fields']
    export const issetting_pebble_menu_var_samp_fields = (obj?: { __typename?: any } | null): obj is setting_pebble_menu_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issetting_pebble_menu_var_samp_fields"')
      return setting_pebble_menu_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const setting_pebble_menu_variance_fields_possibleTypes: string[] = ['setting_pebble_menu_variance_fields']
    export const issetting_pebble_menu_variance_fields = (obj?: { __typename?: any } | null): obj is setting_pebble_menu_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issetting_pebble_menu_variance_fields"')
      return setting_pebble_menu_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const share_link_admin_possibleTypes: string[] = ['share_link_admin']
    export const isshare_link_admin = (obj?: { __typename?: any } | null): obj is share_link_admin => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isshare_link_admin"')
      return share_link_admin_possibleTypes.includes(obj.__typename)
    }
    


    const signature_possibleTypes: string[] = ['signature']
    export const issignature = (obj?: { __typename?: any } | null): obj is signature => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issignature"')
      return signature_possibleTypes.includes(obj.__typename)
    }
    


    const smart_stake_possibleTypes: string[] = ['smart_stake']
    export const issmart_stake = (obj?: { __typename?: any } | null): obj is smart_stake => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issmart_stake"')
      return smart_stake_possibleTypes.includes(obj.__typename)
    }
    


    const subscription_root_possibleTypes: string[] = ['subscription_root']
    export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"')
      return subscription_root_possibleTypes.includes(obj.__typename)
    }
    


    const system_msg_possibleTypes: string[] = ['system_msg']
    export const issystem_msg = (obj?: { __typename?: any } | null): obj is system_msg => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issystem_msg"')
      return system_msg_possibleTypes.includes(obj.__typename)
    }
    


    const system_msg_test_possibleTypes: string[] = ['system_msg_test']
    export const issystem_msg_test = (obj?: { __typename?: any } | null): obj is system_msg_test => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issystem_msg_test"')
      return system_msg_test_possibleTypes.includes(obj.__typename)
    }
    


    const token_in_dapps_possibleTypes: string[] = ['token_in_dapps']
    export const istoken_in_dapps = (obj?: { __typename?: any } | null): obj is token_in_dapps => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_in_dapps"')
      return token_in_dapps_possibleTypes.includes(obj.__typename)
    }
    


    const token_list_possibleTypes: string[] = ['token_list']
    export const istoken_list = (obj?: { __typename?: any } | null): obj is token_list => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_list"')
      return token_list_possibleTypes.includes(obj.__typename)
    }
    


    const token_list_v2_possibleTypes: string[] = ['token_list_v2']
    export const istoken_list_v2 = (obj?: { __typename?: any } | null): obj is token_list_v2 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_list_v2"')
      return token_list_v2_possibleTypes.includes(obj.__typename)
    }
    


    const token_list_v3_possibleTypes: string[] = ['token_list_v3']
    export const istoken_list_v3 = (obj?: { __typename?: any } | null): obj is token_list_v3 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_list_v3"')
      return token_list_v3_possibleTypes.includes(obj.__typename)
    }
    


    const token_list_v3_aggregate_possibleTypes: string[] = ['token_list_v3_aggregate']
    export const istoken_list_v3_aggregate = (obj?: { __typename?: any } | null): obj is token_list_v3_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_list_v3_aggregate"')
      return token_list_v3_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const token_list_v3_aggregate_fields_possibleTypes: string[] = ['token_list_v3_aggregate_fields']
    export const istoken_list_v3_aggregate_fields = (obj?: { __typename?: any } | null): obj is token_list_v3_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_list_v3_aggregate_fields"')
      return token_list_v3_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_list_v3_avg_fields_possibleTypes: string[] = ['token_list_v3_avg_fields']
    export const istoken_list_v3_avg_fields = (obj?: { __typename?: any } | null): obj is token_list_v3_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_list_v3_avg_fields"')
      return token_list_v3_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_list_v3_max_fields_possibleTypes: string[] = ['token_list_v3_max_fields']
    export const istoken_list_v3_max_fields = (obj?: { __typename?: any } | null): obj is token_list_v3_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_list_v3_max_fields"')
      return token_list_v3_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_list_v3_min_fields_possibleTypes: string[] = ['token_list_v3_min_fields']
    export const istoken_list_v3_min_fields = (obj?: { __typename?: any } | null): obj is token_list_v3_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_list_v3_min_fields"')
      return token_list_v3_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_list_v3_stddev_fields_possibleTypes: string[] = ['token_list_v3_stddev_fields']
    export const istoken_list_v3_stddev_fields = (obj?: { __typename?: any } | null): obj is token_list_v3_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_list_v3_stddev_fields"')
      return token_list_v3_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_list_v3_stddev_pop_fields_possibleTypes: string[] = ['token_list_v3_stddev_pop_fields']
    export const istoken_list_v3_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is token_list_v3_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_list_v3_stddev_pop_fields"')
      return token_list_v3_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_list_v3_stddev_samp_fields_possibleTypes: string[] = ['token_list_v3_stddev_samp_fields']
    export const istoken_list_v3_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is token_list_v3_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_list_v3_stddev_samp_fields"')
      return token_list_v3_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_list_v3_sum_fields_possibleTypes: string[] = ['token_list_v3_sum_fields']
    export const istoken_list_v3_sum_fields = (obj?: { __typename?: any } | null): obj is token_list_v3_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_list_v3_sum_fields"')
      return token_list_v3_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_list_v3_var_pop_fields_possibleTypes: string[] = ['token_list_v3_var_pop_fields']
    export const istoken_list_v3_var_pop_fields = (obj?: { __typename?: any } | null): obj is token_list_v3_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_list_v3_var_pop_fields"')
      return token_list_v3_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_list_v3_var_samp_fields_possibleTypes: string[] = ['token_list_v3_var_samp_fields']
    export const istoken_list_v3_var_samp_fields = (obj?: { __typename?: any } | null): obj is token_list_v3_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_list_v3_var_samp_fields"')
      return token_list_v3_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_list_v3_variance_fields_possibleTypes: string[] = ['token_list_v3_variance_fields']
    export const istoken_list_v3_variance_fields = (obj?: { __typename?: any } | null): obj is token_list_v3_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_list_v3_variance_fields"')
      return token_list_v3_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_list_v4_possibleTypes: string[] = ['token_list_v4']
    export const istoken_list_v4 = (obj?: { __typename?: any } | null): obj is token_list_v4 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_list_v4"')
      return token_list_v4_possibleTypes.includes(obj.__typename)
    }
    


    const token_risk_possibleTypes: string[] = ['token_risk']
    export const istoken_risk = (obj?: { __typename?: any } | null): obj is token_risk => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_risk"')
      return token_risk_possibleTypes.includes(obj.__typename)
    }
    


    const version_control_android_2_possibleTypes: string[] = ['version_control_android_2']
    export const isversion_control_android_2 = (obj?: { __typename?: any } | null): obj is version_control_android_2 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isversion_control_android_2"')
      return version_control_android_2_possibleTypes.includes(obj.__typename)
    }
    


    const version_control_ios_possibleTypes: string[] = ['version_control_ios']
    export const isversion_control_ios = (obj?: { __typename?: any } | null): obj is version_control_ios => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isversion_control_ios"')
      return version_control_ios_possibleTypes.includes(obj.__typename)
    }
    


    const wallet_info_possibleTypes: string[] = ['wallet_info']
    export const iswallet_info = (obj?: { __typename?: any } | null): obj is wallet_info => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iswallet_info"')
      return wallet_info_possibleTypes.includes(obj.__typename)
    }
    


    const wallet_info_mutation_response_possibleTypes: string[] = ['wallet_info_mutation_response']
    export const iswallet_info_mutation_response = (obj?: { __typename?: any } | null): obj is wallet_info_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iswallet_info_mutation_response"')
      return wallet_info_mutation_response_possibleTypes.includes(obj.__typename)
    }
    

export const enumAppImgCacheUpdateSelectColumn = {
   id: 'id' as const,
   versionCode: 'versionCode' as const
}

export const enumBuyIotexSelectColumn = {
   content: 'content' as const,
   content_cn: 'content_cn' as const,
   enabled: 'enabled' as const,
   icon: 'icon' as const,
   id: 'id' as const,
   ios_available: 'ios_available' as const,
   link: 'link' as const,
   third_party: 'third_party' as const,
   title: 'title' as const,
   type: 'type' as const,
   type_icon_name: 'type_icon_name' as const
}

export const enumCampaignLabelsSelectColumn = {
   color: 'color' as const,
   id: 'id' as const,
   name: 'name' as const
}

export const enumCampaignListSelectColumn = {
   active: 'active' as const,
   created_at: 'created_at' as const,
   description: 'description' as const,
   end_at: 'end_at' as const,
   id: 'id' as const,
   img_url: 'img_url' as const,
   labels: 'labels' as const,
   link: 'link' as const,
   order_index: 'order_index' as const,
   port3: 'port3' as const,
   start_at: 'start_at' as const,
   title: 'title' as const,
   updated_at: 'updated_at' as const
}

export const enumCertifiedContractSelectColumn = {
   contract: 'contract' as const,
   id: 'id' as const,
   name: 'name' as const,
   option: 'option' as const
}

export const enumCoingeckoCoinDetailSelectColumn = {
   data: 'data' as const,
   id: 'id' as const,
   website: 'website' as const
}

export const enumCoingekoMarketSelectColumn = {
   ath: 'ath' as const,
   ath_change_percentage: 'ath_change_percentage' as const,
   ath_date: 'ath_date' as const,
   atl: 'atl' as const,
   atl_change_percentage: 'atl_change_percentage' as const,
   atl_date: 'atl_date' as const,
   circulating_supply: 'circulating_supply' as const,
   current_price: 'current_price' as const,
   fully_diluted_valuation: 'fully_diluted_valuation' as const,
   high_24h: 'high_24h' as const,
   id: 'id' as const,
   image: 'image' as const,
   last_updated: 'last_updated' as const,
   low_24h: 'low_24h' as const,
   market_cap: 'market_cap' as const,
   market_cap_change_24h: 'market_cap_change_24h' as const,
   market_cap_change_percentage_24h: 'market_cap_change_percentage_24h' as const,
   market_cap_rank: 'market_cap_rank' as const,
   max_supply: 'max_supply' as const,
   name: 'name' as const,
   price_change_24h: 'price_change_24h' as const,
   price_change_percentage_24h: 'price_change_percentage_24h' as const,
   roi: 'roi' as const,
   sparkline_in_7d: 'sparkline_in_7d' as const,
   symbol: 'symbol' as const,
   total_supply: 'total_supply' as const,
   total_volume: 'total_volume' as const
}

export const enumContractErrorMsgSelectColumn = {
   discription: 'discription' as const,
   error: 'error' as const,
   id: 'id' as const,
   msg: 'msg' as const,
   msg_cn: 'msg_cn' as const
}

export const enumCursorOrdering = {
   ASC: 'ASC' as const,
   DESC: 'DESC' as const
}

export const enumDappCategoryBannerSelectColumn = {
   image: 'image' as const,
   link: 'link' as const,
   name: 'name' as const
}

export const enumDappCategorySelectColumn = {
   hot: 'hot' as const,
   id: 'id' as const,
   name: 'name' as const,
   order: 'order' as const
}

export const enumDappListLatestSelectColumn = {
   chains: 'chains' as const,
   content: 'content' as const,
   content_cn: 'content_cn' as const,
   id: 'id' as const,
   img_url: 'img_url' as const,
   popularity: 'popularity' as const,
   source_priority: 'source_priority' as const,
   tags: 'tags' as const,
   title: 'title' as const,
   url: 'url' as const,
   weight: 'weight' as const
}

export const enumDappListLatestV2SelectColumn = {
   chains: 'chains' as const,
   content: 'content' as const,
   content_cn: 'content_cn' as const,
   id: 'id' as const,
   img_url: 'img_url' as const,
   is_updated: 'is_updated' as const,
   popularity: 'popularity' as const,
   source_priority: 'source_priority' as const,
   tags: 'tags' as const,
   title: 'title' as const,
   url: 'url' as const,
   weight: 'weight' as const
}

export const enumDappListSelectColumn = {
   category: 'category' as const,
   chains: 'chains' as const,
   content: 'content' as const,
   contentCN: 'contentCN' as const,
   id: 'id' as const,
   imgUrl: 'imgUrl' as const,
   named: 'named' as const,
   title: 'title' as const,
   url: 'url' as const,
   weight: 'weight' as const
}

export const enumDappListV3SelectColumn = {
   chains: 'chains' as const,
   content: 'content' as const,
   content_cn: 'content_cn' as const,
   id: 'id' as const,
   img_url: 'img_url' as const,
   tags: 'tags' as const,
   title: 'title' as const,
   url: 'url' as const,
   weight: 'weight' as const
}

export const enumDappListV4SelectColumn = {
   chains: 'chains' as const,
   content: 'content' as const,
   content_cn: 'content_cn' as const,
   id: 'id' as const,
   img_url: 'img_url' as const,
   tags: 'tags' as const,
   title: 'title' as const,
   tvl: 'tvl' as const,
   url: 'url' as const,
   weight: 'weight' as const
}

export const enumDappListV5SelectColumn = {
   chains: 'chains' as const,
   content: 'content' as const,
   content_cn: 'content_cn' as const,
   id: 'id' as const,
   img_url: 'img_url' as const,
   tags: 'tags' as const,
   title: 'title' as const,
   tvl: 'tvl' as const,
   update_time: 'update_time' as const,
   url: 'url' as const,
   weight: 'weight' as const
}

export const enumDappPromoteSelectColumn = {
   chain: 'chain' as const,
   id: 'id' as const,
   img_url: 'img_url' as const,
   promote: 'promote' as const,
   promote_content: 'promote_content' as const,
   promote_content_cn: 'promote_content_cn' as const,
   title: 'title' as const,
   token: 'token' as const,
   url: 'url' as const
}

export const enumDiscoveryBannerSelectColumn = {
   area: 'area' as const,
   created_at: 'created_at' as const,
   expiration_at: 'expiration_at' as const,
   id: 'id' as const,
   imgUrl: 'imgUrl' as const,
   order: 'order' as const,
   type: 'type' as const,
   url: 'url' as const
}

export const enumHomeNewsBannersSelectColumn = {
   content: 'content' as const,
   created_at: 'created_at' as const,
   expire_at: 'expire_at' as const,
   id: 'id' as const,
   scroll: 'scroll' as const,
   updated_at: 'updated_at' as const,
   url: 'url' as const,
   version: 'version' as const
}

export const enumHomeNewsBannersTestSelectColumn = {
   content: 'content' as const,
   created_at: 'created_at' as const,
   expire_at: 'expire_at' as const,
   id: 'id' as const,
   scroll: 'scroll' as const,
   updated_at: 'updated_at' as const,
   url: 'url' as const,
   version: 'version' as const
}

export const enumHomePostEventSelectColumn = {
   end_at: 'end_at' as const,
   id: 'id' as const,
   post_img: 'post_img' as const,
   post_title: 'post_title' as const,
   start_at: 'start_at' as const
}

export const enumIip13BucketTypeIgnoreSelectColumn = {
   amount: 'amount' as const,
   created_at: 'created_at' as const,
   duration: 'duration' as const,
   id: 'id' as const,
   updated_at: 'updated_at' as const
}

export const enumIopayDeviceConfigConstraint = {
   iopay_device_config_deviceToken_key: 'iopay_device_config_deviceToken_key' as const,
   iopay_device_config_pkey: 'iopay_device_config_pkey' as const
}

export const enumIopayDeviceConfigSelectColumn = {
   created_at: 'created_at' as const,
   deviceToken: 'deviceToken' as const,
   news_push: 'news_push' as const,
   updated_at: 'updated_at' as const
}

export const enumIopayDeviceConfigUpdateColumn = {
   created_at: 'created_at' as const,
   deviceToken: 'deviceToken' as const,
   news_push: 'news_push' as const,
   updated_at: 'updated_at' as const
}

export const enumIopayEarningBannerSelectColumn = {
   id: 'id' as const,
   image_url: 'image_url' as const,
   link_url: 'link_url' as const,
   order: 'order' as const
}

export const enumIopayEarningListSelectColumn = {
   apy_end: 'apy_end' as const,
   apy_start: 'apy_start' as const,
   id: 'id' as const,
   main_token: 'main_token' as const,
   native_link: 'native_link' as const,
   project_icon: 'project_icon' as const,
   project_link: 'project_link' as const,
   project_name: 'project_name' as const,
   term_end: 'term_end' as const,
   term_start: 'term_start' as const,
   type: 'type' as const
}

export const enumIopayWalletModelsConstraint = {
   iopay_wallet_models_pkey: 'iopay_wallet_models_pkey' as const
}

export const enumIopayWalletModelsSelectColumn = {
   __v: '__v' as const,
   address: 'address' as const,
   createAt: 'createAt' as const,
   deviceToken: 'deviceToken' as const,
   id: 'id' as const,
   name: 'name' as const,
   platform: 'platform' as const,
   registerPushNotification: 'registerPushNotification' as const,
   updateAt: 'updateAt' as const
}

export const enumIopayWalletModelsTest2Constraint = {
   iopay_wallet_models_test2_pkey: 'iopay_wallet_models_test2_pkey' as const
}

export const enumIopayWalletModelsTest2SelectColumn = {
   address: 'address' as const,
   createAt: 'createAt' as const,
   deviceToken: 'deviceToken' as const,
   id: 'id' as const,
   name: 'name' as const,
   platform: 'platform' as const,
   registerPushNotification: 'registerPushNotification' as const,
   updateAt: 'updateAt' as const
}

export const enumIopayWalletModelsTest2UpdateColumn = {
   _PLACEHOLDER: '_PLACEHOLDER' as const
}

export const enumIopayWalletModelsUpdateColumn = {
   _PLACEHOLDER: '_PLACEHOLDER' as const
}

export const enumMediaSelectColumn = {
   author: 'author' as const,
   categories: 'categories' as const,
   date: 'date' as const,
   description: 'description' as const,
   id: 'id' as const,
   img_url: 'img_url' as const,
   link: 'link' as const,
   source: 'source' as const,
   title: 'title' as const
}

export const enumMetaPebblePebbleContractMainnetSelectColumn = {
   abi: 'abi' as const,
   address: 'address' as const,
   name: 'name' as const
}

export const enumMetaPebblePebbleContractSelectColumn = {
   abi: 'abi' as const,
   address: 'address' as const,
   name: 'name' as const
}

export const enumMetaPebbleVersionAndroidSelectColumn = {
   code: 'code' as const,
   content: 'content' as const,
   forced_code: 'forced_code' as const,
   id: 'id' as const,
   url: 'url' as const,
   version: 'version' as const
}

export const enumMetaPebbleVersionIosSelectColumn = {
   content: 'content' as const,
   forced_version: 'forced_version' as const,
   url: 'url' as const,
   version: 'version' as const
}

export const enumNetworkAaConfigSelectColumn = {
   bound_email: 'bound_email' as const,
   bundler_service: 'bundler_service' as const,
   chain_id: 'chain_id' as const,
   email_service: 'email_service' as const,
   entry_point: 'entry_point' as const,
   factory: 'factory' as const,
   forceUsePaymaster: 'forceUsePaymaster' as const,
   paymaster_service: 'paymaster_service' as const,
   subgraph: 'subgraph' as const
}

export const enumNetworkChainThemeSelectColumn = {
   back_image: 'back_image' as const,
   chain_id: 'chain_id' as const,
   logo_image: 'logo_image' as const,
   theme_color: 'theme_color' as const
}

export const enumNetworkConfigSelectColumn = {
   account_factory: 'account_factory' as const,
   back_image: 'back_image' as const,
   chain_icon: 'chain_icon' as const,
   chain_icon_selected: 'chain_icon_selected' as const,
   chain_id: 'chain_id' as const,
   contract_email: 'contract_email' as const,
   entry_point: 'entry_point' as const,
   gas_limit: 'gas_limit' as const,
   gas_price: 'gas_price' as const,
   gas_station: 'gas_station' as const,
   logo_image: 'logo_image' as const,
   theme_color: 'theme_color' as const,
   token_approval_checker: 'token_approval_checker' as const
}

export const enumNetworkListSelectColumn = {
   bg_color_end: 'bg_color_end' as const,
   bg_color_start: 'bg_color_start' as const,
   bg_image: 'bg_image' as const,
   chainId: 'chainId' as const,
   config: 'config' as const,
   devMode: 'devMode' as const,
   explorer: 'explorer' as const,
   icon: 'icon' as const,
   id: 'id' as const,
   logoUrl: 'logoUrl' as const,
   more_config: 'more_config' as const,
   multicallAddr: 'multicallAddr' as const,
   name: 'name' as const,
   nativeCurrencyId: 'nativeCurrencyId' as const,
   networkName: 'networkName' as const,
   order: 'order' as const,
   platform: 'platform' as const,
   rpc: 'rpc' as const,
   shortName: 'shortName' as const,
   swapUrl: 'swapUrl' as const,
   theme_bg: 'theme_bg' as const,
   theme_bg2: 'theme_bg2' as const,
   tokensAlias: 'tokensAlias' as const
}

export const enumNewWalletClaimsSelectColumn = {
   __v: '__v' as const,
   address: 'address' as const,
   claimStatus: 'claimStatus' as const,
   createAt: 'createAt' as const,
   deviceId: 'deviceId' as const,
   id: 'id' as const,
   iotxTransferActionHash: 'iotxTransferActionHash' as const,
   requestIp: 'requestIp' as const,
   updateAt: 'updateAt' as const
}

export const enumNftTokenListSelectColumn = {
   address: 'address' as const,
   chainId: 'chainId' as const,
   decimals: 'decimals' as const,
   id: 'id' as const,
   logo: 'logo' as const,
   name: 'name' as const,
   source: 'source' as const,
   symbol: 'symbol' as const
}

export const enumOrderBy = {
   asc: 'asc' as const,
   asc_nulls_first: 'asc_nulls_first' as const,
   asc_nulls_last: 'asc_nulls_last' as const,
   desc: 'desc' as const,
   desc_nulls_first: 'desc_nulls_first' as const,
   desc_nulls_last: 'desc_nulls_last' as const
}

export const enumRiskDappsSelectColumn = {
   category: 'category' as const,
   chains: 'chains' as const,
   id: 'id' as const,
   name: 'name' as const
}

export const enumSettingPebbleMenuSelectColumn = {
   created_at: 'created_at' as const,
   display: 'display' as const,
   id: 'id' as const,
   menu_display: 'menu_display' as const,
   platform: 'platform' as const,
   updated_at: 'updated_at' as const
}

export const enumShareLinkAdminSelectColumn = {
   created_at: 'created_at' as const,
   display: 'display' as const,
   id: 'id' as const,
   updated_at: 'updated_at' as const,
   url: 'url' as const
}

export const enumSignatureSelectColumn = {
   en: 'en' as const,
   id: 'id' as const,
   zh: 'zh' as const
}

export const enumSmartStakeSelectColumn = {
   address: 'address' as const,
   apr: 'apr' as const,
   blendedShare: 'blendedShare' as const,
   blockRewardPortion: 'blockRewardPortion' as const,
   dailyElectionRate: 'dailyElectionRate' as const,
   dailyProdIndex: 'dailyProdIndex' as const,
   dailyProdRate: 'dailyProdRate' as const,
   epochRewardPortion: 'epochRewardPortion' as const,
   ethAddress: 'ethAddress' as const,
   foundationRewardPortion: 'foundationRewardPortion' as const,
   id: 'id' as const,
   lastUpdated: 'lastUpdated' as const,
   liveVotes: 'liveVotes' as const,
   longElectionRate: 'longElectionRate' as const,
   longProdIndex: 'longProdIndex' as const,
   longProdRate: 'longProdRate' as const,
   midElectionRate: 'midElectionRate' as const,
   midProdIndex: 'midProdIndex' as const,
   midProdRate: 'midProdRate' as const,
   name: 'name' as const,
   netApr: 'netApr' as const,
   operatorAddress: 'operatorAddress' as const,
   overallStatus: 'overallStatus' as const,
   probation: 'probation' as const,
   productivity: 'productivity' as const,
   ranking: 'ranking' as const,
   registeredName: 'registeredName' as const,
   rewardAddress: 'rewardAddress' as const,
   rewardPercentPerDay: 'rewardPercentPerDay' as const,
   rewardPlanChanged: 'rewardPlanChanged' as const,
   risky: 'risky' as const,
   serverStatus: 'serverStatus' as const,
   shortElectionRate: 'shortElectionRate' as const,
   shortProdIndex: 'shortProdIndex' as const,
   shortProdRate: 'shortProdRate' as const,
   status: 'status' as const,
   totalWeightedVotes: 'totalWeightedVotes' as const,
   votesPercent: 'votesPercent' as const
}

export const enumSystemMsgSelectColumn = {
   author: 'author' as const,
   content: 'content' as const,
   created_at: 'created_at' as const,
   deleted: 'deleted' as const,
   id: 'id' as const,
   share_content: 'share_content' as const,
   title: 'title' as const,
   updated_at: 'updated_at' as const
}

export const enumSystemMsgTestSelectColumn = {
   author: 'author' as const,
   content: 'content' as const,
   created_at: 'created_at' as const,
   deleted: 'deleted' as const,
   id: 'id' as const,
   share_content: 'share_content' as const,
   title: 'title' as const,
   updated_at: 'updated_at' as const
}

export const enumTokenInDappsSelectColumn = {
   chainId: 'chainId' as const,
   created_at: 'created_at' as const,
   dapp: 'dapp' as const,
   id: 'id' as const,
   token: 'token' as const,
   updated_at: 'updated_at' as const
}

export const enumTokenListSelectColumn = {
   decimal: 'decimal' as const,
   decimals: 'decimals' as const,
   id: 'id' as const,
   is_depin_token: 'is_depin_token' as const,
   is_official: 'is_official' as const,
   logo: 'logo' as const,
   metas: 'metas' as const,
   name: 'name' as const,
   platforms: 'platforms' as const,
   symbol: 'symbol' as const,
   tags: 'tags' as const,
   weight: 'weight' as const
}

export const enumTokenListV2SelectColumn = {
   current_price: 'current_price' as const,
   decimals: 'decimals' as const,
   id: 'id' as const,
   logo: 'logo' as const,
   market_cap: 'market_cap' as const,
   name: 'name' as const,
   platforms: 'platforms' as const,
   symbol: 'symbol' as const
}

export const enumTokenListV3SelectColumn = {
   current_price: 'current_price' as const,
   decimals: 'decimals' as const,
   id: 'id' as const,
   is_depin_token: 'is_depin_token' as const,
   is_official: 'is_official' as const,
   logo: 'logo' as const,
   market_cap: 'market_cap' as const,
   name: 'name' as const,
   platforms: 'platforms' as const,
   symbol: 'symbol' as const,
   tags: 'tags' as const,
   website: 'website' as const,
   weight: 'weight' as const
}

export const enumTokenListV4SelectColumn = {
   current_price: 'current_price' as const,
   daily_volume_usd: 'daily_volume_usd' as const,
   decimals: 'decimals' as const,
   id: 'id' as const,
   is_depin_token: 'is_depin_token' as const,
   is_official: 'is_official' as const,
   logo: 'logo' as const,
   market_cap: 'market_cap' as const,
   name: 'name' as const,
   platforms: 'platforms' as const,
   price_change_24h: 'price_change_24h' as const,
   rank_point: 'rank_point' as const,
   sparkline_in_7d: 'sparkline_in_7d' as const,
   symbol: 'symbol' as const,
   tags: 'tags' as const,
   total_liquidity_usd: 'total_liquidity_usd' as const,
   website: 'website' as const,
   weight: 'weight' as const
}

export const enumTokenRiskSelectColumn = {
   address: 'address' as const,
   chainShortName: 'chainShortName' as const,
   created_at: 'created_at' as const,
   riskLevel: 'riskLevel' as const,
   riskStatus: 'riskStatus' as const,
   source: 'source' as const,
   tokenFullName: 'tokenFullName' as const,
   updated_at: 'updated_at' as const
}

export const enumVersionControlAndroid2SelectColumn = {
   forced_code: 'forced_code' as const,
   id: 'id' as const,
   log: 'log' as const,
   log_cn: 'log_cn' as const,
   target_version_code: 'target_version_code' as const,
   upgrade_content_cn: 'upgrade_content_cn' as const,
   upgrade_content_en: 'upgrade_content_en' as const,
   url: 'url' as const,
   version_code: 'version_code' as const,
   version_name: 'version_name' as const
}

export const enumVersionControlIosSelectColumn = {
   content: 'content' as const,
   forced_version: 'forced_version' as const,
   hide_buy_version: 'hide_buy_version' as const,
   id: 'id' as const,
   url: 'url' as const,
   version: 'version' as const
}

export const enumWalletInfoConstraint = {
   wallet_info_pkey: 'wallet_info_pkey' as const
}

export const enumWalletInfoSelectColumn = {
   address: 'address' as const,
   ads: 'ads' as const,
   balance: 'balance' as const,
   chainId: 'chainId' as const,
   created_at: 'created_at' as const,
   id: 'id' as const,
   platform: 'platform' as const,
   updated_at: 'updated_at' as const
}

export const enumWalletInfoUpdateColumn = {
   balance: 'balance' as const,
   updated_at: 'updated_at' as const
}
