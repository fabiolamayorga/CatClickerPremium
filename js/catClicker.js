$(function(){
	var model = {
		init: function() {
			this.data = [
				{
					name: 'Cat1',
					img: "img/cat1",
					clickCounter: 0,
				},
				{
					name: 'Cat2',
					img: "img/cat2",
					clickCounter: 0,
				},
				{
					name: 'Cat3',
					img: "img/cat3",
					clickCounter: 0,
				},
				{
					name: 'Cat4',
					img: "img/cat4",
					clickCounter: 0,
				},
				{
					name: 'Cat5',
					img: "img/cat5",
					clickCounter: 0,
				}
			];
		},

		getAllCats: function(){
			return this.data;
		}
	};

	var octopus = {
		getCats: function(){
			return model.getAllCats();
		},

        init: function() {
            model.init();
            catListView.init();
        },

        increaseCounter: function() {

        },

        clickFunction: function(currentCat) {

        }
	}

	var catView = {
		init: function() {

		},

		render: function() {

		}
	};

	var catListView = {
		init: function() {
			this.catList = $(".catListView");
			this.render();
		},

		render: function(){
            var htmlStr = '';
            octopus.getCats().forEach(function(cats, index){
            	if (index === 0) {
	                htmlStr += '<li class="catItem currentCat">'+
	                        cats.name +
	                    '</li>';            		
            	}else {
	                htmlStr += '<li class="catItem">'+
	                        cats.name +
	                    '</li>';
                }
            });
            this.catList.html(htmlStr);
		},



	};

	octopus.init();

})