# Stay up to date

## Get the latest changes

If you want to keep your copy of Vuesion up to date follow these steps:

- check that you use a Version Control System for your app (e.g. github, gitlab, butbucket, etc.)
- clear your change list
- create a new branch
- run `npm run update`

The update script will compare your current copy of Vuesion with the latest copy on `Vuesion/vuesion:master`.

It will create, delete, add or modify all the files that are different.

It is basically the same as if you would rebase your project on top of `Vuesion/vuesion:master`.
But usually, it is not possible to rebase since you do not keep the history of Vuesion in your own app.

## Merge with your local changes

Now you see the changes in your changelog:

- go through all the files and merge your changes (revert the parts that would break your app)
- run the tests and lint your project: `npm run test && npm run lint`
- start the app

If everything works, commit your changes and merge it into your master.

If not, you might want to update manually by comparing your local copy with the [CHANGELOG](https://github.com/vuesion/vuesion/blob/master/CHANGELOG.md).
