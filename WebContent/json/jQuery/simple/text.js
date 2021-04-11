
 function update() {
	  var name = dwr.util.getValue("demoName");
	  var postParam = $.param({param0: name});
	  $.post("../../../dwr/jsonp/Demo/sayHello2/", postParam,
			  function(data) {
		        dwr.util.setValue("demoDada", data.age + " " + data.name);
      }, "jsonp"); 
  }