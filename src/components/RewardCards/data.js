import vodafoneLogo from '../../img/vodafone/bitmap@3x.png'
import gasLogo from '../../img/gasolinealley/bitmap@3x.png'
import foursquareLogo from '../../img/foursquare/bitmap@3x.png'

const rewards = [
  {
    id: 0,
    brand: 'Four Square',
    category: 'Food',
    icon: foursquareLogo,
    title: '$20 off Four Square',
    points: 100,
    description: 'This can be used for more information about the product.',
    disclaimer: 'Not available for any R18 goods.'
  },
  {
    id: 1,
    brand: 'Gasoline Alley',
    category: 'Fuel',
    icon: gasLogo,
    title: '$10 off fuel',
    points: 100,
    description: 'This can be used for more information about the product.',
    disclaimer: 'At any Gasoline Alley'
  },
  {
    id: 2,
    brand: 'Vodafone',
    category: 'Mobile',
    icon: vodafoneLogo,
    title: '$25 worth of data',
    points: 100,
    description: 'This can be used for more information about the product.',
    disclaimer: 'Prepay or account data worth $25. Claim it today and use straight away!'
  },
  {
    id: 3,
    brand: 'Gasoline Alley',
    category: 'Fuel',
    icon: gasLogo,
    title: '$30 off fuel',
    points: 300,
    description: 'This can be used for more information about the product.',
    disclaimer: 'At any Gasoline Alley'
  }
]

export default rewards
