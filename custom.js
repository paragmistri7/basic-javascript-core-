
function deletedata(params) {
    // ternary Operator START
    // var cnf = confirm("Are you sure??") ? "deleted":"safe"
    // ternary Operator END

    // console.log(cnf);
    // var cnf = confirm("Are you sure??")
    if (confirm("Are you sure??")) {
        if (confirm("Are you sure seriously??")) {
            console.log("deleted");
        }else{
            console.log("safe");
        }
    }else{
        console.log("safe");
    }

}