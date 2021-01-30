function print_time() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);  
}
setInterval(print_time, 1000);
