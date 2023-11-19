let _count = document.getElementById("_count")
let _cps = document.getElementById("_cps")
let _cu = document.getElementById("_cu")

if (localStorage.stgclicks >= 0) {
    clicks = Number(localStorage.stgclicks)
} 
else {
    clicks = 0
}

if (localStorage.cps >= 0) {
    cps = Number(localStorage.cps)
}
else {
    cps = 0
}
if (localStorage.cpsprice >= 25) {
    cpsprice = Number(localStorage.cpsprice)
} else {
    cpsprice = 25
}
if (localStorage.cu >= 2) {
    cu = Number(localStorage.cu)
} else {
    cu = 1
}
if (localStorage.cuprice >= 100) {
    cuprice = Number(localStorage.cuprice)
    _cu.innerHTML = "CU - " + cuprice
} else {
    cuprice = 0
}

_cps.innerHTML = "CPS - c" + cpsprice
_count.innerHTML = clicks

function clicked() {
    clicks = clicks+cu
    _count.innerHTML = clicks
    localStorage.stgclicks = clicks
}
function cps_buy() {
    if (clicks >= cpsprice) {
        cps = cps +1
        localStorage.cps = cps
        clicks = clicks - cpsprice
        cpsprice = cpsprice*1.2
        Math.round(cpsprice)
        _cps.innerHTML = "CPS - " + cpsprice
    }
}
function cu_buy() {
    if (clicks >= cpsprice) {
        cu = cu +1
        localStorage.cu = cu
        clicks = clicks - cuprice
        cuprice = cuprice*1.2
        Math.round(cuprice)
        _cu.innerHTML = "CPS - " + cuprice
    }
}
setInterval(function(){
    clicks = clicks + cps
    _count.innerHTML = clicks
    localStorage.cps = cps
}, 1000)
setInterval(function(){
    if (clicks >= 100) {
        if (cuprice < 100) {
            cuprice = 100
        }
        _cu.innerHTML = "CU - " + cuprice
    }
})
setInterval(function() {
    clicks = Math.round(clicks)
}, 1)