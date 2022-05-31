## usersテーブル

| Column             | Type   | Options                    |
| ------------------ | ------ | -------------------------- |
| nickname           | string | null: false                |
| email              | string | null: false , unique: true |
| encrypted_password | string | null: false                |

### Association
- has_many   :records


## recordsテーブル

| Column                 | Type       | Options                         |
| -----------------------| ---------- | ------------------------------- |
| user                   | references | null: false , foreign_key: true |
| reship                 | references | null: false , foreign_key: true |
| temperature            | integer    | null: false                     |
| primary_fermentation   | integer    | null: false                     |
| divide                 | integer    | null: false                     |
| bench                  | integer    | null: false                     |
| secondary_fermentation | integer    | null: false                     |
| firing                 | integer    | null: false                     |

### Association
- belongs_to :user
- belongs_to :reship


## reshipsテーブル

| Column                 | Type       | Options                         |
| -----------------------| ---------- | ------------------------------- |
| flour                  | integer    | null: false                     |
| water                  | integer    | null: false                     |
| salt                   | integer    | null: false                     |
| sugar                  | integer    | null: false                     |
| yeast                  | integer    | null: false                     |
| oil                    | integer    | null: false                     |
| others1                | integer    | null: false                     |
| others1_name           | string     | null: false                     |
| others2                | integer    | null: false                     |
| others2_name           | string     | null: false                     |
| others3                | integer    | null: false                     |
| others3_name           | string     | null: false                     |
| others4                | integer    | null: false                     |
| others4_name           | string     | null: false                     |


### Association
- belongs_to :user
- belongs_to :record