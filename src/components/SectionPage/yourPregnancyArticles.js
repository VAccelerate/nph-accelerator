import React from 'react'

import gettingAMidwifeImg from '../../img/ArticlePages/gettingAMidwife.png'

const yourPregnancyArticles = [
  {
    id: 0,
    relatedSection: 'Your Pregnancy',
    title: 'Getting a Midwife',
    description: 'Get help sorting out a midwife',
    content: (
      <div>
        <div className='contentStyle'>
          As soon as you know you are pregnant, you need to contact a
          midwife and sent up an appointment.
        </div>
        <div className='contentStyle last'>
          There are two midwives available on the east coast. You can contact
          either <span className='nameStyle'>Corrina Parata</span> at Ngati Porou Hauora or <span className='nameStyle'>Liz Tamepo</span> at Te
          Korahi Whanautanga Midwifery Services.
        </div>
        <h4 className='midwifeName'>Liz Tamepo</h4>
        <ul className='midwifeLocations'>
          <li>Tuesday: Te Araroa</li>
          <li>Wednesday: Ruatoria</li>
          <li>Thursday: Puhi Kaiti</li>
        </ul>
        <ul className='midwifeContact'>
          <li><span className='midwifeContactType'>Phone: </span>06 864 7788</li>
          <li><span className='midwifeContactType'>Mobile: </span><span>027 237 8467</span></li>
          <li><span className='midwifeContactType'>Email: </span><span className='midwifeEmail'>lizzie.andre@xtra.co.nz</span></li>
        </ul>
        <h4 className='midwifeName'>Corrina Parata</h4>
        <ul className='midwifeLocations'>
          <li>Ngati Porou Hauora</li>
        </ul>
        <ul className='midwifeContact'>
          <li><span className='midwifeContactType'>Phone: </span>06 864 7788</li>
          <li><span className='midwifeContactType'>Mobile: </span><span>027 237 8467</span></li>
          <li><span className='midwifeContactType'>Email: </span><span className='midwifeEmail'>lizzie.andre@xtra.co.nz</span></li>
        </ul>
      </div>
    ),
    youtubeUrl: '',
    img: gettingAMidwifeImg,
    readMore: [
      {
        title: 'Food & Nutrition',
        link: '/your-pregnancy'
      },
      {
        title: 'Exercise & Fitness',
        link: '/your-pregnancy'
      }
    ]
  },
  {
    id: 1,
    relatedSection: 'Your Pregnancy',
    title: 'Food & Nutrition',
    description: 'Help with your diet',
    content: 'hi',
    youtubeUrl: '',
    img: ''
  },
  {
    id: 2,
    relatedSection: 'Your Pregnancy',
    title: 'Exercise & Fitness',
    description: 'View claimed rewards',
    content: '',
    youtubeUrl: '',
    img: ''
  },
  {
    id: 2,
    relatedSection: 'Your Pregnancy',
    title: 'Common Symptoms',
    description: 'What to look for',
    content: '',
    youtubeUrl: '',
    img: ''
  },
  {
    id: 2,
    relatedSection: 'Your Pregnancy',
    title: 'Smoking, Drugs & Alcohol',
    description: 'Advise on what you can do',
    content: '',
    youtubeUrl: '',
    img: ''
  }
]

export default yourPregnancyArticles
