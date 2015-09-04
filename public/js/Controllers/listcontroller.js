define(['Views/listview'],
	function (listview) {
		function start() {
			var users = JSON.parse(localStorage.users);
			listview.render({
				users: users
			});
		};

		return {
			start: start
		};
	});
