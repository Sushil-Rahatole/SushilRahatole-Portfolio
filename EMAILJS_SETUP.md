# EmailJS Setup Guide

To enable the contact form email functionality, you need to set up EmailJS:

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Connect your Gmail account (sushilrahatole@gmail.com)
5. Note down the Service ID (e.g., "service_abc123")

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Note down the Template ID (e.g., "template_xyz789")

## Step 4: Get Public Key
1. Go to "Account" settings
2. Find your Public Key (e.g., "user_abc123")

## Step 5: Update the Code
Replace the placeholder values in `contact-section.tsx`:

```javascript
const serviceId = 'your_service_id_here';
const templateId = 'your_template_id_here';  
const publicKey = 'your_public_key_here';
```

## Testing
Once configured, the contact form will send emails directly to sushilrahatole@gmail.com when visitors submit messages.