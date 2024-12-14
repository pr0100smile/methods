import Character from '../character.js';
import Bowman from '../bowman.js';
import Daemon from '../daemon.js';
import Magician from '../magician.js';
import Swordsman from '../swordsman.js';
import Undead from '../undead.js';
import Zombie from '../zombie.js';

test('Invalid short name', () => {
    expect(
        () => new Character('O', 'Bowman', 100, 100),
    ).toThrow('Name length error');
});

test('Invalid long name', () => {
    expect(
        () => new Character('NickNickNick', 'Daemon', 100, 100),
    ).toThrow('Name length error');
});

test('Invalid type character', () => {
    expect(
        () => new Character('Matt', 'Knight', 100, 100),
    ).toThrow('Character type error');
});

test('Damage to a character', () => {
    const testChar = new Character('Tom', 'Bowman', 25, 25);
    testChar.damage(50);
    expect(testChar).toEqual({
        name: 'Tom',
        type: 'Bowman',
        health: 62.5,
        level: 1,
        attack: 25,
        defence: 25,
    });
});

test('You cannot raise the level of the deceased', () => {
    const testChar = new Character('Tom', 'Bowman', 25, 25);
    testChar.health = 0;
    testChar.damage(50);
    expect(testChar.health).toEqual(0);
});

test('Moving to the level up', () => {
    const testChar = new Character('Tom', 'Bowman', 25, 25);
    testChar.levelUp();
    expect(testChar).toEqual({
        name: 'Tom',
        type: 'Bowman',
        health: 100,
        level: 2,
        attack: 30,
        defence: 30,
    });
});

test('Moving to the level up with zero health', () => {
    const testChar = new Character('Tom', 'Bowman', 25, 25);
    testChar.health = 0;
    expect(() => testChar.levelUp()).toThrow(
        'You cannot raise the level of the deceased',
    );
});

test('New Bowman', () => {
    const bowman = new Bowman('Tom');
    expect(bowman).toEqual({
        name: 'Tom',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    });
});

test('New Swordsman', () => {
    const swordsman = new Swordsman('Ron');
    expect(swordsman).toEqual({
        name: 'Ron',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    });
});

test('New Magician', () => {
    const magician = new Magician('Zac');
    expect(magician).toEqual({
        name: 'Zac',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    });
});

test('New Undead', () => {
    const undead = new Undead('Eddy');
    expect(undead).toEqual({
        name: 'Eddy',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    });
});

test('New Zombie', () => {
    const zombie = new Zombie('Michael');
    expect(zombie).toEqual({
        name: 'Michael',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    });
});

test('New Daemon', () => {
    const daemon = new Daemon('Chris');
    expect(daemon).toEqual({
        name: 'Chris',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    });
});