Let's assume you have date format something like ```"2019-11-10T15:33:03.313Z"``` and you want to convert it to ```"DD.MM.YYYY HH:MM"``` format.

First, you need to create a new Date object from ```"2019-11-10T15:33:03.313Z"```
```javascript
var event = new Date("2019-11-10T15:33:03.313Z"); 
```
gives us ```"Tue Dec 10 2019 18:33:03 GMT+0300 (GMT+03:00)"``` as a result. 

```javascript 
var options = { year: 'numeric', month: '2-digit', day: 'numeric', hour:"numeric", minute:"numeric"};
```
We need options object to specify the format we want. [Further information](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)

