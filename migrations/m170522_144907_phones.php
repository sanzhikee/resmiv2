<?php

use yii\db\Migration;

class m170522_144907_phones extends Migration
{
    public function up()
    {
        $this->createTable('phones', [
            'id' => $this->primaryKey(),
            'name' => $this->string(255)->notNull(),
            'phone' => $this->string(255),
            'create_date' => $this->timestamp()->defaultValue(new \yii\db\Expression('CURRENT_TIMESTAMP'))
        ]);
    }

    public function down()
    {
        $this->dropTable('phones');
    }

    /*
    // Use safeUp/safeDown to run migration code within a transaction
    public function safeUp()
    {
    }

    public function safeDown()
    {
    }
    */
}
