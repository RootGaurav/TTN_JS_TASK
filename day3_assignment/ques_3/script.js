const user = {name: 'gaurav' };

function greet(msg) {
  console.log(`${msg}, ${this.name}`);
}

// Call
greet.call(user,'hello'); 

// Bind:
const bind_Greet = greet.bind(user);
bind_Greet('Hi');