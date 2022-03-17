var data ={
	"shoes": [
        {   
            "id":"shoe1",
            "name":"Pure Tone",
            "gender":"Women",
            "style":"Flat",
            "sizes":[4, 4.5, 5, 5.5, 6, 6.5, 7],
            "price":85.00,
            "colour":"Black",
            "description":"These chic snake print shoes are crafted from a combination of soft leather and nubuck. For ultimate versatility, they feature a heel piece that folds down - allowing them to be worn as slip-ons or mules. The simple yet sophisticated upper is teamed with a low 2cm heel and rubber outsole to help with grip, while a leather lining and sock work together with our dual density Cushion Plus™ technology to provide comfort in every step.",
            "picture":"../Images/shoe1/image1.jpg",
            "url":"shoe1.html"
        },
		{
            "id":"shoe2",
            "name":"Orinoco 2 Lace",
            "gender":"Women",
            "style":"Boot",
            "sizes":[5, 6, 7],
			"price":100.00,
            "colour":"Brown",
			"description":"Refreshing our bestselling Orinoco profile, a lace-up ankle boot that stays all day wearable. The premium dark olive leather upper stays classic and crafted while the cleated sole with 3cm heel feels durable and adds grip. Perfect to step into the season with casual style.",
			"picture":"../Images/shoe2/image1.jpg",
			"url":"shoe2.html"
        },
		{
		    "id":"shoe3",
            "name":"ATL TrekDesert Black Nubuck",
            "gender":"Men",
            "style":"Boot",
            "sizes":[6, 6.5, 7, 7.5, 8, 8.5, 9],
			"price":120.00,
            "colour":"Black",
			"description":"Melding the iconic Desert Boot aesthetic with outdoor-ready technologies, the casual ATL Trek Desert in black nubuck is primed for adventure. A recycled Rock-engineered rubber sole combines with a cleated Mimic Grip finish, offering maximum traction and stability on all terrains. Its removable Cushion Plus™ foam footbed delivers anatomically targeted cushioning, and the lightweight midsole boosts all-day comfort. Eco-friendly linings, footbed and sock utilise recycled materials to lighten environmental footprint, too.",
			"picture":"../Images/shoe3/image1.jpg",
			"url":"shoe3.html"
        },
		{
		    "id":"shoe4",
            "name":"Ferius Creek Dark Blue Combi",
            "gender":"Men",
            "style":"Loafer",
            "sizes":[ 7.5, 8, 8.5, 9, 9.5, 10],
			"price":60.00,
            "colour":"Dark Blue",
			"description":"Finished with classic Clarks craftsmanship, Ferius Creek is an uncluttered moccasin in combination dark blue leathers from our Unstructured® range. Premium and timeless with a subtle square toe, the look takes you from casual to smart with ease. Leather linings feel great for barefoot wear, while an OrthoLite® Contoured Comfort footbed and grippy rubber outsole give unrivalled comfort.",
			"picture":"../Images/shoe4/image1.jpg",
			"url":"shoe4.html"
        },
		{
		    "id":"shoe5",
            "name":"CourtLite Lace White Leather",
            "gender":"Universal",
            "style":"Trainer",
            "sizes":[ 5, 6, 7, 8, 9, 10, 11, 12],
			"price":79.00,
            "colour":"White",
			"description":"A minimal, subtly retro sneaker stacked with ultimate comfort features, Court Lite Lace complements life on-the-move. Game-changing Mi-X technology combines an airy part-recycled EVA midsole with a removable, breathable footbed for supreme underfoot cushioning and added bounce. Boosting its planet-friendly credentials, this trainer is finished with responsibly sourced white leather, a part-recycled rubber sole and laces that utilise recycled polyester.",
			"picture":"../Images/shoe5/image1.jpg",
			"url":"shoe5.html"
        },
		{
		    "id":"shoe6",
            "name":"Dream Lux Grey",
            "gender":"Women",
            "style":"Slipper",
            "sizes":[ 6, 7, 8, 9, 10, 11, 12],
			"price":23.00,
            "colour":"Grey",
			"description":"Adding a luxury touch to dress-down days, fluffy slide slipper Dream Lux feels fabulous to wear  and looks it, too. Its grey faux fur finish and lining make a style statement, with a perfectly practical rubber sole completing this on-trend profile.",
			"picture":"../Images/shoe6/image1.jpg",
			"url":"shoe6.html"
        },
		{
		    "id":"shoe7",
            "name":"Craft Run Lace Brown",
            "gender":"Men",
            "style":"Trainer",
            "sizes":[ 7, 8, 9, 10, 11, 12],
			"price":115.00,
            "colour":"Brown",
			"description":"Easy on your feet, easy on the earth  heritage styling and responsible materials create athleisure-inspired sneaker Craft Run Lace. Hand-finished oakmoss suede, a lightweight sports construction and targeted cushioning take comfort to a new level, making your every step feel incredible. Expertly crafted for life on the go.",
			"picture":"../Images/shoe7/image1.jpg",
			"url":"shoe7.html"
        }
]}

$( function() {
    //converting to jquery Ui 
    $( ".radioButtons" ).checkboxradio();  
    $( ".selectMenues").selectmenu();
    $( "#sizeSpinner").spinner(
      {
        step:0.5,
      }
    );
    $( "#minPriceSpinner").spinner();
    $( "#maxPriceSpinner").spinner();
    $( "#priceSlider").slider({
        range:true,
        min: 0,
        max: 500,
        orientation:"horizontal",
        values:[0,500],
        step:1,
        slide: function (event, ui) {

            if (ui.values[0] == ui.values[1]) {
        
              return false;
        
            }
           
            $("#minPriceSpinner").val(ui.values[0]);
            $("#maxPriceSpinner").val(ui.values[1]);

          }
        
    });
    $( "#searchButton").button();
} );


$(document).ready(function(){
    
    
    
    $("#searchButton").on("click", function(){
        document.getElementById("results").innerHTML = '';  //removing all the html elements in the result ID
        
        //getting user entered value for variables
        var selectedGender=$("input:checked").val();
        var selectedColour=$("#colourSelection").val();
        var selectedStyle=$("#styleSelection").val();
        var selectedSize=$("#sizeSpinner").val();
        var selectedMinPrice=$("#minPriceSpinner").val();
        var selectedMaxrice=$("#maxPriceSpinner").val();
        var output="<ul>";

        //traversing through the json data
        for (var i in data.shoes){
            var sizeChecked=false;   //to check whether requesting shoe size has or not.
            for(let j = 0; j < data.shoes[i].sizes.length; j++ ){
                if(selectedSize==data.shoes[i].sizes[j]){       //checking user requested shoes size has or not.
                    sizeChecked=true;
                }
                
            }
            if(((selectedGender==data.shoes[i].gender)||(selectedGender==null))&&((selectedColour==data.shoes[i].colour)||(selectedColour=="any"))&&((selectedStyle==data.shoes[i].style)||(selectedStyle=="any"))&&((sizeChecked==true)||(selectedSize==""))&&((selectedMinPrice<=data.shoes[i].price)&&(selectedMaxrice>=data.shoes[i].price)) ){
                
                var container1 = document.createElement("div");
                container1.classList.add("resultContainer");
                document.getElementById("results").appendChild(container1);
                
                var img = document.createElement("img");
                img.src = data.shoes[i].picture;
                img.classList.add('resultImages');
                container1.appendChild(img);

                var container2 = document.createElement("div");
                container2.classList.add("resultDetails");
                container1.appendChild(container2)
                
                var resultName = document.createElement("p");
                resultName.classList.add("namesOfResults");
                resultName.append(data.shoes[i].name);
                container2.appendChild(resultName);

                var description = document.createElement("p");
                description.append(data.shoes[i].description);
                container2.appendChild(description);
                
                var resultPrice = document.createElement("p");
                resultPrice.classList.add("pricesOfResults");
                resultPrice.append("$ ", data.shoes[i].price);
                container2.appendChild(resultPrice);


                var button1= document.createElement("button");
                button1.classList.add("moreDetailsButton");
                button1.append("More Details");
                var path="window.location.href="+"'"+data.shoes[i].url+"'";
                button1.setAttribute("onclick", path);
                container2.appendChild(button1);

                
            }
            
            
        }
        
    });
    function displayFav(){
        var favShoesList=JSON.parse(localStorage.getItem("favouriteShoes"));
        //checking local storage "favouriteShoes" is null or not.
        if(favShoesList==null){
            
        }
        //if that local storage not null,
        else{
            document.getElementById("allFavShoesResults").innerHTML = '';  //removing all the html elements in that id.
            
            for(let i = 0; i < favShoesList.length; i++){
                for(let j = 0; j < data.shoes.length; j++ ){
                    if(favShoesList[i]==data.shoes[j].id){    //checking local storage array list element and json data id are same or not 
                        var container1 = document.createElement("div");
                        container1.classList.add("favouriteResult");
                        document.getElementById("allFavShoesResults").appendChild(container1);

                        var container2 = document.createElement("div");
                        container2.classList.add("favouriteImgContainer");
                        container1.appendChild(container2);

                        var img = document.createElement("img");
                        img.src = data.shoes[j].picture;
                        img.classList.add('favouriteImages');
                        container2.appendChild(img);

                        var container3=document.createElement("div");
                        container3.classList.add("favShoeDetailsContainer");
                        var shoeName=document.createElement("h3");
                        shoeName.append(data.shoes[j].name);
                        container3.appendChild(shoeName);
                        container1.appendChild(container3)
                    
                        var deleteButton=document.createElement("button");
                        deleteButton.classList.add("favDeleteButton");
                        deleteButton.append('Delete');

                        var shoePrice=document.createElement("p");
                        shoePrice.append("$ ",data.shoes[j].price);
                        shoePrice.classList.add("favShoePrice");
                        container3.appendChild(shoePrice);
                    
                        container3.appendChild(deleteButton);
                    }
                }
            }
        }
        
    }
    $("#addToFavButton").on("click",function(){
		
		try{
			var shoeId=$(this).closest("div").attr("id");
            var favShoesList=JSON.parse(localStorage.getItem("favouriteShoes"));
            //checking local storag favouriteShoes aray list is empty or not
            if(favShoesList==null){
                favShoesList=[];
                favShoesList.push(shoeId);
                localStorage.setItem("favouriteShoes",JSON.stringify(favShoesList));
                displayFav();
            }else{
                var checking=false;   //to check whether shoe already has added to to the favourite list.
                for(let i = 0; i < favShoesList.length; i++){
                    if(favShoesList[i]==shoeId){
                        checking=true;
                    }
                }
                //if shoe hasnt already added to the favourite list, shoe will add.
                if(checking==false){
                    favShoesList.push(shoeId);
                    localStorage.setItem("favouriteShoes",JSON.stringify(favShoesList));
                    displayFav();
                }else{
                    alert("This shoe has already added to the favourite list.");  //if shoe has already added this alert will promt.
                }
                
            }
            
            
		}
		catch(e){
			
			if (e == QUOTA_EXCEEDED_ERR){
				
				console.log("Error Local Storage limit Exceed");
			}else{
				
				console.log("Error Saving to local storage");
			}
		}
        
	});
    
    $("#clearButton").on("click",function(){
        try{
            var favShoesList=JSON.parse(localStorage.getItem("favouriteShoes"));
            if(favShoesList!=null){
                favShoesList=[];
                localStorage.setItem("favouriteShoes",JSON.stringify(favShoesList));
            }

            displayFav();

            
		}
		catch(e){
			
			if (e == QUOTA_EXCEEDED_ERR){
				
				console.log("Error Local Storage limit Exceed");
			}else{
				
				console.log("Error Saving to local storage");
			}
		}
    });
    
    $(".favDeleteButton").on("click",function(){
        console.log("delete");
		
	});
	displayFav();
});

