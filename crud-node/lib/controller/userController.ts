import {  Request, Response } from 'express'
import UserService from '../service/userService'

const userService  = new UserService()
class UserController {

  public createUser(req: Request, res: Response): any {
    const userData = req.body;
    userService.createUser(userData, (response) => {
      res.status(201).json(response)
    })
  }

  public getUser(req: Request, res: Response): any {
    const userId = req.query.id.toString();
    userService.getUser(userId, (response) => {
      res.status(200).json(response)
    })
  }

  public updateUser(req: Request, res: Response): any {
    const userId : string = req.query.id.toString();
    const userData = req.body;
    userService.updateUser(userId, userData, (response) => {
      res.status(200).json(response)
    })
  }

  public deleteUser(req: Request, res: Response): any {
    const userId = req.query.id;
    userService.deleteUser(userId, (response) => {
      res.status(200).json(response)
    })
  }

}

export default UserController