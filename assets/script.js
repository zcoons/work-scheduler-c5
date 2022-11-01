timeEl = $('#currentDay');
tBlockEl = $('.container');

t = moment().format("LL");

tBlockEl.text(t);
tBlockEl.attr('Style', 'text-align:center');