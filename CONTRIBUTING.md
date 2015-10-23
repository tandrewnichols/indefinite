# Contributing

First, contributions are welcome! I expect smaller requests to be handled without issue. If you have a larger feature request that you want to contribute yourself, you might consider opening an issue first, as I make no guarantees about merging things, especially if they change the nature of the project, or make it do _a lot_ more than it already does. I'm a proponent of small, concise, single-purpose modules that do one thing and do it well.

## Style

Please try to adhere, as close as possible, to the style and structure already present in this repository. I understand that people like things different ways, but as this is my repository, we'll be using my style preferences. If your pull request does not conform to this style, I'll simply ask you to clean it up. Please don't be offended. It doesn't mean I think your style preference is wrong or that mine is better. I just believe consistency is important in a repository. Notably, that means (among other things):

1. Two spaces. No literal tabs.
2. "Cuddled" elses and else ifs: e.g. `} else {`
3. Prefer

    ```
    exports.foo = function() {
    ```

    to

    ```
    module.exports = {
      foo: function() {
    ```

    unless you're exporting a single a function.

4. Use spaces at the beginning and end of inline objects and arrays: `{ foo: 'bar' }` and `[ 'foo', 'bar' ]`
5. But . . . if you have longer objects, please use line breaks like this:

    ```
    var obj = {
      foo: 'bar',
      list: [
        {
          name: baz'
        },
        {
          name: 'quux'
        }
      ]
    }
    ```

    I could also be okay with the slightly more compact array-of-object format:

    ```
    var obj = {
      foo: 'bar',
      list: [{
        name: baz'
      }, {
        name: 'quux'
      }]
    }
    ```

6. Use semi-colons to end lines.
7. Prefer single quotes _almost all the time_. The only places I use double quotes are 1) in json strings, 2) in html attributes, and 3) in quotes that have apostrophes in them (and even then, I sometimes just escape the apostrophe).
8. Be modular. I like semantically-named noun-based modules (e.g. a module that handles git stuff in a repo would be called "git") with one or more verb-named functions (like, "getRepo") that do related things. Individual functions should fit on the screen whenever possible. I don't like scrolling to see what's happening at the end of a function. And in general, modules should be relatively short. I would rather have a larger number of short modules, than a smaller number of long modules.
9. Use camel casing for variables. I have an inexplicable and arbitrary dislike for snake case.
10. Use kebab case (foo-bar) for file names.
11. Be DRY. If you find yourself reusing code, pull it out into a separate function.
12. No coffeescript except in tests.
13. Please comment where appropriate. When in doubt, add a comment. I'm finding more and more that things that seem self-documenting when I write them are actually semi-incomprehensible when I read them. Inline comments are fine most of the time, though jsdoc style block comments before functions are nice too.

## Testing

Please write tests for any added feature or bug fix. I use coffeescript for tests, with mocha and mocha-given, which has a nice, terse syntax. Tests are run with gulp. 

## Commits and Git History

I actually don't care much about commit message formatting or keeping a clean history via squashes. Obviously, if you _want_ to do those things, go for the gold. In general, I think a commit message should be atomic (which is to say, if you need to use the word "and," then it should be two commits), should summarize the changes in the commit, and should use present tense, as in "Fix bug" (not "Fixed" or "Fixes"). 
