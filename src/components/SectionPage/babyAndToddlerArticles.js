import React from 'react'

import stageOneImg from '../../img/ArticlePages/0-3months.png'
import stageTwoImg from '../../img/ArticlePages/3-6months.png'

const babyAndToddlerArticles = [
  {
    id: 0,
    relatedSection: 'baby & toddler',
    largeTitle: '0 - 3 Months',
    title: 'Breast Feeding',
    description: 'Help with your diet',
    content: (
      <div>
        <div className='contentStyle'>
          Exclusively breastfeeding for around the first 6 months of your baby’s
          life and then continuing once your baby starts solids until 12 months
          and beyond gives your baby the best start in life.
        </div>
        <div className='contentStyle'>
          Breast milk is free, fresh and requires no preparation. It is easy for
          your baby to digest, changes with your baby’s needs, and contains the
          nutrients your baby needs for around the first 6 months of life.
        </div>
        <div className='contentStyle'>
          <span className='highlightPink'>It is the greatest gift you can give your baby.</span>
        </div>
        <div className='contentStyle last'>
          Find out about breastfeeding while you are still pregnant. Your
          midwife or other maternity carer can help you make an informed choice.
        </div>
      </div>
    ),
    youtubeUrl: '',
    img: stageOneImg,
    readMore: [
      {
        title: 'Health & Nutrition',
        link: '/support-and-health'
      },
      {
        title: 'Exercise & Fitness',
        link: '/support-and-health'
      }
    ]
  },
  {
    id: 1,
    relatedSection: 'baby & toddler',
    largeTitle: '3 - 6 Months',
    title: 'Food & Nutrition',
    description: 'As they grow',
    content: (
      <div>
        <div className='contentStyle'>
          Exclusively breastfeeding for around the first 6 months of your baby’s
          life and then continuing once your baby starts solids until 12 months
          and beyond gives your baby the best start in life.
        </div>
        <div className='contentStyle'>
          Breast milk is free, fresh and requires no preparation. It is easy for
          your baby to digest, changes with your baby’s needs, and contains the
          nutrients your baby needs for around the first 6 months of life.
        </div>
      </div>
    ),
    youtubeUrl: '',
    img: stageTwoImg,
    readMore: [
      {
        title: 'Health & Nutrition',
        link: '/support-and-health'
      },
      {
        title: 'Exercise & Fitness',
        link: '/support-and-health'
      }
    ]
  },
  {
    id: 2,
    relatedSection: 'baby & toddler',
    title: '6 - 12 Months',
    description: 'Coming up to 1 year',
    content: '',
    youtubeUrl: '',
    img: ''
  },
  {
    id: 2,
    relatedSection: 'baby & toddler',
    title: '1 - 3 Years',
    description: 'What to look for',
    content: '',
    youtubeUrl: '',
    img: ''
  },
  {
    id: 2,
    relatedSection: 'baby & toddler',
    title: '3 - 5 Years',
    description: 'Advise on what you can do',
    content: '',
    youtubeUrl: '',
    img: ''
  }
]

export default babyAndToddlerArticles
