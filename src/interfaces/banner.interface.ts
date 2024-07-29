// main-banners
export interface MainBanner {
    id:             string
    color:          string
    path:           string
    width:          number
    height:         number
    weight:         number
    img:            string
    positions:      string
    imgMobile:      string
    isCatalog:      number
    description:    string
    filterQuery:    string
    active:         boolean
    timestampStart: Date
    timestampEnd:   Date
}

// banners
export interface BandBanner {
    id:          string
    title:       string
    description: string
    active:      boolean
    path:       string
    img:         string
    color:       string
    content:     Content
}

export interface Content {
    span: number,
    width: number,
    height: number,
    color:   string
    counter: string
}

// secondary-banners
export interface SecondaryBanner {
    title:    string
    subTitle: string
    nodo:     string
    path:     string
    sliders:  SliderBanner[]
    items:     ItemSlider[]
}

export interface ItemSlider {
    mpn:                              string
    heel:                             string
    tags:                             string
    alias:                            string
    brand:                            string
    image:                            string
    model:                            string
    price:                            string
    sizes?:                           string[]
    stock:                            string
    season:                           string[]
    genders?:                         string[]
    material:                         string
    supplier:                         string
    categories:                       string[]
    color_list:                       string[]
    id_items_2:                       string
    long_sizes?:                      string[]
    brand_image:                      string
    season_year:                      string[]
    short_sizes:                      string[]
    uid_items_2:                      string
    color_parents?:                   string[]
    images_500x500:                   string[]
    original_price:                   string
    images_1500x1500:                 string[]
    discount_percentage:              string
    has_equivalent_sizes:             string
    timestamp_active_unix:            string
    categories_disaggregated:         string[]
    categories_disaggregated_aliases: string[]
}

export interface SliderBanner {
    path:           string
    color:          string
    width:          number
    height:         number
    weight:         number
    img:            string
    imgMobile:      string
    active:         boolean
    timestampStart: Date
    timestampEnd:   Date
}

// brands
export interface Brand {
    brand: string
    alias: string
    url:   string
    img:   string
    svg:   null | string
    stock: number
}

// comments
export interface Comments {
    date:                string
    score:               number
    comment:             string
    first_name:          string
    profile_picture_url: null
}

// about
export interface About {
    icon:    string
    title:   string
    color:   string
    message: string
    url:     URL
}

export interface URL {
    title: string
    link:  string
}

// footers
export interface Footer {
    id:      string
    title:   string
    message: string
    list:    List[]
}

export interface List {
    title: string
    url:   string
    img:   string
}
