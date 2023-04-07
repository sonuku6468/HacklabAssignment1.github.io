// Define the states
const states = {
    RED: 'red',
    GREEN: 'green',
    YELLOW: 'yellow'
  };
  
  // Define the transitions
  const transitions = {
    [states.GREEN]: {
      nextState: states.YELLOW,
      timeout: 15000
    },
    [states.YELLOW]: {
      nextState: states.RED,
      timeout: 5000
    },
    [states.RED]: {
      nextState: states.GREEN,
      timeout: 20000
    }
  };
  
  // Initialize the state machine
  let currentState = states.RED;
  let timeoutId;
  
  // Define the transition function
  function transition() {
    const { nextState, timeout } = transitions[currentState];
    currentState = nextState;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(transition, timeout);
    updateTrafficLight();
  }
  
  // Define the click event handlers
  document.getElementById('red-btn').addEventListener('click', () => {
    currentState = states.RED;
    clearTimeout(timeoutId);
    updateTrafficLight();
  });
  
  document.getElementById('green-btn').addEventListener('click', () => {
    currentState = states.GREEN;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(transition, transitions[currentState].timeout);
    updateTrafficLight();
  });
  
  document.getElementById('yellow-btn').addEventListener('click', () => {
    currentState = states.YELLOW;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(transition, transitions[currentState].timeout);
    updateTrafficLight();
  });
  
  // Define the function to update the traffic light UI
  function updateTrafficLight() {
    document.getElementById('red').style.backgroundColor = currentState === states.RED ? states.RED : 'black';
    document.getElementById('green').style.backgroundColor = currentState === states.GREEN ? states.GREEN : 'black';
    document.getElementById('yellow').style.backgroundColor = currentState === states.YELLOW ? states.YELLOW : 'black';
  }
  
  // Start the state machine
  timeoutId = setTimeout(transition, transitions[currentState].timeout);
  