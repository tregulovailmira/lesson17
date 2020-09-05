'use strict';

const list = document.getElementById('list');
const item = document.getElementById('item');
const div = document.getElementById('div');

function handler(event) {
    console.log(event.currentTarget.tagName);
}

document.getElementById('list').addEventListener('click', handler, {
    capture: true,
});

document.getElementById('item').addEventListener('click', handler, {
    capture: true,
});

document.getElementById('div').addEventListener('click', handler, {
    capture: true,
});