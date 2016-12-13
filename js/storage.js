if (typeof(Storage) !== 'undefined') {
	//localStorage.setItem("name", "Batman");
	sessionStorage.setItem("name", "Batman");
	//console.log(localStorage.getItem("name"));
	console.log(sessionStorage.getItem("name"));
	//localStorage.removeItem("name");
} else {
	console.log("No dispones de WebStorage");
}