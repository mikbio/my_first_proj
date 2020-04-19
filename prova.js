const myPromise = new Promise ((resolve, reject) =>{
    setTimeout(()=> {
        resolve('I HAVE SUCCEDED')
    },1000);
    });

myPromise.then(value => console.log(value));