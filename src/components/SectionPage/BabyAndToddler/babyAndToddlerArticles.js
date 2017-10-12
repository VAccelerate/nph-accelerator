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
        <h4 className='articleTitle'>Safety</h4>
        <div className='contentStyle'>
          As your baby gets older and more mobile, you need to be extra careful
          that they can’t injure themselves:
        </div>
        <ul className='dangerSignsList'>
          <li>
            The older your pepi gets, and the more they develop, the more mobile
            they become. You need to be careful and vigilant to keep them safe.
          </li>
          <li>
            Babies love putting things in their mouths, so keep small objects
            off the ground and out of their reach at all times.
          </li>
          <li>
            Never leave them unattended on a surface they could roll off of.
          </li>
          <li>
            When older children are around, make sure you are always near and
            that they are in your sight.
          </li>
        </ul>
        <h4 className='articleTitle'>Communicating</h4>
        <div className='contentStyle'>
          Our pepi need lots of love and physical contact from their parents/
          caring adults, this makes them feel safe, loved, and a sense of
          reliability on their parents. They can’t speak, which means that they
          often communicate by crying. This lets us know that they are
          uncomfortable. It doesn’t tell us exactly what they want, need, or
          what’s affecting them. So settling a crying baby is usually a challenge.
        </div>
        <div className='contentStyle'>
          You may find yourself feeling frustrated if you are stressed, busy, or
          tired. When you feel overwhelmed by the crying, the best thing to do
          is give your baby to another adult (family member/friend) or put them
          safely in their bed, and remove yourself from the situation for a minute
          or two. Calm yourself down, have a cry if you have to, then regather
          yourself and go back and get your baby and try, try, try again.
        </div>
        <h4 className='articleTitle'>Sleeping</h4>
        <div className='contentStyle'>
          At 3 months of age, babies sleep less than they did in their Newborn
          stage. Although they will still need 14-16 hours of sleep a day. This
          means they may be forming a longer sleeping pattern during the night
          hours. Developing a bedtime routine at this stage would be to your
          advantage. Long and disrupted sleeping depends on comfort!
        </div>
        <div className='contentStyle'>
          Give your baby bath, followed by a nice rub down (calendula oil is
          great for soothing baby’s body and keeping them warm while they are
          unclothed). Don’t make the mistake of overheating baby, baby will
          only need one layer more than an adult would wear. That will keep
          them warm and cosy. Now that baby is nice and fresh, feed them dim
          setting. A dim setting lets your Pepi know it’s not daytime and
          creates a sleep-inducing environment.
        </div>
        <div className='contentStyle'>
          Prepare baby’s cot with a firm mattress, and blanket securely tucked
          in to avoid it from moving. When placing them in bed, a good tip is
          the “feet to foot” position where your baby is placed lying on their
          back, with their feet touching the foot of their bed. This lessens the
          chance of them wriggling down under their blanket and getting smothered.
        </div>
        <div className='contentStyle'>
          Give your baby bath, followed by a nice rub down (calendula oil is
          great for soothing baby’s body and keeping them warm while they are
          unclothed). Don’t make the mistake of overheating baby, baby will
          only need one layer more than an adult would wear. That will keep
          them warm and cosy. Now that baby is nice and fresh, feed them dim
          setting. A dim setting lets your Pepi know it’s not daytime and
          creates a sleep-inducing environment.
        </div>
        <h4 className='articleTitle'>Bathing</h4>
        <div className='contentStyle'>Steps:</div>
        <ul className='washBabyList'>
          <li>
            Little ones are more susceptible to catch chills quickly, therefore
            you must ensure the room is comfortably warm (around 25 degrees
              celsius).
          </li>
          <li>
            Gather all necessary supplies (towels, clothes, nappy, soaps,
              products etc.) and lay them out on a big space near your bath,
              where you can dry and dress baby.
          </li>
          <li>
            Fill your bath to 3 inches of water. Start with cold water and
            carefully mix in hot water until you reach a good temperature (32
              degrees celcius).Note; babies and toddlers prefer a much cooler
              bath than you do. Test the temperature by dipping your wrist or
              inner elbow in the water, when the water is warm not hot, that is
              the best temperature.
          </li>
          <li>
            Before putting your baby in the bath, do one last checklist to
            ensure you have all you need, and test the water one last time.
          </li>
          <li>
            (This step keeps baby’s head warm while they’re in the bath) Wrap

          baby in a towel and hold their head directly over the bath to begin
          washing their head. You can now shampoo their hair, clean their face
          and behind their ears.
          </li>
          <li>
            Place baby in the bath, the water doesn’t need to be deeper than
            their waists. Hold them with your less dominant arm, and use the
            other to clean them. It’s best to keep calm and not rush this process,
            let them enjoy it!
          </li>
          <li>
            Now that baby is clean, scoop them out of the bath and dry gently
            and thoroughly. And you’re done!
          </li>
        </ul>
        <h4 className='articleTitle'>Handy Tips</h4>
        <ul className='dangerSignsList'>
          <li>
            You may think that bathing your baby nightly is imperative to their
            hygiene, but until they are crawling around and getting dirty, they
            don’t necessarily need a bath more than a few times a week. So if your
            house is too cold and you think there is a chance of them catching a
            chill, just give them a clean up and leave it until you have a warm
            environment.
          </li>
          <li>
            Washing their faces frequently, cleaning anywhere the skin folds with
            a warm cloth, and thoroughly cleaning their genital area after each
            nappy change, along with some fresh clothes will keep them nice and
            clean.
          </li>
          <li>
            Bathing your baby in a regular bathtub will make it a little awkward
            on your back and arms, which makes it hard to hold baby. A baby tub is
            worth investing in.
          </li>
          <li>
            When older children are around, make sure you are always near and
            that they are in your sight.
          </li>
        </ul>
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
