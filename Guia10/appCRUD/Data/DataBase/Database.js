export const COLOURS = {
  white: '#ffffff',
  black: '#000000',
  green: '#00AC76',
  red: '#C04345',
  blue: '#0043F9',
  backgroundLight: '#F0F0F3',
  backgroundMedium: '#B9B9B9',
  backgroundDark: '#777777',
};

export const Items = [
  {
    id: 1,
    category: 'product',
    productName: 'ALKA SELTZER',
    productPrice: 3.00,
    description:
      'Alka Setzer, ideal para malestares estomaca, 10 unidades por caja',
    isOff: true,
    offPercentage: 10,
    productImage: require('../../Assets/images/products/Alka_Setzer_1.png'),
    isAvailable: true,
    productImageList: [
      require('../../Assets/images/products/Alka_Setzer_1.png'),
      require('../../Assets/images/products/Alka_Setzer_2.png'),
      require('../../Assets/images/products/Alka_Setzer3.png'),
    ],
  },
  {
    id: 2,
    category: 'product',
    productName: 'BAYERN ASPIRINA',
    productPrice: 4.50,
    description:
      'Se utiliza como medicamento para tratar el dolor, la fiebre y la inflamación',
    isOff: true,
    productImage: require('../../Assets/images/products/Aspirina1.png'),
    isAvailable: true,
    productImageList: [
      require('../../Assets/images/products/Aspirina1.png'),
      require('../../Assets/images/products/Aspirina2.png'),
      require('../../Assets/images/products/Aspirina1.png'),
    ],
  },
  {
    id: 3,
    category: 'accessory',
    productName: 'CLAMICIL',
    productPrice: 7.80,
    description:
      'Antibiotico Especifico para inflamaciones',
    isOff: true,
    offPercentage: 18,
    productImage: require('../../Assets/images/products/clamacil.png'),
    isAvailable: true,
    productImageList: [
      require('../../Assets/images/products/clamacil.png'),
      require('../../Assets/images/products/Clamicil2.png'),
      require('../../Assets/images/products/clamacil.png'),
    ],
  },
  {
    id: 4,
    category: 'accessory',
    productName: 'PANADOL',
    productPrice: 5.00,
    description:
      'Farmaco para dolores leves,y pequeñas molestias, dosis moderada',
    isOff: true,
    productImage: require('../../Assets/images/products/Panadol.png'),
    isAvailable: true,
    productImageList: [
      require('../../Assets/images/products/Panadol.png'),
      require('../../Assets/images/products/panadol2.jpg'),
      require('../../Assets/images/products/panadol3.png'),
    ],
  },
  {
    id: 5,
    category: 'accessory',
    productName: 'VIROGRIP',
    productPrice: 2.50,
    description:
      'Especiales para combatir la gripe, en su version noche y dia',
    isOff: true,
    offPercentage: 12,
    productImage: require('../../Assets/images/products/ViroGrip1.png'),
    isAvailable: false,
    productImageList: [
      require('../../Assets/images/products/ViroGrip1.png'),
      require('../../Assets/images/products/ViroGrip2.png'),
      require('../../Assets/images/products/ViroGrip3.png'),
    ],
  },
  
  {
    id: 6,
    category: 'accessory',
    productName: 'TYLENOL',
    productPrice: 5.00,
    description:
      'Tylenol o Acetaminofen directamente para combatir dolores',
    isOff: true,
    offPercentage: 10,
    productImage: require('../../Assets/images/products/Tylenol1.png'),
    isAvailable: false,
    productImageList: [
      require('../../Assets/images/products/Tylenol1.png'),
      require('../../Assets/images/products/Tylenol2.png'),
      require('../../Assets/images/products/Tylenol3.png'),
    ],
  },
];
