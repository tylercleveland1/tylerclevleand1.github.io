const transmissionValues = {
    All: '0',
    Manual: '1',
    Automatic: '2'
};

const searchArea = {
    All: '0',
    WestUS: '1',
    CentralUS: '2',
    EastUS: '3'
};

const craigslistSort = {
    date: 'date',
    rel: 'rel',
    priceasc: 'priceasc',
    pricedsc: 'pricedsc'
};

const marketplaceSort = {
    bestMatch: 'best_match',
    distanceAscent: 'distance_ascend',
    creationTimeDescend: 'creation_time_descend',
    priceAscend: 'price_ascend',
    priceDescend: 'price_descend'
};

const queryStringTemplateValue = "_QUERYSTRING_";
const sortOrderTemplateValue = "_SORTORDER_";

const templatedCraigslistUrls = {
    westUS: [
        'https://logan.craigslist.org/search/howell-ut/sss?lat=41.8386&lon=-112.3943&purveyor=owner&query=_QUERYSTRING_&search_distance=860&sort=_SORTORDER_',
    ],
    centralUS: [
        'https://grandisland.craigslist.org/search/guide-rock-ne/sss?lat=40.1312&lon=-98.2839&purveyor=owner&query=_QUERYSTRING_&search_distance=860&sort=_SORTORDER_'
    ],
    eastUS: [
        'https://charlottesville.craigslist.org/search/louisa-va/sss?lat=38.0079&lon=-78.056&purveyor=owner&query=_QUERYSTRING_&search_distance=860&sort=_SORTORDER_'
    ]
};

const templatedMarketplaceUrls = {
    westUS: [
        'https://www.facebook.com/marketplace/portland/search/?deliveryMethod=local_pick_up&sortBy=_SORTORDER_&query=_QUERYSTRING_&category_id=search&exact=false&radius=804',
        'https://www.facebook.com/marketplace/sanfrancisco/search?category_id=search&deliveryMethod=local_pick_up&query=_QUERYSTRING_&radius=804&vertical=C2C&sortBy=_SORTORDER_',
        'https://www.facebook.com/marketplace/boise/search?category_id=search&deliveryMethod=local_pick_up&query=_QUERYSTRING_&radius=804&vertical=C2C&sortBy=_SORTORDER_',
        'https://www.facebook.com/marketplace/108061882547758/search?category_id=search&deliveryMethod=local_pick_up&query=_QUERYSTRING_&radius=804&vertical=C2C&sortBy=_SORTORDER_',
    ],
    centralUS: [
        // colorado
        'https://www.facebook.com/marketplace/denver/search/?deliveryMethod=local_pick_up&sortBy=_SORTORDER_&query=_QUERYSTRING_&category_id=search&exact=false&radius=804',
        // texas
        'https://www.facebook.com/marketplace/dallas/search/?deliveryMethod=local_pick_up&sortBy=_SORTORDER_&query=_QUERYSTRING_&category_id=search&exact=false&radius=804',
        // bismark
        'https://www.facebook.com/marketplace/105540246145383/search/?deliveryMethod=local_pick_up&sortBy=_SORTORDER_&query=_QUERYSTRING_&category_id=search&exact=false&radius=804',
        // missouri
        'https://www.facebook.com/marketplace/108013345886344/search?category_id=search&deliveryMethod=local_pick_up&query=_QUERYSTRING_&radius=804&vertical=C2C&sortBy=_SORTORDER_',
    ],
    eastUS: [
        'https://www.facebook.com/marketplace/atlanta/search/?deliveryMethod=local_pick_up&sortBy=_SORTORDER_&query=_QUERYSTRING_&category_id=search&exact=false&radius=804',
        'https://www.facebook.com/marketplace/dc/search?category_id=search&deliveryMethod=local_pick_up&query=_QUERYSTRING_&radius=804&vertical=C2C&sortBy=_SORTORDER_'
    ]
};