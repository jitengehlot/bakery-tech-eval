/**
 * Created by Jitendra Gehlot 28-July-2019
 * Bakery Packing problem component
 */
class BakeryTestsView extends base {

	/**
	 * @param {Bakery} src
	 */
	constructor(src) {
		super();
		this.src = src;

		this.elements = {
			"output": null,
		};

	}

	/** @returns {Bakery} */
	get src() {

	    return this.getProperty('src', null);
	}

	/** @param {Bakery} value */
	set src(value) {
	    this.setProperty('src', value);
	}

	// ui element ID's

	/** @returns {{}} */
	configureElements(output = null) {
		if (output != null) { this.elements.output = document.getElementById(output); }
	}

	render() {
		if (this.src == null) { return; }

		//console.log("this.config = ",this.config);

		let testResult = {
			"status":          "",
			"name":            this.config.description || "",
			"type":            typeof this.config.stream,
			"length":          JSON.stringify(this.config.stream).length,
			"actualPayload":   JSON.stringify(this.src.payload),
			"actualError":     JSON.stringify(this.src.error),
			"expectedPayload": this.config.expected.payload,
			"expectedError":   this.config.expected.error,
			"actualHasSolution":   this.src.hasSolution,
			"expectedHasSolution": this.config.expected.hasSolution
		};

		console.log("testResult = ",testResult);

		console.log("testResult.actualPayload = ",testResult.actualPayload);

		//
		if (testResult.expectedPayload     === testResult.actualPayload &&
			testResult.expectedError       === testResult.actualError &&
			testResult.expectedHasSolution === testResult.actualHasSolution
		) {
			testResult.status = "PASS";
		} else {
			testResult.status = "FAIL";
		}

		this.output(`
            <tr>
                <td valign="middle">${testResult.status}</td>
                <td valign="top">${testResult.name}</td>
                <td valign="top">${testResult.type} [${testResult.length}] </td>
            </tr>
		`);

	}

	output(str) {
		this.elements.output.innerHTML += str;
	}

	/** @returns {{}} */
	get elements() {
	    return this.getProperty('elements', {"input": null, "output": null, "error": null });
	}

	/** @param {{}} value */
	set elements(value) {
	    this.setProperty('elements', value);
	}


	/** @returns {{}} */
	get config() {
	    return this.getProperty('config', {});
	}

	/** @param {{}} value */
	set config(value) {
	    this.setProperty('config', value);
	}

}