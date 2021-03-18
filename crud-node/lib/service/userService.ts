import UserDao from '../dao/userDao'
const userDao = new UserDao();

class UserService {

  public createUser(userData:any, callback): any {
    userDao.createUser(userData, (res) => {
      callback(res)
    })
  }

  public getUser(userData:string, callback): any {
    userDao.getUser(userData, (res) => {
      callback(res)
    })
  }

  public updateUser(userId:string , userData:any, callback): any {
    userDao.updateUser(userId, userData, (res) => {
      callback(res)
    })
  }

  public deleteUser(userData:any, callback): any {
    userDao.deleteUser(userData, (res) => {
      callback(res)
    })
  }

}

export default UserService