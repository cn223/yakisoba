
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const fancylog = "true"
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


var
address, os = require('os')

function ram_usage() {

    return (os.freemem() + "/" + os.totalmem());
}
// Network interfaces
ifaces = os.networkInterfaces();

for (var dev in ifaces) {

var iface = ifaces[dev].filter(function (details) {
    return details.family === 'IPv4' && details.internal === false;
});

if (iface.length > 0) address = iface[0].address;
}

if (fancylog === "true") {
console.log("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓")
console.log("┃" + ("⡆⣐⢕⢕⢕⢕⢕⢕⢕⢕⠅⢗⢕⢕⢕⢕⢕⢕⢕⠕⠕⢕⢕⢕⢕⢕⢕⢕⢕⢕") + " ┃")
console.log("┃" + ("⢐⢕⢕⢕⢕⢕⣕⢕⢕⠕⠁⢕⢕⢕⢕⢕⢕⢕⢕⠅⡄⢕⢕⢕⢕⢕⢕⢕⢕⢕") + " ┃")
console.log("┃" + ("⢕⢕⢕⢕⢕⠅⢗⢕⠕⣠⠄⣗⢕⢕⠕⢕⢕⢕⠕⢠⣿⠐⢕⢕⢕⠑⢕⢕⠵⢕") + " ┃")
console.log("┃" + ("⢕⢕⢕⢕⠁⢜⠕⢁⣴⣿⡇⢓⢕⢵⢐⢕⢕⠕⢁⣾⢿⣧⠑⢕⢕⠄⢑⢕⠅⢕") + " ┃")
console.log("┃" + ("⢕⢕⠵⢁⠔⢁⣤⣤⣶⣶⣶⡐⣕⢽⠐⢕⠕⣡⣾⣶⣶⣶⣤⡁⢓⢕⠄⢑⢅⢑") + " ┃")
console.log("┃" + ("⠍⣧⠄⣶⣾⣿⣿⣿⣿⣿⣿⣷⣔⢕⢄⢡⣾⣿⣿⣿⣿⣿⣿⣿⣦⡑⢕⢤⠱⢐") + " ┃")
console.log("┃" + ("⢠⢕⠅⣾⣿⠋⢿⣿⣿⣿⠉⣿⣿⣷⣦⣶⣽⣿⣿⠈⣿⣿⣿⣿⠏⢹⣷⣷⡅⢐") + " ┃");
console.log("┃" + ("⣔⢕⢥⢻⣿⡀⠈⠛⠛ ⠁⢠⣿⣿⣿⣿⣿⣿⣿⣿⡀⠈⠛⠛⠁⠄⣼⣿⣿⡇⢔") + "┃ Welcome back !      ")
console.log("┃" + ("⢕⢕⢽⢸⢟⢟⢖⢖⢤⣶⡟⢻⣿⡿⠻⣿⣿⡟⢀⣿⣦⢤⢤⢔⢞⢿⢿⣿⠁⢕") + " ┃ Made with <3 by @aoi@miruku.cafe")
console.log("┃" + ("⢕⢕⠅⣐⢕⢕⢕⢕⢕⣿⣿⡄⠛⢀⣦⠈⠛⢁⣼⣿⢗⢕⢕⢕⢕⢕⢕⡏⣘⢕") + " ┃ ")
console.log("┃" + ("⢕⢕⠅⢓⣕⣕⣕⣕⣵⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣷⣕⢕⢕⢕⢕⡵⢀⢕⢕") + " ┃ ")
console.log("┃" + ("⢑⢕⠃⡈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢃⢕⢕⢕") + " ┃ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎")
console.log("┃" + ("⣆⢕⠄⢱⣄⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⢁⢕⢕⠕⢁") + " ┃ The API is up on port 3020")
console.log("┃" + ("⣿⣦⡀⣿⣿⣷⣶⣬⣍⣛⣛⣛⡛⠿⠿⠿⠛⠛⢛⣛⣉⣭⣤⣂⢜⠕⢑⣡⣴⣿") + " ┃ Server is online at " + address)
console.log("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛")
console.log(("Status :") + (" Online"))
console.log(("Ram used at startup : ") + ram_usage())
console.log(("Logging will start below :"))
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
// Maybe a wrapper for the long underlines and showing the memory?  WHy not
// https://geshii-yakisoba-ggxg9qwrfv4gx-3030.githubpreview.dev/
} else {
console.log(("Status :") + " Online")
console.log(("Ram used at startup : ") + ram_usage())
console.log("Logging will start below :")
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
console.log("Fancy logs disabled :sad:, I won't show the cute face on startup again")
}