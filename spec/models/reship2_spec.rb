require 'rails_helper'

RSpec.describe Reship2, type: :model do
  before do
    @reship = FactoryBot.build(:reship2)
  end

  describe 'グラム⇨ベーカーズ％' do
    context '変換できる場合' do
      it '全て正しく入力していたら変換できる' do
        expect(@reship).to be_valid
      end
    end
    context '変換できない場合' do
      it '小麦粉が空だと変換できない' do
        @reship.flour_g = ""
        @reship.valid?
        expect(@reship.errors.full_messages).to include("Flour g can't be blank")
      end
      it '小麦粉が半角数字以外では変換できない' do
        @reship.flour_g = "５"
        @reship.valid?
        expect(@reship.errors.full_messages).to include("Flour g is not a number")
      end
      it '水が空だと変換できない' do
        @reship.water2 = ""
        @reship.valid?
        expect(@reship.errors.full_messages).to include("Water2 can't be blank")
      end
      it '水が半角数字以外では変換できない' do
        @reship.water2 = "５"
        @reship.valid?
        expect(@reship.errors.full_messages).to include("Water2 is not a number")
      end
      it '塩が空だと変換できない' do
        @reship.salt2 = ""
        @reship.valid?
        expect(@reship.errors.full_messages).to include("Salt2 can't be blank")
      end
      it '塩が半角数字以外では変換できない' do
        @reship.salt2 = "５"
        @reship.valid?
        expect(@reship.errors.full_messages).to include("Salt2 is not a number")
      end
      it '砂糖が空だと変換できない' do
        @reship.sugar2 = ""
        @reship.valid?
        expect(@reship.errors.full_messages).to include("Sugar2 can't be blank")
      end
      it '砂糖が半角数字以外では変換できない' do
        @reship.sugar2 = "５"
        @reship.valid?
        expect(@reship.errors.full_messages).to include("Sugar2 is not a number")
      end
      it '油脂が空だと変換できない' do
        @reship.oil2 = ""
        @reship.valid?
        expect(@reship.errors.full_messages).to include("Oil2 can't be blank")
      end
      it '油脂が半角数字以外では変換できない' do
        @reship.oil2 = "５"
        @reship.valid?
        expect(@reship.errors.full_messages).to include("Oil2 is not a number")
      end
    end
  end
end