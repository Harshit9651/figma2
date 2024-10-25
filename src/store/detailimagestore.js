// stores/products.js
import { defineStore } from "pinia";

export const useImageStore = defineStore("products", {
  state: () => ({
    products: [
      {
        id: 1,
        title: "Bamboo Chair",
        formats: ".obj .png .jpg",
        images:
          "https://s3-alpha-sig.figma.com/img/2300/b2ad/5cc060b05be0b9451dcec9d0231f1938?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=afQ0KdHsrG1pkzXi2V8ZjT9mgzQ72DJWQzXbidDRdQmNl6hwmSK50GkmzyjjiIpkzUZz91NS~zaJ3sqtAXqCezvQecP~6pPtKtLwJtTO9wAlFm97Dfi4TY7hLyAuSdaRKvr~WoybWdEg4glEe4dvYHtiSVhdRHLdkN9cQps2Tg1IARhuN4MOciTxVNwomlk8ZBaLKfczAzAUIAQkMCBiy4aZTSVJOHS7RZsoxA5bIzL33hrUm4~O9qfGiCvgt0l62wu4DkPtSJrI4~14HqSQFQvpZrBs7zDmVGOnSNWkB~EaCyedZO4ZcF2D9Y2mduES7qtwldEdHR~j-~VYarNctQ__",

        off: "30% off",
        rate: "Free",
        color: "Brown",
        material: "Bamboo",
        fileType: ".obj",
        texture: "Wood",
        type: "Classic",
      },
      {
        id: 1,
        title: "Bamboo Chair",
        formats: ".obj .png .jpg",
        images:
          "https://s3-alpha-sig.figma.com/img/2300/b2ad/5cc060b05be0b9451dcec9d0231f1938?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=afQ0KdHsrG1pkzXi2V8ZjT9mgzQ72DJWQzXbidDRdQmNl6hwmSK50GkmzyjjiIpkzUZz91NS~zaJ3sqtAXqCezvQecP~6pPtKtLwJtTO9wAlFm97Dfi4TY7hLyAuSdaRKvr~WoybWdEg4glEe4dvYHtiSVhdRHLdkN9cQps2Tg1IARhuN4MOciTxVNwomlk8ZBaLKfczAzAUIAQkMCBiy4aZTSVJOHS7RZsoxA5bIzL33hrUm4~O9qfGiCvgt0l62wu4DkPtSJrI4~14HqSQFQvpZrBs7zDmVGOnSNWkB~EaCyedZO4ZcF2D9Y2mduES7qtwldEdHR~j-~VYarNctQ__",

        off: "30% off",
        rate: "Free",
        color: "Brown",
        material: "Bamboo",
        fileType: ".obj",
        texture: "Wood",
        type: "Classic",
      },
      {
        id: 1,
        title: "Bamboo Chair",
        formats: ".obj .png .jpg",
        images:
          "https://s3-alpha-sig.figma.com/img/2300/b2ad/5cc060b05be0b9451dcec9d0231f1938?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=afQ0KdHsrG1pkzXi2V8ZjT9mgzQ72DJWQzXbidDRdQmNl6hwmSK50GkmzyjjiIpkzUZz91NS~zaJ3sqtAXqCezvQecP~6pPtKtLwJtTO9wAlFm97Dfi4TY7hLyAuSdaRKvr~WoybWdEg4glEe4dvYHtiSVhdRHLdkN9cQps2Tg1IARhuN4MOciTxVNwomlk8ZBaLKfczAzAUIAQkMCBiy4aZTSVJOHS7RZsoxA5bIzL33hrUm4~O9qfGiCvgt0l62wu4DkPtSJrI4~14HqSQFQvpZrBs7zDmVGOnSNWkB~EaCyedZO4ZcF2D9Y2mduES7qtwldEdHR~j-~VYarNctQ__",

        off: "30% off",
        rate: "Free",
        color: "Brown",
        material: "Bamboo",
        fileType: ".obj",
        texture: "Wood",
        type: "Classic",
      },
      
      {
        id: 1,
        title: "Bamboo Chair",
        formats: ".obj .png .jpg",
        images:
          "https://s3-alpha-sig.figma.com/img/2300/b2ad/5cc060b05be0b9451dcec9d0231f1938?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=afQ0KdHsrG1pkzXi2V8ZjT9mgzQ72DJWQzXbidDRdQmNl6hwmSK50GkmzyjjiIpkzUZz91NS~zaJ3sqtAXqCezvQecP~6pPtKtLwJtTO9wAlFm97Dfi4TY7hLyAuSdaRKvr~WoybWdEg4glEe4dvYHtiSVhdRHLdkN9cQps2Tg1IARhuN4MOciTxVNwomlk8ZBaLKfczAzAUIAQkMCBiy4aZTSVJOHS7RZsoxA5bIzL33hrUm4~O9qfGiCvgt0l62wu4DkPtSJrI4~14HqSQFQvpZrBs7zDmVGOnSNWkB~EaCyedZO4ZcF2D9Y2mduES7qtwldEdHR~j-~VYarNctQ__",

        off: "30% off",
        rate: "Free",
        color: "Brown",
        material: "Bamboo",
        fileType: ".obj",
        texture: "Wood",
        type: "Classic",
      }
    ],
  }),
  getters: {
    getAllProducts: (state) => state.products,
  },
});
