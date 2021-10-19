var config = {
  apiKey: "AIzaSyCWGbJi9qeD7h6BPhAKBoWupHv21Tge3ck",
  authDomain: "effort-5efac.firebaseapp.com",
  databaseURL: "https://effort-5efac.firebaseio.com",
  projectId: "effort-5efac",
  storageBucket: "effort-5efac.appspot.com",
  messagingSenderId: "771931121287",
  appId: "1:771931121287:web:9fe9abdcab7c369f277a22",
  measurementId: "G-GLD9CY5VPF"
};

firebase.initializeApp(config);
    

var STP = firebase.database().ref("Workcount").child("Count");
            STP.on('value', function(snapshot) {
            var Yw = (snapshot.val());
		
            var Ylimit = document.getElementById('countlimit').innerHTML; 
      
			if(Yw>Ylimit){
           document.getElementById('swoff').style.display = "block";
           
           }
              
          else{
          
          document.getElementById('swon').style.display = "block";
          }    
              
              document.getElementById('jobsearch').style.display = "none";
        
             
	    });
		
