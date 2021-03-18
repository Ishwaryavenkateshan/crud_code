import * as mongoose from 'mongoose'
import { UserModel } from '../model/user'

class UserDao {

  public userData: object;

  public async createUser(data, callback): Promise<any> {
    this.userData = {
      'name': data.name,
      'age': data.age,
      'email': data.email
    }
    
    let finalData = new UserModel(this.userData);
    await finalData.save().then((result) => {
        callback(result);
    }).catch((error) => {
        callback(error);
    })
  }

  public async getUser(id, callback): Promise<any> {
    let data = await UserModel.findById(id).exec();
    callback(data)
  }

  public async updateUser(id, updatedData, callback): Promise<any> {
    await UserModel.findByIdAndUpdate(id, updatedData).exec();
    let data = await UserModel.findById(id).exec();
    callback(data)
  }

  public async deleteUser(id, callback): Promise<any> {
    await UserModel.findByIdAndRemove(id).exec();
    callback({"data": "deleted successful"})
  }

  
}

export default UserDao