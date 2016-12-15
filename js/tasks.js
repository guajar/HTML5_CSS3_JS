$(document).ready(function() {
	var API_URL = 'http://localhost:8000/api/';
	var tasks = [];
	var newTaskInput = $('#newTaskName');
	var tasksContainer = $('#taskContainer');

	var drawTasks = function () {
		tasksContainer.empty();

		if (tasks.length == 0) {
			tasksContainer.append("<li>No tienes tareas pendientes</li>");
		} else {
			var contentToAdd = '';

			for (var i = 0; i < tasks.length; i++) {
				contentToAdd += '<li>' + tasks[i].name + '</li>';
			}

			tasksContainer.append(contentToAdd);
		}
	};

	var createTask = function (name) {
		var success = function(data) {
			newTaskInput.val('');
			tasks.push(data);
			drawTasks();
		};

		var data = {
			'name': name
		};

		$.ajax({
			type: "POST",
			url: "API_URL" + "tasks",
			data: data,
			success: success
		});
	}


	var getTasks = function() {
		var success = function(data) {

		};

		$.ajax({
			type: "GET",
			url: API_URL + "tasks",
			success: success
		});
	}


	$('#sendNewTask').on("click", function(event){
		event.preventDefault();
		createTask(newTaskInput.val());
	});

	drawTasks();
});