import sectionIndex from '../../state/sectionIndex'

let challengeData = {}

sectionIndex.map(index => {
  challengeData[index.section] = {}
  index.articles.map(article => {
    challengeData[index.section][article.id] = {
      title: null,
      questions: []
    }
  })
})

challengeData['support-and-help'][3] = {
  title: 'Safe sleep',
  questions: [
    {
      question: 'The safest place for a baby up to 6 months to sleep is:',
      answers: [
        'In the same bed as the parents',
        'In a wahakura, bassinet or pepi pod in the same room as the parents',
        'In their own room',
        'In an infant car seat'
      ],
      correct: 1
    },
    {
      question: 'In a baby’s crib is OK to include:',
      answers: [
        'Soft toys',
        'Pillows',
        'A tightly-fitting sheet',
        'Thick blankets'
      ],
      correct: 2
    },
    {
      question: 'The best position to place the baby in the crib is:',
      answers: [
        'On their back',
        'On their stomach',
        'On their side',
        'Near a door'
      ],
      correct: 0
    }
  ]
}

challengeData['your-pregnancy'][3] = {
  title: 'Smoking, Drugs & Alcohol',
  questions: [
    {
      question: 'Babies of mothers who smoke are at higher risk for?',
      answers: [
        'Birth Defects (like heart abnormalities, mental retardation and facial malformations)',
        'Being born "stillborn" (death at birth)',
        'More likely to die from sudden infant death syndrome',
        'All of the above'
      ],
      correct: 3
    },
    {
      question: 'Select the correct sentence',
      answers: [
        'Just a few cigarettes a day still raises the risk of a premature delivery or a stillbirth',
        'Cutting back to just a few cigarettes a day is nearly as good as quitting'
      ],
      correct: 0
    },
    {
      question: 'What is considered to be the "safe limit” for drinking while pregnant?',
      answers: [
        'One drink a day',
        'A few drinks a week',
        'One drink a month',
        'There is no "safe limit”'
      ],
      correct: 3
    }
  ]
}

challengeData['baby-and-toddler'][3] = {
  title: 'Preventing driveway accidents',
  questions: [
    {
      question: 'What are the checks that you should do before driving down a driveway?',
      answers: [
        'Check behind your vehicle before you reverse',
        'Keep an eye on all mirrors as you reverse',
        'If you are driving with your children, check that they are all belted up in the car',
        'All of the above'
      ],
      correct: 3
    },
    {
      question: 'What factors increase the risk of a driveway runover?',
      answers: [
        'Fine weather',
        'Long or shared driveway',
        'No fencing or gates to play areas',
        'All of the above'
      ],
      correct: 3
    }
  ]
}

export default challengeData
