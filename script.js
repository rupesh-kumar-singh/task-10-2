


// ########### about inut field ########

let inputvalue = document.querySelector(".input");
let tbody = document.querySelector("tbody");
let button = document.querySelector(".btn");
button.addEventListener('click',(e)=>{
 tbody.innerHTML="";
 
 holidaydata()
 
})


async function holidaydata(){
  let api = await fetch(`https://holidays.abstractapi.com/v1/?api_key=542ec835070f4a68ac8aa94ea543aa4b&country=${inputvalue.value}&year=2020`)
  let jsondata = await api.json();
  
  jsondata.forEach((res ,index)=>{
     inputvalue.value=""
    const{name,type,date,week_day}=res;
    

    let crete_tr = document.createElement("tr");

    let crete_td_1 = document.createElement("td")
              crete_td_1.textContent=index +1;
    let crete_td_2 = document.createElement("td")
    crete_td_2.textContent = name;
    let crete_td_3 = document.createElement("td")
    crete_td_3.textContent = type;
    let crete_td_4 = document.createElement("td")
    crete_td_4.textContent=date;
    let crete_td_5 = document.createElement("td");
    crete_td_5.textContent=week_day;
    crete_tr.append(crete_td_1,crete_td_2,crete_td_3,crete_td_4,crete_td_5);
    tbody.appendChild(crete_tr)
})



}




  