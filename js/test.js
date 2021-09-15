//.then first : fetch url found -->if url return some thing then  res.ok --> true & it retun that  data in json
//.then second : we acess json & return our own require result

fetch('https://reqres.in/api/users/3')
  .then(res => {
    if (res.ok) {
      console.log('api is return something')
      return res.json()
    }
  })
  .then(data => console.log(data.data.email))
  .catch(error => console.log(error))
