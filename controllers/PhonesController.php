<?php
/**
 * Created by PhpStorm.
 * User: sanzhar
 * Date: 23.05.17
 * Time: 11:24
 */

namespace app\controllers;

use yii\helpers\ArrayHelper;
use yii\rest\ActiveController;
use yii\web\Response;

class PhonesController extends ActiveController
{
    public $modelClass = 'app\models\Phones';

    public function behaviors()
    {
        return [
            [
                'class' => 'yii\filters\ContentNegotiator',
                'formats' => [
                    'application/json' => Response::FORMAT_JSON,
                ],
            ],
        ];
    }
}