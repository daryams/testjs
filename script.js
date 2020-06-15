'use sctrict';

const week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const now = new Date();
console.log( now.getDay() );

let dayCount = 0;

for (const day in week) {
    dayCount++;
    if (dayCount == now.getDay()) {
        document.write('<p><b style="color: green;">'+ week[day] +'</b></p>'); 
    }
    else if (dayCount == 6 || dayCount == 7 ) {
        document.write('<p><i style="color: red;">'+ week[day] +'</i></p>'); 
    } else {
        document.write('<p>'+ week[day] +'</p>'); 
    }

    
       
}