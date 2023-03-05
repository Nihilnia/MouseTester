$('document').ready(() => {

    document.addEventListener('contextmenu', event => event.preventDefault());
    console.log('R.');

    var daBody = $('html');
    var btnClear = $('#btnClear');


    var leftSingle = $('#leftSingle');
    var leftDouble = $('#leftDouble');

    var wheelSingle = $('#wheelSingle');
    var wheelDouble = $('#wheelDouble');

    var rightSingle = $('#rightSingle');
    var rightDouble = $('#rightDouble');


    var singleLeft = 0;
    var doubleLeft = 0;

    var singleWheel = 0;
    var doubleWheel = 0;

    var singleRight = 0;
    var doubleRight = 0;

    daBody.on('mouseup', (x) => {

        if (x.which === 1) {
            console.log("left");
            singleLeft++;
            leftSingle.html(`${singleLeft}`);
            if (x.detail === 2) {
                console.log("left dbl.");
                doubleLeft++;
                leftDouble.html(`${doubleLeft}`);
            };
        };
        if (x.which === 2) {
            console.log("wheel");
            singleWheel++;
            wheelSingle.html(`${singleWheel}`);
            if (x.detail === 2) {
                console.log("wheel dbl.");
                doubleWheel++;
                wheelDouble.html(`${doubleWheel}`);
                $('#dblWheel').html(`Double Click: <span id="rightDouble">${doubleWheel}</span></p>`);
            };
        };
        if (x.which === 3) {
            console.log("right");
            singleRight++;
            rightSingle.html(`${singleRight}`);
            if (x.detail === 2) {
                console.log("right dbl.");
                doubleRight++;
                // rightDouble.html(`${doubleRight}`);
                dblRight.html(`Double Click: <span id="rightDouble">${doubleRight}</span></p>`);
            };

        };


    })

});