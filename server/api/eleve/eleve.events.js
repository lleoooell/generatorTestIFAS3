/**
 * Eleve model events
 */

'use strict';

import {EventEmitter} from 'events';
var EleveEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
EleveEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Eleve) {
  for(var e in events) {
    let event = events[e];
    Eleve.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    EleveEvents.emit(event + ':' + doc._id, doc);
    EleveEvents.emit(event, doc);
  };
}

export {registerEvents};
export default EleveEvents;
