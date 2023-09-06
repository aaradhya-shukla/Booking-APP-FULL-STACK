const User = require('../models/user');

exports.getUserInfo=(req,res,next)=>{
    User.findAll().
    then((users)=>{
        res.status(200).json({allusers:users});
    })
    .catch(err=>console.log(err))
    
};

exports.addUserInfo=(req,res,next)=>{
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    User.create({
        name:name,
        email:email,
        phone:phone
    }).then((user)=>{
        res.status(201).json({newUser:user})
    })
};

exports.deleteUserInfo=(req,res,next)=>{
    const id = req.params.userId;
    
    User.destroy({where:{id:id}}).
    then(()=>{
        res.status(202).json({res:"successfully deleted"});
    }).catch(err=>console.log(err));
};

exports.editUserInfo=(req,res,next)=>{
    const id = req.params.userId;
    let oldUser;
    User.findByPk(id).then((user)=>{
        oldUser=user;
        return user.destroy()
    }).then(()=>{
        res.status(202).json({user:oldUser});
    }).catch(err=>console.log(err));
};