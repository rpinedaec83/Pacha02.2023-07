const UserScheme = require("../model/userModel")

const getUsers = async (req, res) => {
  const Users = await UserScheme.find()
  res.status(200).json(Users)
}

const getUser = async (req, res) => {
  try {
    const idUser = req.params.id
    const User = await UserScheme.find({ _id: idUser })
    res.status(200).json(User)

  } catch (error) {
    res.status(500).json({ mssage: "No hay Usuarios!" })
  }
}

const createUser = async (req, res) => {
  try {
    console.log(req.body)
    const User = UserScheme(req.body);
    await User.save()

    res.status(200).json(User)

  } catch (error) {
    res.status(500).json({ error: 'Error al crear el Usuario' })
  }
}

const updateUser = async (req, res) => {
  try {
    const UserId = req.params.id
    await UserScheme.findOneAndUpdate({ _id: UserId }, req.body)
    const User = await UserScheme.find({ _id: UserId })
    res.status(200).json(User)
  } catch (err) {
    res.status(500).json({ message: "No se encontro el Usuario!" })
  }
}

const deleteUser = async (req, res) => {
  try {
    const UserId = req.params.id
    console.log(UserId)
    const Usero = await UserScheme.findByIdAndDelete({ _id: UserId })
    console.log(Usero)
    res.status(200).json({ message: `Usuario eliminado correctamente con el id: ${UserId}` })
  } catch (err) {
    res.status(500).json({ message: "Error al eliminar un Usero." })
  }
}

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser }