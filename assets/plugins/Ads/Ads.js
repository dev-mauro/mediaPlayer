const Ads = {
    ALL_ADS: [
        {
        imageUrl: 'https://static.platzi.com/media/achievements/badge-profesional-javascript-13538df2-24ce-433f-9aa6-e34eed608e70.png',
        title: 'Curso Profesional de JavaScript',
        body: 'Mejora tus habilidades de JavaScript. Conoce TypeScript y cómo puedes ocuparlo para mejorar el control de tus variables',
        url: 'https://platzi.com/cursos/javascript-profesional/',
        },
        {
        imageUrl: 'https://static.platzi.com/media/achievements/badge-frontend-developer-8a49e681-3e22-408d-b886-2f47dfc9953a.png',
        title: 'Curso de Frontend Developer',
        body: 'Domina las bades de HTML y CSS. Define la arquitectura de tu código y construye un sitio web usando componentes estáticos',
        url: 'htttps://platzi.com/cursos/frontend-developer/',
        },
        {
        imageUrl: 'https://static.platzi.com/media/achievements/badge-backend-node-8e6aa8a9-f7cd-42b7-bf4a-e1ee916a942b.png',
        title: 'Curso de Backend con Node.js',
        body: 'Crea Aplicaciones backend utilizando Node.js, Express y Mongo. Entiende cómo funciona JavaScript en un servidor y escribe aplicaciones con Node.js',
        url: 'https://platzi.com/cursos/backend-nodejs/',
        }
    ],

    ADS: [],

    getAd: function() {
        if (this.ADS.length === 0) {
            this.ADS = [... this.ALL_ADS]
        }
        return this.ADS.pop();
    },
};

export default Ads;
