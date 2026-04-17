const repo = require('./repository');
const {hash,compare} = require('../../utils/hash');
const {generate} = require('../../utils/jwt');

exports.register = async(data)=>{
  data.password = await hash(data.password);
  const user = await repo.create(data);
  return {token:generate({id:user.id})};
};

exports.login = async(data)=>{
  const user = await repo.findByEmail(data.email);
  if(!user) throw new Error('User not found');
  const ok = await compare(data.password,user.password);
  if(!ok) throw new Error('Invalid password');
  return {token:generate({id:user.id})};
};
