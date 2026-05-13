import title from './images/0.jpg'
import info1 from './images/0a.jpg'
import info2 from './images/0b.jpg'
import info3 from './images/0c.jpg'

import pic1 from './images/1.png'
import pic2 from './images/2.jpg'
import pic3 from './images/3.png'
import pic4 from './images/4.png'
import pic5 from './images/5.jpg'
import pic6 from './images/6.png'
import pic7 from './images/7.png'
import pic8 from './images/8.png'
import pic9 from './images/9.png'
import pic10 from './images/10.png'
import pic11 from './images/11.jpg'
import pic12 from './images/12.png'
import pic13 from './images/13.png'
import pic15 from './images/15.png'
import pic16 from './images/16.png'
import pic17 from './images/17.png'
import pic18 from './images/18.png'
import pic19 from './images/19.png'
import pic20 from './images/20.png'
import pic22 from './images/22.png'
import pic23 from './images/23.png'
import pic24 from './images/24.jpg'
import pic25 from './images/25.png'
import pic26 from './images/26.jpg'
import pic27 from './images/27.jpg'
import pic28 from './images/28.png'
import pic29 from './images/29.jpg'

import { NoColor } from './colored-sticky-styles'

export interface MuralItem {
  id: string | number
  color: typeof NoColor
  image: string
  text: string
  yOffset: number
}

export const StickyLinkData: MuralItem[] = [
  { id: 0,    color: NoColor, image: title, text: '',                                                                         yOffset: 0    },
  { id: '0a', color: NoColor, image: info1, text: '',                                                                         yOffset: 0.12 },
  { id: '0b', color: NoColor, image: info2, text: '',                                                                         yOffset: 0.06 },
  { id: '0c', color: NoColor, image: info3, text: '',                                                                         yOffset: 0.15 },
  { id: 1,    color: NoColor, image: pic1,  text: 'Assasination of Bali',                                                     yOffset: 0.06 },
  { id: 2,    color: NoColor, image: pic2,  text: 'The Three Magi from the East Arriving after the News of the Divine Birth', yOffset: 0.12 },
  { id: 3,    color: NoColor, image: pic3,  text: 'Battle between Kumbhakarna and Lord Rama',                                 yOffset: 0.06 },
  { id: 4,    color: NoColor, image: pic4,  text: 'King Dasaratha and his Minister Sumanthran',                               yOffset: 0    },
  { id: 5,    color: NoColor, image: pic5,  text: 'Unknown',                                                                         yOffset: 0.06 },
  { id: 6,    color: NoColor, image: pic6,  text: 'Murder of Thadaka',                                                        yOffset: 0.12 },
  { id: 7,    color: NoColor, image: pic7,  text: 'Lord Rama and Sita by the Hermitage in Panchavadi',                       yOffset: 0.06 },
  { id: 8,    color: NoColor, image: pic8,  text: 'The Duel between Bhagadatha and Bhima',                                   yOffset: 0.15 },
  { id: 9,    color: NoColor, image: pic9,  text: 'The Duel between Lakshmana and Indrajith',                                 yOffset: 0.06 },
  { id: 10,   color: NoColor, image: pic10, text: 'Aquatic Animals',                                                          yOffset: 0.12 },
  { id: 11,   color: NoColor, image: pic11, text: 'Arjuna and Pasupathasthra',                                                yOffset: 0.06 },
  { id: 12,   color: NoColor, image: pic12, text: 'Pradosha Nrtya/Siva Tandava/Tandava Nrtya',                               yOffset: 0    },
  { id: 13,   color: NoColor, image: pic13, text: 'Unknown',                                                                         yOffset: 0.06 },
  { id: 15,   color: NoColor, image: pic15, text: 'The Cosmic Form of Lord Mahavishnu',                                       yOffset: 0.06 },
  { id: 16,   color: NoColor, image: pic16, text: 'Unknown',                                                                         yOffset: 0    },
  { id: 17,   color: NoColor, image: pic17, text: "Lord Rama's Meditation",                                                   yOffset: 0.06 },
  { id: 18,   color: NoColor, image: pic18, text: 'Unknown',                                                                         yOffset: 0.12 },
  { id: 19,   color: NoColor, image: pic19, text: 'Liberation of Ahalya',                                                     yOffset: 0.18 },
  { id: 20,   color: NoColor, image: pic20, text: 'Hanuman and Surasa',                                                       yOffset: 0.12 },
  { id: 22,   color: NoColor, image: pic22, text: 'Proposal of Ravana',                                                       yOffset: 0    },
  { id: 23,   color: NoColor, image: pic23, text: 'Lord Rama Overpowering Parasurama',                                        yOffset: 0.06 },
  { id: 24,   color: NoColor, image: pic24, text: 'Santhana Gopalakrishnan on Anandasana',                                    yOffset: 0.12 },
  { id: 25,   color: NoColor, image: pic25, text: 'Hanuman and Mainaka',                                                      yOffset: 0.06 },
  { id: 26,   color: NoColor, image: pic26, text: 'Mother and Son Seeing Buddha',                                             yOffset: 0    },
  { id: 27,   color: NoColor, image: pic27, text: 'Ganesha Pooja/ Worship of Lord Ganesha',                                   yOffset: 0.06 },
  { id: 28,   color: NoColor, image: pic29, text: 'Padmapani Bodhisattvan',                                                   yOffset: 0.12 },
  { id: 29,   color: NoColor, image: pic28, text: 'Ravanabhikshu',                                                            yOffset: 0.06 },
]
