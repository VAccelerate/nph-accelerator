import React from 'react'

import visitHealthcareProfessionalImg from '../../img/ArticlePages/visitHealthcareProfessional.png'
import winPointsImg from '../../img/ArticlePages/winPoints.png'
import winPointsStepOne from '../../img/ArticlePages/winPointsStepOne.png'
import winPointsStepTwo from '../../img/ArticlePages/winPointsStepTwo.png'

const rewardsSupportArticles = [
  {
    id: 0,
    relatedSection: 'Rewards Support',
    title: 'Win points with challenges',
    description: 'Learn how to win points',
    content: (
      <div>
        <div className='contentStyle'>
          Follow the steps below.
        </div>
        <h4 className='articleTitle'>Step 1</h4>
        <div className='contentStyle'>
          Read information about your child or pregnancy in our FREE app.
        </div>
        <img className='stepsImg' src={winPointsStepOne} alt='step one' />
        <h4 className='articleTitle'>Step 2</h4>
        <div className='contentStyle'>
          Once you have read a section you will get a challenge. A challenge
          consists of several questions to help you learn. Answer those
          questions correctly and you will win points!
        </div>
        <img className='stepsImg' src={winPointsStepTwo} alt='step two' />
        <h4 className='articleTitle'>Step 3</h4>
        <div className='contentStyle last'>
          Your points will then be active in your app. You can view them on your
          Rewards Page.
        </div>
      </div>
    ),
    youtubeUrl: '',
    img: winPointsImg,
    readMore: [
      {
        title: 'Visit healthcare professionals',
        link: '/rewards-support/0'
      },
      {
        title: 'Rewards Shop',
        link: '/rewards-support/0'
      }
    ]
  },
  {
    id: 1,
    relatedSection: 'Rewards Support',
    title: 'Visit healthcare professionals',
    description: 'Find out how that gets points',
    content: (
      <div>
        <div className='contentStyle'>
          You can gain points by visiting your midwife, doctor or any of your
          main healthcare providers.
        </div>
        <h4 className='articleTitle'>Step 1</h4>
        <div className='contentStyle'>
          Make contact with your midwife or doctor if you don’t have one already.
          On your next check up, scan or visit let me know that you have the
          Pepi Ora app and would like to gain points.
        </div>
        <h4 className='articleTitle'>Step 2</h4>
        <div className='contentStyle'>
          When you visit your healthcare professional, they will enter your
          signup email and username into there Pepi Ora database awarding you
          100 points for each visit.
        </div>
        <h4 className='articleTitle'>Step 3</h4>
        <div className='contentStyle last'>
          Your points will then be active in your app. You can view them on your
          Rewards Page.
        </div>
      </div>
    ),
    youtubeUrl: '',
    img: visitHealthcareProfessionalImg,
    readMore: [
      {
        title: 'Visit healthcare professionals',
        link: '/rewards-support/0'
      },
      {
        title: 'Rewards Shop',
        link: '/rewards-support/0'
      }
    ]
  }
]

export default rewardsSupportArticles
