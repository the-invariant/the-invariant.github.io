# Build

This site uses Jekyll 4.4.1.

## Install the dependencies

```sh
bundle install
```

## Check the Jekyll version

```sh
bundle exec jekyll --version
```

The expected version is:

```text
jekyll 4.4.1
```

## Preview the site locally

```sh
bundle exec jekyll serve --livereload
```

Open:

```text
http://127.0.0.1:4000/
```

Changes to the site will be rebuilt while the local server is running.

## Create a production build

```sh
JEKYLL_ENV=production bundle exec jekyll build
```

Generated output is written to `_site/`.

## GitHub Pages

The site is built and deployed by `.github/workflows/pages.yml`.

In the repository Pages settings, set the publishing source to GitHub Actions.

`Gemfile.lock` is not committed.
