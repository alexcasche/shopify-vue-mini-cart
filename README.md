# Shopify Vue Mini Cart

Drop in Vue mini-cart component for Shopify

## Setup

To get started clone the repository.

```
git clone https://github.com/alexcasche/shopify-themekit-vue.git
```

Run zip command and create new theme in Shopify from theme.zip.

```
yarn run zip
```

Add a config.yml file with your theme settings.

```
development:
  password: [DEV_PASSWORD]
  theme_id: [DEV_THEME]
  store: [DEV_SHOP]
  ignore_files:
    - settings_data.json
```

Run start command and local changes will be pushed.

```
yarn start
```

## Development

If your Shopify theme is up to date with you local project, run the watch command instead of start.

```
yarn watch
```

## Vue Integration

All Vue files will live under the src/vue directory. Vue comopnents can be mounted anywhere in shopify and can be passed external props from liquid.

```
<vue-custom-element prop="{{ liquid_var }}"></vue-custom-element>
```

## Notes

The browserUpdate.js file is used to trigger BrowserSync reloads. It should not be edited.

## Resources

This repo utilizes the awesome library [vue-custom-element](https://github.com/karol-f/vue-custom-element).
