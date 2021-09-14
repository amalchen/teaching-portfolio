## resources
> Sometimes...I hate dev ops

- re: **``git``**
  -  [**git-reference** (@git-scm.com)](https://git-scm.com/docs)
- re: **``markdown``**
  - [**web-based markdown editor** (@stackedit.io)](https://stackedit.io/app)
- re: **``astro``**
  -  [**deploying astro (@astro.build)**](https://docs.astro.build/guides/deploy)

---
---

## notes
cuz I'm sure I'll forget at some point~

#### When starting a new repo...
1. browse to project dir via cmd prompt

2. **init**ialize repo: 
   > ``git init`` <small>(ref: [git-init](https://git-scm.com/docs/git-init))</small>

3. **``add``** files:
   >  ``git add -A`` or  ``git add --all`` <small>(ref: [git-add](https://git-scm.com/docs/git-add))</small>

   <small>Note: This command (with ``-A`` or ``--all``) does more than just adding files. From the above ref:</small>
   > <small>Update the index not only where the working tree has a file matching ``<pathspec> ``but also where the index already has an entry. This **adds**, modifies, and removes index entries to match the working tree.</small>

4. **``commit`` initial files** with message (aka add changes to staging area)
   > ``git commit -m 'initial commit'`` <small>(ref: [git-commit](https://git-scm.com/docs/git-commit))</small>

5. set the current **branch** to **``main``**
   >  ``git branch -M main`` <small>(ref: [git-branch](https://git-scm.com/docs/git-branch))</small>

   <small>Note: github has transitioned to using **main** instead of **master**.</small>  

6. connect your *local repo* to newly created *github repo*. If we assume...
   ```
   github username: amalchen
   new repo name:   teaching-portfolio
   ```
   Run:
   > ``git remote add origin https://github.com/amalchen/teaching-portfolio.git``

7. Lastly, **``push``** the changes in the  **staging area** to the remote repo: 
   <small> aka: upload all changes/files/etc done to the **main** branch</small>
   > ``git push -u origin main`` <small>(ref: [git-push](https://git-scm.com/docs/git-push))</small>


#### Updating repo
basically just...

1. ``git commit -m 'COMMIT MESSAGE'`` (make a hopefully meaningful message)
2. ``git push -u origin main``



---

#### To
1. commit changes to 


---
---
---
---












# Welcome to [Astro](https://astro.build)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Tour.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                      |
|:----------------|:--------------------------------------------|
| `npm install`   | Installs dependencies                       |
| `npm run dev`   | Starts local dev server at `localhost:3000` |
| `npm run build` | Build your production site to `./dist/`     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://github.com/snowpackjs/astro) or jump into our [Discord server](https://astro.build/chat).
