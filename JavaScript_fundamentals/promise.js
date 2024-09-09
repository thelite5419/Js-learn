// const promiseOne = new Promise(function (resolve, reject){
//   setTimeout(function (){
//     console.log('async task')
//     resolve()
//   }, 1000)
// });

// promiseOne.then(function(){
//   console.log("dfd");
// })

// new Promise(function (resolve, reject){
//   setTimeout(function(){
//     console.log('async');
//     resolve();
//   }, 1000)

// }).then(function (){
//   console.log('async nature');
// })

// const promiseThree = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     resolve({userName: "thelite", Id: 101})
//   }, 1000)
// })

// promiseThree.then(function(user){
//   console.log(user)
// })


// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve(resolve({ userName: "thelite", Id: 101 }));
//     } else {
//       reject("ERROR Failed to load Data");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.userName;
//   })
//   .then((userName) => {
//     console.log(userName);
//   })
//   .catch(function (e) {
//     console.log(e);
//   });


