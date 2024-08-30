let age = 62;
let fare = 800;
let students =  true;

if(age < 10){
    console.log('free to ride');
}
else if(students){
    let discount = (fare*50/100);
    console.log(fare-discount);
}
else if(age >=60){
    let discount = (fare*15/100);
    console.log(fare-discount);
}
else{
    console.log(fare);
}