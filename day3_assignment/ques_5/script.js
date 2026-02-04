function Tracker() {
  Tracker.invoc_count++;
  if (this instanceof Tracker) {
    Tracker.instance_count++;
  }
  this.info = function() {
    return {
      totalInvocations: Tracker.invoc_count,
      totalInstances: Tracker.instance_count
    };
  };
}

Tracker.invoc_count = 0;
Tracker.instance_count = 0;

const first = new Tracker();  
Tracker();                    
const second = new Tracker(); 

console.log(second.info()); 
