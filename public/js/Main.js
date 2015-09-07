define(['router'],
	function (router) {
		var start = function () {
			router.navigate('register', {
				trigger: true
			});
		};

		return {
			start: start
		};
	});
