import { GlassesTryOn } from './GlassesTryOn.js';

const initGlassesTryOn = async () => {
    try {
        const video = document.getElementById('video');
        const canvas = document.getElementById('canvas3d');
        const glassesSelector = document.getElementById('glassesSelector');

        const glassesTryOn = new GlassesTryOn(video, canvas);
        await glassesTryOn.init();

        await glassesTryOn.loadGlassesModel(glassesSelector.value);

        glassesSelector.addEventListener('change', async (event) => {
            await glassesTryOn.loadGlassesModel(event.target.value);
        });

    } catch (error) {
        console.error('Failed to initialize:', error);
    }
};

initGlassesTryOn();