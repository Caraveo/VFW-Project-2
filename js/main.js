/*
Visual Frameworks 1207
Full Sail University
Mobile Development
Professor: Chad Gibson
PlayIGL Team Management App
Project 2
Jonathan Caraveo 
*/

//Wait until DOM is ready.
window.addEventListener("DOMContentLoaded", function(){

	function $(parameter){
		var theElement = document.getElementById(parameter);
		return theElement;
	}
	
	function makeLeagues(){
		var formTag = document.getElementsByTagName("AddTeamMember");
		var selectList = $("select");
		var makeSelect = document.createElement("select");
			makeSelect.setAttribute("id", "leagues");
		for(var i=0, j=leagueGroups.length; i<j; i++){
			var makeOption = document.createElement("option");
			var optText = leagueGroups[i];
			makeOption.setAttribute("value", optText)
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectList.appendChild(makeSelect);
	}

	var leagueGroups = ["--Choose a League--", "Major League Gaming", "National Gaming League", "After Hours Gaming League", "Universal Gaming League", "Global Gaming League", "World Online Gaming League"];
	makeLeagues();
	
	/*
	var displayLink = $("displayLink");
	displayLink.addEventListener("click", getData);
	
	var clearLink = $("clearLink");
	clearLink.addEventListener("click", clearData);
	
	var saveButton = $("submit");
	saveButton.addEventListener("click", saveData);
	*/

});
