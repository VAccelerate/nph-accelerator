import React from 'react'

import stageOneImg from '../../../img/ArticlePages/0-3months.png'
import stageTwoImg from '../../../img/ArticlePages/3-6months.png'
import stageThreeImg from '../../../img/ArticlePages/6-12months.jpg'
import stageFourImg from '../../../img/ArticlePages/1-3years.jpg'
import stageFiveImg from '../../../img/ArticlePages/3-5years.jpg'

const babyAndToddlerArticles = [
  {
    id: 0,
    relatedSection: 'Baby & Toddler',
    largeTitle: '0 - 3 Months',
    title: 'Breast Feeding',
    description: 'Help with your new baby',
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
        title: '1-3 Years',
        link: '/baby-and-toddler/3'
      },
      {
        title: '6 - 12 Months',
        link: '/baby-and-toddler/2'
      }
    ]
  },
  {
    id: 1,
    relatedSection: 'Baby & Toddler',
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
        title: '1-3 Years',
        link: '/baby-and-toddler/3'
      },
      {
        title: '6 - 12 Months',
        link: '/baby-and-toddler/2'
      }
    ]
  },
  {
    id: 2,
    relatedSection: 'Baby & Toddler',
    largeTitle: '6 - 12 Months',
    title: 'Learning to walk',
    description: 'Coming up to 1 year',
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
    img: stageThreeImg,
    readMore: [
      {
        title: '1-3 Years',
        link: '/baby-and-toddler/3'
      },
      {
        title: '0 - 3 Months',
        link: '/baby-and-toddler/0'
      }
    ]
  },
  {
    id: 3,
    relatedSection: 'Baby & Toddler',
    largeTitle: '1 - 3 Years',
    title: 'Terrible twos',
    description: 'What to look for',
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
    img: stageFourImg,
    readMore: [
      {
        title: '3 - 5 Months',
        link: '/baby-and-toddler/4'
      },
      {
        title: '6 - 12 Months',
        link: '/baby-and-toddler/2'
      }
    ]
  },
  {
    id: 4,
    relatedSection: 'Baby & Toddler',
    largeTitle: '3 - 5 Years',
    title: 'Supporting development',
    description: 'Advise on what you can do',
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
    img: stageFiveImg,
    readMore: [
      {
        title: '1-3 Years',
        link: '/baby-and-toddler/3'
      },
      {
        title: '6 - 12 Months',
        link: '/baby-and-toddler/2'
      }
    ]
  }
]

export default babyAndToddlerArticles
