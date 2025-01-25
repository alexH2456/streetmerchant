import {Store} from './store';

export const CanadaComputers: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '.availablity__ship',
      text: ['available'],
    },
    maxPrice: {
      container: '.current-price-value',
      euroFormat: false,
    },
  },
  links: [
    // Test In Stock
    // {
    //   brand: 'test:brand',
    //   model: 'test:model',
    //   series: 'test:series',
    //   url: 'https://www.canadacomputers.com/product_info.php?item_id=256636&cPath=27_1046_365&language=en',
    // },
    // Test OOS
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=268261&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183099&language=en',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3070',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183210&language=en',
    },
    {
      brand: 'asus',
      model: 'dual oc',
      series: '3070',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183636&language=en',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3070',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183637&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3070',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=184168&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3070',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=184167&language=en',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3070',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183561&language=en',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3070',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=185675&language=en',
    },
    {
      brand: 'msi',
      model: 'ventus 2x oc',
      series: '3070',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183208&language=en',
    },
    {
      brand: 'zotac',
      model: 'twin edge',
      series: '3070',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183560&language=en',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3070',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183638&language=en',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3070',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183498&language=en',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3070',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183209&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3070',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183100&language=en',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3070',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183499&language=en',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3070',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=186197&language=en',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3070',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=186310&language=en',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3080',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181376&language=en',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3080',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181842&language=en',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181348&language=en',
    },
    {
      brand: 'zotac',
      model: 'trinity oc',
      series: '3080',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=184837&language=en',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181415&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3080',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=182754&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3080',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=182755&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme',
      series: '3080',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183098&language=en',
    },
    {
      brand: 'zotac',
      model: 'trinity oc',
      series: '3080',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183510&language=en',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3080',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=186309&language=en',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3080',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=185084&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce wb',
      series: '3080',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=186345&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce wb',
      series: '3080',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=186344&language=en',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3090',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181841&language=en',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3090',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181854&language=en',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3090',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181413&language=en',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3090',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181419&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3090',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181351&language=en',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3090',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181350&language=en',
    },
    {
      brand: 'msi',
      model: 'ventus 3x',
      series: '3090',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181349&language=en',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3090',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181853&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme',
      series: '3090',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183096&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3090',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181352&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3090',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183097&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3090',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=184164&language=en',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3060ti',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=185086&language=en',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3060ti',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=184759&language=en',
    },
    {
      brand: 'msi',
      model: 'ventus 2x oc',
      series: '3060ti',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=185087&language=en',
    },
    {
      brand: 'asus',
      model: 'dual oc',
      series: '3060ti',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=184760&language=en',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3060ti',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=185751&language=en',
    },
    {
      brand: 'zotac',
      model: 'twin edge',
      series: '3060ti',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=185752&language=en',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3060ti',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=184431&language=en',
    },
    {
      brand: 'evga',
      model: 'xc gaming',
      series: '3060ti',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=185988&language=en',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3060ti',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=185987&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3060ti',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=185408&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3060ti',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=185407&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc pro',
      series: '3060ti',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=185406&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3060ti',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=185405&language=en',
    },
    {
      brand: 'asus',
      model: 'ko',
      series: '3060ti',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=185168&language=en',
    },
    {
      brand: 'msi',
      model: 'ventus 2x',
      series: '3060',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=188914&language=en',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3060',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=189034&language=en',
    },
    {
      brand: 'msi',
      model: 'ventus 3x',
      series: '3060',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=189035&language=en',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3060',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=189411&language=en',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3060',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=189542&language=en',
    },
    {
      brand: 'evga',
      model: 'xc gaming',
      series: '3060',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=189460&language=en',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3060',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=189615&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3060',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=189625&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3060',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=189626&language=en',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: 'rx6800',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_558&item_id=186527&language=en',
    },
    {
      brand: 'sapphire',
      model: 'nitro+',
      series: 'rx6800',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_558&item_id=185755&language=en',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: 'rx6800',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_558&item_id=185459&language=en',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: 'rx6800',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_558&item_id=185460&language=en',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: 'rx6800xt',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_558&item_id=186526&language=en',
    },
    {
      brand: 'sapphire',
      model: 'nitro+',
      series: 'rx6800xt',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_558&item_id=185754&language=en',
    },
    {
      brand: 'sapphire',
      model: 'nitro+ se',
      series: 'rx6800xt',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_558&item_id=185753&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: 'rx6800xt',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_558&item_id=185891&language=en',
    },
    {
      brand: 'asus',
      model: 'strix lc',
      series: 'rx6800xt',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_558&item_id=185458&language=en',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: 'rx6900xt',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_558&item_id=186610&language=en',
    },
    {
      brand: 'sapphire',
      model: 'nitro+',
      series: 'rx6900xt',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_558&item_id=186614&language=en',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=4_64&item_id=183432&language=en',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=4_64&item_id=183431&language=en',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=4_64&item_id=183430&language=en',
    },
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=4_64&item_id=183427&language=en',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=13_1860_1862&item_id=184244&language=en',
    },
    // TODO: verify these links (esp cPath was taken from 30 series links, doesn't seem to matter)
    // RTX 5090
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '5090',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=268261&language=en',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '5090',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=268262&language=en',
    },
    {
      brand: 'asus',
      model: 'astral',
      series: '5090',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=268257&language=en',
    },
    {
      brand: 'asus',
      model: 'astral oc',
      series: '5090',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=268256&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'windforce oc',
      series: '5090',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=268191&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '5090',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=268190&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'aorus ice',
      series: '5090',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=268187&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'aorus',
      series: '5090',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=268188&language=en',
    },
    // RTX 5080
    {
      brand: 'asus',
      model: 'prime',
      series: '5080',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=268151&language=en',
    },
    {
      brand: 'msi',
      model: 'vanguard soc launch edition',
      series: '5080',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=267621&language=en',
    },
    {
      brand: 'msi',
      model: 'suprim soc',
      series: '5080',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=267620&language=en',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc plus',
      series: '5080',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=268148&language=en',
    },
    {
      brand: 'msi',
      model: 'gaming trio oc',
      series: '5080',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=268147&language=en',
    },
    {
      brand: 'msi',
      model: 'gaming trio oc white',
      series: '5080',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=268146&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '5080',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=268138&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'aero oc',
      series: '5080',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=268139&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'windforce oc',
      series: '5080',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=268141&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'aorus ice',
      series: '5080',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=268143&language=en',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '5080',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=268144&language=en'
    },
    {
      brand: 'zotac',
      model: 'solid',
      series: '5080',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=268152&language=en',
    },
    {
      brand: 'zotac',
      model: 'solid oc',
      series: '5080',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=268153&language=en',
    },
  ],
  name: 'canadacomputers',
  waitUntil: 'domcontentloaded',
};
