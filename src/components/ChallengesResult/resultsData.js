const resultsData = {
  pass: {
    styleId: 'results-pass',
    header: 'Congratulations!!',
    subheader: 'You won 100 points',
    description: 'You can use rewards to earn money back on groceries, fuel, firewood and more. Get saving today.',
    buttons: [
      {
        name: 'View rewards',
        link: '/rewards'
      }
    ]
  },
  fail: {
    styleId: 'results-fail',
    header: 'Unlucky!!',
    subheader: 'No points this time',
    description: 'Good effort, don’t give up now. You can either try again or have a read over the content and learn some more.',
    buttons: [
      {
        name: 'Try Again',
        link: '/challenges/1'
      },
      {
        name: 'Learn more',
        link: '/home'
      }
    ]
  }
}

export default resultsData
