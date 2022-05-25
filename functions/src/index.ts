import { searchSync } from './algolia'
import { createUser, resetPassword } from './auth'
import { sendContactEmail } from './contact'
import { updateLabels } from './updateLabels'
import { writeContents } from './writeContents'

const algoliaLabels = searchSync('labels',
    { fields: ['title', 'slug'] } )

const algoliaContents = searchSync('contents',
    { fields: ['title', 'labels.title', 'labels.slug', 'slides.text'] } )

export {

  // updates
  updateLabels,

  // searchs
  algoliaContents,
  algoliaLabels,

  writeContents,

  createUser,
  resetPassword,
  sendContactEmail,
}
