// add code snippets from README

let state;

document
  .getElementById("button")
  .addEventListener("click", function increase() {
    dispatch({ type: "INCREASE_COUNT" });
  });

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREASE_COUNT":
      return {
        count: state.count + 1,
      };

    default:
      return state;
  }
}
function render() {
  document.getElementById("container").innerText = state.count;
}

function dispatch(action) {
  state = reducer(state, action);
  render();
}

dispatch({ type: "@@INIT" });
