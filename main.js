var form = document.getElementById("issueInputForm");
form.addEventListener("submit", saveIssue);

function Reassigned(i) {
	var assignto = prompt("Reassign to:");
	var issues = JSON.parse(localStorage.getItem("issues"));
	issues[i].assignto = assignto;
	localStorage.setItem("issues", JSON.stringify(issues));
	alert("The Issue has been Reassigned.");
	window.location.reload();
}

function Reopened(i) {
	var issues = JSON.parse(localStorage.getItem("issues"));
	issues[i].status = "Open";
	localStorage.setItem("issues", JSON.stringify(issues));
	alert("The Issue has been Reopened.");
	window.location.reload();
}

function Closed(i) {
	var issues = JSON.parse(localStorage.getItem("issues"));
	issues[i].status = "Closed";
	var currentDate = new Date();
	var currentYear = currentDate.getFullYear();
	var currentMonth = currentDate.getMonth() + 1; // January is Month 0, so we add one
	var currentDay = currentDate.getDay();
	if (currentMonth < 10 && currentDay < 10) {
		var closedDate = currentYear + "-0" + currentMonth + "-0" + currentDay;
	} else if (currentMonth > 9 && currentDay < 10) {
		var closedDate = currentYear + "-" + currentMonth + "-0" + currentDay;
	} else if (currentMonth < 9 && currentDay > 9) {
		var closedDate = currentYear + "-0" + currentMonth + "-" + currentDay;
	} else {
		var closedDate = currentYear + "-" + currentMonth + "-" + currentDay;
	}
	issues[i].closedDate = closedDate;
	localStorage.setItem("issues", JSON.stringify(issues));
	alert("The Issue has been Closed.");
	window.location.reload();
}

function Deleted(i) {
	var issues = JSON.parse(localStorage.getItem("issues"));
	issues.splice(i, i + 1);
	localStorage.setItem("issues", JSON.stringify(issues));
	alert("The Issue has been Deleted.");
	window.location.reload();
}

function fetchIssues() {
	var issues = JSON.parse(localStorage.getItem("issues"));
	var i;
	for (i = 0; i < issues.length; i++) {
		var id = issues[i].id;
		var description = issues[i].description;
		var severity = issues[i].severity;
		var assignto = issues[i].assignto;
		var status = issues[i].status;
		var deadline = issues[i].deadline;
		var started = issues[i].started;
		var closedDate = issues[i].closedDate;
		var tagline = issues[i].tagline;
		if (status == "Open") {
			document.getElementById("issuesList").innerHTML +=
				'<div class="well">' +
				"<h5> Issue ID : " +
				id +
				"</h5>" +
				'<h4><span class="label label-info">' +
				status +
				"</span></h4>" +
				'<h3><span class="glyphicon glyphicon-paste"></span>' +
				"     " +
				description +
				"</h3>" +
				'<p><span class="glyphicon glyphicon-bell"></span>' +
				"     " +
				severity +
				"         " +
				'<span class="glyphicon glyphicon-user"></span>' +
				"     " +
				assignto +
				"</p>" +
				"   " +
				'<p><span class="glyphicon glyphicon-calendar"></span>' +
				"  " +
				"Issued on :" +
				" " +
				started +
				"</p>" +
				'<p><span class="glyphicon glyphicon-time"></span>' +
				"  " +
				"Deadline :" +
				" " +
				deadline +
				"</p>" +
				'<button type="button" class="btn btn-success" onclick="Closed(\'' +
				i +
				"')\">Close</button>" +
				"  " +
				'<button type="button" class="btn btn-danger" onclick="Deleted(\'' +
				i +
				"')\">Delete</button>" +
				"  " +
				'<button type="button" class="btn btn-primary" onclick="Reassigned(\'' +
				i +
				"')\">Reassign</button>" +
				"<br></br>" +
				'<p><span class="glyphicon glyphicon-tag"></span>' +
				" " +
				"Tag : " +
				'<span class="label label-info">' +
				tagline +
				"</span></h4></p>";
		} else {
			document.getElementById("issuesList").innerHTML +=
				'<div class="well">' +
				"<h5> Issue ID : " +
				id +
				"</h5>" +
				'<h4><span class="label label-warning">' +
				status +
				"</span></h4>" +
				'<h3><span class="glyphicon glyphicon-paste"></span>' +
				"     " +
				description +
				"</h3>" +
				'<p><span class="glyphicon glyphicon-time"></span>' +
				"     " +
				severity +
				"         " +
				'<span class="glyphicon glyphicon-user"></span>' +
				"     " +
				assignto +
				"</p>" +
				"   " +
				'<p><span class="glyphicon glyphicon-calendar"></span>' +
				" " +
				"Issued on :" +
				" " +
				started +
				"</p>" +
				'<p><span class="glyphicon glyphicon-inbox"></span>' +
				"  " +
				"Closed on :" +
				" " +
				closedDate +
				"</p>" +
				'<p><span class="glyphicon glyphicon-time"></span>' +
				"  " +
				"Deadline :" +
				" " +
				deadline +
				"</p>" +
				"</p>" +
				'<button type="button" class="btn btn-info" onclick="Reopened(\'' +
				i +
				"')\">Reopen</button>" +
				"  " +
				'<button type="button" class="btn btn-danger" onclick="Deleted(\'' +
				i +
				"')\">Delete</button>" +
				"<br></br>" +
				'<p><span class="glyphicon glyphicon-tag"></span>' +
				" " +
				"Tag : " +
				'<span class="label label-info">' +
				tagline +
				"</p>";
		}
	}
}

function saveIssue(e) {
	var id = chance.guid();
	var description = document.getElementById("issueDescInput").value;
	var severity = document.getElementById("issueSeverityInput").value;
	var assignto = document.getElementById("issueAssignedToInput").value;
	var status = "Open";
	var deadline = document.getElementById("deadline").value;
	var tagline = document.getElementById("tagline").value;
	var currentDate = new Date();
	var closedDate = new Date();
	var currentYear = currentDate.getFullYear();
	var currentMonth = currentDate.getMonth() + 1; // January is Month 0, so we add one
	var currentDay = currentDate.getDay();
	if (currentMonth < 10 && currentDay < 10) {
		var started = currentYear + "-0" + currentMonth + "-0" + currentDay;
	} else if (currentMonth > 9 && currentDay < 10) {
		var started = currentYear + "-" + currentMonth + "-0" + currentDay;
	} else if (currentMonth < 9 && currentDay > 9) {
		var started = currentYear + "-0" + currentMonth + "-" + currentDay;
	} else {
		var started = currentYear + "-" + currentMonth + "-" + currentDay;
	}
	var summarized = {
		id,
		description,
		severity,
		assignto,
		status,
		deadline,
		tagline,
		started,
		closedDate,
	};
	var final = JSON.stringify(summarized);
	if (localStorage.getItem("issues") === null) {
		var issues = [];
		issues.push(summarized);
		var finalissues = JSON.stringify(issues);
		localStorage.setItem("issues", finalissues);
		alert("saved");
	} else {
		var xyz = localStorage.getItem("issues");
		var issues = JSON.parse(xyz);
		issues.push(summarized);
		var finalissues = JSON.stringify(issues);
		localStorage.setItem("issues", finalissues);
		alert("The Issue has been Registered.");
	}
	e.preventDefault();
	window.location.reload();
}
