// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import { auth } from '@/firebase/fireauth'
import axios from 'axios'
import { FirestoreCrudService } from '@/firebase/FirestoreCrudService'
import { User } from './User'

/**
*
* @class usersService
*/
class UsersService extends FirestoreCrudService {
  constructor () {
    super('users', User)
  }

  async save (data: User, isUpdate = false) {
    data._id = data.email
    if (isUpdate) {
      if (data.password && typeof data.password === 'string') {
          await axios.post('http://localhost:5000/liturgiae-dev/us-east1/createUser', data)

        // await axios.post('http://localhost:5001/liturgiae-dev/us-east1/createUser', data)
      } else {
        throw new Error('Senha inválida')
      }
    }
    delete data.password
    return super.save(data, isUpdate)
  }
}

export const usersService = new UsersService()
