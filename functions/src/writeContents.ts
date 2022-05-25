import { arrayRemove, arrayUnion, db, defaultRegion } from './firebase'

export const writeContents = defaultRegion.firestore
    .document('contents/{_id}')
    .onWrite(async (change) => {
      // Função auxiliar para adicionar updates no documento original
      const addUpdate = async (origin, _id) => {
        const originRef = db.collection('contents').doc(origin)
        await originRef.update({
          updates: arrayUnion(_id),
          updatedAt: new Date(),
          pending: true,
        })
      }

      // UPDATE
      if (change.before.exists && change.after.exists) {
        const _id = change.after.id
        console.log('.... Updated content: ' + _id)
        // Update Event
        const { origin, domain, updates } = change.after.data()
        if (origin && domain) {
          // Se for um update de um documento criado pelo dominio
          // certifca-se que o documento de origem tenha seu id no updates
          await addUpdate(origin, _id)
        } else if (domain === 'public') {
          // Se for um update de um documento original
          if (updates.length === 0) {
            // Se o documento não tiver mais nenhum update
            // Remover a pendencia
            await change.after.ref.update({ pending: false })
          }
        }
      } else if (change.after.exists) {
        // CREATE
        const _id = change.after.id
        console.log('.... Created content: ' + _id)
        const { origin } = change.after.data()
        if (origin) {
          await addUpdate(origin, _id)
        }
      } else {
        // DELETE
        const _id = change.before.id
        console.log('.... Deleted content: ' + _id)
        const data = change.before.data()
        if (data.origin) {
          const originRef = db.collection('contents').doc(data.origin)
          await originRef.update({
            updates: arrayRemove(_id),
            updatedAt: new Date(),
          })
        }
      }
    })
