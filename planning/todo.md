# To Do

- [x] Create API for bucket list items
- [x] Get API data on page with angular
- [ ] Filter data by parameters (date, price, alphabetical, etc.)
- [ ] Deploy to Heroku
- [ ] $locationProvider (remove `#` from URL)
- [ ] Complete all seeds (currently: 8/50)
- [ ] Add styling ([Bootstrap](http://getbootstrap.com/) / [Materialize](http://materializecss.com/))

## Filters

- [x] Default: Displays all (names only) in alphabetical order
- [x] Click "Free" button, only displays items where `price: "Free"` is true?
- [x] Click "Not free" button, only displays items where `price: "Free"` not true?
> Working but not ideal so:
- [ ] Get filters off HTML and into JS files

## Users
- [ ] User authentication
- [ ] Checked/unchecked items (~favorites feature - user must be logged in to check/uncheck)
- [ ] User authorization on checked/unchecked (users have unique checked/unchecked that only they can change)
