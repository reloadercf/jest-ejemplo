/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import mock from './helpers.js';
import {
  suma, resta, multiplicacion, saludo,
} from '../src/main.js';

describe('Operaciones matematicas', () => {
  test('Suma', () => {
    expect(suma(mock.a, mock.b)).toBe(5);
  });

  test('resta', () => {
    expect(resta(mock.a, mock.b)).toBe(1);
  });

  test('multiplicacion', () => {
    expect(multiplicacion(mock.a, mock.b)).toBe(6);
  });
});
describe('Test de string', () => {
  it('evaluacion de saludar', () => {
    expect(saludo(mock.name)).toBe('Hola Miri');
  });
});
