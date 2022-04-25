//MUSTACHE.JS TEMPLATE SCRIPT -- VOLUNTEER LISTS 

let targetContainer = $(".target-output"),
    templateDefined = $(".target-output").data("template-chosen"),
    template = $("#mustacheTemplate_"+templateDefined).html();
	  
	  	let volunteer = { "volunteer" : [ 
	  	  { 
	        "program" : "Little STEM-ers",
			"contact" : "linda.b.goode@mail.com",
	        "name" : "Linda Goode",
	        
	      },
	      { 
	        "program" : "Tots Help the Hungry",
			"contact" : "mercedesm.gomez@mail.com",
	        "name" : "Mercedes Madison-Gomez",
	        
	      },
		  { 
	        "program" : "Litte Creatives Art",
			"contact" : "contact@littlecreatives.com",
	        "name" : "Joanna Fisher",
	        
	      },
		  { 
	        "program" : "Remarkable Readers",
			"contact" : "robelfur@remarkablereaders.com",
	        "name" : "Romani Belfur",
	        
	      },
		  { 
	        "program" : "Early Childhood Tutoring",
			"contact" : "kyle.morrison23@mail.com",
	        "name" : "Kyle Morrison",
	        
	      },
		  { 
	        "program" : "Fun & Play Club",
			"contact" : "beckycolton2009@mail.com",
	        "name" : "Becky Colton",
	        
	      }
	    ]};

		
		let html = Mustache.to_html(template, volunteer);
		
		$(targetContainer).html(html);


//SUBMIT ALERT FOR CONTACT PAGE
function submitnow() {
	alert("Your message has been submitted and a member of our support staff will contact you shortly!");
}