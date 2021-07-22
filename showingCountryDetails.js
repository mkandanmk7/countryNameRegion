let jsonData=new XMLHttpRequest();
   jsonData.open("GET","https://restcountries.eu/rest/v2/all");
   jsonData.onload=function(){
      let empty=JSON.parse(this.response);
      
      foo(empty);
   };
   jsonData.onerror=function()
   {
      console.log("error",this.statusText);
   };
   jsonData.send();

   function foo(value)
   {
      for(let key of value)
      {
         console.log("country Name:",key.name,"Sub Region:",key.subregion,"Population:",key.population); 
         // expected output sample: country Name: Russian Federation Sub Region: Eastern Europe Population: 146599183 
      }
      
   };
