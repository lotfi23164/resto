//import app from be/app.js
const app = require('./Backend/app');
// make application listening on port 3000
app.listen(3000, () => {
    console.log('app listening on port 3000')
});