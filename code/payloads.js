/**
 * Created by Jitendra Gehlot 28-July-2019
 * This is a component of the solution the the Bakery Packing problem
 *
 * data sets used to test the system
 *
 */

let payloads = {
	"standard": {
		"description": "working solution - array",
		"stream": [
			"10 VS5",
			"14 MB11",
			"13 CF"
		],
		"expected": {
			"payload": `[{"originalItem":"10 VS5","name":"Vegemite Scroll","code":"VS5","numberOfItems":10,"canBePacked":true,"totalCost":17.98,"breakdown":[{"status":true,"count":2,"packSize":5,"packCost":8.99,"lineItemCost":17.98}]},{"originalItem":"14 MB11","name":"Blueberry Muffin","code":"MB11","numberOfItems":14,"canBePacked":true,"totalCost":54.8,"breakdown":[{"status":true,"count":3,"packSize":2,"packCost":9.95,"lineItemCost":29.849999999999998},{"status":true,"count":1,"packSize":8,"packCost":24.95,"lineItemCost":24.95}]},{"originalItem":"13 CF","name":"Croissant","code":"CF","numberOfItems":13,"canBePacked":true,"totalCost":25.849999999999998,"breakdown":[{"status":true,"count":1,"packSize":3,"packCost":5.95,"lineItemCost":5.95},{"status":true,"count":2,"packSize":5,"packCost":9.95,"lineItemCost":19.9}]}]`,
			"error": `[]`,
			"hasSolution": true
		}
	},
	"string": {
		"description": "working solution - string",
		"stream": `
		10 VS5
		14 MB11
		13 CF
		`,
		"expected": {
			"payload": `[{"originalItem":"10 VS5","name":"Vegemite Scroll","code":"VS5","numberOfItems":10,"canBePacked":true,"totalCost":17.98,"breakdown":[{"status":true,"count":2,"packSize":5,"packCost":8.99,"lineItemCost":17.98}]},{"originalItem":"\\t\\t14 MB11","name":"Blueberry Muffin","code":"MB11","numberOfItems":14,"canBePacked":true,"totalCost":54.8,"breakdown":[{"status":true,"count":3,"packSize":2,"packCost":9.95,"lineItemCost":29.849999999999998},{"status":true,"count":1,"packSize":8,"packCost":24.95,"lineItemCost":24.95}]},{"originalItem":"\\t\\t13 CF","name":"Croissant","code":"CF","numberOfItems":13,"canBePacked":true,"totalCost":25.849999999999998,"breakdown":[{"status":true,"count":1,"packSize":3,"packCost":5.95,"lineItemCost":5.95},{"status":true,"count":2,"packSize":5,"packCost":9.95,"lineItemCost":19.9}]}]`,
			"error": `[]`,
			"hasSolution": true
		}
	},
	"number": {
		"description": "invalid input - number",
		"stream": 1234,
		"expected": {
			"payload": `[]`,
			"error": `[{}]`,
			"hasSolution": false
		}
	},
	"random": {
		"description": "random working and invalid",
		"stream": [
			"",
			"XXX",
			"XXX YYY",
			"10 YYY",
			"ZZ VS5",
			"10 VS5",
			"14 MB11",
			"13 CF",
			"1 CF",
			"7 CF"
		],
		"expected": {
			"payload": `[{"originalItem":"10 VS5","name":"Vegemite Scroll","code":"VS5","numberOfItems":10,"canBePacked":true,"totalCost":17.98,"breakdown":[{"status":true,"count":2,"packSize":5,"packCost":8.99,"lineItemCost":17.98}]},{"originalItem":"14 MB11","name":"Blueberry Muffin","code":"MB11","numberOfItems":14,"canBePacked":true,"totalCost":54.8,"breakdown":[{"status":true,"count":3,"packSize":2,"packCost":9.95,"lineItemCost":29.849999999999998},{"status":true,"count":1,"packSize":8,"packCost":24.95,"lineItemCost":24.95}]},{"originalItem":"13 CF","name":"Croissant","code":"CF","numberOfItems":13,"canBePacked":true,"totalCost":25.849999999999998,"breakdown":[{"status":true,"count":1,"packSize":3,"packCost":5.95,"lineItemCost":5.95},{"status":true,"count":2,"packSize":5,"packCost":9.95,"lineItemCost":19.9}]},{"originalItem":"1 CF","name":"Croissant","code":"CF","numberOfItems":1,"canBePacked":false,"totalCost":0,"breakdown":[]},{"originalItem":"7 CF","name":"Croissant","code":"CF","numberOfItems":7,"canBePacked":false,"totalCost":0,"breakdown":[]}]`,
			"error": `[{},{},{},{}]`,
			"hasSolution": false
		}
	},
	"emptyArray": {
		"description": "empty array",
		"stream": [],
		"expected": {
			"payload": `[]`,
			"error": `[]`,
			"hasSolution": false
		}
	},
	"null": {
		"description": "null input",
		"stream": null,
		"expected": {
			"payload": `[]`,
			"error": `[{}]`,
			"hasSolution": false
		}
	},
	"no_solution": {
		"description": "no solution",
		"stream": "1 CF",
		"expected": {
			"payload": `[{"originalItem":"1 CF","name":"Croissant","code":"CF","numberOfItems":1,"canBePacked":false,"totalCost":0,"breakdown":[]}]`,
			"error": `[]`,
			"hasSolution": false
		}
	},
	"emptyString": {
		"description": "empty string",
		"stream": "",
		"expected": {
			"payload": `[]`,
			"error": `[{}]`,
			"hasSolution": false
		}
	}

};