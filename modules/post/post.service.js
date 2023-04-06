import Post from '../post/post.model'

export const createPost = async (body, user) => {
  return await Post.create({
    text: body.text,
    createdDate: new Date(),
    createdBy: user.id
  })
}

export const getPosts = async (limit = 10) => {
  return await Post.find()
  .populate('createdBy', 'user')  // para dizer qual usuario q criou o post , 'createdBy' tirado do post.models.js
  .sort({createdDate: -1}) // do post mais novo pro mais antigo
  .limit(limit)
}
export const deletePost = async (id, user) => {
  return await Post.findOneAndDelete({
    _id: id,
    createdBy: user.id
  })
}
export const editPost = async (body, user) => {
  return await Post.findOneAndUpdate({
    _id: body.id,
    createdBy: user.id

  },{
    text: body.text
  },{
    new: true // mongoBD vai manda pra nós o documento ja atualizado
  })
}