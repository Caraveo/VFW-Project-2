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
	/* alert(localStorage.value(0)); */

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
	//Find the value of selected radio button.
	function getSelectedRadio(){
		var radios = document.forms[0].sex;
		for(var i = 0; i<radios.length; i++){
			if(radios[i].checked){
				sexValue = radios[i].value;
			}
		}
	}
	
	function getCheckBoxValue(){
		if($("pro").checked){
			proValue = $("pro").value;
		}else{
			proValue = "No";
		}
	}
	
	function saveData(){
		var id = Math.floor(Math.random()*1010101010);
		getSelectedRadio();
		getCheckBoxValue();
		var item 			= {};
		alert("test!");
			item.alias		= ["Gaming Alias:", $("alias").value];
			item.fName 		= ["First Name:", $("fName").value];
			item.lName 		= ["Last Name:", $("lName").value];
			item.eMail 		= ["Email:", $("eMail").value];
			item.bDay 		= ["Birth-Day:", $("bDay").value];
			item.language	= ["Language:", $("language").value];
			item.skill		= ["Skill:", $("skill").value];
			item.notes		= ["Notes:", $("notes").value];
			item.sex  		= ["Sex:", sexValue];
			item.pro 		= ["Professional:", proValue];
			item.division 	= ["Division:", $("division").value];
			/* item.leagues  	= ["Leagues:", $("leagues").value]; */
			

		localStorage.setItem(id, JSON.stringify(item));
		alert("Member has been Added!");

		
	}

	var leagueGroups = ["--Choose a League--", "Major League Gaming", "National Gaming League", "After Hours Gaming League", "Universal Gaming League", "Global Gaming League", "World Online Gaming League"];
	var sexValue;
	var proValue = "no";
	makeLeagues();
	
	/*
	var displayLink = $("displayLink");
	displayLink.addEventListener("click", getData);
	
	var clearLink = $("clearLink");
	clearLink.addEventListener("click", clearData);
	*/
	var saveButton = $("submit");
	saveButton.addEventListener("click", saveData);
	
	console.log(localStorage);
	

});
