/*

1) На данный момент пост запрос с формы работает только из app.js нужно понять как сделать отдельный роут
2) Сделать валидацию формы(обратить внимание на валидацию express)
3) Подключить капчу
4) Отправлять на кошелек пользователя сатоши после отправки формы (зарегистрировать свой кошель дла тестов)
5) Добавить сигнализаторы на страницу(правильность ввода и тд.)
6) Рассмотреть способы монетизации сайта

*/

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
// var bodyParser = require("body-parser");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
// var formRouter = require("./routes/submit_form");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
// app.use("/submit_form", formRouter);

// app.post("/submit_form", (req, res) => {
//   console.log(req.body.walletKey);
// });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
