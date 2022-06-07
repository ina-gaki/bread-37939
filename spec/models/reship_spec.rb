require 'rails_helper'

RSpec.describe Reship, type: :model do
  before do
    @reship = FactoryBot.build(:reship)
  end

  describe 'グラム⇨ベーカーズ％' do
    context '変換できる場合' do
      it '全て正しく入力していたら変換できる' do
        expect(@reship).to be_valid
      end
    end
    context '変換できない場合' do
      it '小麦粉が空だと変換できない' do
        @reship.flour = ""
        @reship.valid?
        expect(@reship.errors.full_messages).to include("Flour can't be blank")
      end
      it '小麦粉が半角数字以外では変換できない' do
        @reship.flour = "５"
        @reship.valid?
        expect(@reship.errors.full_messages).to include("Flour is not a number")
      end
      it '水が空だと変換できない' do
        @reship.water = ""
        @reship.valid?
        expect(@reship.errors.full_messages).to include("Water can't be blank")
      end
      it '水が半角数字以外では変換できない' do
        @reship.water = "５"
        @reship.valid?
        expect(@reship.errors.full_messages).to include("Water is not a number")
      end
      it '塩が空だと変換できない' do
        @reship.salt = ""
        @reship.valid?
        expect(@reship.errors.full_messages).to include("Salt can't be blank")
      end
      it '塩が半角数字以外では変換できない' do
        @reship.salt = "５"
        @reship.valid?
        expect(@reship.errors.full_messages).to include("Salt is not a number")
      end
      it '砂糖が空だと変換できない' do
        @reship.sugar = ""
        @reship.valid?
        expect(@reship.errors.full_messages).to include("Sugar can't be blank")
      end
      it '砂糖が半角数字以外では変換できない' do
        @reship.sugar = "５"
        @reship.valid?
        expect(@reship.errors.full_messages).to include("Sugar is not a number")
      end
      it '油脂が空だと変換できない' do
        @reship.oil = ""
        @reship.valid?
        expect(@reship.errors.full_messages).to include("Oil can't be blank")
      end
      it '油脂が半角数字以外では変換できない' do
        @reship.oil = "５"
        @reship.valid?
        expect(@reship.errors.full_messages).to include("Oil is not a number")
      end
    end
  end
end