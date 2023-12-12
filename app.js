import createError from 'http-errors'
import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

// Routes
import employeeRouter from './routes/employee.js'
import exchangeRateRoutes from './routes/exchangeRates.js'
import payrollRoutes from './routes/payrolls.js'

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/api/employee', employeeRouter);
app.use('/api/exchange_rates', exchangeRateRoutes);
app.use('/api/payroll', payrollRoutes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
 const isDevelopment = req.app.get('env') === 'development';

  const errorResponse = {
    message: isDevelopment ? err.message : 'There was an error on the app',
  };

  if (isDevelopment) {
    errorResponse.stack = err.stack;
    errorResponse.details = err.details;
  }


  return res.status(500).json(errorResponse);
});

export default app
