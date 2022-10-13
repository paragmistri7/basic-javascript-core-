document.getElementById('btn').addEventListener("click",function () {
    console.log("called");
})
// function ClickHandle() {
//     let ABC = "Testing"
//     console.log(ABC);
//     console.log("called");
// }
let ALetGlobal="data"
let ClickHandle = () =>{
    console.log(ABC); // let Cannot access 'ABC' before initialization
    console.log(ABC); // var undefined
    ABC = "Testing"
    // let ABC = "Test"
    ABC = "Test"
    console.log(ABC);
    console.log("called");
}