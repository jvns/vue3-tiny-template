# tiny vue 3 template

Every time I start a Vue project, I get confused and waste 15 minutes reading
the documentation and remembering how to set up Vue.

So this is a tiny template I made for myself so that I can avoid that next
time. I don't use a build process, instead it uses the CDN version of Vue and a single HTML / JS file.

I make no claims that this is the "best" way to do it, what the [official (and
very good) Vue documenation](https://vuejs.org/guide/quick-start.html#using-vue-from-cdn)
suggests is probably better. This is just what I do.

### demo

You can see a demo of [what this site looks like](https://jvns.github.io/vue3-tiny-template/) on GitHub pages. If it's working correctly, it should say "banana" and "banana!".

### usage

Usually I'll download the latest version of Vue with `wget https://unpkg.com/vue@3/dist/vue.global.js` and use a version I host myself
instead of relying on the CDN (in case the CDN stops working one day).
