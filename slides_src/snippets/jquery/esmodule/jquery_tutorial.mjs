import $ from 'https://cdn.jsdelivr.net/npm/jquery@3.7.1/+esm'
import { faker } from 'https://esm.sh/@faker-js/faker';
import { createTable } from './table.mjs';

// how to use export : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

export function ex1() {
    const data = []
    for (let i = 0; i < 10; i++) {
        const name = faker.person.fullName();
        data.push({ id: i + 1, name })
    }
    const table = createTable(data)
    $('#result').append(table)
}

export function ex2() {

}