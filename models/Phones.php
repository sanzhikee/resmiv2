<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "phones".
 *
 * @property integer $id
 * @property string $name
 * @property string $phone
 * @property string $create_date
 */
class Phones extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'phones';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name'], 'required'],
            [['create_date'], 'safe'],
            [['name', 'phone'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'phone' => 'Phone',
            'create_date' => 'Create Date',
        ];
    }
}
