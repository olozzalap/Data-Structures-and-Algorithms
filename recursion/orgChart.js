// boss: null means they are at the top of the org chart and have no boss, we will use this to kick off the org chart traversal
const dynamoCorp = [
	{
		name: "rhonda",
		boss: "alexia"
	},
	{
		name: "dimitri",
		boss: "ross"
	},
	{
		name: "raul",
		boss: "alexia"
	},
	{
		name: "edwin",
		boss: "alexia"
	},
	{
		name: "alexia",
		boss: "sophia"
	},
	{
		name: "sophia",
		boss: null
	},
	{
		name: "ross",
		boss: "rhonda"
	}
];

function traverse(employees, selectedBoss) {
	let node = {};
	employees.filter( (employee) => {
		return employee.boss === selectedBoss
	}).forEach( (employee) => {
		console.log(employee);
		node[employee.name] = traverse(employees, employee.name)
	});
	return node;
}

console.log(JSON.stringify(traverse(dynamoCorp, null)));