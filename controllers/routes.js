
class Routes {
  static homePage(request, response) {
    response.status(200).json({
      success: true,
      message: 'Welcome to Youtube Video Sync App',
    });
  }

  static sync(request, response) {
    request.send('index.html');
  }
}


export default Routes;
