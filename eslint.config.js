import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

/** @type {import('eslint').Linter.Config[]} */
export default [
   { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
   { languageOptions: { globals: globals.browser } },
   pluginJs.configs.recommended,
   ...tseslint.configs.recommended,
   ...pluginVue.configs["flat/essential"],
   { files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } } },

   // Добавление правила для разрешения camelCase
   {
      "rules": {
         // "vue/attribute-hyphenation": ["error", "never"], // Отключает требование дефисов в атрибутах
         // "vue/valid-v-bind": "off", // Отключает ошибку, связанную с валидацией привязок
         // "vue/no-deprecated-slot-attribute": "off", // Отключение проверок старых атрибутов слотов
         // "vue/require-default-prop": "off", // Отключает требование значений по умолчанию для пропсов
         // "vue/require-prop-types": "off", // Отключает проверку типов пропсов
         // "vue/valid-v-for": "off", // Отключает проверку на допустимость v-for
         // "vue/max-len": ["warn", { "code": 120, "template": 120, "ignoreUrls": true }],
         "camelcase": ["error", { "properties": "never" }] // Отключение для camelCase
      }
   }
];
