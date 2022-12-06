
export default function CheckCompleteMiddleware(request, response, next) {


  const { firstName, lastName, email, practiceName, city } = request.body; 
  
  
  if (
    !firstName ||
    !lastName ||
    !practiceName||
    !city ){
    return response.status(400).json({
      error: 'incomplete details',
    });
  }

  
  next();
  }
  