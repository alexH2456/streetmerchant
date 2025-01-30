import {Store} from './store';

export const AmazonCa: Store = {
  currency: '$',
  labels: {
    captcha: {
      container: 'body',
      text: ['enter the characters you see below'],
    },
    captchaHandler: {
      challenge: 'img',
      input: '#captchacharacters',
      submit: 'button[type="submit"]',
    },
    inStock: {
      container: '#desktop_buybox',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.a-price-whole',
    },
    outOfStock: {
      container: '.a-color-price',
      text: ['currently unavailable.'],
    },
  },
  links: [
    // Test In Stock
    {
      brand: 'test:brand',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08166SLDF&Quantity.1=1',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amazon.ca/dp/B08166SLDF',
    },
    // Test OOS
    // {
    //   brand: 'test:brand',
    //   cartUrl:
    //     'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0BNWJ6WTQ&Quantity.1=1',
    //   model: 'test:model',
    //   series: 'test:series',
    //   url: 'https://www.amazon.ca/dp/B0BNWJ6WTQ',
    // },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08KWN2LZG&Quantity.1=1',
      model: 'gaming x trio',
      series: '3070',
      url: 'https://www.amazon.ca/dp/B08KWN2LZG',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08KWLMZV4&Quantity.1=1',
      model: 'ventus 3x oc',
      series: '3070',
      url: 'https://www.amazon.ca/dp/B08KWLMZV4',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08LW46GH2&Quantity.1=1',
      model: 'xc3',
      series: '3070',
      url: 'https://www.amazon.ca/dp/B08LW46GH2',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08L8L71SM&Quantity.1=1',
      model: 'xc3 ultra',
      series: '3070',
      url: 'https://www.amazon.ca/dp/B08L8L71SM',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08L8L9TCZ&Quantity.1=1',
      model: 'ftw3 ultra',
      series: '3070',
      url: 'https://www.amazon.ca/dp/B08L8L9TCZ',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HR7SV3M&Quantity.1=1',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HR7SV3M',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HR5SXPS&Quantity.1=1',
      model: 'ventus 3x oc',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HR5SXPS',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HR3DPGW&Quantity.1=1',
      model: 'ftw3',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HR3DPGW',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HR3Y5GQ&Quantity.1=1',
      model: 'ftw3 ultra',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HR3Y5GQ',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HR55YB5&Quantity.1=1',
      model: 'xc3 ultra',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HR55YB5',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HR4RJ3Q&Quantity.1=1',
      model: 'xc3',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HR4RJ3Q',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HR6FMF3&Quantity.1=1',
      model: 'xc3 black',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HR6FMF3',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJTH61J&Quantity.1=1',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HJTH61J',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJS2JLJ&Quantity.1=1',
      model: 'eagle oc',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HJS2JLJ',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HHDP9DW&Quantity.1=1',
      model: 'tuf',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HHDP9DW',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HH5WF97&Quantity.1=1',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HH5WF97',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJNKT3P&Quantity.1=1',
      model: 'trinity',
      series: '3080',
      url: 'https://www.amazon.ca/dp/B08HJNKT3P',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJQ182D&Quantity.1=1',
      model: 'trinity',
      series: '3090',
      url: 'https://www.amazon.ca/dp/B08HJQ182D',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HR9D2JS&Quantity.1=1',
      model: 'ventus 3x oc',
      series: '3090',
      url: 'https://www.amazon.ca/dp/B08HR9D2JS',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJRF2CN&Quantity.1=1',
      model: 'gaming oc',
      series: '3090',
      url: 'https://www.amazon.ca/dp/B08HJRF2CN',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJPDJTY&Quantity.1=1',
      model: 'eagle oc',
      series: '3090',
      url: 'https://www.amazon.ca/dp/B08HJPDJTY',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJGNJ81&Quantity.1=1',
      model: 'tuf',
      series: '3090',
      url: 'https://www.amazon.ca/dp/B08HJGNJ81',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJLLF7G&Quantity.1=1',
      model: 'tuf oc',
      series: '3090',
      url: 'https://www.amazon.ca/dp/B08HJLLF7G',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08166SLDF&Quantity.1=1',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.amazon.ca/dp/B08166SLDF',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0815XFSGK&Quantity.1=1',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.amazon.ca/dp/B0815XFSGK',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08164VTWH&Quantity.1=1',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.amazon.ca/dp/B08164VTWH',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0815Y8J9N&Quantity.1=1',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.amazon.ca/dp/B0815Y8J9N',
    },
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08GSC5D9G&Quantity.1=1',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.ca/dp/B08GSC5D9G',
    },
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08GS1N24H&Quantity.1=1',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.amazon.ca/dp/B08GS1N24H',
    },
    {
      brand: 'microsoft',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08H75RTZ8&Quantity.1=1',
      labels: {
        inStock: {
          container: '#productTitle',
          text: ['Xbox Series X'],
        },
      },
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.amazon.ca/dp/B08H75RTZ8',
    },
    {
      brand: 'microsoft',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08G9J44ZN&Quantity.1=1',
      labels: {
        inStock: {
          container: '#productTitle',
          text: ['Xbox Series S'],
        },
      },
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.amazon.ca/dp/B08G9J44ZN',
    },
    {
      brand: 'xfx',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08NX14LV1&Quantity.1=1',
      model: 'merc',
      series: 'rx6800xt',
      url: 'https://www.amazon.ca/dp/B08NX14LV1',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08PQ585CX&Quantity.1=1',
      model: 'pulse',
      series: 'rx6800xt',
      url: 'https://www.amazon.ca/dp/B08PQ585CX',
    },
    // RTX 5090
    {
      brand: 'zotac',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DV6MK91R&Quantity.1=1',
      model: 'solid oc',
      series: '5090',
      url: 'https://www.amazon.ca/dp/B0DV6MK91R'
    },
    {
      brand: 'msi',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DT7L98J1&Quantity.1=1',
      model: 'gaming trio oc',
      series: '5090',
      url: 'https://www.amazon.ca/dp/B0DT7L98J1'
    },
    {
      brand: 'msi',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DT7JS6BG&Quantity.1=1',
      model: 'ventus 3x oc',
      series: '5090',
      url: 'https://www.amazon.ca/dp/B0DT7JS6BG'
    },
    {
      brand: 'msi',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DT7L992Z&Quantity.1=1',
      model: 'vanguard soc launch edition',
      series: '5090',
      url: 'https://www.amazon.ca/dp/B0DT7L992Z'
    },
    {
      brand: 'pny',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DTJF8YT4&Quantity.1=1',
      model: 'gaming',
      series: '5090',
      url: 'https://www.amazon.ca/dp/B0DTJF8YT4'
    },
    {
      brand: 'gigabyte',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DT7GBNWQ&Quantity.1=1',
      model: 'gaming oc',
      series: '5090',
      url: 'https://www.amazon.ca/dp/B0DT7GBNWQ'
    },
    {
      brand: 'msi',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DT7KGND2&Quantity.1=1',
      model: 'vanguard soc',
      series: '5090',
      url: 'https://www.amazon.ca/dp/B0DT7KGND2'
    },
    {
      brand: 'gigabyte',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DT7GMXHB&Quantity.1=1',
      model: 'windforce oc',
      series: '5090',
      url: 'https://www.amazon.ca/dp/B0DT7GMXHB'
    },
    {
      brand: 'gigabyte',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DT7GHQMD&Quantity.1=1',
      model: 'aorus',
      series: '5090',
      url: 'https://www.amazon.ca/dp/B0DT7GHQMD'
    },
    {
      brand: 'msi',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DT7JYTXQ&Quantity.1=1',
      model: 'suprim soc',
      series: '5090',
      url: 'https://www.amazon.ca/dp/B0DT7JYTXQ'
    },
    {
      brand: 'pny',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DTJFSSZG&Quantity.1=1',
      model: 'argb oc',
      series: '5090',
      url: 'https://www.amazon.ca/dp/B0DTJFSSZG'
    },
    {
      brand: 'zotac',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DV64SCM8&Quantity.1=1',
      model: 'amp extreme infinity',
      series: '5090',
      url: 'https://www.amazon.ca/dp/B0DV64SCM8'
    },
    {
      brand: 'asus',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DS2X13PH&Quantity.1=1',
      model: 'tuf oc',
      series: '5090',
      url: 'https://www.amazon.ca/dp/B0DS2X13PH'
    },
    {
      brand: 'gigabyte',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DVCH9WJH&Quantity.1=1',
      model: 'aorus ice',
      series: '5090',
      url: 'https://www.amazon.ca/dp/B0DVCH9WJH'
    },
    {
      brand: 'asus',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DS2Z8854&Quantity.1=1',
      model: 'tuf',
      series: '5090',
      url: 'https://www.amazon.ca/dp/B0DS2Z8854'
    },
    {
      brand: 'asus',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DS2WQZ2M&Quantity.1=1',
      model: 'astral oc',
      series: '5090',
      url: 'https://www.amazon.ca/dp/B0DS2WQZ2M'
    },
    // RTX 5080
    {
      brand: 'msi',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DSXH2P3L&Quantity.1=1',
      model: 'ventus 3x oc plus',
      series: '5080',
      url: 'https://www.amazon.ca/dp/B0DSXH2P3L'
    },
    {
      brand: 'asus',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DQSMMCSH&Quantity.1=1',
      model: 'tuf oc',
      series: '5080',
      url: 'https://www.amazon.ca/dp/B0DQSMMCSH'
    },
    {
      brand: 'gigabyte',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DT7JVPVH&Quantity.1=1',
      model: 'aero oc',
      series: '5080',
      url: 'https://www.amazon.ca/dp/B0DT7JVPVH'
    },
    {
      brand: 'gigabyte',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DT7H5JYL&Quantity.1=1',
      model: 'aorus ice',
      series: '5080',
      url: 'https://www.amazon.ca/dp/B0DT7H5JYL'
    },
    {
      brand: 'asus',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DTPG3B1N&Quantity.1=1',
      model: 'tuf',
      series: '5080',
      url: 'https://www.amazon.ca/dp/B0DTPG3B1N'
    },
    {
      brand: 'pny',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DTJFZ4YS&Quantity.1=1',
      model: 'gaming',
      series: '5080',
      url: 'https://www.amazon.ca/dp/B0DTJFZ4YS'
    },
    {
      brand: 'zotac',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DTZ441G7&Quantity.1=1',
      model: 'solid',
      series: '5080',
      url: 'https://www.amazon.ca/dp/B0DTZ441G7'
    },
    {
      brand: 'zotac',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DTZ48TCY&Quantity.1=1',
      model: 'solid oc',
      series: '5080',
      url: 'https://www.amazon.ca/dp/B0DTZ48TCY'
    },
    {
      brand: 'msi',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DSWRLSD4&Quantity.1=1',
      model: 'vanguard soc launch edition',
      series: '5080',
      url: 'https://www.amazon.ca/dp/B0DSWRLSD4'
    },
    {
      brand: 'pny',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DTJDR3V9&Quantity.1=1',
      model: 'argb oc',
      series: '5080',
      url: 'https://www.amazon.ca/dp/B0DTJDR3V9'
    },
    {
      brand: 'msi',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DSWQNGYF&Quantity.1=1',
      model: 'ventus 3x oc white',
      series: '5080',
      url: 'https://www.amazon.ca/dp/B0DSWQNGYF'
    },
    {
      brand: 'msi',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DSXKZ2T9&Quantity.1=1',
      model: 'ventus 3x oc',
      series: '5080',
      url: 'https://www.amazon.ca/dp/B0DSXKZ2T9'
    },
    {
      brand: 'msi',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DSXJ5QF4&Quantity.1=1',
      model: 'suprim soc',
      series: '5080',
      url: 'https://www.amazon.ca/dp/B0DSXJ5QF4'
    },
    {
      brand: 'msi',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DSWP51N3&Quantity.1=1',
      model: 'vanguard soc',
      series: '5080',
      url: 'https://www.amazon.ca/dp/B0DSWP51N3'
    },
    {
      brand: 'msi',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DSXNXTSS&Quantity.1=1',
      model: 'gaming trio oc',
      series: '5080',
      url: 'https://www.amazon.ca/dp/B0DSXNXTSS'
    },
    {
      brand: 'msi',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B0DSXGNFJL&Quantity.1=1',
      model: 'gaming trio oc white',
      series: '5080',
      url: 'https://www.amazon.ca/dp/B0DSXGNFJL'
    },
  ],
  name: 'amazon-ca',
};
