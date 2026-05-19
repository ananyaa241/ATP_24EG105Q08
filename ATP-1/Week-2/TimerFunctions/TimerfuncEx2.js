//OTP Countdown Simulator (Console App)
function otpCountdown(time) {
    let remainingTime = time;
    const intervalId = setInterval(() => {
        if (remainingTime > 0) {
            console.log(`valid for ${remainingTime}s`);
            remainingTime--;
        } else {
            console.log("OTP has expired.");
            clearInterval(intervalId);
        }
    }, 1000);
}
console.log("OTP sent successfully");
otpCountdown(10);