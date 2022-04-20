import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { StarSchema } from '../models/Star.js'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
  Stars = mongoose.model('Stars', StarSchema);
  Planets = mongoose.model('Planets', PlanetSchema);
}

export const dbContext = new DbContext()
