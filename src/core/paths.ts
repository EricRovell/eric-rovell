import { derived } from "svelte/store";
import { lang } from "./i18n";
import { page } from "$app/stores";

export const webpage = derived(page, $page => `https://www.${$page.host}${$page.path}`);
export const root = derived(lang, $lang => `/${$lang}`);

export const pathHome = derived(root, $root => `${$root}/home`);
export const pathBlog = derived(root, $root => `${$root}/blog`);
export const pathGallery = derived(root, $root => `${$root}/gallery`);
export const pathProjects = derived(root, $root => `${$root}/projects`);
export const pathAbout = derived(root, $root => `${$root}/about`);

export const pathBlogpost = derived(root, $root => (slug: string) => `${$root}/blog/${slug}`);

export const pathLicence = "https://github.com/EricRovell/ericrovell.me/blob/main/LICENSE";
export { homepage as pathSource } from "../../package.json";
export const pathPrivacy = "";