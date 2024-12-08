// class ErrorHandler extends Error{
//     constructor(message,statusCode)
//     {
//         success(message);
//         this.statusCode=statusCode;
//     }
// }

// export const errorMiddleware=(err,req,res,next)=>{
//     err.message=err.message || "internal error";
//     err.statusCode=err.statusCode || 500;

//     if(err.name==="CastError")
//     {
//         const message= `Resource not fou Invalid ${err.path}`;
//         err=ErrorHandler(message,400)
//     }

//     if(err.name==="JsonWebToken")
//     {
//         const message= "json web token is invalid, Try again";
//         err=ErrorHandler(message,400)
//     }

//     if(err.name==="TokenExpiredError")
//     {
//         const message= "json web token is expired, Try again";
//         err=ErrorHandler(message,400)
//     }

//     return res.status(statusCode).json({
//         succcess:false,
//         message:err.message,
//     })
// } 



// export default ErrorHandler;