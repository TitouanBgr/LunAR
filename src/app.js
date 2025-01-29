import { GlassesTryOn } from './GlassesTryOn.js';

const initGlassesTryOn = async () => {
  try {
      const video = document.getElementById('video');
      const canvas = document.getElementById('canvas3d');
      
      const glassesTryOn = new GlassesTryOn(video, canvas);
      await glassesTryOn.init();
      
      await glassesTryOn.loadGlassesModel('/sans_nom5.glb');
  } catch (error) {
      console.error('Failed to initialize:', error);
  }
}

initGlassesTryOn();