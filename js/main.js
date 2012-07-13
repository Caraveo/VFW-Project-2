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
			makeSelect.setAttribute("id", "league");
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
	
	function toggle(parameter){
		switch(parameter){
			case "on":
				$("addTeamMember").style.display = "none";
				$("clearLink").style.display = "inline";
				$("displayLink").style.display = "none";
				$("addMember").style.display = "inline";
				break;
			case "off":
				$("addMemberForm").style.display = "block";
				$("clear").style.display = "inline";
				$("displayLink").style.display = "inline";
				$("addMember").style.display = "none";
				$("items").style.display = "none";
				break;
			default:
				return false;
		}
	}
	
	function saveData(){
		var id = Math.floor(Math.random()*1010101010);
		getSelectedRadio();
		getCheckBoxValue();
		var item 			= {};
			item.alias		= ["Gaming Alias:", $("alias").value];
			item.fName 		= ["First Name:", $("fName").value];
			item.lName 		= ["Last Name:", $("lName").value];
			item.eMail 		= ["Email:", $("eMail").value];
			item.bDay 		= ["Birth-Day:", $("bDay").value];
			item.language	= ["Language:", $("language").value];
			item.skill		= ["Skill:", $("skill").value];
			item.sex  		= ["Sex:", sexValue];
			item.pro 		= ["Professional:", proValue];
			item.division 	= ["Division:", $("division").value];
			item.league  	= ["League:", $("league").value];
			item.notes		= ["Notes:", $("notes").value];
			

		localStorage.setItem(id, JSON.stringify(item));
		alert("Member has been Added!");

		
	}
	
	function getData (){
		toggle("on");
		if(localStorage.length === 0){
			alert("There is no Local Storage Data to display! Sorry.")	
		}
		var makeDiv = document.createElement("div");
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement("ul");
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$("items").style.display = "display";
		for(var i=0, len=localStorage.length; i<len; i++){
			var makeLi = document.createElement("li");
			makeList.appendChild(makeLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = document.createElement("ul");
			makeLi.appendChild(makeSubList);
			for (var n in obj){
				var makeSubLi = document.createElement("li");
				makeSubList.appendChild(makeSubLi);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubLi.innerHTML = optSubText;
			}			
		}
	}

	var leagueGroups = ["--Choose a League--", "Major League Gaming", "National Gaming League", "After Hours Gaming League", "Universal Gaming League", "Global Gaming League", "World Online Gaming League"];
	var sexValue;
	var proValue = "no";
		makeLeagues();

	function clearData(){
		if (localStorage.length === 0){
			alert("There is no data to clear!")
		}else{
			localStorage.clear();
			alert("Local Storage Data has been deleted.")
			window.location.reload();
			return false;
		}
	}	
	
	var displayLink = $("displayLink");
	displayLink.addEventListener("click", getData);
	
	var clearLink = $("clearLink");
	clearLink.addEventListener("click", clearData);
	
	var saveButton = $("submit");
	saveButton.addEventListener("click", saveData);
	
	

});
