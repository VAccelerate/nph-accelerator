import React from 'react'

import feelingSadImg from '../../img/ArticlePages/feelingSad.png'
import feelingAloneImg from '../../img/ArticlePages/feelingAlone.jpg'
import feelingUnwellImg from '../../img/ArticlePages/feelingUnwell.jpg'
import feelingUnsafeImg from '../../img/ArticlePages/feelingUnsafe.jpg'
import feelingStressedImg from '../../img/ArticlePages/feelingStressed.jpg'
import notSleepingImg from '../../img/ArticlePages/notSleeping.jpg'

const supportAndHelpArticles = [
  {
    id: 0,
    relatedSection: 'support & help',
    title: 'Feeling Stressed?',
    description: 'We can help you',
    content: (
      <div>
        <h4 className='articleTitle'>Shaken Baby Syndrome</h4>
        <div className='contentStyle'>
          Sometimes people can feel very upset or frustrated when a young pepi
          cries repetitively. It is pepi way of letting their whanau know that
          they need something or that there is something wrong. Never shake a
          pepi and ensure people looking after your pepi don't shake it either.
          It can cause serious head injury in pepi under the age of 12 months.
        </div>
        <h4 className='articleTitle'>
          Here are some tips that may help cope with a crying pepi
        </h4>
        <ul className='dangerSignsList'>
          <li>
            Try and give pepi a kai, if pepi is not nungary, they will not want
            to feed
          </li>
          <li>
            Check and change pepi nappy if needed
          </li>
          <li>
            Check if pepi is tired, they will rub their eyes, wriggle around,
            sucks their hands, yawn or grimmace
          </li>
          <li>
            Give pepi a cuddle, talk quietly to baby
          </li>
          <li>
            Check pepi clothing and bedding, they maybe too hot or too cold
          </li>
          <li>
            Take pepi for a short walk in a pepi front pack or back pack
          </li>
        </ul>
        <div className='contentStyle'>
          If pepi still cries, ask someone else to check pepi. If pepi is not
          feeling well, pepi may need to see a nurse.
        </div>
      </div>
    ),
    youtubeUrl: 'https://www.youtube.com/watch?v=bM2yc3oRu8g',
    img: feelingStressedImg,
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
    relatedSection: 'support & help',
    title: 'Not sleeping well?',
    description: 'Get a good nights sleep',
    content: (
      <div>
        <div className='contentStyle'>
          Sometimes after a mama has had a pepi, she can feel down and out. It
          may feel like her world has fallen apart and that she is in a big
          black hole.
        </div>
        <div className='contentStyle'>
          Post natal blues is very common. A new mama can feel down and tearful,
          crying for no apparent reason. This sometimes happens in the first
          week after the pepi is born. She can feel worried as there are a lot
          of changes occurring at this time. This feeling passes after a few
          days. However a mama can become more seriously depressed in the first
          months after a pepi is born. This can occur any time within the first
          year after a pepi is born. It maybe difficult for the mama to sleep,
          relax, or make decisions. She may notice changes in her appetite.
          She may also have thoughts of hurting her baby or that life is not
          worth living. These symptoms are able to be treated. It is really
        important to talk to your nurse or doctor and seek help early.
        </div>
        <div className='contentStyle'>
          In some rare cases, a mama may experience extreme changes in mood and
          thoughts. She may become very out of touch with reality, this is known
          as postnatal psychosis. She may also experience intrusive thoughts, be
          frightened, hear or see things that other people cant. This usually
          begins in the first two weeks after a child is born. As this can
          affect the way she feels about and care for herself and her pepi, it
          is important not to ignore the signs and talk to your midwife, nurse
          or doctor immediately.
        </div>
        <div className='contentStyle last'>
          They will be able to support you with the right help. It is also
          important to accept offers of support from your whanau.
        </div>
      </div>
    ),
    youtubeUrl: '',
    img: notSleepingImg,
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
    id: 2,
    relatedSection: 'Your Pregnancy',
    title: 'Feeling Sad?',
    description: 'See what you can do',
    content: (
      <div>
        <div className='contentStyle'>
          Sometimes after a mama has had a pepi, she can feel down and out. It
          may feel like her world has fallen apart and that she is in a big
          black hole.
        </div>
        <div className='contentStyle'>
          Post natal blues is very common. A new mama can feel down and tearful,
          crying for no apparent reason. This sometimes happens in the first
          week after the pepi is born. She can feel worried as there are a lot
          of changes occurring at this time. This feeling passes after a few
          days. However a mama can become more seriously depressed in the first
          months after a pepi is born. This can occur any time within the first
          year after a pepi is born. It maybe difficult for the mama to sleep,
          relax, or make decisions. She may notice changes in her appetite.
          She may also have thoughts of hurting her baby or that life is not
          worth living. These symptoms are able to be treated. It is really
        important to talk to your nurse or doctor and seek help early.
        </div>
        <div className='contentStyle'>
          In some rare cases, a mama may experience extreme changes in mood and
          thoughts. She may become very out of touch with reality, this is known
          as postnatal psychosis. She may also experience intrusive thoughts, be
          frightened, hear or see things that other people cant. This usually
          begins in the first two weeks after a child is born. As this can
          affect the way she feels about and care for herself and her pepi, it
          is important not to ignore the signs and talk to your midwife, nurse
          or doctor immediately.
        </div>
        <div className='contentStyle last'>
          They will be able to support you with the right help. It is also
          important to accept offers of support from your whanau.
        </div>
      </div>
    ),
    youtubeUrl: '',
    img: feelingSadImg,
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
    id: 3,
    relatedSection: 'support & help',
    title: 'Feeling Unsafe?',
    description: 'Are you in danger',
    content: (
      <div>
        <div className='contentStyle'>
          It is important that whanau feel safe and secure, that whanau care for
          one another, love and support one another, and care for our pepi and
          tamariki providing guidance for them to thrive. For most whanau, their
          pepi and tamariki health, education, wellbeing, hopes and dreams are
          at the heart of their intentions. However, for some people, this is
          not the case.
        </div>
        <div className='contentStyle'>
          Family violence is a common problem in our community,
          it affects many whanau of all ages. There are many reasons contributing
          to family violence and abuse including a parents ability or capacity
          to care, poverty, lack of employment and dependency on a benefit,
          mental health issues or alcohol and drug abuse. Some of the things
          that a person may experience feeling unsafe include:
        </div>
        <ul className='dangerSignsList'>
          <li>
            Being yelled at or hurt in any way
          </li>
          <li>
            Feeling intimidated, threatened or out of control
          </li>
          <li>
            Feeling worried about your safety or your pepi safety
          </li>
          <li>
            Being hit, kicked, or punched
          </li>
          <li>
            Being uncomfortable in your current relationship
          </li>
          <li>
            Being forced to do things against your will such as having sex
          </li>
        </ul>
        <div className='contentStyle'>
          If this is happening to you are someone you know, it is vital that you
          don’t ignore it as your life or childs life could be in serious danger.
          Seek help as soon as possible. You can talk to your midwife, nurse or
          GP. If you are feeling at immediate risk, contact the Police Ph: 111.
          If you are a friend or whanau member of the person experiencing family
          violence, you can support by listening, helping to keep the person and
          pepi safe, and finding out what local supports are available in your
          community.
        </div>
      </div>
    ),
    youtubeUrl: '',
    img: feelingUnsafeImg,
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
    id: 4,
    relatedSection: 'support & help',
    title: 'Feeling Unwell?',
    description: 'Advise on what you can do',
    content: (
      <div>
        <div className='contentStyle'>
          Sometimes after a mama has had a pepi, she can feel down and out. It
          may feel like her world has fallen apart and that she is in a big
          black hole.
        </div>
        <div className='contentStyle'>
          Post natal blues is very common. A new mama can feel down and tearful,
          crying for no apparent reason. This sometimes happens in the first
          week after the pepi is born. She can feel worried as there are a lot
          of changes occurring at this time. This feeling passes after a few
          days. However a mama can become more seriously depressed in the first
          months after a pepi is born. This can occur any time within the first
          year after a pepi is born. It maybe difficult for the mama to sleep,
          relax, or make decisions. She may notice changes in her appetite.
          She may also have thoughts of hurting her baby or that life is not
          worth living. These symptoms are able to be treated. It is really
        important to talk to your nurse or doctor and seek help early.
        </div>
        <div className='contentStyle'>
          In some rare cases, a mama may experience extreme changes in mood and
          thoughts. She may become very out of touch with reality, this is known
          as postnatal psychosis. She may also experience intrusive thoughts, be
          frightened, hear or see things that other people cant. This usually
          begins in the first two weeks after a child is born. As this can
          affect the way she feels about and care for herself and her pepi, it
          is important not to ignore the signs and talk to your midwife, nurse
          or doctor immediately.
        </div>
        <div className='contentStyle last'>
          They will be able to support you with the right help. It is also
          important to accept offers of support from your whanau.
        </div>
      </div>
    ),
    youtubeUrl: '',
    img: feelingUnwellImg,
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
    id: 5,
    relatedSection: 'support & help',
    title: 'Feeling Alone?',
    description: 'Advise on what you can do',
    content: (
      <div>
        <div className='contentStyle'>
          Sometimes after a mama has had a pepi, she can feel down and out. It
          may feel like her world has fallen apart and that she is in a big
          black hole.
        </div>
        <div className='contentStyle'>
          Post natal blues is very common. A new mama can feel down and tearful,
          crying for no apparent reason. This sometimes happens in the first
          week after the pepi is born. She can feel worried as there are a lot
          of changes occurring at this time. This feeling passes after a few
          days. However a mama can become more seriously depressed in the first
          months after a pepi is born. This can occur any time within the first
          year after a pepi is born. It maybe difficult for the mama to sleep,
          relax, or make decisions. She may notice changes in her appetite.
          She may also have thoughts of hurting her baby or that life is not
          worth living. These symptoms are able to be treated. It is really
        important to talk to your nurse or doctor and seek help early.
        </div>
        <div className='contentStyle'>
          In some rare cases, a mama may experience extreme changes in mood and
          thoughts. She may become very out of touch with reality, this is known
          as postnatal psychosis. She may also experience intrusive thoughts, be
          frightened, hear or see things that other people cant. This usually
          begins in the first two weeks after a child is born. As this can
          affect the way she feels about and care for herself and her pepi, it
          is important not to ignore the signs and talk to your midwife, nurse
          or doctor immediately.
        </div>
        <div className='contentStyle last'>
          They will be able to support you with the right help. It is also
          important to accept offers of support from your whanau.
        </div>
      </div>
    ),
    youtubeUrl: '',
    img: feelingAloneImg,
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

export default supportAndHelpArticles
