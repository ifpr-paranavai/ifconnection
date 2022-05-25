import { defaultRegion } from './firebase'
import { updater } from './helpers/updater'

export const updateLabels = defaultRegion.firestore
    .document('labels/{_id}')
    .onUpdate(async (change) => {
      // Um updater para cada campo nested
      await updater('contents', 'labels',
          ['isMoment', 'isUse', 'slug', 'title'], change, {
            isArray: true,
          })
    })
