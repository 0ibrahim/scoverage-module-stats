i = 0
data = []
function timeout() {
    setTimeout(function () {
        // Do Something Here
        // Then recall the parent function to
        // create a recursive loop.
		
		if (i ==3){return};console.log(i);
		
		var req = new XMLHttpRequest();  
		req.open('GET', links[i].href, false);   
		req.send(null);  
		if(req.status == 200){
		    var a = $.parseHTML(req.responseText);
			console.log(a)
			var rows = $(a[10]).find("td")
			var temp = []
			//temp.push($(this).text())
			//rows = $("frame[name='mainFrame'] .tablesorter.table.table-striped.tablesorter-default tbody tr td")
			console.log(rows.length)
			var s = []
			for (i = 4; i < rows.length; i+=12) { 
				if ($(rows[i]).text().match(/\d+/)){
				s.push($(rows[i]).text().match(/\d+/)[0])}
			}
			temp.push(s)
			var inv = []
			for (i = 5; i < rows.length; i+=12) {
				if ($(rows[i]).text().match(/\d+/)){ 
				inv.push($(rows[i]).text().match(/\d+/)[0])}
			}
			temp.push(inv)
			data.push(temp)
		}	
		console.log(rows)
		i += 1; 
        timeout();
    }, 3000);
}