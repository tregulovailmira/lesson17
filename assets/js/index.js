'use strict';

const list = document.getElementById('list');
const item = document.getElementById('item');
const div = document.getElementById('div');

function handler(event) {
    console.log(event.currentTarget.tagName);
}

list.addEventListener('click', handler, {
    capture: true,
});

item.addEventListener('click', handler, {
    capture: true,
});

div.addEventListener('click', handler, {
    capture: true,
});