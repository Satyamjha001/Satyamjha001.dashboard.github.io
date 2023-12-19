// window.onload= onload_code ();
//         function onload_code(){
//             app_01();
//             app_02();
//             app_03();
//             app_04();
//         }
//     function app_01(){  
//         $.ajax({url:"https://iotgane.000webhostapp.com/app_01.php",success:function(result)
// 		    {
//             if(result=="1"){            
//             my_s=document.getElementById("c1");
//             my_s.checked=true;}
//             else{
//             my_s=document.getElementById("c1");
//             my_s.checked=false;
//             }
// 		    }
// 	        })

//     }
//     function app_02(){
//         $.ajax({url:"https://iotgane.000webhostapp.com/app_02.php",success:function(result)
// 		    {
//             if(result=="1"){            
//             my_s=document.getElementById("c2");
//             my_s.checked=true;}
//             else{
//             my_s=document.getElementById("c2");
//             my_s.checked=false;
//             }
// 		    }
// 	        })


//     }
//     function app_03(){
//         $.ajax({url:"https://iotgane.000webhostapp.com/app_03.php",success:function(result)
// 		    {
//             if(result=="1"){            
//             my_s=document.getElementById("c3");
//             my_s.checked=true;}
//             else{
//             my_s=document.getElementById("c3");
//             my_s.checked=false;
//             }
// 		    }
// 	        })

//     }
//     function app_04(){
//         $.ajax({url:"https://iotgane.000webhostapp.com/app_04.php",success:function(result)
// 		    {
//             if(result=="1"){            
//             my_s=document.getElementById("c4");
//             my_s.checked=true;}
//             else{
//             my_s=document.getElementById("c4");
//             my_s.checked=false;
//             }
// 		    }
// 	        })

//     }
//     function getapi1() {
//         var req="https://iotgane.000webhostapp.com/api_update_status_sih.php?app_no=1&status=1";
//         $.ajax({url:"https://iotgane.000webhostapp.com/app_01.php",success:function(result)
// 		    {
            
//             if(result=="1"){
//                 req="https://iotgane.000webhostapp.com/api_update_status_sih.php?app_no=1&status="+"0";
//                 $.ajax({url:req,success:function(result){}});
                
//             }
//             else{
//                 req="https://iotgane.000webhostapp.com/api_update_status_sih.php?app_no=1&status="+"1";
//                 $.ajax({url:req,success:function(result){}});
//             }
//         }}) 
        
//         var delayInMilliseconds = 1000; //1 second

//         setTimeout(function() {
//             app_01();
//         }, delayInMilliseconds);     
        
		
	
//     }
//     function getapi2() {
//         $.ajax({url:"https://iotgane.000webhostapp.com/app_02.php",success:function(result)
// 		    {
            
//             if(result=="1"){
//                 req="https://iotgane.000webhostapp.com/api_update_status_sih.php?app_no=2&status="+"0";
//                 $.ajax({url:req,success:function(result){}});
                
//             }
//             else{
//                 req="https://iotgane.000webhostapp.com/api_update_status_sih.php?app_no=2&status="+"1";
//                 $.ajax({url:req,success:function(result){}});
//             }
//         }})        
//         var delayInMilliseconds = 1000; //1 second

//         setTimeout(function() {
//             app_02();
//         }, delayInMilliseconds);  
//     }
//     function getapi3(){
//         $.ajax({url:"https://iotgane.000webhostapp.com/app_03.php",success:function(result)
// 		    {
            
//             if(result=="1"){
//                 req="https://iotgane.000webhostapp.com/api_update_status_sih.php?app_no=3&status="+"0";
//                 $.ajax({url:req,success:function(result){}});
                
//             }
//             else{
//                 req="https://iotgane.000webhostapp.com/api_update_status_sih.php?app_no=3&status="+"1";
//                 $.ajax({url:req,success:function(result){}});
//             }
//         }})        
//         var delayInMilliseconds = 1000; //1 second

//         setTimeout(function() {
//             app_03();
//         }, delayInMilliseconds);  

//     }
//     function getapi4(){
//         $.ajax({url:"https://iotgane.000webhostapp.com/app_04.php",success:function(result)
// 		    {
            
//             if(result=="1"){
//                 req="https://iotgane.000webhostapp.com/api_update_status_sih.php?app_no=4&status="+"0";
//                 $.ajax({url:req,success:function(result){}});
                
//             }
//             else{
//                 req="https://iotgane.000webhostapp.com/api_update_status_sih.php?app_no=4&status="+"1";
//                 $.ajax({url:req,success:function(result){}});
//             }
//         }})        
//         var delayInMilliseconds = 1000; //1 second

// console.log("dash");


//         setTimeout(function() {
//             app_04();
//         }, delayInMilliseconds);  

//     }


		
	   	
		