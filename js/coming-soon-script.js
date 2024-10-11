$(function() {
    // comming count down clock
    $('#clock').countDown({  
        targetDate: {
            'day'   : 4,
            'month' : 12,
            'year'  : 2024,
            'hour'  : 0,
            'min'   : 0,
            'sec'   : 0
        },
        omitWeeks: true
    });
});
