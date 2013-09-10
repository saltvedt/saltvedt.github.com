---
layout: post
title: Graphs of Champion Picks and Bans From LCS
---

Below are graphs over picks and bans of all the games played in the League Championship Series. Chose which games you are interested in and which graph you want displayed from the dropdown menus.


<select id="gameset">
	<option value="lcs">All LCS Games</option>
	<option value="eu_lcs">All EU LCS Games</option>
	<option value="na_lcs">All NA LCS Games</option>
	<option value="eu_lcs_spring_season">EU LCS Spring Season</option>
	<option value="eu_lcs_spring_playoffs">EU LCS Spring Playoffs</option>
	<option value="eu_lcs_summer_promotion">EU LCS Summer Promotion</option>
	<option value="eu_lcs_summer_season">EU LCS Summer Season</option>
	<option value="eu_lcs_summer_playoffs">EU LCS Summer Playoffs</option>
	<option value="na_lcs_spring_season">NA LCS Spring Season</option>
	<option value="na_lcs_spring_playoffs">NA LCS Spring Playoffs</option>
	<option value="na_lcs_summer_promotion">NA LCS Summer Promotion</option>
	<option value="na_lcs_summer_season">NA LCS Summer Season</option>
	<option value="na_lcs_summer_playoffs">NA LCS Summer Playoffs</option>
</select>


<select id="graphtype">
   <option value="by_picks_and_bans">By Picks and Bans</option>
   <option value="by_picks">By Picks</option>
   <option value="by_wins">By Wins</option>
   <option value="by_losses">By Losses</option>
   <option value="by_bans">By Bans</option>
</select>

<img id="champgraph" src="/assets/champgraph/lcs/by_picks_and_bans.png">

<script>
$(document).ready(function() {
	$("select").change(function() {
		var gameset;
		var graphtype;
		gameset = $("#gameset option:selected").val();
		graphtype = $("#graphtype option:selected").val();
		new_img_src = "/assets/champgraph/" + gameset + "/" + graphtype + ".png"
		$("#champgraph").attr("src", new_img_src);
	});
});
</script>