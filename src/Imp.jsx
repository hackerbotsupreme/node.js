const youtuber = 'Aloke Pramanik';
// we use import and export to communicate 
// and share the data of one file to another 

const favprog = 'React Js';
function myName(){
    let x = 'vinod';
    return (x);
}
function otherxe(){
    let y = 'nvfnnsderghsaho';
    return (y);
}

export default youtuber;
// only one will be dafault it does not matter how many functions/variables yu have 
export {favprog, myName,otherxe};
// and dont use myName() -> bcz the function will be called on the spot 
// only  write the name , which is reference - it will understand 