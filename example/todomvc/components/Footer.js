import React from 'react';

import {connect, createStore, dispatcher} from 'nearly';

import classNames from 'classnames';

let clearCompleted = dispatcher('todos::clearCompleted');

function getClassName(filter) {
    let base = {
        'ALL': '',
        'ACTIVE': '',
        'COMPLETED': ''
    };

    if (filter in base) {
        return Object.assign(base, {[filter]: 'selected'});
    }

    return Object.assign(base, {'ALL': 'selected'});
}

export default function Footer(props) {

    // ...
    let text = props.activeNum === 1 ? ' item left' : ' items left';

    let selectedCln = getClassName(props.filter);

    return (
        <footer className="footer">
            <span className="todo-count"><strong>{props.activeNum}</strong>{text}</span>

            <ul className="filters">
                <li>
                    <a className={selectedCln['ALL']} href="#/">All</a>
                </li>
                <li>
                    <a className={selectedCln['ACTIVE']} href="#/active">Active</a>
                </li>
                <li>
                    <a className={selectedCln['COMPLETED']} href="#/completed">Completed</a>
                </li>
            </ul>

            {props.completedNum > 0 && <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>}
        </footer>
    )
}

