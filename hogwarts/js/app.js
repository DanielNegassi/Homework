

const $container = $('#container');
console.log($container);
const $h1 = $('<h1></h1>');
console.log($h1);
$h1.text("Hogwarts");
$container.append($h1);

const $h2 = $('<h2></h2>');
console.log($h2);
$h2.text('Daniel');
$container.append($h2);

const $h3 = $('<h3/>');
$h3.text('Ravenclaw');
$container.append($h3);

const $h4 = $('<h4/>');
$container.append($('<h4/>').attr('class', 'dog').text('bozo'));
$container.append($h4.text('Birch Wand with Phoenix Feather Core'));

const $ul = $('<ul/>');
$ul.attr('storage', 'trunk');
$container.append($ul);

const $li = $('<li/>');
$li.text('butter beer');
$ul.append($li);

const $li1 = $('<li/>');
$li1.text('invisibility cloak');
$li1.attr('class','secret');
$ul.append($li1);

const $li2 = $('<li/>');
$li2.text('magic map');
$li2.attr('class','secret');
$ul.append($li2);

const $li3 = $('<li/>');
$li3.text('time turner');
$li3.attr('class','secret');
$ul.append($li3);

const $li4 = $('<li/>');
$li4.text('leash');
$li4.attr('class','dog');
$ul.append($li4);

const $li5 = $('<li/>');
$li5.text('Bertie Botts Every Flavor Jelly Beans.');
$ul.append($li5);

const $h5 = $('<h5/>');
$h5.text("Spring 2017");
$container.append($h5);

const $table = $('<table/>');
$container.append($table);

const $tr = $('<tr/>');
$table.append($tr);

const $th = $('<th/>');
$th.text('Day');
$tr.append($th);

const $th1 = $('<th/>');
$th1.text('Classes');
$tr.append($th1);

const $tr1 = $('<tr/>');
$table.append($tr1);

const $td = $('<td/>');
$td.text('Monday');
$tr1.append($td);

const $td1 = $('<td/>');
$td1.text('Charms, Quidditch practice, History of Magic');
$tr1.append($td1);

const $tr2 = $('<tr/>');
$table.append($tr2);

const $td2 = $('<td/>');
$td2.text('Tuesday');
$tr2.append($td2);

const $td3 = $('<td/>');
$td3.text('CTransfiguration, Defense Against the Dark Arts, Quidditch practice');
$tr2.append($td3);

const $tr3 = $('<tr/>');
$table.append($tr3);

const $td4 = $('<td/>');
$td4.text('Wednesday');
$tr3.append($td4);

const $td5 = $('<td/>');
$td5.text('CTransfiguration, Defense Against the Dark Arts, Quidditch practice');
$tr3.append($td5);

const $tr4 = $('<tr/>');
$table.append($tr4);

const $td6 = $('<td/>');
$td6.text('Thursday');
$tr4.append($td6);

const $td7 = $('<td/>');
$td7.text('CTransfiguration, Defense Against the Dark Arts, Quidditch practice');
$tr4.append($td7);

const $tr5 = $('<tr/>');
$table.append($tr5);

const $td8 = $('<td/>');
$td8.text('Friday');
$tr5.append($td8);

const $td9 = $('<td/>');
$td9.text('CTransfiguration, Defense Against the Dark Arts, Quidditch practice');
$tr5.append($td9);

$('#container h4:nth-child(5)').remove()
$('ul li:nth-child(1)').remove();

$('#container h4:nth-child(4)').after($('<h2>my new wand</h2>').css('color', 'indigo'));
