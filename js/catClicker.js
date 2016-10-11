$(function(){
	var model = {
		init: function() {
			this.data = [
				{
					name: 'Cat1',
					img: "img/cat1.jpg",
					clickCounter: 0,
				},
				{
					name: 'Cat2',
					img: "img/cat2.jpg",
					clickCounter: 0,
				},
				{
					name: 'Cat3',
					img: "img/cat3.jpg",
					clickCounter: 0,
				},
				{
					name: 'Cat4',
					img: "img/cat4.jpg",
					clickCounter: 0,
				},
				{
					name: 'Cat5',
					img: "img/cat5.jpg",
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
            catView.init();
            catListItemView.init();
        },

        /*increaseCounter: function() {

        },

        clickFunction: function(currentCat) {

        }*/

        initEvents: function() {

        },
	};

	var catView = {
		init: function() {
			this.catView = $(".catView");
			this.counter = $(".catCounter");
			this.render();
		},

		render: function() {
			var currentCat = catListView.getCurrentCat(),
				currentCatImg = "",
				currentCatclickCounter = 0;
				htmlStrImg = '';
				htmlStrCounter = '';

			octopus.getCats().forEach(function(cats,index){
				if (index === currentCat) {
					currentCatImg= cats.img;
					currentCatclickCounter = cats.clickCounter;
				}
			}); //Retrieving all cats to compare which one matches the current cat

			htmlStrImg += '<img src="' + currentCatImg + '"/>';

			this.catView.html(htmlStrImg);
			this.counter.html(currentCatclickCounter);
		}
	};

	var catListView = {
		init: function() {
			this.catList = $(".catListView");
			this.render();
		},

		render: function(){
            var htmlStr = '',
            	currentCat;

            octopus.getCats().forEach(function(cats, index){
            	if (index === 0) {
            		currentCat = index;
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
            this.setCurrentCat(currentCat);
		},

		getCurrentCat: function() {
			return parseInt(this.currentCat);
		},

		setCurrentCat: function(currentCat) {
			this.currentCat = currentCat;
		}
	};

	var catListItemView = {
		init: function() {
			var listItem = document.getElementsByTagName('li');
			console.log(listItem);

			for (i = 0; i < listItem.length; i++) { // we do this to add the even to each list item
				listItem[i].addEventListener('click',this.clickFunction, false);
			}

		},

        clickFunction: function(e) {
        	var self = this;
        	console.log("click", this);
        	console.log(self.className);

			self.classList.remove("currentCat");
			self.classList.add("currentCat");

        	if (self.className === "catItem currentCat") {
        		console.log("currentCat");
        	}

        },


        increaseCounter: function() {

        },

	};

	octopus.init();

})