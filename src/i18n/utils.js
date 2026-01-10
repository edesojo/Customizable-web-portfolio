import { ui } from './ui.js'; //Iporta los textos para obtener la traduccion desde ui.js
import { SITE_DATA } from '../config.js';

export function useTranslations(lang) {
    //Esta funcion devuelve otra funcion, la cual se encarga de devolver el value de una key determinada
    /*
    Esto es util ya que nos ahora el tener que poner la key del idioma cada vez que queramos obtener un texto
    Sin esto deberiamos hacer userTranslations('es')('nav.inicio').

    En cambio con esta funcion, podemos guardar la funcion en una variable y usarla de la siguiente manera:
    const t = useTranslations('es');
    t('nav.inicio');

    Asi t ya tendra assignado el texto es como valor de la key idioma
    */
    return function t(key) {
        //Devuelve el valor del texto especificado
        return ui[lang][key] || ui['es'][key];
    }
}

export function translateExperience(lang) {
    return SITE_DATA.experience[lang] || SITE_DATA.experience['es'];
}

export function translateProjects(lang) {
    return SITE_DATA.projects[lang] || SITE_DATA.projects['es'];
}

export function translateEducation(lang) {
    return SITE_DATA.education[lang] || SITE_DATA.education['es'];
}