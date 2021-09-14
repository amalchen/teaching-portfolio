export default {
    //https://docs.astro.build/reference/configuration-reference
    //https://github.com/snowpackjs/astro/blob/latest/packages/astro/src/@types/config.ts

    // projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
    // pages: './src/pages', // Path to Astro components, pages, and data
    // public: './public',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.


    //build output dir, default: './dist'
    //dist: './docs',       // When running `astro build`, path to final static output

    //options specific to `npm run build`
    //not sure why dist isn't in here, but k
    buildOptions: {
        //public domain (if you are using one)
        site: 'https://amalchen.com',
        // Generate sitemap (set to "false" to disable)
        sitemap: true,
    },

    //options specific to `npm run dev`
    devOptions: {
        // hostname: 'localhost',  // The hostname to run the dev server on.
        // port: 3000,             // The port to run the dev server on.
        // tailwindConfig: '',     // Path to tailwind.config.js if used, e.g. './tailwind.config.js'
    },

    //if you decide to use a framework (i.e. react) you must add the corresponding renderer
    renderers: [],
};
