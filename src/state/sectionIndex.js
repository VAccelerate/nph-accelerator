import babyAndToddlerArticles from '../components/SectionPage/BabyAndToddler/babyAndToddlerArticles'
import supportAndHelpArticles from '../components/SectionPage/SupportAndHelp/supportAndHelpArticles'
import yourPregnancyArticles from '../components/SectionPage/YourPregnancy/yourPregnancyArticles'

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
