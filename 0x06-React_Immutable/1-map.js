import { Map } from 'immutable';

function getImmutableObject(obj) {
  return Map(obj);
}

// Example usage:
const originalObject = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
};

const immutableObject = getImmutableObject(originalObject);
console.log(immutableObject);