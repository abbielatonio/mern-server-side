
export default function ValidateEmailMiddleware(request, response, next) {


  const { email } = request.body; 
  
  
  if (
    !email ||
    !email.includes('@') ||
    !email.includes('.') ){
    return response.status(400).json({
      error: 'Invalid email',
    });
  }
  

  
  next();
  }
  