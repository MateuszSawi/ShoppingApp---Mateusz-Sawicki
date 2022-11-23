const productsData = [
  {
    id: 1,
    name: 'Apollo',
    state: 'Running Short',
    price: 20.05,
    colors: ['gray', 'blue', 'green'],
    sizes: [
      { name: 'S'},
      { name: 'M'},
      { name: 'L'},
      { name: 'XL'}
    ],
    category: 'WOMEN',
    availability: 'available',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum velit nec nisl dignissim, vitae tristique nulla porta. Phasellus interdum varius eros non eleifend. Suspendisse ac venenatis dolor. Etiam nulla enim, scelerisque ut felis tempor, maximus sollicitudin dolor. Integer eget pharetra elit, non tincidunt ex.'
  },
  {
    id: 2,
    name: 'Nulla',
    state: 'Vivamus Dolor',
    price: 30.00,
    colors: ['orange', 'yellow', 'pink'],
    sizes: [
      { name: 'S'},
      { name: 'M'},
      { name: 'L'},
      { name: 'XL'}
    ],
    category: 'MEN',
    availability: 'available',
    description: 'Quisque vel felis sapien. Vivamus massa nisi, dictum at posuere vel, interdum at quam. Duis imperdiet iaculis nisl, eget rutrum ipsum. Quisque bibendum fringilla rhoncus.'
  },
  {
    id: 3,
    name: 'Nullam Accumsan',
    state: 'Interdum Et',
    price: 25.00,
    colors: ['gray', 'yellow', 'white'],
    sizes: [
      { name: 'S'},
      { name: 'M'},
      { name: 'L'},
      { name: 'XL'}
    ],
    category: 'KIDS',
    availability: 'out of stock',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam tempus est turpis, id rhoncus orci tempor in. Suspendisse sit amet diam pharetra, auctor ante at, gravida leo. Donec efficitur dictum dolor ut fringilla. Sed blandit ligula quis hendrerit bibendum.'
  },
  {
    id: 4,
    name: 'Fusce',
    state: 'Quisque Quis',
    price: 50.10,
    colors: ['white', 'green', 'pink'],
    sizes: [
      { name: 'S'},
      { name: 'M'},
      { name: 'L'},
      { name: 'XL'}
    ],
    category: 'WOMEN',
    availability: 'available',
    description: 'Donec a porta urna. Mauris sollicitudin ut orci quis fermentum. Pellentesque vel commodo magna. Donec vel odio non augue efficitur accumsan. Proin tincidunt imperdiet risus, vel convallis sem vehicula sed. Nullam augue nulla, finibus a tempus sed, tincidunt vitae dui. '
  },
  {
    id: 5,
    name: 'Interdum Et',
    state: 'Sed',
    price: 20.05,
    colors: ['gray', 'pink', 'brown'],
    sizes: [
      { name: 'S'},
      { name: 'M'},
      { name: 'L'},
      { name: 'XL'}
    ],
    category: 'KIDS',
    availability: 'available',
    description: 'Donec tincidunt venenatis purus a maximus. Curabitur quis sem arcu. Suspendisse congue ultrices tortor, sit amet porta eros ultrices nec. Morbi vel sagittis erat. Pellentesque quis tincidunt urna, eu molestie dui.'
  },
  {
    id: 6,
    name: 'Etiam',
    state: 'Nunc Porttitor',
    price: 47.90,
    colors: ['gray', 'blue', 'pink'],
    sizes: [
      { name: 'S'},
      { name: 'M'},
      { name: 'L'},
      { name: 'XL'}
    ],
    category: 'WOMEN',
    availability: 'available',
    description: 'In convallis tincidunt porttitor. Sed eget leo dapibus sapien semper facilisis. Nunc iaculis scelerisque justo, nec sodales leo pharetra sit amet. Maecenas leo turpis, convallis at sapien eget, sagittis accumsan massa. Nam eu lacus ac quam sodales gravida. Quisque sed sapien ac nisi ornare vestibulum.'
  }
];

export default productsData;




// sizes: [
//   { name: 'S', additionalPrice: 0 },
//   { name: 'M', additionalPrice: 2 },
//   { name: 'L', additionalPrice: 3 },
//   { name: 'XL', additionalPrice: 4 }
// ],