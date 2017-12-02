import React from 'react'

// import css
import '../index.css'

// data
const FAQ = [
  {
    question: 'When is it?',
    answers: ['Friday February 16th at 8:30 PM to Monday February 19th at 10:30 AM.']
  },
  {
    question: 'Who should come?',
    answers: ['Winter Camp is designed for Christians in Grade 9 through 4th year University or College.  It will be specifically geared towards those in High School and the undergraduate level age group.  If you are slightly younger or slightly older than that age group you are still welcome to attend!']
  },
  {
    question: 'Where is it being held this year?',
    answers: [
      `Camp Nakamun - Busby, AB`,
      `For more info about our host for this year's camp, you can check out their website at:  http://www.campnakamun.com`
    ]
  },
  // {
  //   question: 'How do I get there?',
  //   answers: ['[map here]']
  // },
  {
    question: 'What activities are available?',
    answers: ['When we are not eating, sleeping, listening to our guest speaker or in our small groups, there will be times when we will have access to the indoor pool & hot tub, and a gym where you can play games such as basketball and volleyball.  There are also a couple of ping pong tables as well as space just to hang out and meet with friends both old and new!']
  },
  {
    question: 'How much does it cost?',
    answers: [
      `Dorms / Cabins - $165 / person for the weekend.`,
      'Motel (Heritage Lodge) - $200 / person for the weekend',
      'Heritage Lodges are reserved for married couples and pastors first. Then allocated on first come, first serve basis',
      'The above pricing does NOT include transportation.',
      'Please contact your leader regarding any subsidies or additional costs for transportation.',
      'Please pay your church leader if possible.  Cheques should be made payable to:',
      'Edmonton Vietnamese Alliance Church - English Ministries'
    ]
  },
  {
    question: 'What should I bring?',
    answers: [
      `Bible`,
      'Warm Clothes',
      'Sleeping Bag',
      'Pillow',
      'Towel',
      'Soap',
      'Shampoo',
      'Toothbrush',
      'Toothpaste',
      'Deodorant',
      'Etc'
    ]
  },
  {
    question: 'What should I leave at home?',
    answers: ['Since the purpose of Winter Camp is to spend some time with God and people, we would request that you leave anything that would distract you at home.']
  },
  {
    question: `What CAN'T I bring?`,
    answers: ['Drugs and Alcohol.  These items are NOT permitted.']
  },
  {
    question: 'What if I still have questions?',
    answers: ['No problem!  Email us at general@evacem.com']
  }
]

// renderAnswers
const renderAnswers = (answers) => answers.map((answer, i) => (
  <p key={i}>{answer}</p>
))

// renderFAQ
const renderFAQ = (FAQ) => FAQ.map((pair, i) => (
  <Section answers={pair.answers} key={i} question={pair.question} />
))

const WCFAQ = () => (
  <div className='wc-faq'>
    <div className='wc-faq-content'>
      <h1 className='wc-faq-title'>FAQ</h1>
      <div className='wc-faq-body'>
        <p>
          Here is all the info you need to know about Camp
        </p>
      </div>
      {renderFAQ(FAQ)}
    </div>
  </div>
)

const Section = (props) => {
  const {
    answers,
    question
  } = props

  return (
    <div className='wc-faq-section'>
      <div className='wc-faq-question'>
        <p>{question}</p>
      </div>
      <div className='wc-faq-answers'>
        {renderAnswers(answers)}
      </div>
    </div>
  )
}
export default WCFAQ
