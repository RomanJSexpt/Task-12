setInterval(function () {
    const paramTime = Date.now();

    let classDate = document.querySelector(".today-date");
    classDate.innerHTML = date(paramTime);

    let classTime = document.querySelector(".clock");
    let param = classTime.childNodes;

    for (let i = 0; i < param.length; i++) {
        if (param[i].nodeType === 1)
            param[i].remove();
    }
    let testDiv = document.createElement("span");
    classTime.appendChild(testDiv);
    testDiv.innerHTML = `Текущее время ${time(paramTime)}`;

    let prnt = document.querySelectorAll(".row");
    let elm = prnt[2].firstElementChild;
    elm.innerHTML = result(paramTime);

    function date(param) {
        return `Сегодня,${moment(param).format('dddd , MMMM  Do ,')} `;
    }

    function time(param) {
        return moment(param).format(`HH:mm:ss`);
    }

    function days(prm) {
        let res2020 = Date.parse(2020);
        let days = 86400000
        return Math.floor((res2020 - prm) / days);
    }

    function result(prm) {
        return `До ${(new Date().getFullYear())+1} года осталось ${days(prm)} дней `
    }

}, 1000);








//let testClass = classTime.classList.add("newClock");
// classTime.class.remove("clock");


//parentClock .innerHTML = " where is <br>";
//document.querySelector(".hours").remove();


//classTime.insertBefore(testDiv,parent);


//let bad = document.getElementsByClassName("number");
//bad.remove();

//parent.appendChild(newElem);
//newElem.className = "new-clock"