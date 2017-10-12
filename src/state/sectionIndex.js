import babyAndToddlerArticles from '../components/SectionPage/babyAndToddlerArticles'
import supportAndHelpArticles from '../components/SectionPage/supportAndHelpArticles'
import yourPregnancyArticles from '../components/SectionPage/yourPregnancyArticles'

let sectionIndex = []

sectionIndex.push({
  section: 'baby-and-toddler',
  articles: []
})
babyAndToddlerArticles.forEach(article => {
  sectionIndex.find(index => {
    return index.section === 'baby-and-toddler'
  }).articles.push({
    id: article.id,
    challengeCompleted: false
  })
})

sectionIndex.push({
  section: 'support-and-help',
  articles: []
})
supportAndHelpArticles.forEach(article => {
  sectionIndex.find(index => {
    return index.section === 'support-and-help'
  }).articles.push({
    id: article.id,
    challengeCompleted: false
  })
})

sectionIndex.push({
  section: 'your-pregnancy',
  articles: []
})
yourPregnancyArticles.forEach(article => {
  sectionIndex.find(index => {
    return index.section === 'your-pregnancy'
  }).articles.push({
    id: article.id,
    challengeCompleted: false
  })
})

export default sectionIndex
