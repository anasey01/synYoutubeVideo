import path from 'path';

class Routes {
  static homePage(request, response) {
    response.status(200).json({
      success: true,
      message: 'Welcome to Youtube Video Sync App',
    });
  }

  static sync(request, response) {
    const filePath = path.join(__dirname, '/../../public/index.html');
    console.log('file path is ', filePath);
    response.sendFile(filePath);
  }
}

export default Routes;
