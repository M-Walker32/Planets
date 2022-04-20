import { Auth0Provider } from '@bcwdev/auth0provider'
import { starsService } from '../services/StarsService.js'
import BaseController from '../utils/BaseController.js'

export class StarsController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
    // get all stars
      .get('', this.getAll)
      // get star by id
      .get('/:id', this.getById)
      // create star
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      // get planets
      // .get(':id/planets', this.getPlanets)
      // // get moons
      // .get(':is/moons', this.getMoons)
  }

  async getAll(req, res, next) {
    try {
      const stars = await starsService.getAll()
      return res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const star = await starsService.getById(req.params.id)
      return res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const star = await starsService.create(req.body)
      return res.send(star)
    } catch (error) {
      next(error)
    }
  }

//   async getPlanets(req, res, next) {
//     try {
      
//     } catch (error) {
//       next(error)
//     }
//   }

//  async getMoons (req, res, next) {
//     try {
      
//     } catch (error) {
//       next(error)
//     }
//   }
}

