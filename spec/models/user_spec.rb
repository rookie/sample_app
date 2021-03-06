# == Schema Information
# Schema version: 20100301013620
#
# Table name: users
#
#  id                 :integer         not null, primary key
#  name               :string(255)
#  email              :string(255)
#  created_at         :datetime
#  updated_at         :datetime
#  encrypted_password :string(255)
#  salt               :string(255)
#

require 'spec_helper'

describe User do
  
  before(:each) do
    @valid_attributes = {
      :name => "Example User",
      :email => "user@example.com",
      :password => "password",
      :password_confirmation => "password"
    }
  end

  it "should create a new instance given valid attributes" do
    User.create!(@valid_attributes)
  end
  
  it "should require a name" do
    no_name_user = User.new(@valid_attributes.merge(:name => ""))
    no_name_user.should_not be_valid
  end

  it "should require an email" do
    no_email_user = User.new(@valid_attributes.merge(:email => ""))
    no_email_user.should_not be_valid
  end
  
  it "should reject names that are too long" do
    long_name = "a"*51
    long_name_user = User.new(@valid_attributes.merge(:name => long_name))
    long_name_user.should_not be_valid
  end

  it "should accept valid email addresses" do
    addresses = %w[user@foo.com THE_USER@foo.bar.org first.last@foo.jp the+user@Bar.com]
    addresses.each do |address|
      valid_email_user = User.new(@valid_attributes.merge(:email => address))
      valid_email_user.should be_valid
    end
  end
  
  it "should reject invalid email addresses" do
    addresses = %w[user@foo,com user_at_foo.org example.user@foo.]
    addresses.each do |address|
      invalid_email_user = User.new(@valid_attributes.merge(:email => address))
      invalid_email_user.should_not be_valid
    end
  end
  
  it "should reject duplicate email addresses" do
    # Put a user with given email address into the database.
    User.create!(@valid_attributes)
    user_with_duplicate_email = User.new(@valid_attributes)
    user_with_duplicate_email.should_not be_valid
  end
  
  it "should reject dublicate email addresses" do
    User.create!(@valid_attributes)
    upcase_email = @valid_attributes[:email].upcase
    user_with_duplicate_email = User.new(@valid_attributes.merge(:email => upcase_email))
    user_with_duplicate_email.should_not be_valid
  end
  
  describe "password validations" do
    it "should require a password" do
      User.new(@valid_attributes.merge(:password => "", :password_confirmation => "")).
        should_not be_valid
    end
    
    it "should require a matching password confirmatino" do
      User.new(@valid_attributes.merge(:password_confirmation => "invalid")).
        should_not be_valid
    end
    
    it "should reject short passwords" do
      short_name = "a"*5
      hash = @valid_attributes.merge(:password => short_name,
                                     :password_confirmation => short_name)
      User.new(hash).should_not be_valid
    end
    
    it "should reject long passwords" do
      long_name  = "a"*41
      hash = @valid_attributes.merge(:password => long_name,
                                     :password_confirmation => long_name)
      User.new(hash).should_not be_valid
    end
  end
  
  describe "password encryption" do
    before(:each) do
      @user = User.create!(@valid_attributes)
    end
    
    it "should have an encrypted password attribute" do
      @user.should respond_to(:encrypted_password)
    end
    
    it "should set the encrypted password" do
      @user.encrypted_password.should_not be_blank
    end
    
    describe "has_password? method" do
      it "should be true if the passwords match" do
        @user.has_password?(@valid_attributes[:password]).should be_true
      end
      it "should be false if the passwords don't match" do
        @user.has_password?("invalid").should be_false
      end
    end
    
    describe "authenticate method" do
      it "should return nil on email/password mismatch" do
        wrong_password_user = User.authenticate(@valid_attributes[:email], "invalid")
        wrong_password_user.should be_nil
      end
      it "should return nil for an email address with no user" do
        nonexistent_user = User.authenticate("bar@foo.com", @valid_attributes[:password])
        nonexistent_user.should be_nil
      end
      it "should return the user on email/password match" do
        matching_user = User.authenticate(@valid_attributes[:email], @valid_attributes[:password])
        matching_user.should == @user
      end
    end
  end
  
end
