import bcrypt from "bcryptjs";

export const test = (req, res) => {
  res.json({ message: "API is working" });
};

export const updateUser = async(req, res,next) => {
if(req.user.id!=req.params.userId){
  return next(errorHandler(403,"You are not allowed to  update this user!"))
}
if(req.body.password){
if(req.body.password.length<6){
  return next(errorHandler(400,"Password should be at least 6 characters long!"))
}
req.body.password=await bcrypt.hash(req.body.password,10);
}
if (req.body.username){
  if(req.body.username.length<3){
    return next(errorHandler(400,"Username must be between 7 and 20 characters!"))
  }
}