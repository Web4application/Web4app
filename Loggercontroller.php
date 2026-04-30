namespace app\controllers;

use Yii;
use yii\web\Controller;
use yii\web\Response;
use yii\web\UnauthorizedHttpException;

class LogController extends Controller
{
    // 1. Disable CSRF globally for this controller since it's an API
    public $enableCsrfValidation = false;

    // 2. Define your secret key
    private const API_KEY = 'your-super-secret-random-string';

    /**
     * Security check before any action runs
     */
    public function beforeAction($action)
    {
        if (parent::beforeAction($action)) {
            // Validate the custom secret header
            $receivedKey = Yii::$app->request->headers->get('X-Api-Key');

            if ($receivedKey !== self::API_KEY) {
                throw new UnauthorizedHttpException('Invalid API Key.');
            }
            return true;
        }
        return false;
    }

    /**
     * The main endpoint to receive data
     */
    public function actionReceive()
    {
        // Force response to JSON format
        Yii::$app->response->format = Response::FORMAT_JSON;

        // Automatically captures JSON, $_POST, or Form-Data
        $data = Yii::$app->request->post();

        if (empty($data)) {
            return [
                'status' => 'error',
                'message' => 'No data received'
            ];
        }

        // OPTIONAL: Log to a file for debugging
        Yii::info("Payload: " . json_encode($data), 'api_debug');

        // Process your data here (e.g., save to DB)
        
        return [
            'status' => 'success',
            'timestamp' => date('Y-m-d H:i:s'),
            'received_count' => count($data)
        ];
    }
}
