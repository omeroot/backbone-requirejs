define(['router'],
	function (router) {
		var start = function () {
			router.navigate('login', {
				trigger: true
			});
		};

		return {
			start: start
		};
	});
