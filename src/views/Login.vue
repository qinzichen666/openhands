<template>
  <div class="login-container">
    <h1>Sign in to Manus</h1>
    <div class="social-login">
      <a-button class="google-btn" block>
        <template #icon><GoogleOutlined /></template>
        Sign in with Google
      </a-button>
      <a-button class="apple-btn" block>
        <template #icon><AppleOutlined /></template>
        Sign in with Apple
      </a-button>
    </div>
    <div class="divider">Or</div>
    <a-form class="email-login" :model="formState" @finish="onFinish">
      <a-form-item name="email">
        <a-input v-model:value="formState.email" placeholder="Email" size="large" />
      </a-form-item>
      <a-form-item name="password">
        <a-input-password v-model:value="formState.password" placeholder="Password" size="large" />
      </a-form-item>
      <a class="forgot-password">Forgot password?</a>
      <a-button type="primary" html-type="submit" size="large" block>Sign in</a-button>
    </a-form>
    <p class="signup-link">Don't have an account? <a href="#">Sign up</a></p>
  </div>
</template>

<script setup>
import { GoogleOutlined, AppleOutlined } from '@ant-design/icons-vue';
import { reactive } from 'vue';

const formState = reactive({
  email: '',
  password: ''
});

const onFinish = values => {
  console.log('Success:', values);
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 5rem auto;
  padding: 2.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  text-align: center;
}

h1 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #1a1a1a;
}

.social-login {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.google-btn, .apple-btn, button[type="submit"] {
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: opacity 0.2s ease;
}

.google-btn {
  background: white;
  border: 1px solid #e0e0e0;
  color: #1a1a1a;
}

.apple-btn {
  background: black;
  color: white;
}

button[type="submit"] {
  background: #0066ff;
  color: white;
  margin-top: 0.5rem;
}

.google-btn:hover, 
.apple-btn:hover,
button[type="submit"]:hover {
  opacity: 0.9;
  cursor: pointer;
}

.divider {
  position: relative;
  margin: 1.5rem 0;
  color: #999;
}

.divider::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: #eee;
  z-index: -1;
}

.email-login {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  padding: 0.75rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus {
  border-color: #0066ff;
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 102, 255, 0.2);
}

.forgot-password {
  text-align: right;
  font-size: 0.85rem;
  color: #666;
  margin-top: -0.5rem;
}

.signup-link {
  margin-top: 1.5rem;
  color: #666;
  font-size: 0.95rem;
}

.signup-link a {
  color: #0066ff;
  font-weight: 500;
  text-decoration: none;
}

@media (max-width: 480px) {
  .login-container {
    margin: 2rem auto;
    padding: 1.5rem;
    border-radius: 0;
    box-shadow: none;
    border: 1px solid #eee;
  }
}
</style>