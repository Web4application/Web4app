namespace app\controllers;

use Yii;
use yii\web\Response;
use yii\web\Controller;

class LogController extends Controller
{
    // Important: Disable CSRF validation for the whole controller 
    // or use the beforeAction logic below for specific actions
    public $enableCsrfValidation = false;

    public function actionReceive()
    {
        // 1. Force response to JSON format
        Yii::$app->response->format = Response::FORMAT_JSON;

        // 2. Get data (works for JSON, POST, and Multipart)
        $data = Yii::$app->request->post();

        if (empty($data)) {
            return ['status' => 'error', 'message' => 'No data received'];
        }

        // 3. Process your data here
        return [
            'status' => 'success',
            'received' => $data,
        ];
    }
}
