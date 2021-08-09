"use strict";

function choice(items) {
    let idx = Math.floor( Math.random() * items.length );
    return items[idx];
}

function remove (items, item) {
    let idx = items.indexOf(item);
    return idx >= 0 ? items.splice(idx, 1) : undefined;
}

export {choice, remove}