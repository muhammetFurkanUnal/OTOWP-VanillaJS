const state = {
  selectedNodes : [],

}

const observers = [];

export function subscribeLBE (observer) {
  observers.push(observer);
}

function notifyObservers() {
  observers.forEach(observer => {
    observer();
  });
}

export function selectLBElement (node) {
  state.selectedNodes.push(node);
  notifyObservers();
}

export function deselectLBElement (node) {
  for (let i in state.selectedNodes) {
    if (state.selectedNodes[i] === node) {
      state.selectedNodes.splice(i, 1);
    }
  }
  notifyObservers();
}

export function getLBElements () {
  return state.selectedNodes;
}

export function isAnyLBESelected() {
  return state.selectedNodes.length === 0 ? false : true;
}
