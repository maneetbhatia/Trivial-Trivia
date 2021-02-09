var correct = 0;
var incorrect = 0;
var unanswered = 0;
var get_status = [];
var t;

$('document').ready(function (str) {
    document.getElementById("div2").style.display = "block";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div3").style.display = "none";
})

// $('document').ready(onclick('#btn'));



function get() {
    if (document.form1.q0[0].checked) {
        get_status[0] = document.form1.q0[0].value;
    } else if (document.form1.q0[1].checked) {
        get_status[0] = document.form1.q0[1].value;
    } else if (document.form1.q0[2].checked) {
        get_status[0] = document.form1.q0[2].value;
    } else if (document.form1.q0[3].checked) {
        get_status[0] = document.form1.q0[3].value;
    }
}

function get1() {
    if (document.form1.q1[0].checked) {
        get_status[1] = document.form1.q1[0].value;
    } else if (document.form1.q1[1].checked) {
        get_status[1] = document.form1.q1[1].value;
    } else if (document.form1.q1[2].checked) {
        get_status[1] = document.form1.q1[2].value;
    } else if (document.form1.q1[3].checked) {
        get_status[1] = document.form1.q1[3].value;
    }
}

function get2() {
    if (document.form1.q2[0].checked) {
        get_status[2] = document.form1.q2[0].value;
    } else if (document.form1.q2[1].checked) {
        get_status[2] = document.form1.q2[1].value;
    } else if (document.form1.q2[2].checked) {
        get_status[2] = document.form1.q2[2].value;
    } else if (document.form1.q2[3].checked) {
        get_status[2] = document.form1.q2[3].value;
    }
}

function get3() {
    if (document.form1.q3[0].checked) {
        get_status[3] = document.form1.q3[0].value;
    } else if (document.form1.q3[1].checked) {
        get_status[3] = document.form1.q3[1].value;
    } else if (document.form1.q3[2].checked) {
        get_status[3] = document.form1.q3[2].value;
    } else if (document.form1.q3[3].checked) {
        get_status[3] = document.form1.q3[3].value;
    }
}

function get4() {
    if (document.form1.q4[0].checked) {
        get_status[4] = document.form1.q4[0].value;
    } else if (document.form1.q4[1].checked) {
        get_status[4] = document.form1.q4[1].value;
    } else if (document.form1.q4[2].checked) {
        get_status[4] = document.form1.q4[2].value;
    } else if (document.form1.q4[3].checked) {
        get_status[4] = document.form1.q4[3].value;
    }
}

function get5() {
    if (document.form1.q5[0].checked) {
        get_status[5] = document.form1.q5[0].value;
    } else if (document.form1.q5[1].checked) {
        get_status[5] = document.form1.q5[1].value;
    } else if (document.form1.q5[2].checked) {
        get_status[5] = document.form1.q5[2].value;
    } else if (document.form1.q5[3].checked) {
        get_status[5] = document.form1.q5[3].value;
    }
}

function get6() {
    if (document.form1.q6[0].checked) {
        get_status[6] = document.form1.q6[0].value;
    } else if (document.form1.q6[1].checked) {
        get_status[6] = document.form1.q6[1].value;
    } else if (document.form1.q6[2].checked) {
        get_status[6] = document.form1.q6[2].value;
    } else if (document.form1.q6[3].checked) {
        get_status[6] = document.form1.q6[3].value;
    }
}

function get7() {
    if (document.form1.q7[0].checked) {
        get_status[7] = document.form1.q7[0].value;
    } else if (document.form1.q7[1].checked) {
        get_status[7] = document.form1.q7[1].value;
    } else if (document.form1.q7[2].checked) {
        get_status[7] = document.form1.q7[2].value;
    } else if (document.form1.q7[3].checked) {
        get_status[7] = document.form1.q7[3].value;
    }
}


function done() {
    clearInterval(t);
    if (get_status[0] === "b") {
        correct++;
    }
    else if (get_status[0] === "a" || get_status[0] === "c" || get_status[0] === "d") {
        incorrect++;
    }
    else {
        unanswered++;
    }

    if (get_status[1] === "c") {
        correct++;
    }
    else if (get_status[1] === "a" || get_status[1] === "b" || get_status[1] === "d") {
        incorrect++;
    }
    else {
        unanswered++;
    }

    if (get_status[2] === "b") {
        correct++;
    }
    else if (get_status[2] === "a" || get_status[2] === "c" || get_status[2] === "d") {
        incorrect++;
    }
    else {
        unanswered++;
    }

    if (get_status[3] === "d") {
        correct++;
    }
    else if (get_status[3] === "a" || get_status[3] === "b" || get_status[3] === "c") {
        incorrect++;
    }
    else {
        unanswered++;
    }

    if (get_status[4] === "d") {
        correct++;
    }
    else if (get_status[4] === "a" || get_status[4] === "b" || get_status[4] === "c") {
        incorrect++;
    }
    else {
        unanswered++;
    }

    if (get_status[5] === "d") {
        correct++;
    }
    else if (get_status[5] === "a" || get_status[5] === "b" || get_status[5] === "c") {
        incorrect++;
    }
    else {
        unanswered++;
    }

    if (get_status[6] === "b") {
        correct++;
    }
    else if (get_status[6] === "a" || get_status[6] === "d" || get_status[6] === "c") {
        incorrect++;
    }
    else {
        unanswered++;
    }

    if (get_status[7] === "a") {
        correct++;
    }
    else if (get_status[7] === "b" || get_status[7] === "d" || get_status[7] === "c") {
        incorrect++;
    }
    else {
        unanswered++;
    }

    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "block";

    document.getElementById("p1").textContent = "Correct Answers: " + correct;
    document.getElementById("p2").textContent = "Incorrect Answers: " + incorrect;
    document.getElementById("p3").textContent = "Un-answered Questions: " + unanswered;
}

var c = 120;
var correct = 0;

function timedCount() {
    document.getElementById("h3").textContent = "Time Remaining: " + c;
    c = c - 1;
    if (c == 0) {
        done();
    }
    t = setTimeout(timedCount, 1000);
}

function start() {
    document.getElementById("div2").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div3").style.display = "block";
    timedCount();
}

function startAgain() {
    document.getElementById("div2").style.display = "block";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div3").style.display = "none";
    get();
    get7();
    get2();
    get3();
    get4();
    get5();
    get6();
    timedCount();

}

$('#btn2').on('click', startAgain)

