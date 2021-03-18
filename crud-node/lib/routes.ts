import UserController from './controller/userController'

class routes {
    public userController: UserController = new UserController();

    public routes(app){
        app.route('/postUser').post(this.userController.createUser)
        app.route('/getUser').get(this.userController.getUser)
        app.route('/updateUser').put(this.userController.updateUser)
        app.route('/deleteUser').delete(this.userController.deleteUser)
    }

}   

export default routes