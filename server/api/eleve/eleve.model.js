'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './eleve.events';

var EleveSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(EleveSchema);
export default mongoose.model('Eleve', EleveSchema);
