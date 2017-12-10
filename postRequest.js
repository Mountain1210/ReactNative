function postRequest(url,data,callback){
  var opts={
    method:'POST',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json',
    },
    body:JSON.stringify(data)
  };
  fetch(url,opts).then((response)=>response.text()).then((responseText)=>{
    callback(JSON.parse(responseText))
  })
}