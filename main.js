//Define a function that takes that object as input (needs a parameter), 
//and outputs (returns) the following HTML representation of that computer.

// Note that the id property of the computer is after the -- in the section's id attribute.

// <section id="computer--1">
// 	<h1>Apple Macbook</h1>
// 	<div>Model: Pro</div>
// 	<div>Memory: 32 GB</div>
// 	<div>Hard drive space: 500 GB</div>
// 	<div>Processor speed: 2.4 Ghz</div>
// </section>

const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

const computerDetails = (computerObject) => {
    const individualComputer = `<section id="computer---${computer.id}">
<h1>${computer.manufacturer} ${computer.model}</h1>
<div>Model: ${computer.model}</div>
<div>Memory: ${computer.specs.memory} GB</div>
<div>Hard drive space: ${computer.specs.hardDrive}</div>
<div>Processor speed: ${computer.specs.processor} Ghz</div>
</section>`
    
    return individualComputer
};

const computerDetailsHTML = computerDetails(computer);

console.log(computerDetailsHTML);
