import React from 'react'
import { Link } from 'react-router-dom'

import gettingAMidwifeImg from '../../img/ArticlePages/gettingAMidwife.png'
import foodAndNutritionImg from '../../img/ArticlePages/foodAndNutrition.png'
import whatNotToEatImg from '../../img/ArticlePages/whatNotToEat.png'
import dangerSignsImg from '../../img/ArticlePages/dangerSigns.png'

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
          either <span className='highlightPink'>Corrina Parata</span> at Ngati Porou Hauora or <span className='highlightPink'>Liz Tamepo</span> at Te
          Korahi Whanautanga Midwifery Services.
        </div>
        <h4 className='boldGreyTitle'>Liz Tamepo</h4>
        <ul className='midwifeLocations'>
          <li>Tuesday: Te Araroa</li>
          <li>Wednesday: Ruatoria</li>
          <li>Thursday: Puhi Kaiti</li>
        </ul>
        <ul className='midwifeContact'>
          <li><span className='midwifeContactType'>Phone: </span>06 864 7788</li>
          <li><span className='midwifeContactType'>Mobile: </span><span>027 237 8467</span></li>
          <li><span className='midwifeContactType'>Email: </span><span className='pinkUnderline'>lizzie.andre@xtra.co.nz</span></li>
        </ul>
        <h4 className='boldGreyTitle'>Corrina Parata</h4>
        <ul className='midwifeLocations'>
          <li>Ngati Porou Hauora</li>
        </ul>
        <ul className='midwifeContact'>
          <li><span className='midwifeContactType'>Phone: </span>06 864 7788</li>
          <li><span className='midwifeContactType'>Mobile: </span><span>027 237 8467</span></li>
          <li><span className='midwifeContactType'>Email: </span><span className='pinkUnderline'>lizzie.andre@xtra.co.nz</span></li>
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
        title: 'Smoking, Drugs & Alcohol',
        link: '/your-pregnancy/3'
      }
    ]
  },
  {
    id: 1,
    relatedSection: 'Your Pregnancy',
    title: 'Food & Nutrition',
    description: 'Help with your diet',
    content: (
      <div>
        <div className='contentStyle'>
          Maintaining a healthy diet is important when you are pregnant as it
          will help your baby to grow and develop. It is important to eat a wide
          selection of kai to get the right balance of nutrients that both you
          and your baby need.
        </div>
        <div className='contentStyle'>
          Your appetite may change when you are hapu. You may feel hungrier than
          usual or may feel like you don’t want to eat. If you are hungrier than
          normal, eat healthy kai at breakfast, this can help you to avoid
          grazing on kai that are high in fats and sugar as the day progresses.
        </div>
        <div className='contentStyle'>
          Eating kai such as fruits and vegetables provides vitamins, minerals
          and fibre can help with digestion and can prevent constipation.
          Drinking 6-8 glasses of water each day will be helpful in preventing
          constipation also. Ideally, eat five plus portions of fruit and
          vegetables each day. Foods with carbohydrates, such as breads,
          potatoes, cereals, rice, pasta and oats should make up a third of your
          daily kai intake.
        </div>
        <div className='contentStyle'>
          It is important to eat protein kai each day, these can be found in
          foods such as beans, fish, eggs, meat, poultry and nuts. It is
          important to make sure eggs, poultry, meats and pork are cooked well
          through.
        </div>
        <div className='contentStyle last'>
          Kai high in calcium are essential when you are hapu to help your baby
          grow. These include kai like milk, cheese, and yoghurt. Reduced fat
          and lower sugar options are good. For mama that prefer dairy
          alternatives, there are soya options available.
        </div>
        <h4 className='boldGreyTitle'>What not to eat?</h4>
        <div className='contentStyle'>
          Some food should be avoided. Select the link to find out what not to eat.
        </div>
        <Link to='/your-pregnancy/2'><p className='contentStyle pinkUnderline'>What not to eat ></p></Link>
      </div>
    ),
    youtubeUrl: '',
    img: foodAndNutritionImg,
    readMore: [
      {
        title: 'Getting a Midwife',
        link: '/your-pregnancy/0'
      },
      {
        title: 'Danger Signs',
        link: '/your-pregnancy/4'
      }
    ]
  },
  {
    id: 2,
    relatedSection: 'Your Pregnancy',
    title: 'What Not to Eat',
    description: 'Help with your diet',
    content: (
      <div>
        <div className='contentStyle'>
          There are some kai that should be avoided during pregnancy, both mama
          and pepi can be more susceptible to bacteria, viruses and parasites
          that can cause illness and harm to pepi. Some of these foods include
          cheeses made from unpastuerised milk such as brie, blue vein, and feta
          which could contain E.coli and listeria.
        </div>
        <div className='contentStyle'>
          There are certain fish, for example shark, swordfish, big eye tuna,
          orange roughy, and marlin that all have higher levels of mercury, and
          shellfish such as oysters and clams can contain vibrio bacteria. Raw
          and undercooked fish should also be avoided as it may contain harmful
          bacteria. Some salads made in store such as ham salad, chicken salad
          and seafood salad may contain listeria and should not be eaten.
        </div>
        <div className='contentStyle'>
          Kai that are higher in fat and sugar should be limited. Kai higher in
          sugar and drinks (fizzy drinks, energy drinks and fruit juices) can
          contribute to gaining weight and also lead to tooth decay. Fat is high
          in calories and can make you put on additional weight. Some of these
          foods include all spreadable fats (butter), oils, salad dressings,
          cream, chocolate, potato chips, biscuits, cakes, puddings, savories,
          and ice cream.
        </div>
        <div className='contentStyle last'>
          Although you feel that you maybe eating for two, try to have these
          less often and in small amounts. There are some healthy snacks that
          may help curb the appetite. Foods such as small sandwiches or pitta
          bread, salad vegetables, hummus, vege sticks and hummus, small bowl
          unsweetened cereal, fresh fruit, or small baked potato.
        </div>
      </div>
    ),
    youtubeUrl: '',
    img: whatNotToEatImg,
    readMore: [
      {
        title: 'Food & Nutrition',
        link: '/your-pregnancy/1'
      },
      {
        title: 'Exercise & Fitness',
        link: '/your-pregnancy'
      }
    ]
  },
  {
    id: 3,
    relatedSection: 'Your Pregnancy',
    title: 'Smoking, Drugs & Alcohol',
    description: 'Advise on what you can do',
    content: (
      <div>
        <div className='contentStyle'>
          Lorem ipsum dolor sit amet
          Consectetur adipiscing elit
          Integer molestie lorem at massa
          Facilisis in pretium nisl aliquet
          Nulla volutpat aliquam velit.
        </div>
        <div className='contentStyle'>
          <span className='highlightPink'>Faucibus porta lacus fringilla vel
          Aenean sit amet erat</span> nunc
          Eget porttitor loremeger molestie lo
          ssaet Nulla volutpat aliquam velit.
        </div>
        <div className='contentStyle'>
          Faucibus porta lacus fringilla vel
          Aenean sit amet erat nunc.
        </div>
      </div>
    ),
    youtubeUrl: 'https://youtu.be/od13ZcQizWQ',
    img: '',
    readMore: [
      {
        title: 'Food & Nutrition',
        link: '/your-pregnancy/1'
      },
      {
        title: 'What Not to Eat',
        link: '/your-pregnancy/2'
      }
    ]
  },
  {
    id: 4,
    relatedSection: 'Your Pregnancy',
    title: 'Danger Signs',
    description: 'Advise on what you can do',
    content: (
      <div>
        <div className='contentStyle'>
          Contact your midwife (or specialist doctor) straight away if you have any of the danger signs listed below.
        </div>
        <ul className='dangerSignsList'>
          <li>
            You have bleeding from your vagina, or you have vaginal discharge that is unusual for you.
          </li>
          <li>
            Your ‘waters’ leak or break before labour starts or, once they have broken, the fluid is dirty-looking, greenish or brown.
          </li>
          <li>
            If, once you are regularly feeling your baby move, your baby moves less than usual or you cannot feel your baby move at all.
          </li>
          <li>
            If, after the first few weeks of your pregnancy, you have pains or cramps in your abdomen (tummy).
          </li>
          <li>
            Your hands, feet or face suddenly swell.
          </li>
          <li>
            You have pain or burning when you wee/mimi – especially if you also have a fever and a sore back.
          </li>
          <li>
            You have a very bad headache and this lasts for more than a few hours.
          </li>
        </ul>
        <Link to='/contact'><p className='contentStyle pinkUnderline'>Contact Midwife</p></Link>
      </div>
    ),
    youtubeUrl: '',
    img: dangerSignsImg,
    readMore: [
      {
        title: 'Food & Nutrition',
        link: '/your-pregnancy'
      },
      {
        title: 'Getting a Midwife',
        link: '/your-pregnancy/0'
      }
    ]
  }
]

export default yourPregnancyArticles
