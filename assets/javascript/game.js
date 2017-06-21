$(document).ready(function(){
	var targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
	var	numberGems = 4;
	var imgStones = ["assets/images/diamond_PNG6680.png",
		"assets/images/emerald_PNG22295.png",
		"assets/images/ruby_PNG26.png",
		"assets/images/sapphire_PNG22.png"];
	var counter = 0;
	var crystalValue = 0;
	var wins = 0;
	var losses = 0;

	for(i=0;i<numberGems;i++)
	{
		var imgStoneImage = $("<img>");
		imgStoneImage.addClass("col-xs-3 img-responsive gem");
		imgStoneImage.attr("index", i);
		imgStoneImage.attr("src", imgStones[i]);
		imgStoneImage.attr("value", Math.floor(Math.random() * (12 - 1)) + 1);
		$(".gems").append(imgStoneImage);
	}

	$("#target").text(targetNumber);

	function reset()
	{
		targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;

		$(".gems").empty();
		for(i=0;i<numberGems;i++)
		{
			var imgStoneImage = $("<img>");
			imgStoneImage.addClass("col-xs-3 img-responsive gem");
			imgStoneImage.attr("index", i);
			imgStoneImage.attr("src", imgStones[i]);
			imgStoneImage.attr("value", Math.floor(Math.random() * (12 - 1)) + 1);
			$(".gems").append(imgStoneImage);
		}
		counter = 0;
		$("#target").text(targetNumber);
		$("#score").text(counter);
	}


	//gem will be added dynamically, so have to call on click this way
	$('body').on('click', '.gem', function () {
     				var bReset = false;

		crystalValue = $(this).attr("value");
		counter += parseInt(crystalValue);

		$("#score").text(counter);
		if(counter === targetNumber){
			alert("you won");
			bReset = true;
			wins++;
		}
		else if(counter > targetNumber){
			alert("you lost");
			bReset = true;
			losses++;
		}

		if(bReset)
		{
			$("#wins").text("Wins: "+wins);
			$("#losses").text("Losses: "+losses);
			reset();
		}
   	})


});