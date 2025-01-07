import { defineEventHandler } from "h3";
import jsonData from "~~/assets/PagesApi/MainPage/loadPage.json";

export default defineEventHandler(() => {
   jsonData.content.slider.forEach((slide) => {
      slide.img = slide.img.replace("@", "/img"); // Преобразование пути
   });

   return jsonData; // Возврат изменённых данных
});
