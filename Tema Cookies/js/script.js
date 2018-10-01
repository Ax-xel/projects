 const tmp = () => {
	return $.ajax("https://api.wunderground.com/api/cfbfc5f603141e07/conditions/q/RO/Cluj_Napoca.json", {
 method: "GET",
	success: function (response) {
		console.log("Get weather in c  =", response.current_observation. temp_c);
		console.log("Get weather in f  =", response.current_observation. temp_f);
		let list =document.getElementById("container");
		let weather = document.createElement("h3");
		weather.innerHTML = "";
		list.appendChild(weather);
// 		let weatherF = document.createElement("h3");
// 		weatherF.innerHTML = response.current_observation. temp_f;
// 		list.appendChild(weatherF);
	},
		    error: function(xhr) {
      alert("Something went wrong");
    }
});
 }

document.cookie= "temperature=celsius";


const getCookies = () => {
  const cookieItem ={};
 const cookiesString = document.cookie;
 const separatedEntries = cookiesString.split(';');
 separatedEntries.forEach((entry) => {
  const trimmedEntry = entry.trim();
  const splitEntry = trimmedEntry.split('=');
  cookieItem[splitEntry[0]] = splitEntry[1];
 });
 
 return cookieItem;
}

getCookies();
 console.log(getCookies());

 
 window.onload = () => {
	 tmp().then((response) => {
		 const cookies = getCookies();
	const userTemp = cookies.temperature;
	if (userTemp) {
  document.querySelector(`[value=${userTemp}]`).setAttribute('checked', true);
 }
 const radioBtns = document.querySelectorAll('input[type=radio]');
 radioBtns.forEach((btn) => {
   btn.addEventListener('change', (e) => {
  console.log(e)
   const newTemp = e.target.value;
   document.cookie = `temperature=${newTemp}`; 
		  if(newTemp === "celsius") {
          document.querySelector("h3").innerHTML = response.current_observation. temp_c + "°C";
          document.cookie = "temperature=celsius";
        } else if (newTemp === "fahrenheit") {
          document.querySelector("h3").innerHTML = response.current_observation. temp_f + "℉";
          document.cookie = "temperature=fahrenheit";
        }
  
 })
 });
// 		 console.log(response);
	 })
 }




// // document.cookie= "temperature=fahrenheit";
// document.cookie= "temperature=celsius";
// // console.log(document.cookie);

// const getCookies = () => {
// 		const cookieItem ={};
// 	const cookiesString = document.cookie;
// 	const separatedEntries = cookiesString.split(';');
// 	separatedEntries.forEach((entry) => {
// 		const trimmedEntry = entry.trim();
// 		const splitEntry = trimmedEntry.split('=');
// 		cookieItem[splitEntry[0]] = splitEntry[1];
// 	});
	
// 	return cookieItem;
// }

// getCookies();
// const verde = tmp();
// verde.then(success, error);
// // 	console.log(getCookies());

// // window.onload = () => {
// // const cookies = getCookies();
// // const userTemp = cookies.temperature;
// // if (userTemp) {
// // 		document.querySelector(`[value=${userTemp}]`).setAttribute('checked', true);
// // 	}
// // 	const radioBtns = document.querySelectorAll('input[type=radio]');
// // 	radioBtns.forEach((btn) => {
// //    btn.addEventListener('change', (e) => {
// // 		console.log(e)
// // 		 const newTemp = e.target.value;
// // 		 document.cookie = `temperature=${newTemp}`; 
// // 		 if(newTemp === "celsius") {
// //           document.querySelector("h3").innerHTML = response.current_observation. temp_c;
// //           document.cookie = "temperature=celsius";
// //         } else if (newTemp === "fahrenheit") {
// //           document.querySelector("h1").innerHTML = response.current_observation. temp_f;
// //           document.cookie = "temperature=fahrenheit";
// //         }
// // 	})
// // 	});
// // }
		
// window.onload = () => {
// const cookies = getCookies();
// 	console.log(cookies);
// const userTemp = cookies.temperature;
// tmp().then;
// if (userTemp) {
// 		document.querySelector(`[value=${userTemp}]`).setAttribute('checked', true);
// 	}
// 	const radioBtns = document.querySelectorAll('input[type=radio]');
// 	radioBtns.forEach((btn) => {
//    btn.addEventListener('change', (e) => {
// 		console.log(e)
// 		 const newTemp = e.target.value;
// 		 document.cookie = `temperature=${newTemp}`; 
		
// 	})
// 	});
// }



// window.onload = () => {
// const cookies = getCookies();
// const userTemp = cookies.temperature;
// if (userTemp) {
// 		document.querySelector(`[value=${userTemp}]`).setAttribute('checked', true);
// 	}
// 	const radioBtns = document.querySelectorAll('input[type=radio]');
// 	radioBtns.forEach((btn) => {
//    btn.addEventListener('change', (e) => {
// 		console.log(e)
// 		 const newTemp = e.target.value;
// 		 document.cookie = `temperature=${newTemp}`; 
		
// 	})
// 	});
// }


