

// var car1 = "Mercedes"
// var car2 = "BMW"
// var car3 = "AUDI"
// var car4 = "Porsche"

// document.write(car1+"<br>")
// document.write(car2+"<br>")
// document.write(car3+"<br>")
// document.write(car4+"<br>")

// () - function
// [] - array // massiv
// {} - Object

    



// var person = [
//     ['Raul','Rashid','Vusal',[
//         'Huseyn',
//             [
//                 'Rza','Receb','Ivedik',
//                 [
//                     "BMW",
//                 ]
//             ]
//         ]
//     ],
//     ['Gulnara','Sabina','Fidan','Laman',
//     ['132','133','134'],
//     ["Ismayil"]]
// ]
// let a = person[0][1][0] + person[0][3][1][0][2]+ person[0][3][1][2][3]+person[1][3][3]+person[1][0][5]
// document.getElementsByTagName('H1')[1].innerHTML = a

// Rashid - R
// Rza    - a
// Ivedik - d
// Laman  - a
// Gulnara- r


// console.log(person[1][5][0]+" "+person[1][1]+" ile kod oyrenir.")
// console.log(person[1][0]+" "+person[0][3][0]+"nin sevgilisidir ve surduyu masin "+person[0][3][1][3]+"dir.")
// Gulnare Husynin sevgilisidir ve BMW surur



// console.log(person[0][0]+" + "+person[1][2]+" = "+person[0][0][0]+person[1][2][0])
// console.log(person[0][1]+" + "+person[1][3]+" = "+person[0][1][0]+person[1][3][0])
// console.log(person[0][2]+" + "+person[1][1]+" = "+person[0][2][0]+person[1][1][0])



function pushing(){
   
    var new_car = document.getElementById('cars_name').value
   

    var car = ['Mercedes','Range Rover','Ford','Rolli','Dodge','Viper',"nissan",'F1','F30',"F10","F90","F90"]
    car.push(new_car)
    
    
    document.write('<h1>Cars</h1>')
    document.write('<ul>')
        for(var i = 0; i < car.length; i++){
            document.write("<li>"+car[i]+"</li>")
        }
    document.write('</ul>')

}

// https://www.youtube.com/watch?v=3-bZ7gLVSzo
// https://www.w3schools.com/jsref/jsref_push.asp
// https://www.w3schools.com/js/js_arrays.asp
// https://www.youtube.com/watch?v=RBB2N341tr0
// https://www.youtube.com/watch?v=lq7tFgvdf4k
// https://www.youtube.com/watch?v=CVClHLwv-4I
// https://www.youtube.com/watch?v=AZ4PdALMqx0
// https://www.youtube.com/watch?v=UGapN-hrekw

function my_func(){
    alert("hahaha")
}


var a = ['Rza',"Huseyn",'Iso', null, "demo"]
