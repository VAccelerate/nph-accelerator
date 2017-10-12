import React from 'react'

import navigationHelpImg from '../../img/ArticlePages/navigationHelp.png'
import navigationHelpStepOneImg from '../../img/ArticlePages/navigationHelpStepOne.png'
import pepiOraLogo from '../../img/ArticlePages/pepiOraLogo.png'
import navigationHelpStepThreeImg from '../../img/ArticlePages/navigationHelpStepThree.png'

const pepiOraHelpArticles = [
  {
    id: 0,
    relatedSection: 'Pepi Ora Help',
    title: 'Navigation',
    description: 'How to use the menu',
    content: (
      <div>
        <div className='contentStyle'>
          This page will give oyu a quick overview on the different icons and
          help you to navigate the Pepi Ora app.
        </div>
        <h4 className='articleTitle'>Menu Button</h4>
        <div className='contentStyle'>
          Selecting the menu button will open you main menu. From here you can
          navigate to every section of the app.
        </div>
        <img src={navigationHelpStepOneImg} alt='' className='stepsImg' />
        <h4 className='articleTitle'>Pepi Ora Logo</h4>
        <div className='contentStyle'>
          If you select the logo it will take you back to your home page.
        </div>
        <img src={pepiOraLogo} alt='' className='logoStyle' />
        <h4 className='articleTitle'>Rewards Icon</h4>
        <div className='contentStyle'>
          Selecting the rewards icon will take you to your rewards overview page.
        </div>
        <img src={navigationHelpStepThreeImg} alt='' className='stepsImg' />
        <h4 className='articleTitle'>Calendar Icon</h4>
        <div className='contentStyle'>
          Selecting the calendar icon will take you to your calendar page.
        </div>
        <h4 className='articleTitle'>Profile Icon</h4>
        <div className='contentStyle'>
          Selecting the profile icon will take you to your profile page.
        </div>
      </div>
    ),
    youtubeUrl: '',
    img: navigationHelpImg,
    readMore: [
      {
        title: 'Not Sleeping?',
        link: '/support-and-help/2'
      },
      {
        title: 'Feeling Alone?',
        link: '/support-and-help/2'
      }
    ]
  },
  {
    id: 1,
    relatedSection: 'Your Pregnancy',
    title: 'Calendar',
    description: 'All about your calendar',
    content: (
      <div>
        <div className='contentStyle'>
          Sometimes after a mama has had a pepi, she can feel down and out. It
          may feel like her world has fallen apart and that she is in a big
          black hole.
        </div>
      </div>
    ),
    youtubeUrl: '',
    img: 'feelingSadImg',
    readMore: [
      {
        title: 'Not Sleeping?',
        link: '/support-and-help/2'
      },
      {
        title: 'Feeling Alone?',
        link: '/support-and-help/2'
      }
    ]
  }
]

export default pepiOraHelpArticles
