"use strict";
//const name = 'Abdisa';
//let happy = true;
//let age = true;
//const hairColor = 'red';

//const josh = [name, happy, age, hairColor,['kids', 'dogs', 4]];

//if(josh[1]===true){
    //console.log(Array.isArray(josh), josh[4][0]);
//}

//for(let index = 0; index < josh.length; index++){
    //console.log(josh[index]);
//}
const josh ={

    name:'Josh',
    age:'33',
    happy:'true',
    hairColor:'red',

}
const femi ={

    name:'Femi',
    age:'25',
    happy:'true',
    hairColor:'black',

};
const mx ={

    name:'Mrx',
    age:'25',
    happy:'true',
    hairColor: 'brown',

};
const studentArray =[josh, femi,mx];
//console.log(studentArray);
//if(josh.happy){
   // return 'happy';

//}else{
   // return 'unhappy';
//}

for(let i= 0; i < studentArray.length; i++) {
    console.log(`${studentArray[i].name} is ${studentArray[i].age} years old. He have a ${studentArray[i].hairColor} hair color. Are you ${studentArray[i].happy ? 'happy': 'unhappy'}?`);
}
``