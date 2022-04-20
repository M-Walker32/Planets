import { dbContext } from '../db/DbContext.js'
import { BadRequest } from '../utils/Errors.js'

class StarsService {
  async create(body) {
    const star = await dbContext.Stars.create(body)
    await star.populate('creator', 'picture name')
    return star
  }

  async getById(id) {
    const star = await dbContext.Stars.findById(id).populate('creator', 'picture name')
    if (!star) {
      throw new BadRequest('Invalid Id')
    }
  }

  async getAll() {
    return await dbContext.Stars.find({}).populate('creator', 'name')
  }
}

export const starsService = new StarsService()
